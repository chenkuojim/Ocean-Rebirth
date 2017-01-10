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

class TestFailure
{

	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class TestFailure
	* @constructor
	*/
	TestFailure(_test, _exception)
	{
		this.test = _test;
		this.exception = _exception;
	}

	instance isFailure()
	{
		return AssertionFailedError.klass.isInstance(this.exception);
	}

	instance getTest()
	{
		return this.test;
	}

	instance getException()
	{
		return this.exception;
	}

}
