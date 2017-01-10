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

import jsx.collections.ArrayList;

import jsx.tunit.framework.Test;
import jsx.tunit.framework.TestResult;

class TestSuite implements Test
{

	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class TestSuite
	* @constructor
	* @param {String} _name
	*/
	TestSuite(_name, _test)
	{
		this.name = _name;
		this.testClass = _test;
		this.tests = new ArrayList();

		if(_test)
		{
			var superClass = _test;
			var names = new ArrayList();
			while(true)
			{
				var methods = superClass.getDeclaredMethods();
				for (var i=0;i<methods.length;i++) {
					if(this.__isTestMethod__(methods[i]))
					{
						this.__addTestMethod__(methods[i], names, _test);
					}
				}
				superClass = superClass.getSuperclass();
				if(!superClass || superClass.getName().equals("Object"))
				{
					break;
				}
			}
		}
	}

	instance __isTestMethod__(_method)
	{
		return (_method.getName().indexOf("test") == 0);
	}

	instance __addTestMethod__(_method, _names, _test)
	{
		var name = _method.getName();
		if(_names.contains(name))
		{
			return;
		}

		_names.add(name);

		var test = _test.newInstance();
		test.setName(name);

		this.addTest(test);
	}

	instance getName()
	{
		return this.name;
	}

	instance getTestClass()
	{
		return this.testClass;
	}

	instance countTestCases()
	{
		var count = 0;
		this.tests.each(function(_test)
		{
			count += _test.countTestCases();
		});
		return count;
	}

	instance run(_result)
	{
		var result = null;
		if(_result)
		{
			result = _result;
		}
		else
		{
			result = new TestResult();
		}

		var me = this;
		this.tests.each(function(_test)
		{
			me.runTest(_test, result);
		});
	}

	instance runTest(_test, _result)
	{
		_test.run(_result);
	}

	instance addTest(_test)
	{
		this.tests.add(_test);
	}

	instance addTestSuite(_testClass)
	{
		this.addTest(new TestSuite(_testClass));
	}

	instance testAt(_index)
	{
		return this.tests.get(_index);
	}

	instance testCount()
	{
		return this.tests.size();
	}

	instance getTests()
	{
		return this.tests;
	}

}
