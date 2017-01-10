
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class Assert
	*/
	jsx.tunit.framework.Assert = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.tunit.framework.Assert.prototype.initialize = function(){}

	jsx.tunit.framework.Assert.assertTrue = function(_condition, _message)
	{
		if(!_condition)
		{
			if(!_message) _message = "Assert True failed";
			this.failTrue(_message);
		}
	}

	jsx.tunit.framework.Assert.assertFalse = function(_condition, _message)
	{
		if(!_message) _message = "Assert False failed";
		this.assertTrue(!_condition, _message);
	}

	jsx.tunit.framework.Assert.assertEquals = function(_expected, _actual, _message)
	{
		if(_expected == null && _actual == null)
		{
			return;
		}
		if(_expected != null && _expected.equals(_actual))
		{
			return;
		}

		this.failNotEquals(_expected, _actual, _message);
	}

	jsx.tunit.framework.Assert.assertNull = function(_object, _message)
	{
		this.assertTrue((object == null), _message);
	}

	jsx.tunit.framework.Assert.assertNotNull = function(_object, _message)
	{
		this.assertTrue((_object != null), _message);
	}

	jsx.tunit.framework.Assert.assertSame = function(_expected, _actual, _message)
	{
		if(_expected === _actual)
		{
			return;
		}
		this.failNotSame(_expected, _actual, _message);
	}

	jsx.tunit.framework.Assert.assertNotSame = function(_expected, _actual, _message)
	{
		if(expected === actual)
		{
			this.failSame(_message);
		}
	}

	jsx.tunit.framework.Assert.fail = function(_message)
	{
		throw new jsx.tunit.framework.AssertionFailedError(_message);
	}

	jsx.tunit.framework.Assert.failTrue = function(_message)
	{
		this.fail(_message);
	}

	jsx.tunit.framework.Assert.failNotEquals = function(_expected, _actual, _message)
	{
		var formatted = "";
		if(_message != null)
		{
			formatted = _message + " ";
		}
		this.fail(formatted + "expected:< " + _expected + " > but was:< " + _actual + " >");
	}

	jsx.tunit.framework.Assert.failSame = function(_message)
	{
		var formatted = "";
 		if(_message != null)
 		{
 			formatted = _message + " ";
		}
 		this.fail(formatted + "expected not same");
	}

	jsx.tunit.framework.Assert.failNotSame = function(_message, _expected, _actual)
	{
		var formatted = "";
		if(_message != null)
		{
			formatted = _message + " ";
		}
		this.fail(formatted + "expected same:< " + _expected + " > was not:< " + _actual + " >");
	}


jsx.tunit.framework.Assert.PACKAGE = "jsx.tunit.framework";
jsx.tunit.framework.Assert.CLASS = "jsx.tunit.framework.Assert";
jsx.tunit.framework.Assert.SUPER_CLASS = "";
jsx.tunit.framework.Assert.IMPORTS = ["jsx.tunit.framework.AssertionFailedError"];
jsx.tunit.framework.Assert.INTERFACES = [];
jsx.tunit.framework.Assert.MIXINS = [];
jsx.tunit.framework.Assert.getName = function(){return jsx.tunit.framework.Assert.CLASS;}
jsx.tunit.framework.Assert.klass = new jsx.lang.Class(jsx.tunit.framework.Assert.getName());
jsx.tunit.framework.Assert.prototype.getClass = function(){return jsx.tunit.framework.Assert.klass;}
jsx.tunit.framework.Assert.WARNINGS = [];
