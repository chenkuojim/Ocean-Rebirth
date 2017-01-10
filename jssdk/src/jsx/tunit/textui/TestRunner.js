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

package jsx.tunit.textui;

import jsx.tunit.framework.TestResult;
import jsx.tunit.framework.TestSuite;
import jsx.tunit.runner.BaseTestRunner;
import jsx.tunit.textui.ResultPrinter;

class TestRunner extends BaseTestRunner
{

	TestRunner(_output)
	{
		this.resultPrinter = new ResultPrinter(_output);
	}

	instance runTest(_test)
	{
		if(_test.getTestClass && !_test.getTestClass())
		{
			var _tests = _test.getTests();
			var me = this;
			_tests.each(function(_test)
			{
				me.runTest(_test);
			});
		}
		else
		{
			var _testClass = null;
			if(_test.getTestClass)
			{
				_testClass = _test.getTestClass();
			}
			else
			{
				_testClass = _test;
			}

			var _suite = new TestSuite(_test.getName(), _testClass);
			this.run(_suite);
		}
	}

	instance runSuite(_testSuite)
	{
		var _suite = this.getTest(_testSuite);
		var _tests = _suite.getTests();

		var me = this;
		_tests.each(function(_test)
		{
			me.runTest(_test);
		});
	}

	instance run(_test)
	{
		var result = new TestResult();
		result.addListener(this.resultPrinter);

		this.resultPrinter.printStart(_test);

        var startTime = new Date().getTime();

		_test.run(result);

		var endTime = new Date().getTime();

		var runTime = endTime - startTime;

		this.resultPrinter.printEnd(_test, result, runTime);

		return result;
	}

}
