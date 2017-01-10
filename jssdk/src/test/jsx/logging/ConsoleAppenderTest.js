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

import jsx.logging.*;

import jsx.util.scheduler.*;

class ConsoleAppenderTest extends TestBase
{

   	ConsoleAppenderTest()
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

	instance testDisplay()
	{
		var logger = LogManager.getLogger("com.mycomp.mydepart.myapp.LoggingClass");
		logger.setEffectiveLevel(Level.TRACE);

		var layout = new PatternLayout();
		layout.setConversionPattern("%r %d{DATE} [%-5p] %c - %m%n");

		var appender = new ConsoleAppender();
		appender.setLayout(layout);
		logger.addAppender(appender);

		this.assertEquals("Default", appender.getName());

/*
		var appender2 = new ConsoleAppender("test.two");
		appender2.setLayout(layout);
		logger.addAppender(appender2);
*/

		logger.trace("this is a test trace");
		logger.debug("this is a test debug");
		logger.info("this is a test info");
		logger.warn("this is a test warn");
		logger.error("this is a test error");
		logger.fatal("this is a test fatal");

/*
		var _scheduler = new Scheduler();
		_scheduler.addTask(logger, logger.debug, ["hello"], 1000);
		_scheduler.start();
 		_scheduler.startTask(logger.debug);
*/

	}

}
