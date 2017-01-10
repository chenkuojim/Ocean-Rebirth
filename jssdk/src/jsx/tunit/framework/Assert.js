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

package jsx.tunit.framework;

import jsx.tunit.framework.AssertionFailedError;

class Assert
{

	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class Assert
	*/
	Assert(){}

	static assertTrue(_condition, _message)
	{
		if(!_condition)
		{
			if(!_message) _message = "Assert True failed";
			this.failTrue(_message);
		}
	}

	static assertFalse(_condition, _message)
	{
		if(!_message) _message = "Assert False failed";
		this.assertTrue(!_condition, _message);
	}

	static assertEquals(_expected, _actual, _message)
	{
		if(_expected == null && _actual == null)
		{
			return;
		}
		if(_expected != null && _expected.equals(_actual))
		{
			return;
		}

		this.failNotEquals(_expected, _actual, _message);
	}

	static assertNull(_object, _message)
	{
		this.assertTrue((object == null), _message);
	}

	static assertNotNull(_object, _message)
	{
		this.assertTrue((_object != null), _message);
	}

	static assertSame(_expected, _actual, _message)
	{
		if(_expected === _actual)
		{
			return;
		}
		this.failNotSame(_expected, _actual, _message);
	}

	static assertNotSame(_expected, _actual, _message)
	{
		if(expected === actual)
		{
			this.failSame(_message);
		}
	}

	static fail(_message)
	{
		throw new AssertionFailedError(_message);
	}

	static failTrue(_message)
	{
		this.fail(_message);
	}

	static failNotEquals(_expected, _actual, _message)
	{
		var formatted = "";
		if(_message != null)
		{
			formatted = _message + " ";
		}
		this.fail(formatted + "expected:< " + _expected + " > but was:< " + _actual + " >");
	}

	static failSame(_message)
	{
		var formatted = "";
 		if(_message != null)
 		{
 			formatted = _message + " ";
		}
 		this.fail(formatted + "expected not same");
	}

	static failNotSame(_message, _expected, _actual)
	{
		var formatted = "";
		if(_message != null)
		{
			formatted = _message + " ";
		}
		this.fail(formatted + "expected same:< " + _expected + " > was not:< " + _actual + " >");
	}

}
