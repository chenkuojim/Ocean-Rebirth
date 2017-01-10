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
 *
 * This class was adopted from log4javascript -> http://www.timdown.co.uk/log4javascript
 */

package jsx.logging;

import jsx.lang.util.SimpleDateFormat;
import jsx.logging.DefaultLayout;
import jsx.logging.LogManager;
import jsx.lang.StringBuffer;

class PatternLayout extends DefaultLayout
{

	PatternLayout()
	{
		this.pattern = PatternLayout.DEFAULT_CONVERSION_PATTERN;
	}

	PatternLayout.TTCC_CONVERSION_PATTERN = "%r %p %c - %m%n";
	PatternLayout.DEFAULT_CONVERSION_PATTERN = "%m%n";

	PatternLayout.ISO8601_DATEFORMAT = "yyyy-MM-dd HH:mm:ss,SSS";
	PatternLayout.DATETIME_DATEFORMAT = "dd MMM yyyy HH:mm:ss,SSS";
	PatternLayout.ABSOLUTETIME_DATEFORMAT = "HH:mm:ss,SSS";

	PatternLayout.__PATTERN_REG_EXP__ = "%(-?[0-9]+)?(\.?[0-9]+)?([cdmnpr%])(\{([^\}]+)\})?|([^%]+)";

	instance format(_logEvent)
	{
		var _msg = new StringBuffer();

		var _regexp = new RegExp(PatternLayout.__PATTERN_REG_EXP__, "g");
		var _result;
		while((_result = _regexp.exec(this.pattern)) != null)
		{
			var _match = _result[0];
			var _padding = _result[1];
			var _truncation = _result[2];
			var _conversionCharacter = _result[3];
			//_result[4] // specifier with "{" and "}"
			var _specifier = _result[5];
			var _text = _result[6];

			var _replacement = "";
			if(_text)
			{
				_msg.append(_text)
				continue;
			}

			switch(_conversionCharacter)
			{
					case "c": // Logger name
						var _loggerName = _logEvent.getLogger().getName();
						if(_specifier)
						{
							var _precision = Number.parseInt(_specifier);
							var _loggerNameParts = _logEvent.getLogger().getName().split(".");
							if(_precision >= _loggerNameParts.length)
							{
								_replacement = _loggerName;
							}
							else
							{
								_replacement = _loggerNameParts.slice(_loggerNameParts.length - _precision).join(".");
							}
						}
						else
						{
							_replacement = _loggerName;
						}
						break;
					case "d": // Date
						var _dateFormat = PatternLayout.ISO8601_DATEFORMAT;
						if(_specifier)
						{
							_dateFormat = _specifier;
							// Pick up special cases
							if(_dateFormat == "ISO8601")
							{
								_dateFormat = PatternLayout.ISO8601_DATEFORMAT;
							}
							else if(_dateFormat == "ABSOLUTE")
							{
								_dateFormat = PatternLayout.ABSOLUTETIME_DATEFORMAT;
							}
							else if(_dateFormat == "DATE")
							{
								_dateFormat = PatternLayout.DATETIME_DATEFORMAT;
							}
						}
						_replacement = new SimpleDateFormat(_dateFormat).format(_logEvent.getTimeStamp());
						break;
					case "m": // Message
						_replacement = _logEvent.getMessage().toString();
						break;
					case "n": // New line
						_replacement = "\n";
						break;
					case "p": // Level
						_replacement = _logEvent.getLevel().getName();
						break;
					case "r": // Milliseconds since startup
						_replacement = "" + _logEvent.getTimeStamp().getDifference(LogManager.START_TIMESTAMP);
						break;
					case "%": // Literal % sign
						_replacement = "%";
						break;
					default:
						_replacement = _match;
						break;
			}

			var len = 0;
			// truncation
			if(_truncation)
			{
				len = Number.parseInt(_truncation.substr(1));
				var strLen = _replacement.length;
				if(len < strLen)
				{
					_replacement = _replacement.substring(strLen - len, strLen);
				}
			}

			// padding
			if(_padding)
			{
				if(_padding.charAt(0) == "-")
				{
					len = Number.parseInt(_padding.substr(1));
					// Right pad with spaces
					while (_replacement.length < len)
					{
						_replacement += " ";
					}
				}
				else
				{
					len = Number.parseInt(_padding);
					// Left pad with spaces
					while (_replacement.length < len)
					{
						_replacement = " " + _replacement;
					}
				}
			}

			_msg.append(_replacement);
		}

		return _msg.toString();
	}

	instance setConversionPattern(_pattern)
	{
		this.pattern = _pattern
	}

}
