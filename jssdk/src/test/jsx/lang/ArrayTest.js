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

class ArrayTest extends TestBase
{

   	ArrayTest()
   	{
	}

    instance setUp()
    {
    	super.setUp();
		this.array1 = [1, 2, 3, 4, 5];
		this.array2 = [6, 7, 8, 9, 10];
		this.array3 = [1, 2, 3, 4, 5];
    }

    instance tearDown()
    {
		super.tearDown();
		this.array1 = null;
		this.array2 = null;
    }

	instance testIndexOf()
	{
		this.assertTrue(this.array1.indexOf(5)>-1);
		this.assertTrue(this.array1.indexOf(6)==-1);
	}

	instance testIdentityEqualsTrue()
	{
		this.assertTrue(this.array1 === this.array1);
	}
	instance testIdentityEqualsFalse()
	{
		this.assertFalse(this.array1 === this.array2);
	}

	instance testEqualsEqualsOperatorTrue()
	{
		this.assertTrue(this.array1 == this.array1);
	}
	instance testEqualsEqualsOperatorFalse()
	{
		this.assertFalse(this.array1 == this.array2);
	}

	instance testDotEqualsTrue()
	{
		this.assertTrue(this.array1.equals(this.array3));
	}
	instance testDotEqualsFalse()
	{
		this.assertFalse(this.array1.equals(this.array2));
	}

	instance testGetClass()
	{
		var _class = this.array1.getClass();

		this.assertTrue(_class.getName() == "Array");
		this.assertTrue(_class.isInstance(this.array1));
		this.assertTrue(_class.isInstance(this.array2));
		this.assertTrue(_class.isInstance(this.array3));
	}

}
