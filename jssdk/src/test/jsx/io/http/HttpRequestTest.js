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

package test.jsx.io.http;

import test.jsx.TestBase;
import jsx.io.http.HttpRequest;
import jsx.collections.HashMap;
import jsx.collections.ArrayList;

class HttpRequestTest extends TestBase
{

	HttpRequestTest()
	{
	}

    instance setUp()
    {
    	super.setUp();

		this.transportMock = {};
		this.transportMock.open = function(){}
		this.transportMock.send = function(){}
		this.transportMock.setRequestHeader = function(){}
		this.transportMock.readyState = 0;
    }

    instance tearDown()
    {
		super.tearDown();

		this.transportMock = null;
    }

	instance testOpenNormal()
	{
		var request = new HttpRequest(this.transportMock);
		request.setUrl("http://www.thebestsite.com");

		var _method = null;
		var _url = null;
		var _asyn = null;
		this.transportMock.open = function()
		{
			_method = arguments[0];
			_url = arguments[1];
			_asyn = arguments[2];
		}

		request.request();

		this.assertTrue("POST".equals(_method));
		this.assertTrue("http://www.thebestsite.com".equals(_url));
		this.assertTrue(true == _asyn);
	}

	instance testOpenWithUrlParamerters()
	{
		var request = new HttpRequest(this.transportMock);
		request.setUrl("http://www.thebestsite.com")
			.setMethod("get")
			.addParameter("one", "1")
			.addParameter("two", "2");

		var _method = null;
		var _url = null;
		var _asyn = null;
		this.transportMock.open = function()
		{
			_method = arguments[0];
			_url = arguments[1];
			_asyn = arguments[2];
		}

		request.request();

		this.assertTrue("GET".equals(_method));
		this.assertTrue("http://www.thebestsite.com?one=1&two=2".equals(_url));
		this.assertTrue(true == _asyn);
	}

	instance testOpenWithUser()
	{
		var request = new HttpRequest(this.transportMock);
		request.setUrl("http://www.thebestsite.com")
			.setMethod("get")
			.addParameter("one", "1")
			.addParameter("two", "2")
			.setUser("msheets");

		var _method = null;
		var _url = null;
		var _asyn = null;
		var _user = null;
		this.transportMock.open = function()
		{
			_method = arguments[0];
			_url = arguments[1];
			_asyn = arguments[2];
			_user = arguments[3];
		}

		request.request();

		this.assertTrue("GET".equals(_method));
		this.assertTrue("http://www.thebestsite.com?one=1&two=2".equals(_url));
		this.assertTrue(true == _asyn);
		this.assertTrue("msheets".equals(_user));
	}

	instance testOpenWithUserPassword()
	{
		var request = new HttpRequest(this.transportMock);
		request.setUrl("http://www.thebestsite.com")
			.setMethod("get")
			.addParameter("one", "1")
			.addParameter("two", "2")
			.setUser("msheets")
			.setPassword("passw0rd");

		var _method = null;
		var _url = null;
		var _asyn = null;
		var _user = null;
		var _password = null;
		this.transportMock.open = function()
		{
			_method = arguments[0];
			_url = arguments[1];
			_asyn = arguments[2];
			_user = arguments[3];
			_password = arguments[4];
		}

		request.request();

		this.assertTrue("GET".equals(_method));
		this.assertTrue("http://www.thebestsite.com?one=1&two=2".equals(_url));
		this.assertTrue(true == _asyn);
		this.assertTrue("msheets".equals(_user));
		this.assertTrue("passw0rd".equals(_password));
	}

	instance testSendWithNull()
	{
		var request = new HttpRequest(this.transportMock);
		request.setUrl("http://www.thebestsite.com");

		var _data = null;
		this.transportMock.send = function()
		{
			_data = arguments[0];
		}

		request.request();

		this.assertTrue(_data == null);
	}

	instance testSendWithParameters()
	{
		var request = new HttpRequest(this.transportMock);
		request.setUrl("http://www.thebestsite.com")
			.addParameter("one", "1")
			.addParameter("two", "2");

		var _data = null;
		this.transportMock.send = function()
		{
			_data = arguments[0];
		}

		request.request();

		this.assertTrue("one=1&two=2".equals(_data));
	}

	instance testSendWithPostBody()
	{
		var request = new HttpRequest(this.transportMock);
		request.setUrl("http://www.thebestsite.com")
			.setPostBody("one=1&two=2");

		var _data = null;
		this.transportMock.send = function()
		{
			_data = arguments[0];
		}

		request.request();

		this.assertTrue("one=1&two=2".equals(_data));
	}

	instance testSendWithPostDoc()
	{
		var request = new HttpRequest(this.transportMock);
		request.setUrl("http://www.thebestsite.com")
			.setPostDoc("one=1&two=2");

		var _data = null;
		this.transportMock.send = function()
		{
			_data = arguments[0];
		}

		request.request();

		this.assertTrue("one=1&two=2".equals(_data));
	}

	instance testSetRequestHeaders()
	{
		var request = new HttpRequest(this.transportMock);
		request.setUrl("http://www.thebestsite.com")
			.addRequestHeader("one", "1")
			.addRequestHeader("two", "2")
			.addRequestHeader("three", "3");

		var _namesValues = new HashMap();
		this.transportMock.setRequestHeader = function()
		{
			_namesValues.put(arguments[0], arguments[1]);
		}

		request.request();

		this.assertTrue(_namesValues.get("one").equals("1"));
		this.assertTrue(_namesValues.get("two").equals("2"));
		this.assertTrue(_namesValues.get("three").equals("3"));
	}

