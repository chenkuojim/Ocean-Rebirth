/*
 * JavaScript Software Development Kit - what JavaScript should be and can be - js-sdk.sourceforge.net
 * Copyright (C) 2006-2007 Mathew Sheets
 *
 * == BEGIN LICENSE ==
 *
 * Licensed under the terms of any of the following licenses at your
 * choice:
 *
 *  - GNU Lesser General Public License Version 2.1 or later (the "LGPL")
 *    http://www.gnu.org/licenses/lgpl.html
 *
 * == END LICENSE ==
 */

package jsx.io.http;

import jsx.io.http.DefaultRequest;
import jsx.collections.HashMap;
import jsx.collections.ArrayList;
import jsx.io.http.HttpResponse;
import jsx.lang.StringBuffer;
import jsx.lang.Closure;
import jsx.lang.Thread;
import jsx.event.EventDispatcher;

class HttpRequest extends DefaultRequest
{
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class HttpRequest
	* @constructor
	*/
	HttpRequest(_transport)
	{
		this.url = null;
		this.method = "post";
		this.asynchronous = true;
		this.contentType = "application/x-www-form-urlencoded";
		this.encoding = "UTF-8";

		this.parameters = new ArrayList();
		this.postBody = null;
		this.postDoc = null;

		this.user = null;
		this.password = null;

		// used to abort the request
		this.abortTimeout = 0;
		this.cancelThread = null;

		this.requestHeaders = new HashMap();

		// event definitions
		this.createEventDispatcher = new EventDispatcher(this, "oncreate");
		this.openEventDispatcher = new EventDispatcher(this, "onopen");
		this.sentEventDispatcher = new EventDispatcher(this, "onsent");
		this.receivingEventDispatcher = new EventDispatcher(this, "onreceiving");
		this.receivedEventDispatcher = new EventDispatcher(this, "onreceived");
		this.completeEventDispatcher = new EventDispatcher(this, "oncomplete");
		this.successEventDispatcher = new EventDispatcher(this, "onsuccess");
		this.failureEventDispatcher = new EventDispatcher(this, "onfailure");
		this.cancelEventDispatcher = new EventDispatcher(this, "oncancel");
		this.exceptionEventDispatcher = new EventDispatcher(this, "onexception");

		this.complete = false;
		this.canceled = false;
		this.response = null;
		this.exception = null;

		this.transport = null;
		if(_transport)
		{
			this.transport = _transport;
		}

		// add default listeners
		this.createEventDispatcher.addListener(function()
		{
			HttpRequest.ACTIVE_REQUESTS++;
		});
		this.completeEventDispatcher.addListener(function()
		{
			HttpRequest.ACTIVE_REQUESTS--;
		});
	}

	HttpRequest.ACTIVE_REQUESTS = 0;

	HttpRequest.CREATED		= 0;
	HttpRequest.OPEN		= 1;
	HttpRequest.SENT		= 2;
	HttpRequest.RECEIVING	= 3;
	HttpRequest.RECEIVED	= 4;

	instance setUrl(_url)
	{
		this.url = _url;
		return this;
	}

	instance setMethod(_method)
	{
		this.method = _method;
		return this;
	}

	instance setAsynchronous(_asynchronous)
	{
		this.asynchronous = _asynchronous;
		return this;
	}

	instance setContentType(_contentType)
	{
		this.contentType = _contentType;
		return this;
	}

	instance setEncoding(_encoding)
	{
		this.encoding = _encoding;
		return this;
	}

	instance addParameter(_name, _value)
	{
		this.parameters.add({name:_name, value:_value});
		return this;
	}

	instance setPostBody(_postBody)
	{
		this.postBody = _postBody;
		return this;
	}

	instance setPostDoc(_postDoc)
	{
		this.postDoc = _postDoc;
		return this;
	}

	instance setUser(_user)
	{
		this.user = _user;
		return this;
	}

	instance setPassword(_password)
	{
		this.password = _password;
		return this;
	}

	instance setAbort(_milliseconds)
	{
		this.abortTimeout = _milliseconds
		return this;
	}

	instance addCreateListener(_listener)
	{
		this.createEventDispatcher.addListener(_listener);
		return this;
	}

	instance addOpenListener(_listener)
	{
		this.openEventDispatcher.addListener(_listener);
		return this;
	}

	instance addSentListener(_listener)
	{
		this.sentEventDispatcher.addListener(_listener);
		return this;
	}

	instance addReceivingListener(_listener)
	{
		this.receivingEventDispatcher.addListener(_listener);
		return this;
	}

	instance addReceivedListener(_listener)
	{
		this.receivedEventDispatcher.addListener(_listener);
		return this;
	}

	instance addCompleteListener(_listener)
	{
		this.completeEventDispatcher.addListener(_listener);
		return this;
	}

	instance addSuccessListener(_listener)
	{
		this.successEventDispatcher.addListener(_listener);
		return this;
	}

	instance addFailureListener(_listener)
	{
		this.failureEventDispatcher.addListener(_listener);
		return this;
	}

	instance addCancelListener(_listener)
	{
		this.cancelEventDispatcher.addListener(_listener);
		return this;
	}

	instance addExceptionListener(_listener)
	{
		this.exceptionEventDispatcher.addListener(_listener);
		return this;
	}

	instance addRequestHeader(_name, _value)
	{
		this.requestHeaders.put(_name, _value)
		return this;
	}

	instance getResponse()
	{
		return this.response;
	}

	instance getException()
	{
		return this.exception;
	}

