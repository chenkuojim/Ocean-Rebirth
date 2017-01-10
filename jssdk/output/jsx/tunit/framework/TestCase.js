
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class TestCase
	* @constructor
	*/
	jsx.tunit.framework.TestCase = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.tunit.framework.TestCase.prototype.initialize = function()
	{
		this.name = null;
	}

    jsx.tunit.framework.TestCase.prototype.setUp = function(){};
    jsx.tunit.framework.TestCase.prototype.tearDown  = function(){};

	jsx.tunit.framework.TestCase.prototype.getName = function()
	{
		return this.name;
	}

	jsx.tunit.framework.TestCase.prototype.setName = function(_name)
	{
		this.name = _name;
	}

	jsx.tunit.framework.TestCase.prototype.countTestCases = function()
	{
		return 1;
	}

	jsx.tunit.framework.TestCase.prototype.run = function(_result)
	{
		if(_result)
		{
			_result.run(this);
		}
		else
		{
			var result = new jsx.tunit.framework.TestResult();
			result.run(this);
		}
	}

	jsx.tunit.framework.TestCase.prototype.runBare = function()
	{
		this.setUp();
		try
		{
			this.runTest();
		}
		finally
		{
			this.tearDown();
		}
	}

	jsx.tunit.framework.TestCase.prototype.runTest = function()
	{
		this.assertNotNull(this.name, "TestCase.name cannot be null");

		var runMethod = this.getClass().getMethod(this.name);
		if(runMethod)
		{
			runMethod.invoke(this);
		}
		else
		{
			this.fail("Method \""+this.name+"\" not found");
		}
	}

	jsx.tunit.framework.TestCase.prototype.toString = function()
	{
		return this.getClass().getName()+"."+this.name;
	}


jsx.tunit.framework.TestCase.prototype.assertSame = jsx.tunit.framework.Assert.assertSame;
jsx.tunit.framework.TestCase.prototype.failNotSame = jsx.tunit.framework.Assert.failNotSame;
jsx.tunit.framework.TestCase.prototype.failTrue = jsx.tunit.framework.Assert.failTrue;
jsx.tunit.framework.TestCase.prototype.assertNull = jsx.tunit.framework.Assert.assertNull;
jsx.tunit.framework.TestCase.prototype.assertFalse = jsx.tunit.framework.Assert.assertFalse;
jsx.tunit.framework.TestCase.prototype.assertEquals = jsx.tunit.framework.Assert.assertEquals;
jsx.tunit.framework.TestCase.prototype.assertNotSame = jsx.tunit.framework.Assert.assertNotSame;
jsx.tunit.framework.TestCase.prototype.failSame = jsx.tunit.framework.Assert.failSame;
jsx.tunit.framework.TestCase.prototype.failNotEquals = jsx.tunit.framework.Assert.failNotEquals;
jsx.tunit.framework.TestCase.prototype.assertNotNull = jsx.tunit.framework.Assert.assertNotNull;
jsx.tunit.framework.TestCase.prototype.fail = jsx.tunit.framework.Assert.fail;
jsx.tunit.framework.TestCase.prototype.assertTrue = jsx.tunit.framework.Assert.assertTrue;

jsx.tunit.framework.TestCase.PACKAGE = "jsx.tunit.framework";
jsx.tunit.framework.TestCase.CLASS = "jsx.tunit.framework.TestCase";
jsx.tunit.framework.TestCase.SUPER_CLASS = "";
jsx.tunit.framework.TestCase.IMPORTS = ["jsx.tunit.framework.Test","jsx.tunit.framework.Assert","jsx.tunit.framework.TestResult"];
jsx.tunit.framework.TestCase.INTERFACES = ["jsx.tunit.framework.Test"];
jsx.tunit.framework.TestCase.MIXINS = ["jsx.tunit.framework.Assert"];
jsx.tunit.framework.TestCase.getName = function(){return jsx.tunit.framework.TestCase.CLASS;}
jsx.tunit.framework.TestCase.klass = new jsx.lang.Class(jsx.tunit.framework.TestCase.getName());
jsx.tunit.framework.TestCase.prototype.getClass = function(){return jsx.tunit.framework.TestCase.klass;}
jsx.tunit.framework.TestCase.WARNINGS = [];
