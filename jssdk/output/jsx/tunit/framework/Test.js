
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class Test
	*/
	jsx.tunit.framework.Test = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.tunit.framework.Test.prototype.initialize = function(){}

	jsx.tunit.framework.Test.prototype.getName = function(){throw 'Test.getName is abstract';};
	jsx.tunit.framework.Test.prototype.countTestCases = function(){throw 'Test.countTestCases is abstract';};
	jsx.tunit.framework.Test.prototype.run = function(_result){throw 'Test.run is abstract';};


jsx.tunit.framework.Test.PACKAGE = "jsx.tunit.framework";
jsx.tunit.framework.Test.CLASS = "jsx.tunit.framework.Test";
jsx.tunit.framework.Test.SUPER_CLASS = "";
jsx.tunit.framework.Test.IMPORTS = [];
jsx.tunit.framework.Test.INTERFACES = [];
jsx.tunit.framework.Test.MIXINS = [];
jsx.tunit.framework.Test.getName = function(){return jsx.tunit.framework.Test.CLASS;}
jsx.tunit.framework.Test.klass = new jsx.lang.Class(jsx.tunit.framework.Test.getName());
jsx.tunit.framework.Test.prototype.getClass = function(){return jsx.tunit.framework.Test.klass;}
jsx.tunit.framework.Test.WARNINGS = [];
