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
import jsx.logging.Level;

class LevelTest extends TestBase
{

   	LevelTest()
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

	instance testIsGreaterOrEqual()
	{
		this.assertTrue(Level.ALL.isGreaterOrEqual(Level.ALL));
		this.assertFalse(Level.ALL.isGreaterOrEqual(Level.TRACE));
		this.assertFalse(Level.ALL.isGreaterOrEqual(Level.DEBUG));
		this.assertFalse(Level.ALL.isGreaterOrEqual(Level.INFO));
		this.assertFalse(Level.ALL.isGreaterOrEqual(Level.WARN));
		this.assertFalse(Level.ALL.isGreaterOrEqual(Level.ERROR));
		this.assertFalse(Level.ALL.isGreaterOrEqual(Level.FATAL));
		this.assertFalse(Level.ALL.isGreaterOrEqual(Level.OFF));

		this.assertTrue(Level.TRACE.isGreaterOrEqual(Level.ALL));
		this.assertTrue(Level.TRACE.isGreaterOrEqual(Level.TRACE));
		this.assertFalse(Level.TRACE.isGreaterOrEqual(Level.DEBUG));
		this.assertFalse(Level.TRACE.isGreaterOrEqual(Level.INFO));
		this.assertFalse(Level.TRACE.isGreaterOrEqual(Level.WARN));
		this.assertFalse(Level.TRACE.isGreaterOrEqual(Level.ERROR));
		this.assertFalse(Level.TRACE.isGreaterOrEqual(Level.FATAL));
		this.assertFalse(Level.TRACE.isGreaterOrEqual(Level.OFF));

		this.assertTrue(Level.DEBUG.isGreaterOrEqual(Level.ALL));
		this.assertTrue(Level.DEBUG.isGreaterOrEqual(Level.TRACE));
		this.assertTrue(Level.DEBUG.isGreaterOrEqual(Level.DEBUG));
		this.assertFalse(Level.DEBUG.isGreaterOrEqual(Level.INFO));
		this.assertFalse(Level.DEBUG.isGreaterOrEqual(Level.WARN));
		this.assertFalse(Level.DEBUG.isGreaterOrEqual(Level.ERROR));
		this.assertFalse(Level.DEBUG.isGreaterOrEqual(Level.FATAL));
		this.assertFalse(Level.DEBUG.isGreaterOrEqual(Level.OFF));

		this.assertTrue(Level.INFO.isGreaterOrEqual(Level.ALL));
		this.assertTrue(Level.INFO.isGreaterOrEqual(Level.TRACE));
		this.assertTrue(Level.INFO.isGreaterOrEqual(Level.DEBUG));
		this.assertTrue(Level.INFO.isGreaterOrEqual(Level.INFO));
		this.assertFalse(Level.INFO.isGreaterOrEqual(Level.WARN));
		this.assertFalse(Level.INFO.isGreaterOrEqual(Level.ERROR));
		this.assertFalse(Level.INFO.isGreaterOrEqual(Level.FATAL));
		this.assertFalse(Level.INFO.isGreaterOrEqual(Level.OFF));

		this.assertTrue(Level.WARN.isGreaterOrEqual(Level.ALL));
		this.assertTrue(Level.WARN.isGreaterOrEqual(Level.TRACE));
		this.assertTrue(Level.WARN.isGreaterOrEqual(Level.DEBUG));
		this.assertTrue(Level.WARN.isGreaterOrEqual(Level.INFO));
		this.assertTrue(Level.WARN.isGreaterOrEqual(Level.WARN));
		this.assertFalse(Level.WARN.isGreaterOrEqual(Level.ERROR));
		this.assertFalse(Level.WARN.isGreaterOrEqual(Level.FATAL));
		this.assertFalse(Level.WARN.isGreaterOrEqual(Level.OFF));

		this.assertTrue(Level.ERROR.isGreaterOrEqual(Level.ALL));
		this.assertTrue(Level.ERROR.isGreaterOrEqual(Level.TRACE));
		this.assertTrue(Level.ERROR.isGreaterOrEqual(Level.DEBUG));
		this.assertTrue(Level.ERROR.isGreaterOrEqual(Level.INFO));
		this.assertTrue(Level.ERROR.isGreaterOrEqual(Level.WARN));
		this.assertTrue(Level.ERROR.isGreaterOrEqual(Level.ERROR));
		this.assertFalse(Level.ERROR.isGreaterOrEqual(Level.FATAL));
		this.assertFalse(Level.ERROR.isGreaterOrEqual(Level.OFF));

		this.assertTrue(Level.FATAL.isGreaterOrEqual(Level.ALL));
		this.assertTrue(Level.FATAL.isGreaterOrEqual(Level.TRACE));
		this.assertTrue(Level.FATAL.isGreaterOrEqual(Level.DEBUG));
		this.assertTrue(Level.FATAL.isGreaterOrEqual(Level.INFO));
		this.assertTrue(Level.FATAL.isGreaterOrEqual(Level.WARN));
		this.assertTrue(Level.FATAL.isGreaterOrEqual(Level.ERROR));
		this.assertTrue(Level.FATAL.isGreaterOrEqual(Level.FATAL));
		this.assertFalse(Level.FATAL.isGreaterOrEqual(Level.OFF));

		this.assertTrue(Level.OFF.isGreaterOrEqual(Level.ALL));
		this.assertTrue(Level.OFF.isGreaterOrEqual(Level.TRACE));
		this.assertTrue(Level.OFF.isGreaterOrEqual(Level.DEBUG));
		this.assertTrue(Level.OFF.isGreaterOrEqual(Level.INFO));
		this.assertTrue(Level.OFF.isGreaterOrEqual(Level.WARN));
		this.assertTrue(Level.OFF.isGreaterOrEqual(Level.ERROR));
		this.assertTrue(Level.OFF.isGreaterOrEqual(Level.FATAL));
		this.assertTrue(Level.OFF.isGreaterOrEqual(Level.OFF));
	}

