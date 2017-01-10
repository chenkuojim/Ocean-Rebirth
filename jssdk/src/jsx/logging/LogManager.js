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

import jsx.collections.HashMap;
import jsx.logging.Logger;

class LogManager
{

	LogManager(){}

	LogManager.START_TIMESTAMP = new Date();
	LogManager.LOGGERS = new HashMap();

	static getLogger(_loggerName)
	{
		var contains = LogManager.LOGGERS.containsKey(_loggerName);
		if (!contains)
		{
	   		LogManager.LOGGERS.put(_loggerName, new Logger(_loggerName));
		}

		return LogManager.LOGGERS.get(_loggerName);
	}

}