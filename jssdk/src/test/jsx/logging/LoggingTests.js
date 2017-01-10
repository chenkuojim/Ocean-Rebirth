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

import jsx.tunit.framework.TestSuite;

import test.jsx.logging.DefaultAppenderTest;
import test.jsx.logging.ConsoleAppenderTest;
import test.jsx.logging.DefaultLayoutTest;
import test.jsx.logging.PatternLayoutTest;
import test.jsx.logging.LevelTest;
import test.jsx.logging.LogEventTest;
import test.jsx.logging.LoggerTest;
import test.jsx.logging.LogConfigurationTest;

class LoggingTests
{

	LoggingTests(){}

	static suite()
	{
		var _suite = new TestSuite("Tests for test.jsx.logging");

		_suite.addTest(new TestSuite(DefaultAppenderTest.klass.getName(), DefaultAppenderTest.klass));
		_suite.addTest(new TestSuite(ConsoleAppenderTest.klass.getName(), ConsoleAppenderTest.klass));
		_suite.addTest(new TestSuite(DefaultLayoutTest.klass.getName(), DefaultLayoutTest.klass));
		_suite.addTest(new TestSuite(PatternLayoutTest.klass.getName(), PatternLayoutTest.klass));
		_suite.addTest(new TestSuite(LevelTest.klass.getName(), LevelTest.klass));
		_suite.addTest(new TestSuite(LogEventTest.klass.getName(), LogEventTest.klass));
		_suite.addTest(new TestSuite(LoggerTest.klass.getName(), LoggerTest.klass));
		_suite.addTest(new TestSuite(LogConfigurationTest.klass.getName(), LogConfigurationTest.klass));

		return _suite;
	}

}