	instance testOnStateChange()
	{
		var request = new HttpRequest(this.transportMock);

		var _transPortState = -1;
		request.handleStateChange = function(_state)
		{
			_transPortState = _state;
		}

		this.transportMock.readyState = 0;
		request.onStateChange();
		this.assertTrue(-1 == _transPortState);

		_transPortState = -1;
		this.transportMock.readyState = 1;
		request.onStateChange();
		this.assertTrue(-1 == _transPortState);

		_transPortState = -1;
		this.transportMock.readyState = 2;
		request.onStateChange();
		this.assertTrue(2 == _transPortState);

		_transPortState = -1;
		this.transportMock.readyState = 3;
		request.onStateChange();
		this.assertTrue(3 == _transPortState);

		_transPortState = -1;
		this.transportMock.readyState = 4;
		request.onStateChange();
		this.assertTrue(4 == _transPortState);

		_transPortState = -1;
		this.transportMock.readyState = 4;
		request.complete = true;
		request.onStateChange();
		this.assertTrue(-1 == _transPortState);

	}

	instance testHandleStateChangeSent()
	{
		var request = new HttpRequest(this.transportMock);

		var test = 0;
		request.addSentListener(function(_event)
		{
			test++;
		});

		request.handleStateChange(2);

		this.assertTrue(test == 1);
	}

	instance testHandleStateChangeReceiving()
	{
		var request = new HttpRequest(this.transportMock);

		var test = 0;
		request.addReceivingListener(function(_event)
		{
			test++;
		});

		request.handleStateChange(3);

		this.assertTrue(test == 1);
	}

	instance testHandleStateChangeReceivedSuccess()
	{
		var request = new HttpRequest(this.transportMock);

		var test = 0;
		request.addReceivedListener(function(_event)
		{
			test++;
		});
		request.addSuccessListener(function(_event)
		{
			test++;
		});
		request.addCompleteListener(function(_event)
		{
			test++;
		});

		this.assertTrue(request.complete == false);

		request.handleStateChange(4);

		this.assertTrue(test == 3);
		this.assertTrue(request.complete == true);
	}

	instance testHandleStateChangeReceivedFailure()
	{
		var request = new HttpRequest(this.transportMock);

		this.transportMock.status = 199;

		var test = 0;
		request.addReceivedListener(function(_event)
		{
			test++;
		});
		request.addFailureListener(function(_event)
		{
			test++;
		});
		request.addCompleteListener(function(_event)
		{
			test++;
		});

		this.assertTrue(request.complete == false);

		request.handleStateChange(4);

		this.assertTrue(test == 3);
		this.assertTrue(request.complete == true);
	}

	instance testParametersToString()
	{
		var _params = new ArrayList();
		_params.add({name:"one", value:"1"});
		_params.add({name:"two", value:"2"});
		_params.add({name:"three", value:"3"});
		_params.add({name:"four", value:"4"});
		_params.add({name:"five", value:"5"});

		var _paramsString = HttpRequest.__buildParametersForRequest__(_params);

		this.assertTrue("one=1&two=2&three=3&four=4&five=5".equals(_paramsString));
	}

	instance testCreateEvent()
	{
		var request = new HttpRequest({});

		var test = 0;
		request.addCreateListener(function(_event)
		{
			test++;
		});

		request.oncreate({target:request,type:"create"});

		this.assertTrue(test == 1);
	}

	instance testOpenEvent()
	{
		var request = new HttpRequest({});

		var test = 0;
		request.addOpenListener(function(_event)
		{
			test++;
		});

		request.onopen({target:request,type:"open"});

		this.assertTrue(test == 1);
	}

	instance testSentEvent()
	{
		var request = new HttpRequest({});

		var test = 0;
		request.addSentListener(function(_event)
		{
			test++;
		});

		request.onsent({target:request,type:"sent"});

		this.assertTrue(test == 1);
	}

	instance testReceivingEvent()
	{
		var request = new HttpRequest({});

		var test = 0;
		request.addReceivingListener(function(_event)
		{
			test++;
		});

		request.onreceiving({target:request,type:"receiving"});

		this.assertTrue(test == 1);
	}

	instance testReceivedEvent()
	{
		var request = new HttpRequest({});

		var test = 0;
		request.addReceivedListener(function(_event)
		{
			test++;
		});

		request.onreceived({target:request,type:"received"});

		this.assertTrue(test == 1);
	}

	instance testCompleteEvent()
	{
		var request = new HttpRequest({});

		var test = 0;
		request.addCompleteListener(function(_event)
		{
			test++;
		});

		request.oncomplete({target:request,type:"complete"});

		this.assertTrue(test == 1);
	}

	instance testSuccessEvent()
	{
		var request = new HttpRequest({});

		var test = 0;
		request.addSuccessListener(function(_event)
		{
			test++;
		});

		request.onsuccess({target:request,type:"success"});

		this.assertTrue(test == 1);

	}

	instance testFailureEvent()
	{
		var request = new HttpRequest({});

		var test = 0;
		request.addFailureListener(function(_event)
		{
			test++;
		});

		request.onfailure({target:request,type:"failure"});

		this.assertTrue(test == 1);
	}

	instance testCancelEvent()
	{
		var request = new HttpRequest(this.transportMock);

		var test = 0;
		this.transportMock.abort = function()
		{
			test++;
		}

		request.addCancelListener(function(_event)
		{
			test++;
		});

		request.cancel();

		this.assertTrue(test == 2);
	}

	instance testExceptionEvent()
	{
		var request = new HttpRequest({});

		var test = null;
		request.addExceptionListener(function(_event)
		{
			test = _event.target.getException();
		});

		request.handleException("should throw exception")

		this.assertNotNull(test);
	}

	instance testRequest()
	{}

}
