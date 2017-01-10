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

import jsx.lang.StringBuffer;
import jsx.tunit.framework.TestListener;

class ResultPrinter implements TestListener
{

	ResultPrinter(_testClass, _testRunner)
	{
		this.runCount = 0;
		this.failureCount = 0;
		this.errorCount = 0;
		this.runTime = 0;
/*
need to collection all the tests in the test class / suite

build the UI,
	control container
		display runtime, failure count, error count, play{run}
	two iframes
		left iframe contains a tree of tests
		-MyTest
			|-testOne
			|-testTwo
			|-testThree

		right iframe contains failure/error messages for a particular test


*/
	}

	instance print(_test, _result, _runTime)
	{

	}

	instance startTest(_test)
	{
	}

	instance endTest(_test)
	{
		this.runCount++;
	}

	instance addSuccess(_test)
	{
	}

	instance addFailure(_test, _failure)
	{
		this.failureCount++;
		// hidden div for failure content
	}

	instance addError(_test, _error)
	{
		this.errorCount++;
		// hidden div for error content
	}

}
