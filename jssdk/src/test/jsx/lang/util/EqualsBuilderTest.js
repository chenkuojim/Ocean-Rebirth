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

package test.jsx.lang.util;

import test.jsx.lang.MyObjectTest;
import test.jsx.TestBase;

class EqualsBuilderTest extends TestBase
{

   	EqualsBuilderTest()
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

	instance testEqualsBuilder()
	{
		var _object1 = new MyObjectTest(1);
		var _object2 = new MyObjectTest(1);

		this.assertTrue(_object1.equals(_object2));
	}

}
