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

package test.jsx.lang;

import jsx.tunit.framework.TestSuite;

import test.jsx.lang.ClassTest;
import test.jsx.lang.ObjectTest;
import test.jsx.lang.ArrayTest;
import test.jsx.lang.BooleanTest;
import test.jsx.lang.DateTest;
import test.jsx.lang.FunctionTest;
import test.jsx.lang.MathTest;
import test.jsx.lang.NumberTest;
import test.jsx.lang.RegExpTest;
import test.jsx.lang.StringTest;
import test.jsx.lang.StringBufferTest;
import test.jsx.lang.ClosureTest;

class LangTests
{

	LangTests(){}

	static suite()
	{
		var _suite = new TestSuite("Tests for test.jsx.lang");

		_suite.addTest(new TestSuite(ClassTest.klass.getName(), ClassTest.klass));
		_suite.addTest(new TestSuite(ObjectTest.klass.getName(), ObjectTest.klass));
		_suite.addTest(new TestSuite(ArrayTest.klass.getName(), ArrayTest.klass));
		_suite.addTest(new TestSuite(BooleanTest.klass.getName(), BooleanTest.klass));
		_suite.addTest(new TestSuite(DateTest.klass.getName(), DateTest.klass));
		_suite.addTest(new TestSuite(FunctionTest.klass.getName(), FunctionTest.klass));
		_suite.addTest(new TestSuite(MathTest.klass.getName(), MathTest.klass));
		_suite.addTest(new TestSuite(NumberTest.klass.getName(), NumberTest.klass));
		_suite.addTest(new TestSuite(RegExpTest.klass.getName(), RegExpTest.klass));
		_suite.addTest(new TestSuite(StringTest.klass.getName(), StringTest.klass));
		_suite.addTest(new TestSuite(StringBufferTest.klass.getName(), StringBufferTest.klass));
		_suite.addTest(new TestSuite(ClosureTest.klass.getName(), ClosureTest.klass));

		return _suite;
	}

}
