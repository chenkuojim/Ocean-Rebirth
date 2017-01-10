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

import jsx.lang.Closure;
import test.jsx.lang.MyObjectTest;
import test.jsx.TestBase;

class ClosureTest extends TestBase
{

   	ClosureTest()
   	{
	}

    instance setUp()
    {
    	super.setUp();
    }

    instance tearDown()
    {
		super.tearDown();
    }

	instance testClosure()
	{
		var me = this;

		var _object1 = new MyObjectTest(1);

		var closure = new Closure().bind(function(_number)
		{
			me.assertTrue(this.prop1.equals("One"));
			me.assertTrue(this.prop2.equals("Two"));
			me.assertTrue(this.prop3.equals("Three"));

			return _number;
		}, _object1, [1000]);

		this.assertTrue(closure().equals(1000));
	}

}
