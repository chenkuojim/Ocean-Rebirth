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

package test.jsx;

import jsx.tunit.framework.TestSuite;

import test.jsx.lang.LangTests;
import test.jsx.lang.util.LangUtilTests;
import test.jsx.collections.CollectionsTests;
import test.jsx.collections.comparators.ComparatorsTests;
import test.jsx.io.http.HttpTests;
import test.jsx.logging.LoggingTests;

class AllTests
{

	AllTests(){}

	static suite()
	{
		var _suite = new TestSuite("Tests for test.jsx");

		_suite.addTest(LangTests.suite());
		_suite.addTest(LangUtilTests.suite());
		_suite.addTest(CollectionsTests.suite());
		_suite.addTest(ComparatorsTests.suite());
		_suite.addTest(HttpTests.suite());
		_suite.addTest(LoggingTests.suite());

		return _suite;
	}

}
