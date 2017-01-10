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

package test.jsx.collections;

import jsx.tunit.framework.TestSuite;

import test.jsx.collections.EnumerableTest;

import test.jsx.collections.EnumerableCollectionTest;
import test.jsx.collections.AbstractCollectionTest;
import test.jsx.collections.AbstractListTest;
import test.jsx.collections.ArrayListTest;
import test.jsx.collections.ArrayStackTest;
import test.jsx.collections.AbstractSetTest;
import test.jsx.collections.HashSetTest;

import test.jsx.collections.EnumerableMapTest;
import test.jsx.collections.AbstractMapTest;
import test.jsx.collections.HashMapTest;

class CollectionsTests
{

	CollectionsTests(){}

	static suite()
	{
		var _suite = new TestSuite("Tests for test.jsx.collections");

		_suite.addTest(new TestSuite(EnumerableTest.klass.getName(), EnumerableTest.klass));

		_suite.addTest(new TestSuite(EnumerableCollectionTest.klass.getName(), EnumerableCollectionTest.klass));
		_suite.addTest(new TestSuite(AbstractCollectionTest.klass.getName(), AbstractCollectionTest.klass));
		_suite.addTest(new TestSuite(AbstractListTest.klass.getName(), AbstractListTest.klass));
		_suite.addTest(new TestSuite(ArrayListTest.klass.getName(), ArrayListTest.klass));
		_suite.addTest(new TestSuite(ArrayStackTest.klass.getName(), ArrayStackTest.klass));
		_suite.addTest(new TestSuite(AbstractSetTest.klass.getName(), AbstractSetTest.klass));
		_suite.addTest(new TestSuite(HashSetTest.klass.getName(), HashSetTest.klass));

		_suite.addTest(new TestSuite(EnumerableMapTest.klass.getName(), EnumerableMapTest.klass));
		_suite.addTest(new TestSuite(AbstractMapTest.klass.getName(), AbstractMapTest.klass));
		_suite.addTest(new TestSuite(HashMapTest.klass.getName(), HashMapTest.klass));

		return _suite;
	}

}
