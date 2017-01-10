
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class HttpRequest
	* @constructor
	*/
	jsx.io.http.HttpRequest = function(){this.initialize.apply(this, arguments);}
jsx.io.http.HttpRequest.prototype = new jsx.io.http.DefaultRequest();
jsx.io.http.HttpRequest.prototype.constructor = jsx.io.http.HttpRequest;
jsx.io.http.HttpRequest.superclass = jsx.io.http.DefaultRequest.prototype;

	/** @ignore */
	jsx.io.http.HttpRequest.prototype.initialize = function(_transport)
	{
		this.url = null;
		this.method = "post";
		this.asynchronous = true;
		this.contentType = "application/x-www-form-urlencoded";
		this.encoding = "UTF-8";

		this.parameters = new jsx.collections.ArrayList();
		this.postBody = null;
		this.postDoc = null;

		this.user = null;
		this.password = null;

		// used to abort the request
		this.abortTimeout = 0;
		this.cancelThread = null;

		this.requestHeaders = new jsx.collections.HashMap();

		// event definitions
		this.createEventDispatcher = new jsx.event.EventDispatcher(this, "oncreate");
		this.openEventDispatcher = new jsx.event.EventDispatcher(this, "onopen");
		this.sentEventDispatcher = new jsx.event.EventDispatcher(this, "onsent");
		this.receivingEventDispatcher = new jsx.event.EventDispatcher(this, "onreceiving");
		this.receivedEventDispatcher = new jsx.event.EventDispatcher(this, "onreceived");
		this.completeEventDispatcher = new jsx.event.EventDispatcher(this, "oncomplete");
		this.successEventDispatcher = new jsx.event.EventDispatcher(this, "onsuccess");
		this.failureEventDispatcher = new jsx.event.EventDispatcher(this, "onfailure");
		this.cancelEventDispatcher = new jsx.event.EventDispatcher(this, "oncancel");
		this.exceptionEventDispatcher = new jsx.event.EventDispatcher(this, "onexception");

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
			jsx.io.http.HttpRequest.ACTIVE_REQUESTS++;
		});
		this.completeEventDispatcher.addListener(function()
		{
			jsx.io.http.HttpRequest.ACTIVE_REQUESTS--;
		});
	}

	jsx.io.http.HttpRequest.ACTIVE_REQUESTS = 0;

	jsx.io.http.HttpRequest.CREATED		= 0;
	jsx.io.http.HttpRequest.OPEN		= 1;
	jsx.io.http.HttpRequest.SENT		= 2;
	jsx.io.http.HttpRequest.RECEIVING	= 3;
	jsx.io.http.HttpRequest.RECEIVED	= 4;

	jsx.io.http.HttpRequest.prototype.setUrl = function(_url)
	{
		this.url = _url;
		return this;
	}

	jsx.io.http.HttpRequest.prototype.setMethod = function(_method)
	{
		this.method = _method;
		return this;
	}

	jsx.io.http.HttpRequest.prototype.setAsynchronous = function(_asynchronous)
	{
		this.asynchronous = _asynchronous;
		return this;
	}

	jsx.io.http.HttpRequest.prototype.setContentType = function(_contentType)
	{
		this.contentType = _contentType;
		return this;
	}

	jsx.io.http.HttpRequest.prototype.setEncoding = function(_encoding)
	{
		this.encoding = _encoding;
		return this;
	}

	jsx.io.http.HttpRequest.prototype.addParameter = function(_name, _value)
	{
		this.parameters.add({name:_name, value:_value});
		return this;
	}

	jsx.io.http.HttpRequest.prototype.setPostBody = function(_postBody)
	{
		this.postBody = _postBody;
		return this;
	}

	jsx.io.http.HttpRequest.prototype.setPostDoc = function(_postDoc)
	{
		this.postDoc = _postDoc;
		return this;
	}

	jsx.io.http.HttpRequest.prototype.setUser = function(_user)
	{
		this.user = _user;
		return this;
	}

	jsx.io.http.HttpRequest.prototype.setPassword = function(_password)
	{
		this.password = _password;
		return this;
	}

	jsx.io.http.HttpRequest.prototype.setAbort = function(_milliseconds)
	{
		this.abortTimeout = _milliseconds
		return this;
	}

	jsx.io.http.HttpRequest.prototype.addCreateListener = function(_listener)
	{
		this.createEventDispatcher.addListener(_listener);
		return this;
	}

	jsx.io.http.HttpRequest.prototype.addOpenListener = function(_listener)
	{
		this.openEventDispatcher.addListener(_listener);
		return this;
	}

	jsx.io.http.HttpRequest.prototype.addSentListener = function(_listener)
	{
		this.sentEventDispatcher.addListener(_listener);
		return this;
	}

	jsx.io.http.HttpRequest.prototype.addReceivingListener = function(_listener)
	{
		this.receivingEventDispatcher.addListener(_listener);
		return this;
	}

	jsx.io.http.HttpRequest.prototype.addReceivedListener = function(_listener)
	{
		this.receivedEventDispatcher.addListener(_listener);
		return this;
	}

	jsx.io.http.HttpRequest.prototype.addCompleteListener = function(_listener)
	{
		this.completeEventDispatcher.addListener(_listener);
		return this;
	}

	jsx.io.http.HttpRequest.prototype.addSuccessListener = function(_listener)
	{
		this.successEventDispatcher.addListener(_listener);
		return this;
	}

	jsx.io.http.HttpRequest.prototype.addFailureListener = function(_listener)
	{
		this.failureEventDispatcher.addListener(_listener);
		return this;
	}

	jsx.io.http.HttpRequest.prototype.addCancelListener = function(_listener)
	{
		this.cancelEventDispatcher.addListener(_listener);
		return this;
	}

	jsx.io.http.HttpRequest.prototype.addExceptionListener = function(_listener)
	{
		this.exceptionEventDispatcher.addListener(_listener);
		return this;
	}

	jsx.io.http.HttpRequest.prototype.addRequestHeader = function(_name, _value)
	{
		this.requestHeaders.put(_name, _value)
		return this;
	}

	jsx.io.http.HttpRequest.prototype.getResponse = function()
	{
		return this.response;
	}

	jsx.io.http.HttpRequest.prototype.getException = function()
	{
		return this.exception;
	}

	jsx.io.http.HttpRequest.prototype.setRequestHeaders = function()
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

	jsx.io.http.HttpRequest.prototype.request = function()
	{
		try
		{
			// if a transport was not set, get a new one
			if(!this.transport)
			{
				this.transport = jsx.io.http.HttpRequest.getTransport();
			}

			// fire oncreate event
			this.oncreate({target:this,type:"create"});

			// build parameters as a query string to append on the url or to use as post data, could return empty string
			var _parameters = jsx.io.http.HttpRequest.__buildParametersForRequest__(this.parameters);

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
			this.transport.onreadystatechange = new jsx.lang.Closure().bind(this.onStateChange, this);

			// set the request headers
			this.setRequestHeaders();

			// if there is an abort time out, create an async method call to execute after specified milliseconds
			if(this.abortTimeout > 0)
			{
				this.cancelThread = new jsx.lang.Thread(this.cancel, this, [], this.abortTimeout);
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

	jsx.io.http.HttpRequest.prototype.onStateChange = function()
	{
		var _state = this.transport.readyState;
		// only handle Sent, Receiving, Received events and not complete
		if (_state > 1 && _state <= 4 && !this.complete)
		{
			this.handleStateChange(_state);
		}
	}

	jsx.io.http.HttpRequest.prototype.handleStateChange = function(_state)
	{
        if(this.canceled) return;
		try
		{
			switch(_state)
			{
				case jsx.io.http.HttpRequest.SENT:
					// fire onsent event
					this.onsent({target:this,type:"sent"});
					break;
				case jsx.io.http.HttpRequest.RECEIVING:
					// fire onreceiving event
					this.onreceiving({target:this,type:"receiving"});
					break;
				case jsx.io.http.HttpRequest.RECEIVED:
					// if we have an abort watching, since we just completed, cancel the watching
					if(this.cancelThread)
					{
						this.cancelThread.stop();
					}

					// set the response
					this.response = new jsx.io.http.HttpResponse(this.transport);

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

	jsx.io.http.HttpRequest.prototype.cancel = function()
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

	jsx.io.http.HttpRequest.prototype.handleException = function(_exception)
	{
		this.exception = _exception;
		// fire onexception event
		this.onexception({target:this,type:"exception"});
	}

	// event definitions
	jsx.io.http.HttpRequest.prototype.oncreate = function(){}
	jsx.io.http.HttpRequest.prototype.onopen = function(){}
	jsx.io.http.HttpRequest.prototype.onsent = function(){}
	jsx.io.http.HttpRequest.prototype.onreceiving = function(){}
	jsx.io.http.HttpRequest.prototype.onreceived = function(){}
	jsx.io.http.HttpRequest.prototype.oncomplete = function(){}
	jsx.io.http.HttpRequest.prototype.onsuccess = function(){}
	jsx.io.http.HttpRequest.prototype.onfailure = function(){}
	jsx.io.http.HttpRequest.prototype.oncancel = function(){}
	jsx.io.http.HttpRequest.prototype.onexception = function(){}

	jsx.io.http.HttpRequest.__buildParametersForRequest__ = function(_listParameters)
	{
		var _parameters = new jsx.lang.StringBuffer();
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

	jsx.io.http.HttpRequest.getTransport = function()
	{
		var _transport = null;
		try{_transport = new XMLHttpRequest();}catch(e){}
		if(!_transport){try{_transport = new ActiveXObject("Msxml2.XMLHTTP");}catch(e){}}
		if(!_transport){try{_transport = new ActiveXObject("Microsoft.XMLHTTP");}catch(e){}}
		return _transport;
	}

	jsx.io.http.HttpRequest.newInstance = function()
	{
		return new jsx.io.http.HttpRequest(jsx.io.http.HttpRequest.getTransport());
	}


jsx.io.http.HttpRequest.PACKAGE = "jsx.io.http";
jsx.io.http.HttpRequest.CLASS = "jsx.io.http.HttpRequest";
jsx.io.http.HttpRequest.SUPER_CLASS = "jsx.io.http.DefaultRequest";
jsx.io.http.HttpRequest.IMPORTS = ["jsx.io.http.DefaultRequest","jsx.collections.HashMap","jsx.collections.ArrayList","jsx.io.http.HttpResponse","jsx.lang.StringBuffer","jsx.lang.Closure","jsx.lang.Thread","jsx.event.EventDispatcher"];
jsx.io.http.HttpRequest.INTERFACES = [];
jsx.io.http.HttpRequest.MIXINS = [];
jsx.io.http.HttpRequest.getName = function(){return jsx.io.http.HttpRequest.CLASS;}
jsx.io.http.HttpRequest.klass = new jsx.lang.Class(jsx.io.http.HttpRequest.getName());
jsx.io.http.HttpRequest.prototype.getClass = function(){return jsx.io.http.HttpRequest.klass;}
jsx.io.http.HttpRequest.WARNINGS = [];