	instance testEquals()
	{
		this.assertTrue(Level.ALL.equals(Level.ALL));
		this.assertTrue(Level.TRACE.equals(Level.TRACE));
		this.assertTrue(Level.DEBUG.equals(Level.DEBUG));
		this.assertTrue(Level.INFO.equals(Level.INFO));
		this.assertTrue(Level.ERROR.equals(Level.ERROR));
		this.assertTrue(Level.FATAL.equals(Level.FATAL));
		this.assertTrue(Level.WARN.equals(Level.WARN));
		this.assertTrue(Level.OFF.equals(Level.OFF));
	}

	instance testToLevel()
	{
		this.assertTrue(Level.ALL.equals(Level.toLevel(Level.ALL_INT)));
		this.assertTrue(Level.TRACE.equals(Level.toLevel(Level.TRACE_INT)));
		this.assertTrue(Level.DEBUG.equals(Level.toLevel(Level.DEBUG_INT)));
		this.assertTrue(Level.INFO.equals(Level.toLevel(Level.INFO_INT)));
		this.assertTrue(Level.ERROR.equals(Level.toLevel(Level.ERROR_INT)));
		this.assertTrue(Level.FATAL.equals(Level.toLevel(Level.FATAL_INT)));
		this.assertTrue(Level.WARN.equals(Level.toLevel(Level.WARN_INT)));
		this.assertTrue(Level.OFF.equals(Level.toLevel(Level.OFF_INT)));
		this.assertTrue(null == Level.toLevel(1000000));

		this.assertTrue(Level.ALL.equals(Level.toLevel(Level.ALL_VALUE)));
		this.assertTrue(Level.TRACE.equals(Level.toLevel(Level.TRACE_VALUE)));
		this.assertTrue(Level.DEBUG.equals(Level.toLevel(Level.DEBUG_VALUE)));
		this.assertTrue(Level.INFO.equals(Level.toLevel(Level.INFO_VALUE)));
		this.assertTrue(Level.ERROR.equals(Level.toLevel(Level.ERROR_VALUE)));
		this.assertTrue(Level.FATAL.equals(Level.toLevel(Level.FATAL_VALUE)));
		this.assertTrue(Level.WARN.equals(Level.toLevel(Level.WARN_VALUE)));
		this.assertTrue(Level.OFF.equals(Level.toLevel(Level.OFF_VALUE)));
		this.assertTrue(null == Level.toLevel(""));
	}

}
