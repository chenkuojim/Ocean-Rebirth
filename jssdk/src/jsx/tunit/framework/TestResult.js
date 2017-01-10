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

import jsx.tunit.framework.AssertionFailedError;
import jsx.tunit.framework.TestFailure;

class TestResult
{

	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class TestResult
	* @constructor
	*/
	TestResult()
	{
		this.runTests = 0;
		this.successes = new ArrayList();
		this.failures = new ArrayList();
		this.errors = new ArrayList();
		this.listeners = new ArrayList();
	}

	instance addListener(_listener)
	{
		this.listeners.add(_listener);
	}

	instance removeListener(_listener)
	{
		this.listeners.remove(_listener);
	}

	instance runCount()
	{
		return this.runTests;
	}

	instance successCount()
	{
		return this.successes.size();;
	}

	instance getSuccesses()
	{
		return this.successes;
	}

	instance addSuccess(_test)
	{
		this.successes.add(_test);

		this.listeners.each(function(_listener)
		{
			_listener.addSuccess(_test);
		});
	}
	instance failureCount()
	{
		return this.failures.size();;
	}

	instance getFailures()
	{
		return this.failures;
	}

	instance addFailure(_test, _exception)
	{
		this.failures.add(new TestFailure(_test, _exception));

		this.listeners.each(function(_listener)
		{
			_listener.addFailure(_test, _exception);
		});
	}

	instance errorCount()
	{
		return this.errors.size();
	}

	instance getErrors()
	{
		return this.errors;
	}

	instance addError(_test, _exception)
	{
		this.errors.add(new TestFailure(_test, _exception));

		this.listeners.each(function(_listener)
		{
			_listener.addError(_test, _exception);
		});
	}

	instance startTest(_test)
	{
		this.runTests += _test.countTestCases();

		this.listeners.each(function(_listener)
		{
			_listener.startTest(_test);
		});
	}

	instance endTest(_test)
	{
		this.listeners.each(function(_listener)
		{
			_listener.endTest(_test);
		});
	}

	instance wasSuccessful()
	{
		return this.failureCount() == 0 && this.errorCount() == 0;
	}

	instance run(_test)
	{
		this.startTest(_test);

		var _success = true;
		try
		{
			_test.runBare();
		}
		catch(_exception)
		{
			_success = false;
			if(AssertionFailedError.klass.isInstance(_exception))
			{
				this.addFailure(_test, _exception);
			}
			else
			{
				this.addError(_test, _exception);
			}
		}

		if(_success)
		{
			this.addSuccess(_test);
		}

		this.endTest(_test);
	}

}
