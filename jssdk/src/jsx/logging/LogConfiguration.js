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
import jsx.logging.*;
import jsx.lang.Class;

class LogConfiguration
{

	LogConfiguration(_configuration)
	{
		var configuration = _configuration;
		this.getConfiguration = function()
		{
			return configuration;
		}
	}

	instance configure()
	{
		var _appenersMap = new HashMap();

		var _appenders = this.getConfiguration().appenders;
		for(var i=0;i<_appenders.length;i++)
		{
			_appender = _appenders[i];

			var realAppender = Class.forName(_appender.type).newInstance(_appender.name);

			if(_appender.threshold)
			{
				realAppender.setThreshold(Level.toLevel(_appender.threshold));
			}

			if(_appender.layout)
			{
				var realLayout = Class.forName(_appender.layout).newInstance();

				if(_appender.layout_conversion)
				{
					realLayout.setConversionPattern(_appender.layout_conversion);
				}

				realAppender.setLayout(realLayout);
			}
			_appenersMap.put(realAppender.getName(), realAppender);
		}

		var _loggers = this.getConfiguration().loggers;
		for(var i=0;i<_loggers.length;i++)
		{
			var logger = _loggers[i];

			var realLogger = LogManager.getLogger(logger.name);
			if(logger.effectiveLevel)
			{
				realLogger.setEffectiveLevel(Level.toLevel(logger.effectiveLevel));
			}

			if(logger.appenders)
			{
				for(var j=0;j<logger.appenders.length;j++)
				{
					realLogger.addAppender(_appenersMap.get(logger.appenders[j]));
				}
			}
		}
	}

}