	instance setRequestHeaders()
	{
		var me  = this;

		if(!this.requestHeaders.containsKey("Accept"))
		{
			this.addRequestHeader("Accept", "text/javascript, text/html, application/xml, text/xml, */*");
		}

		if("POST".equals(this.method.toUpperCase()))
		{
			if(!this.requestHeaders.containsKey("Content-type"))
			{
				var _contentType = this.contentType + (this.encoding ? "; charset=" + this.encoding : "");
				this.addRequestHeader("Content-type", _contentType);
			}
		}

		this.requestHeaders.each(function(_value, _key)
		{
			me.transport.setRequestHeader(_key, _value);
		});
	}

	instance request()
	{
		try
		{
			// if a transport was not set, get a new one
			if(!this.transport)
			{
				this.transport = HttpRequest.getTransport();
			}

			// fire oncreate event
			this.oncreate({target:this,type:"create"});

			// build parameters as a query string to append on the url or to use as post data, could return empty string
			var _parameters = HttpRequest.__buildParametersForRequest__(this.parameters);

			var _url = this.url;
			if("GET".equals(this.method.toUpperCase()))
			{
				if(_parameters)
				{
					_url += "?" + _parameters;
				}
			}

			// open the transport
			if(!this.user && !this.password)
			{
				this.transport.open(this.method.toUpperCase(), _url, this.asynchronous);
			}
			else if(this.user && !this.password)
			{
				this.transport.open(this.method.toUpperCase(), _url, this.asynchronous, this.user);
			}
			else if(this.user && this.password)
			{
				this.transport.open(this.method.toUpperCase(), _url, this.asynchronous, this.user, this.password);
			}

			// fire onopen event
			this.onopen({target:this,type:"open"});

			// set the call back for the state change
			this.transport.onreadystatechange = new Closure().bind(this.onStateChange, this);

			// set the request headers
			this.setRequestHeaders();

			// if there is an abort time out, create an async method call to execute after specified milliseconds
			if(this.abortTimeout > 0)
			{
				this.cancelThread = new Thread(this.cancel, this, [], this.abortTimeout);
				this.cancelThread.start();
			}

			// TODO, what other methods should I handle
			// GET, POST, HEAD, PUT, DELETE, OPTIONS, TRACE
			// send the request
			if("POST".equals(this.method.toUpperCase()))
			{
				// test _parameters, then postBody, then postDoc, else use null for data
				var _data = _parameters ? _parameters : (this.postBody ? this.postBody : (this.postDoc ? this.postDoc : null));
				this.transport.send(_data);
			}
			else
			{
				this.transport.send(null);
			}

			// fix firefox
			if (!this.asynchronous && this.transport.overrideMimeType)
			{
				this.onStateChange();
			}
		}
		catch(_exception)
		{
			this.handleException(_exception);
		}
	}

	instance onStateChange()
	{
		var _state = this.transport.readyState;
		// only handle Sent, Receiving, Received events and not complete
		if (_state > 1 && _state <= 4 && !this.complete)
		{
			this.handleStateChange(_state);
		}
	}

	instance handleStateChange(_state)
	{
        if(this.canceled) return;
		try
		{
			switch(_state)
			{
				case HttpRequest.SENT:
					// fire onsent event
					this.onsent({target:this,type:"sent"});
					break;
				case HttpRequest.RECEIVING:
					// fire onreceiving event
					this.onreceiving({target:this,type:"receiving"});
					break;
				case HttpRequest.RECEIVED:
					// if we have an abort watching, since we just completed, cancel the watching
					if(this.cancelThread)
					{
						this.cancelThread.stop();
					}

					// set the response
					this.response = new HttpResponse(this.transport);

					// fire onreceived event
					this.onreceived({target:this,type:"received"});

					if(this.response.isSuccess())
					{
						// fire onsuccess event
						this.onsuccess({target:this,type:"success"});
					}
					else
					{
						// fire onfailure event
						this.onfailure({target:this,type:"failure"});
					}

					// fire oncomplete event
					this.oncomplete({target:this,type:"complete"});

					this.complete = true;

					// clean up closure
					this.transport.onreadystatechange = function(){};
					break;
				default:
					throw "State: " + _state + " was not handled!";
			}
		}
		catch(_exception)
		{
			this.handleException(_exception);
		}
	}

	instance cancel()
	{
		try
		{
			this.canceled = true;
			this.transport.abort();
			// fire oncancel event
			this.oncancel({target:this,type:"cancel"});
		}
		catch(_exception)
		{
			this.handleException(_exception);
		}
	}

	instance handleException(_exception)
	{
		this.exception = _exception;
		// fire onexception event
		this.onexception({target:this,type:"exception"});
	}

	// event definitions
	instance oncreate(){}
	instance onopen(){}
	instance onsent(){}
	instance onreceiving(){}
	instance onreceived(){}
	instance oncomplete(){}
	instance onsuccess(){}
	instance onfailure(){}
	instance oncancel(){}
	instance onexception(){}

	static __buildParametersForRequest__(_listParameters)
	{
		var _parameters = new StringBuffer();
		var _listSize = _listParameters.size();
		var _currentSize = 0;
		_listParameters.each(function(_value, _index)
		{
			_parameters.append(_value.name);
			_parameters.append("=");
			if(_value.value)
			{
				_parameters.append(_value.value.toString().encodeURIComponent());
			}

			if(_currentSize < (_listSize-1))
			{
				_parameters.append("&");
			}
			_currentSize++;
		});
		return _parameters.toString();
	}

	static getTransport()
	{
		var _transport = null;
		try{_transport = new XMLHttpRequest();}catch(e){}
		if(!_transport){try{_transport = new ActiveXObject("Msxml2.XMLHTTP");}catch(e){}}
		if(!_transport){try{_transport = new ActiveXObject("Microsoft.XMLHTTP");}catch(e){}}
		return _transport;
	}

	static newInstance()
	{
		return new HttpRequest(HttpRequest.getTransport());
	}

}
