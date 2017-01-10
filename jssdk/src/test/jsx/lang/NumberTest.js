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

class NumberTest extends TestBase
{

   	NumberTest()
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

	instance testTime()
	{
		var _times = 10;
		var _counter = 0;
		_times.times(function(_number)
		{
			_counter++;
		});
		this.assertTrue(_counter == 10);
	}

	instance testUpto()
	{
		var _upto = 1;
		var _counter = 0;
		_upto.upto(10, function(_number)
		{
			_counter++;
		});
		this.assertTrue(_counter == 10);
	}

	instance testDownto()
	{
		var _downto = 1;
		var _counter = 0;
		_downto.upto(10, function(_number)
		{
			_counter++;
		});
		this.assertTrue(_counter == 10);
	}

	instance testTowards()
	{
		var _towards = 0;
		var _counter = 0;
		_towards.towards(-10, function(_number)
		{
			_counter++;
		});
		this.assertTrue(_counter == 11);
	}

	instance testSucc()
	{
		var _number = 0;
		this.assertTrue(_number.succ() == 1);
	}

	instance testPred()
	{
		var _number = 1;
		this.assertTrue(_number.pred() == 0);
	}

}
