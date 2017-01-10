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

package jsx.tunit.htmlgui;

import jsx.tunit.framework.TestResult;
import jsx.tunit.framework.TestSuite;
import jsx.tunit.runner.BaseTestRunner;
import jsx.tunit.htmlgui.ResultPrinter;

class TestRunner extends BaseTestRunner
{

	TestRunner(_container)
	{
		this.resultPrinter = new ResultPrinter(_container);
	}

	instance runTest(_test)
	{
		var _suite = new TestSuite("Tests for "+_test.getName(), _test);
		this.run(_suite);
	}

	instance runSuite(_testSuite)
	{
		var _suite = this.getTest(_testSuite);
		this.run(_suite);
	}

	instance run(_test)
	{
		var result = new TestResult();
		result.addListener(this.resultPrinter);

        var startTime = new Date().getTime();

		_test.run(result);

		var endTime = new Date().getTime();

		var runTime = endTime - startTime;

		this.resultPrinter.print(_test, result, runTime);

		return result;
	}

}
