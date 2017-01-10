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

package test.jsx.lang;

import test.jsx.TestBase;

class ObjectTest extends TestBase
{

   	ObjectTest()
   	{
	}

    instance setUp()
    {
    	super.setUp();
		this.obj1 = {};
		this.obj2 = {};
    }

    instance tearDown()
    {
		super.tearDown();
		this.obj1 = null;
		this.obj2 = null;
    }

	instance testIdentityEqualsTrue()
	{
		this.assertTrue(this.obj1 === this.obj1);
	}
	instance testIdentityEqualsFalse()
	{
		this.assertFalse(this.obj1 === this.obj2);
	}

	instance testEqualsEqualsOperatorTrue()
	{
		this.assertTrue(this.obj1 == this.obj1);
	}
	instance testEqualsEqualsOperatorFalse()
	{
		this.assertFalse(this.obj1 == this.obj2);
	}

	instance testDotEqualsTrue()
	{
		this.assertTrue(this.obj1.equals(this.obj1));
	}
	instance testDotEqualsFalse()
	{
		this.assertFalse(this.obj1.equals(this.obj2));
	}

	instance testGetClass()
	{
		var _class = this.obj1.getClass();

		this.assertTrue(_class.getName() == "Object");
		this.assertTrue(_class.isInstance(this.obj1));
		this.assertTrue(_class.isInstance(this.obj2));

	}

	instance testRespondsTo()
	{
		var str = "test";

		this.assertTrue(str.respondsTo("trim"));
	}

}
