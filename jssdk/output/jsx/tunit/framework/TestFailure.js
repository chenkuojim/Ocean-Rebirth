
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class TestFailure
	* @constructor
	*/
	jsx.tunit.framework.TestFailure = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.tunit.framework.TestFailure.prototype.initialize = function(_test, _exception)
	{
		this.test = _test;
		this.exception = _exception;
	}

	jsx.tunit.framework.TestFailure.prototype.isFailure = function()
	{
		return jsx.tunit.framework.AssertionFailedError.klass.isInstance(this.exception);
	}

	jsx.tunit.framework.TestFailure.prototype.getTest = function()
	{
		return this.test;
	}

	jsx.tunit.framework.TestFailure.prototype.getException = function()
	{
		return this.exception;
	}


jsx.tunit.framework.TestFailure.PACKAGE = "jsx.tunit.framework";
jsx.tunit.framework.TestFailure.CLASS = "jsx.tunit.framework.TestFailure";
jsx.tunit.framework.TestFailure.SUPER_CLASS = "";
jsx.tunit.framework.TestFailure.IMPORTS = ["jsx.tunit.framework.AssertionFailedError"];
jsx.tunit.framework.TestFailure.INTERFACES = [];
jsx.tunit.framework.TestFailure.MIXINS = [];
jsx.tunit.framework.TestFailure.getName = function(){return jsx.tunit.framework.TestFailure.CLASS;}
jsx.tunit.framework.TestFailure.klass = new jsx.lang.Class(jsx.tunit.framework.TestFailure.getName());
jsx.tunit.framework.TestFailure.prototype.getClass = function(){return jsx.tunit.framework.TestFailure.klass;}
jsx.tunit.framework.TestFailure.WARNINGS = [];
