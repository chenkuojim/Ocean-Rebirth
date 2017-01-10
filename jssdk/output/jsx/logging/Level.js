jsx.logging.Level = function(){this.initialize.apply(this, arguments);}


	/** @ignore */
	jsx.logging.Level.prototype.initialize = function(_number, _name)
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

	jsx.logging.Level.prototype.isGreaterOrEqual = function(_level)
	{
		return this.getNumber() >= _level.getNumber();
	}

	jsx.logging.Level.prototype.toString = function()
	{
		return this.getName();
	}

	jsx.logging.Level.prototype.equals = function(_object)
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

	jsx.logging.Level.toLevel = function(_value)
	{
		if(String.klass.isInstance(_value))
		{
			if(jsx.logging.Level.ALL_VALUE.equals(_value)){return jsx.logging.Level.ALL;}
			else if(jsx.logging.Level.TRACE_VALUE.equals(_value)){return jsx.logging.Level.TRACE;}
			else if(jsx.logging.Level.DEBUG_VALUE.equals(_value)){return jsx.logging.Level.DEBUG;}
			else if(jsx.logging.Level.INFO_VALUE.equals(_value)){return jsx.logging.Level.INFO;}
			else if(jsx.logging.Level.WARN_VALUE.equals(_value)){return jsx.logging.Level.WARN;}
			else if(jsx.logging.Level.ERROR_VALUE.equals(_value)){return jsx.logging.Level.ERROR;}
			else if(jsx.logging.Level.FATAL_VALUE.equals(_value)){return jsx.logging.Level.FATAL;}
			else if(jsx.logging.Level.OFF_VALUE.equals(_value)){return jsx.logging.Level.OFF;}
			else {return null;}
		}
		else if(Number.klass.isInstance(_value))
		{
			switch(_value)
			{
				case jsx.logging.Level.ALL_INT:
					return jsx.logging.Level.ALL;
				case jsx.logging.Level.TRACE_INT:
					return jsx.logging.Level.TRACE;
				case jsx.logging.Level.DEBUG_INT:
					return jsx.logging.Level.DEBUG;
				case jsx.logging.Level.INFO_INT:
					return jsx.logging.Level.INFO;
				case jsx.logging.Level.WARN_INT:
					return jsx.logging.Level.WARN;
				case jsx.logging.Level.ERROR_INT:
					return jsx.logging.Level.ERROR;
				case jsx.logging.Level.FATAL_INT:
					return jsx.logging.Level.FATAL;
				case jsx.logging.Level.OFF_INT:
					return jsx.logging.Level.OFF;
				default:
					return null;
			}
		}
		else
		{
			return null;
		}
	}

	jsx.logging.Level.ALL_INT	= Number.MIN_VALUE;
	jsx.logging.Level.TRACE_INT	= 100;
	jsx.logging.Level.DEBUG_INT	= 200;
	jsx.logging.Level.INFO_INT	= 300;
	jsx.logging.Level.WARN_INT	= 400;
	jsx.logging.Level.ERROR_INT	= 500;
	jsx.logging.Level.FATAL_INT	= 600;
	jsx.logging.Level.OFF_INT	= Number.MAX_VALUE;

	jsx.logging.Level.ALL_VALUE		= "ALL";
	jsx.logging.Level.TRACE_VALUE	= "TRACE";
	jsx.logging.Level.DEBUG_VALUE	= "DEBUG";
	jsx.logging.Level.INFO_VALUE	= "INFO";
	jsx.logging.Level.WARN_VALUE	= "WARN";
	jsx.logging.Level.ERROR_VALUE	= "ERROR";
	jsx.logging.Level.FATAL_VALUE	= "FATAL";
	jsx.logging.Level.OFF_VALUE		= "OFF";

	jsx.logging.Level.ALL	= new jsx.logging.Level(jsx.logging.Level.ALL_INT, jsx.logging.Level.ALL_VALUE);
	jsx.logging.Level.TRACE	= new jsx.logging.Level(jsx.logging.Level.TRACE_INT, jsx.logging.Level.TRACE_VALUE);
	jsx.logging.Level.DEBUG	= new jsx.logging.Level(jsx.logging.Level.DEBUG_INT, jsx.logging.Level.DEBUG_VALUE);
	jsx.logging.Level.INFO	= new jsx.logging.Level(jsx.logging.Level.INFO_INT, jsx.logging.Level.INFO_VALUE);
	jsx.logging.Level.WARN	= new jsx.logging.Level(jsx.logging.Level.WARN_INT, jsx.logging.Level.WARN_VALUE);
	jsx.logging.Level.ERROR	= new jsx.logging.Level(jsx.logging.Level.ERROR_INT, jsx.logging.Level.ERROR_VALUE);
	jsx.logging.Level.FATAL	= new jsx.logging.Level(jsx.logging.Level.FATAL_INT, jsx.logging.Level.FATAL_VALUE);
	jsx.logging.Level.OFF	= new jsx.logging.Level(jsx.logging.Level.OFF_INT, jsx.logging.Level.OFF_VALUE);


jsx.logging.Level.PACKAGE = "jsx.logging";
jsx.logging.Level.CLASS = "jsx.logging.Level";
jsx.logging.Level.SUPER_CLASS = "";
jsx.logging.Level.IMPORTS = [];
jsx.logging.Level.INTERFACES = [];
jsx.logging.Level.MIXINS = [];
jsx.logging.Level.getName = function(){return jsx.logging.Level.CLASS;}
jsx.logging.Level.klass = new jsx.lang.Class(jsx.logging.Level.getName());
jsx.logging.Level.prototype.getClass = function(){return jsx.logging.Level.klass;}
jsx.logging.Level.WARNINGS = [];
