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

import test.jsx.TestBase;
import jsx.logging.Logger;

class LoggerTest extends TestBase
{

	LoggerTest.LOGGER_NAME = "test.logger";

   	LoggerTest()
   	{
    	this.logger = new Logger(LoggerTest.LOGGER_NAME);
	}

    instance setUp()
    {
    	super.setUp();
    }

    instance tearDown()
    {
		super.tearDown();
    }

	instance testGetName()
	{
		LoggerTest.LOGGER_NAME.equals(this.logger.getName());
	}


}
