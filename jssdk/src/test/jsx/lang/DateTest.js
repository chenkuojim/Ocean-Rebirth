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

class DateTest extends TestBase
{

   	DateTest()
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

	instance testGetDifference()
	{
	}

	instance testIsBefore()
	{
	}

	instance testIsAfter()
	{
	}

	instance testGetWeekInYear()
	{
		var _date = new Date(2007, 6, 15);

		this.assertEquals(_date.getWeekInYear(), 29);
	}

	instance testGetWeekInMonth()
	{
		var _date = new Date(2007, 6, 15);

		this.assertEquals(_date.getWeekInMonth(), 3);
	}

	instance testGetDayInYear()
	{
		var _date = new Date(2007, 6, 15);

		this.assertEquals(_date.getDayInYear(), 195);
	}

}