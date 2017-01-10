jsx.tunit.htmlgui.TestRunner = function(){this.initialize.apply(this, arguments);}
jsx.tunit.htmlgui.TestRunner.prototype = new jsx.tunit.runner.BaseTestRunner();
jsx.tunit.htmlgui.TestRunner.prototype.constructor = jsx.tunit.htmlgui.TestRunner;
jsx.tunit.htmlgui.TestRunner.superclass = jsx.tunit.runner.BaseTestRunner.prototype;


	/** @ignore */
	jsx.tunit.htmlgui.TestRunner.prototype.initialize = function(_container)
	{
		this.resultPrinter = new jsx.tunit.htmlgui.ResultPrinter(_container);
	}

	jsx.tunit.htmlgui.TestRunner.prototype.runTest = function(_test)
	{
		var _suite = new jsx.tunit.framework.TestSuite("Tests for "+_test.getName(), _test);
		this.run(_suite);
	}

	jsx.tunit.htmlgui.TestRunner.prototype.runSuite = function(_testSuite)
	{
		var _suite = this.getTest(_testSuite);
		this.run(_suite);
	}

	jsx.tunit.htmlgui.TestRunner.prototype.run = function(_test)
	{
		var result = new jsx.tunit.framework.TestResult();
		result.addListener(this.resultPrinter);

        var startTime = new Date().getTime();

		_test.run(result);

		var endTime = new Date().getTime();

		var runTime = endTime - startTime;

		this.resultPrinter.print(_test, result, runTime);

		return result;
	}


jsx.tunit.htmlgui.TestRunner.PACKAGE = "jsx.tunit.htmlgui";
jsx.tunit.htmlgui.TestRunner.CLASS = "jsx.tunit.htmlgui.TestRunner";
jsx.tunit.htmlgui.TestRunner.SUPER_CLASS = "jsx.tunit.runner.BaseTestRunner";
jsx.tunit.htmlgui.TestRunner.IMPORTS = ["jsx.tunit.framework.TestResult","jsx.tunit.framework.TestSuite","jsx.tunit.runner.BaseTestRunner","jsx.tunit.htmlgui.ResultPrinter"];
jsx.tunit.htmlgui.TestRunner.INTERFACES = [];
jsx.tunit.htmlgui.TestRunner.MIXINS = [];
jsx.tunit.htmlgui.TestRunner.getName = function(){return jsx.tunit.htmlgui.TestRunner.CLASS;}
jsx.tunit.htmlgui.TestRunner.klass = new jsx.lang.Class(jsx.tunit.htmlgui.TestRunner.getName());
jsx.tunit.htmlgui.TestRunner.prototype.getClass = function(){return jsx.tunit.htmlgui.TestRunner.klass;}
jsx.tunit.htmlgui.TestRunner.WARNINGS = [];
