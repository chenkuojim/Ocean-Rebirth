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

import jsx.collections.ArrayList;
import jsx.logging.Level;
import jsx.logging.LogEvent;

class Logger
{

	Logger(_name)
	{
		var name = _name;

		this.appenders = new ArrayList();
		this.effectiveLevel = Level.FATAL;

		this.log = function(_level, _message, _exception)
		{
			if(_level.isGreaterOrEqual(this.effectiveLevel))
			{
				var _logEvent = new LogEvent(this, _level, _message, _exception);
				this.appenders.each(function(_appender)
				{
					_appender.doAppend(_logEvent);
				});
			}
		}

		this.getName = function()
		{
			return name;
		}
	}

	instance addAppender(_appender)
	{
		this.appenders.add(_appender);
	}

	instance removeAppender(_appender)
	{
		this.appenders.remove(_appender);
	}

	instance removeAllAppenders()
	{
		this.appenders.clear();
	}

	instance getEffectiveLevel()
	{
		return this.effectiveLevel;
	}

	instance setEffectiveLevel(_level)
	{
		this.effectiveLevel = _level;
	}

	instance trace(_message, _exception)
	{
		this.log(Level.TRACE, _message, _exception);
	}

	instance debug(_message, _exception)
	{
		this.log(Level.DEBUG, _message, _exception);
	}

	instance info(_message, _exception)
	{
		this.log(Level.INFO, _message, _exception);
	}

	instance warn(_message, _exception)
	{
		this.log(Level.WARN, _message, _exception);
	}

	instance error(_message, _exception)
	{
		this.log(Level.ERROR, _message, _exception);
	}

	instance fatal(_message, _exception)
	{
		this.log(Level.FATAL, _message, _exception);
	}

	instance isTraceEnabled()
	{
		return Level.TRACE.isGreaterOrEqual(this.getLevel());
	}

	instance isDebugEnabled()
	{
		return Level.DEBUG.isGreaterOrEqual(this.getLevel());
	}

	instance isInfoEnabled()
	{
		return Level.INFO.isGreaterOrEqual(this.getLevel());
	}

	instance isWarnEnabled()
	{
		return Level.WARN.isGreaterOrEqual(this.getLevel());
	}

	instance isErrorEnabled()
	{
		return Level.ERROR.isGreaterOrEqual(this.getLevel());
	}

	instance isFatalEnabled()
	{
		return Level.FATAL.isGreaterOrEqual(this.getLevel());
	}

}