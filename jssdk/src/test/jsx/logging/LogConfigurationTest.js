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

import jsx.logging.Level;
import jsx.logging.LogManager;
import jsx.logging.LogConfiguration;
import test.jsx.TestBase;

class LogConfigurationTest extends TestBase
{

	LogConfigurationTest()
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

	instance testConfiguration()
	{

		new LogConfiguration(
				{
				  appenders :
				  [
				  	{
				  		type : "jsx.logging.DefaultAppender",
					  	name : "test",
				  		threshold : "DEBUG",
					  	layout : "jsx.logging.DefaultLayout"
					}
				  ],
				  loggers :
				  [
					{
					  name : "com.mycomp.mydepart.myapp.MyClass",
					  effectiveLevel : "DEBUG",
					  appenders :
					  [
					  	"test"
					  ]
					}
				  ]
				}
		).configure();

		var logger = LogManager.getLogger("com.mycomp.mydepart.myapp.MyClass");

		this.assertEquals("com.mycomp.mydepart.myapp.MyClass", logger.getName());
		this.assertEquals(Level.DEBUG, logger.getEffectiveLevel());
	}

}

