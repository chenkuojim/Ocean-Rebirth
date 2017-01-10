
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class TestResult
	* @constructor
	*/
	jsx.tunit.framework.TestResult = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.tunit.framework.TestResult.prototype.initialize = function()
	{
		this.runTests = 0;
		this.successes = new jsx.collections.ArrayList();
		this.failures = new jsx.collections.ArrayList();
		this.errors = new jsx.collections.ArrayList();
		this.listeners = new jsx.collections.ArrayList();
	}

	jsx.tunit.framework.TestResult.prototype.addListener = function(_listener)
	{
		this.listeners.add(_listener);
	}

	jsx.tunit.framework.TestResult.prototype.removeListener = function(_listener)
	{
		this.listeners.remove(_listener);
	}

	jsx.tunit.framework.TestResult.prototype.runCount = function()
	{
		return this.runTests;
	}

	jsx.tunit.framework.TestResult.prototype.successCount = function()
	{
		return this.successes.size();;
	}

	jsx.tunit.framework.TestResult.prototype.getSuccesses = function()
	{
		return this.successes;
	}

	jsx.tunit.framework.TestResult.prototype.addSuccess = function(_test)
	{
		this.successes.add(_test);

		this.listeners.each(function(_listener)
		{
			_listener.addSuccess(_test);
		});
	}
	jsx.tunit.framework.TestResult.prototype.failureCount = function()
	{
		return this.failures.size();;
	}

	jsx.tunit.framework.TestResult.prototype.getFailures = function()
	{
		return this.failures;
	}

	jsx.tunit.framework.TestResult.prototype.addFailure = function(_test, _exception)
	{
		this.failures.add(new jsx.tunit.framework.TestFailure(_test, _exception));

		this.listeners.each(function(_listener)
		{
			_listener.addFailure(_test, _exception);
		});
	}

	jsx.tunit.framework.TestResult.prototype.errorCount = function()
	{
		return this.errors.size();
	}

	jsx.tunit.framework.TestResult.prototype.getErrors = function()
	{
		return this.errors;
	}

	jsx.tunit.framework.TestResult.prototype.addError = function(_test, _exception)
	{
		this.errors.add(new jsx.tunit.framework.TestFailure(_test, _exception));

		this.listeners.each(function(_listener)
		{
			_listener.addError(_test, _exception);
		});
	}

	jsx.tunit.framework.TestResult.prototype.startTest = function(_test)
	{
		this.runTests += _test.countTestCases();

		this.listeners.each(function(_listener)
		{
			_listener.startTest(_test);
		});
	}

	jsx.tunit.framework.TestResult.prototype.endTest = function(_test)
	{
		this.listeners.each(function(_listener)
		{
			_listener.endTest(_test);
		});
	}

	jsx.tunit.framework.TestResult.prototype.wasSuccessful = function()
	{
		return this.failureCount() == 0 && this.errorCount() == 0;
	}

	jsx.tunit.framework.TestResult.prototype.run = function(_test)
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
			if(jsx.tunit.framework.AssertionFailedError.klass.isInstance(_exception))
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


jsx.tunit.framework.TestResult.PACKAGE = "jsx.tunit.framework";
jsx.tunit.framework.TestResult.CLASS = "jsx.tunit.framework.TestResult";
jsx.tunit.framework.TestResult.SUPER_CLASS = "";
jsx.tunit.framework.TestResult.IMPORTS = ["jsx.collections.ArrayList","jsx.tunit.framework.AssertionFailedError","jsx.tunit.framework.TestFailure"];
jsx.tunit.framework.TestResult.INTERFACES = [];
jsx.tunit.framework.TestResult.MIXINS = [];
jsx.tunit.framework.TestResult.getName = function(){return jsx.tunit.framework.TestResult.CLASS;}
jsx.tunit.framework.TestResult.klass = new jsx.lang.Class(jsx.tunit.framework.TestResult.getName());
jsx.tunit.framework.TestResult.prototype.getClass = function(){return jsx.tunit.framework.TestResult.klass;}
jsx.tunit.framework.TestResult.WARNINGS = [];
