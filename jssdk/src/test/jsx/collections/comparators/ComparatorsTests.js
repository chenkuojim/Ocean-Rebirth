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

package test.jsx.collections.comparators;

import jsx.tunit.framework.TestSuite;

import test.jsx.collections.comparators.NumericComparatorTest;
import test.jsx.collections.comparators.CurrencyComparatorTest;
import test.jsx.collections.comparators.DateComparatorTest;
import test.jsx.collections.comparators.StringComparatorTest;

class ComparatorsTests
{

	ComparatorsTests(){}

	static suite()
	{
		var _suite = new TestSuite("Tests for test.jsx.collections.comparators");

		_suite.addTest(new TestSuite(NumericComparatorTest.klass.getName(), NumericComparatorTest.klass));
		_suite.addTest(new TestSuite(CurrencyComparatorTest.klass.getName(), CurrencyComparatorTest.klass));
		_suite.addTest(new TestSuite(DateComparatorTest.klass.getName(), DateComparatorTest.klass));
		_suite.addTest(new TestSuite(StringComparatorTest.klass.getName(), StringComparatorTest.klass));

		return _suite;
	}

}
