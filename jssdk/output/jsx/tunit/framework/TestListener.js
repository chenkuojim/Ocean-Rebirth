
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class TestListener
	*/
	jsx.tunit.framework.TestListener = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.tunit.framework.TestListener.prototype.initialize = function(){}

	jsx.tunit.framework.TestListener.prototype.startTest = function(_test){throw 'TestListener.startTest is abstract';};
	jsx.tunit.framework.TestListener.prototype.endTest = function(_test){throw 'TestListener.endTest is abstract';};
	jsx.tunit.framework.TestListener.prototype.addSuccess = function(_test){throw 'TestListener.addSuccess is abstract';};
	jsx.tunit.framework.TestListener.prototype.addFailure = function(_test, _failure){throw 'TestListener.addFailure is abstract';};
	jsx.tunit.framework.TestListener.prototype.addError = function(_test, _error){throw 'TestListener.addError is abstract';};

jsx.tunit.framework.TestListener.PACKAGE = "jsx.tunit.framework";
jsx.tunit.framework.TestListener.CLASS = "jsx.tunit.framework.TestListener";
jsx.tunit.framework.TestListener.SUPER_CLASS = "";
jsx.tunit.framework.TestListener.IMPORTS = [];
jsx.tunit.framework.TestListener.INTERFACES = [];
jsx.tunit.framework.TestListener.MIXINS = [];
jsx.tunit.framework.TestListener.getName = function(){return jsx.tunit.framework.TestListener.CLASS;}
jsx.tunit.framework.TestListener.klass = new jsx.lang.Class(jsx.tunit.framework.TestListener.getName());
jsx.tunit.framework.TestListener.prototype.getClass = function(){return jsx.tunit.framework.TestListener.klass;}
jsx.tunit.framework.TestListener.WARNINGS = [];
