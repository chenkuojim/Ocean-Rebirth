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

import jsx.tunit.framework.TestSuite;

import test.jsx.io.http.HttpRequestTest;

class HttpTests
{

	HttpTests(){}

	static suite()
	{
		var _suite = new TestSuite("Tests for test.jsx.io.http");

		_suite.addTest(new TestSuite(HttpRequestTest.klass.getName(), HttpRequestTest.klass));

		return _suite;
	}

}
