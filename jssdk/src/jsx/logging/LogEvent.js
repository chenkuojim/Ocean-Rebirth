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

package jsx.logging;

class LogEvent
{

	LogEvent(_logger, _level, _message, _exception)
	{
		var logger = _logger;
		var level = _level;
		var message = _message;
		var exception = _exception;

		var timeStamp = new Date();
		var timeStampInSeconds = Math.floor(timeStamp.getTime() / 1000);

		this.getLogger = function()
		{
			return logger;
		}

		this.getTimeStamp = function()
		{
			return timeStamp;
		}

		this.getTimeStampInSeconds = function()
		{
			return timeStampInSeconds;
		}

		this.getLevel = function()
		{
			return level;
		}

		this.getMessage = function()
		{
			return message;
		}

		this.getException = function()
		{
			return exception;
		}

	}

}