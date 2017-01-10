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

package test.jsx.lang.util;

import jsx.tunit.framework.TestSuite;

import test.jsx.lang.util.EqualsBuilderTest;
import test.jsx.lang.util.ToStringBuilderTest;
import test.jsx.lang.util.SimpleDateFormatTest;

class LangUtilTests
{

	LangUtilTests(){}

	static suite()
	{
		var _suite = new TestSuite("Tests for test.jsx.lang.util");

		_suite.addTest(new TestSuite(EqualsBuilderTest.klass.getName(), EqualsBuilderTest.klass));
		_suite.addTest(new TestSuite(ToStringBuilderTest.klass.getName(), ToStringBuilderTest.klass));
		_suite.addTest(new TestSuite(SimpleDateFormatTest.klass.getName(), SimpleDateFormatTest.klass));

		return _suite;
	}

}

