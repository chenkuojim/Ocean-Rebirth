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

package test.jsx.logging;

import jsx.logging.LogEvent;
import jsx.logging.Level;
import jsx.logging.PatternLayout;
import test.jsx.TestBase;

class PatternLayoutTest extends TestBase
{

   	PatternLayoutTest()
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

	instance testPatternLayout()
	{
		var _pLayout = new PatternLayout();

		_pLayout.setConversionPattern("%r %d{DATE} [%-5p] %c - %m%n");

		var _logger = {};
		_logger.getName = function()
		{
			return "test.logger";
		}
		_logger.getLevel = function()
		{
			return "DEBUG"
		}

//		console.log(_pLayout.format(new LogEvent(_logger, Level.toLevel("DEBUG"), "This is a test")))
	}

}
