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

class Level
{

	Level(_number, _name)
	{
		var number = _number;
		var name = _name;

		this.getNumber = function()
		{
			return number;
		}

		this.getName = function()
		{
			return name;
		}
	}

	instance isGreaterOrEqual(_level)
	{
		return this.getNumber() >= _level.getNumber();
	}

	instance toString()
	{
		return this.getName();
	}

	instance equals(_object)
	{
		if (this === _object)
		{
			return true;
		}
		if(!this.getClass().isInstance(_object))
		{
			return false;
		}
		return this.getNumber() == _object.getNumber();
	}

	static toLevel(_value)
	{
		if(String.klass.isInstance(_value))
		{
			if(Level.ALL_VALUE.equals(_value)){return Level.ALL;}
			else if(Level.TRACE_VALUE.equals(_value)){return Level.TRACE;}
			else if(Level.DEBUG_VALUE.equals(_value)){return Level.DEBUG;}
			else if(Level.INFO_VALUE.equals(_value)){return Level.INFO;}
			else if(Level.WARN_VALUE.equals(_value)){return Level.WARN;}
			else if(Level.ERROR_VALUE.equals(_value)){return Level.ERROR;}
			else if(Level.FATAL_VALUE.equals(_value)){return Level.FATAL;}
			else if(Level.OFF_VALUE.equals(_value)){return Level.OFF;}
			else {return null;}
		}
		else if(Number.klass.isInstance(_value))
		{
			switch(_value)
			{
				case Level.ALL_INT:
					return Level.ALL;
				case Level.TRACE_INT:
					return Level.TRACE;
				case Level.DEBUG_INT:
					return Level.DEBUG;
				case Level.INFO_INT:
					return Level.INFO;
				case Level.WARN_INT:
					return Level.WARN;
				case Level.ERROR_INT:
					return Level.ERROR;
				case Level.FATAL_INT:
					return Level.FATAL;
				case Level.OFF_INT:
					return Level.OFF;
				default:
					return null;
			}
		}
		else
		{
			return null;
		}
	}

	Level.ALL_INT	= Number.MIN_VALUE;
	Level.TRACE_INT	= 100;
	Level.DEBUG_INT	= 200;
	Level.INFO_INT	= 300;
	Level.WARN_INT	= 400;
	Level.ERROR_INT	= 500;
	Level.FATAL_INT	= 600;
	Level.OFF_INT	= Number.MAX_VALUE;

	Level.ALL_VALUE		= "ALL";
	Level.TRACE_VALUE	= "TRACE";
	Level.DEBUG_VALUE	= "DEBUG";
	Level.INFO_VALUE	= "INFO";
	Level.WARN_VALUE	= "WARN";
	Level.ERROR_VALUE	= "ERROR";
	Level.FATAL_VALUE	= "FATAL";
	Level.OFF_VALUE		= "OFF";

	Level.ALL	= new Level(Level.ALL_INT, Level.ALL_VALUE);
	Level.TRACE	= new Level(Level.TRACE_INT, Level.TRACE_VALUE);
	Level.DEBUG	= new Level(Level.DEBUG_INT, Level.DEBUG_VALUE);
	Level.INFO	= new Level(Level.INFO_INT, Level.INFO_VALUE);
	Level.WARN	= new Level(Level.WARN_INT, Level.WARN_VALUE);
	Level.ERROR	= new Level(Level.ERROR_INT, Level.ERROR_VALUE);
	Level.FATAL	= new Level(Level.FATAL_INT, Level.FATAL_VALUE);
	Level.OFF	= new Level(Level.OFF_INT, Level.OFF_VALUE);

}
