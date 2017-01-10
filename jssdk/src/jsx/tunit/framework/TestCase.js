/*
 * JavaScript Software Development Kit - what JavaScript should be and can be - js-sdk.sourceforge.net
 * Copyright (C) 2006-2007 Mathew Sheets
 *
 * == BEGIN LICENSE ==
 *
 * Licensed under the terms of any of the following licenses at your
 * choice:
 *
 *  - GNU Lesser General Public License Version 2.1 or later (the "LGPL")
 *    http://www.gnu.org/licenses/lgpl.html
 *
 * == END LICENSE ==
 */

package jsx.tunit.framework;

import jsx.tunit.framework.Test;
import jsx.tunit.framework.Assert;
import jsx.tunit.framework.TestResult;

class TestCase implements Test mixin Assert
{

	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class TestCase
	* @constructor
	*/
	TestCase()
	{
		this.name = null;
	}

    instance setUp(){};
    instance tearDown (){};

	instance getName()
	{
		return this.name;
	}

	instance setName(_name)
	{
		this.name = _name;
	}

	instance countTestCases()
	{
		return 1;
	}

	instance run(_result)
	{
		if(_result)
		{
			_result.run(this);
		}
		else
		{
			var result = new TestResult();
			result.run(this);
		}
	}

	instance runBare()
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

	instance runTest()
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

	instance toString()
	{
		return this.getClass().getName()+"."+this.name;
	}

}
