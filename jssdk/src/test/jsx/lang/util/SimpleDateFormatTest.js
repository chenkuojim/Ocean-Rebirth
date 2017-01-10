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

import jsx.lang.util.SimpleDateFormat;
import test.jsx.TestBase;

class SimpleDateFormatTest extends TestBase
{

   	SimpleDateFormatTest()
   	{
	}

    instance setUp()
    {
    	super.setUp();

    	this.date = new Date(2001, 6, 4, 12, 8, 56, 1234);
    }

    instance tearDown()
    {
		super.tearDown();

		this.date = null;
    }

	instance testOne()
	{
		this.assertEquals("2001.07.04 AD at 12:08:57 -0400", new SimpleDateFormat("yyyy.MM.dd G 'at' HH:mm:ss Z").format(this.date));
	}

	instance testTwo()
	{
		this.assertEquals("Wed, Jul 4, '01", new SimpleDateFormat("EEE, MMM d, ''yy").format(this.date));
	}

	instance testThree()
	{
		this.assertEquals("12:08 PM", new SimpleDateFormat("h:mm a").format(this.date));
	}

	instance testFour()
	{
		this.assertEquals("12 o'clock PM, xxx", new SimpleDateFormat("hh 'o''''clock' a, zzzz").format(this.date));
	}

	instance testFive()
	{
		this.assertEquals("0:08 PM, x", new SimpleDateFormat("K:mm a, z").format(this.date));
	}

	instance testSiz()
	{
		this.assertEquals("02001.July.04 AD 12:08 PM", new SimpleDateFormat("yyyyy.MMMMM.dd GGG hh:mm aaa").format(this.date));
	}

	instance testSeven()
	{
		this.assertEquals("Wed, 4 Jul 2001 12:08:57 -0400", new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z").format(this.date));
	}

	instance testEight()
	{
		this.assertEquals("010704120857-0400", new SimpleDateFormat("yyMMddHHmmssZ").format(this.date));
	}

	instance testNine()
	{
		this.assertEquals("2001-07-04 12:08:57,234", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss,SSS").format(this.date));
	}

}

