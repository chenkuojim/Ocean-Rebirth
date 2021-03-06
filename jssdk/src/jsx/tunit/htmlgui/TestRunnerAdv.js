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
import jsx.tunit.htmlgui.ResultPrinterAdv;

class TestRunner extends BaseTestRunner
{

	TestRunner(_testClass)
	{
		this.resultPrinter = new ResultPrinter(_testClass, this);
	}

	instance run(_test)
	{

	}

}
