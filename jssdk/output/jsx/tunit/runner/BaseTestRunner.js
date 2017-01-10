jsx.tunit.runner.BaseTestRunner = function(){this.initialize.apply(this, arguments);}


	/** @ignore */
	jsx.tunit.runner.BaseTestRunner.prototype.initialize = function(){}

	jsx.tunit.runner.BaseTestRunner.prototype.getTest = function(_testSuiteClass)
	{
		var _suiteMethod = _testSuiteClass.getMethod("suite");

		return _suiteMethod.invoke();
	}


jsx.tunit.runner.BaseTestRunner.PACKAGE = "jsx.tunit.runner";
jsx.tunit.runner.BaseTestRunner.CLASS = "jsx.tunit.runner.BaseTestRunner";
jsx.tunit.runner.BaseTestRunner.SUPER_CLASS = "";
jsx.tunit.runner.BaseTestRunner.IMPORTS = [];
jsx.tunit.runner.BaseTestRunner.INTERFACES = [];
jsx.tunit.runner.BaseTestRunner.MIXINS = [];
jsx.tunit.runner.BaseTestRunner.getName = function(){return jsx.tunit.runner.BaseTestRunner.CLASS;}
jsx.tunit.runner.BaseTestRunner.klass = new jsx.lang.Class(jsx.tunit.runner.BaseTestRunner.getName());
jsx.tunit.runner.BaseTestRunner.prototype.getClass = function(){return jsx.tunit.runner.BaseTestRunner.klass;}
jsx.tunit.runner.BaseTestRunner.WARNINGS = [];
