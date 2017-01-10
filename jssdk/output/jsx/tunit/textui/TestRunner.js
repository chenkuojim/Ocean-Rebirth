jsx.tunit.textui.TestRunner = function(){this.initialize.apply(this, arguments);}
jsx.tunit.textui.TestRunner.prototype = new jsx.tunit.runner.BaseTestRunner();
jsx.tunit.textui.TestRunner.prototype.constructor = jsx.tunit.textui.TestRunner;
jsx.tunit.textui.TestRunner.superclass = jsx.tunit.runner.BaseTestRunner.prototype;


	/** @ignore */
	jsx.tunit.textui.TestRunner.prototype.initialize = function(_output)
	{
		this.resultPrinter = new jsx.tunit.textui.ResultPrinter(_output);
	}

	jsx.tunit.textui.TestRunner.prototype.runTest = function(_test)
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

			var _suite = new jsx.tunit.framework.TestSuite(_test.getName(), _testClass);
			this.run(_suite);
		}
	}

	jsx.tunit.textui.TestRunner.prototype.runSuite = function(_testSuite)
	{
		var _suite = this.getTest(_testSuite);
		var _tests = _suite.getTests();

		var me = this;
		_tests.each(function(_test)
		{
			me.runTest(_test);
		});
	}

	jsx.tunit.textui.TestRunner.prototype.run = function(_test)
	{
		var result = new jsx.tunit.framework.TestResult();
		result.addListener(this.resultPrinter);

		this.resultPrinter.printStart(_test);

        var startTime = new Date().getTime();

		_test.run(result);

		var endTime = new Date().getTime();

		var runTime = endTime - startTime;

		this.resultPrinter.printEnd(_test, result, runTime);

		return result;
	}


jsx.tunit.textui.TestRunner.PACKAGE = "jsx.tunit.textui";
jsx.tunit.textui.TestRunner.CLASS = "jsx.tunit.textui.TestRunner";
jsx.tunit.textui.TestRunner.SUPER_CLASS = "jsx.tunit.runner.BaseTestRunner";
jsx.tunit.textui.TestRunner.IMPORTS = ["jsx.tunit.framework.TestResult","jsx.tunit.framework.TestSuite","jsx.tunit.runner.BaseTestRunner","jsx.tunit.textui.ResultPrinter"];
jsx.tunit.textui.TestRunner.INTERFACES = [];
jsx.tunit.textui.TestRunner.MIXINS = [];
jsx.tunit.textui.TestRunner.getName = function(){return jsx.tunit.textui.TestRunner.CLASS;}
jsx.tunit.textui.TestRunner.klass = new jsx.lang.Class(jsx.tunit.textui.TestRunner.getName());
jsx.tunit.textui.TestRunner.prototype.getClass = function(){return jsx.tunit.textui.TestRunner.klass;}
jsx.tunit.textui.TestRunner.WARNINGS = [];
