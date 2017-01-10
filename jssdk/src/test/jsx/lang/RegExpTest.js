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

class RegExpTest extends TestBase
{

   	RegExpTest()
   	{
	}

    instance setUp()
    {
    	super.setUp();
		this.regexp1 = /java/;
		this.regexp2 = /java/;
    }

    instance tearDown()
    {
		super.tearDown();
		this.regexp1 = null;
		this.regexp2 = null;
    }

	instance testIdentityEqualsTrue()
	{
		this.assertTrue(this.regexp1 === this.regexp1);
	}
	instance testIdentityEqualsFalse()
	{
		this.assertFalse(this.regexp1 === this.regexp2);
	}

	instance testEqualsEqualsOperatorTrue()
	{
		this.assertTrue(this.regexp1 == this.regexp1);
	}
	instance testEqualsEqualsOperatorFalse()
	{
		this.assertFalse(this.regexp1 == this.regexp2);
	}

	instance testDotEqualsTrue()
	{
		this.assertTrue(this.regexp1.equals(this.regexp1));
	}
	instance testDotEqualsFalse()
	{
		this.assertFalse(this.regexp1.equals(this.regexp2));
	}

	instance testGetClass()
	{
		var _class = this.regexp1.getClass();

		this.assertTrue(_class.getName() == "RegExp");
		this.assertTrue(_class.isInstance(this.regexp1));
		this.assertTrue(_class.isInstance(this.regexp2));
	}

}
