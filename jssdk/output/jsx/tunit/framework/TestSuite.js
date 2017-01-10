
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class TestSuite
	* @constructor
	* @param {String} _name
	*/
	jsx.tunit.framework.TestSuite = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.tunit.framework.TestSuite.prototype.initialize = function(_name, _test)
	{
		this.name = _name;
		this.testClass = _test;
		this.tests = new jsx.collections.ArrayList();

		if(_test)
		{
			var superClass = _test;
			var names = new jsx.collections.ArrayList();
			while(true)
			{
				var methods = superClass.getDeclaredMethods();
				for (var i=0;i<methods.length;i++) {
					if(this.__isTestMethod__(methods[i]))
					{
						this.__addTestMethod__(methods[i], names, _test);
					}
				}
				superClass = superClass.getSuperclass();
				if(!superClass || superClass.getName().equals("Object"))
				{
					break;
				}
			}
		}
	}

	jsx.tunit.framework.TestSuite.prototype.__isTestMethod__ = function(_method)
	{
		return (_method.getName().indexOf("test") == 0);
	}

	jsx.tunit.framework.TestSuite.prototype.__addTestMethod__ = function(_method, _names, _test)
	{
		var name = _method.getName();
		if(_names.contains(name))
		{
			return;
		}

		_names.add(name);

		var test = _test.newInstance();
		test.setName(name);

		this.addTest(test);
	}

	jsx.tunit.framework.TestSuite.prototype.getName = function()
	{
		return this.name;
	}

	jsx.tunit.framework.TestSuite.prototype.getTestClass = function()
	{
		return this.testClass;
	}

	jsx.tunit.framework.TestSuite.prototype.countTestCases = function()
	{
		var count = 0;
		this.tests.each(function(_test)
		{
			count += _test.countTestCases();
		});
		return count;
	}

	jsx.tunit.framework.TestSuite.prototype.run = function(_result)
	{
		var result = null;
		if(_result)
		{
			result = _result;
		}
		else
		{
			result = new jsx.tunit.framework.TestResult();
		}

		var me = this;
		this.tests.each(function(_test)
		{
			me.runTest(_test, result);
		});
	}

	jsx.tunit.framework.TestSuite.prototype.runTest = function(_test, _result)
	{
		_test.run(_result);
	}

	jsx.tunit.framework.TestSuite.prototype.addTest = function(_test)
	{
		this.tests.add(_test);
	}

	jsx.tunit.framework.TestSuite.prototype.addTestSuite = function(_testClass)
	{
		this.addTest(new jsx.tunit.framework.TestSuite(_testClass));
	}

	jsx.tunit.framework.TestSuite.prototype.testAt = function(_index)
	{
		return this.tests.get(_index);
	}

	jsx.tunit.framework.TestSuite.prototype.testCount = function()
	{
		return this.tests.size();
	}

	jsx.tunit.framework.TestSuite.prototype.getTests = function()
	{
		return this.tests;
	}


jsx.tunit.framework.TestSuite.PACKAGE = "jsx.tunit.framework";
jsx.tunit.framework.TestSuite.CLASS = "jsx.tunit.framework.TestSuite";
jsx.tunit.framework.TestSuite.SUPER_CLASS = "";
jsx.tunit.framework.TestSuite.IMPORTS = ["jsx.collections.ArrayList","jsx.tunit.framework.Test","jsx.tunit.framework.TestResult"];
jsx.tunit.framework.TestSuite.INTERFACES = ["jsx.tunit.framework.Test"];
jsx.tunit.framework.TestSuite.MIXINS = [];
jsx.tunit.framework.TestSuite.getName = function(){return jsx.tunit.framework.TestSuite.CLASS;}
jsx.tunit.framework.TestSuite.klass = new jsx.lang.Class(jsx.tunit.framework.TestSuite.getName());
jsx.tunit.framework.TestSuite.prototype.getClass = function(){return jsx.tunit.framework.TestSuite.klass;}
jsx.tunit.framework.TestSuite.WARNINGS = [];
