jsx.logging.Logger = function(){this.initialize.apply(this, arguments);}


	/** @ignore */
	jsx.logging.Logger.prototype.initialize = function(_name)
	{
		var name = _name;

		this.appenders = new jsx.collections.ArrayList();
		this.effectiveLevel = jsx.logging.Level.FATAL;

		this.log = function(_level, _message, _exception)
		{
			if(_level.isGreaterOrEqual(this.effectiveLevel))
			{
				var _logEvent = new jsx.logging.LogEvent(this, _level, _message, _exception);
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

	jsx.logging.Logger.prototype.addAppender = function(_appender)
	{
		this.appenders.add(_appender);
	}

	jsx.logging.Logger.prototype.removeAppender = function(_appender)
	{
		this.appenders.remove(_appender);
	}

	jsx.logging.Logger.prototype.removeAllAppenders = function()
	{
		this.appenders.clear();
	}

	jsx.logging.Logger.prototype.getEffectiveLevel = function()
	{
		return this.effectiveLevel;
	}

	jsx.logging.Logger.prototype.setEffectiveLevel = function(_level)
	{
		this.effectiveLevel = _level;
	}

	jsx.logging.Logger.prototype.trace = function(_message, _exception)
	{
		this.log(jsx.logging.Level.TRACE, _message, _exception);
	}

	jsx.logging.Logger.prototype.debug = function(_message, _exception)
	{
		this.log(jsx.logging.Level.DEBUG, _message, _exception);
	}

	jsx.logging.Logger.prototype.info = function(_message, _exception)
	{
		this.log(jsx.logging.Level.INFO, _message, _exception);
	}

	jsx.logging.Logger.prototype.warn = function(_message, _exception)
	{
		this.log(jsx.logging.Level.WARN, _message, _exception);
	}

	jsx.logging.Logger.prototype.error = function(_message, _exception)
	{
		this.log(jsx.logging.Level.ERROR, _message, _exception);
	}

	jsx.logging.Logger.prototype.fatal = function(_message, _exception)
	{
		this.log(jsx.logging.Level.FATAL, _message, _exception);
	}

	jsx.logging.Logger.prototype.isTraceEnabled = function()
	{
		return jsx.logging.Level.TRACE.isGreaterOrEqual(this.getLevel());
	}

	jsx.logging.Logger.prototype.isDebugEnabled = function()
	{
		return jsx.logging.Level.DEBUG.isGreaterOrEqual(this.getLevel());
	}

	jsx.logging.Logger.prototype.isInfoEnabled = function()
	{
		return jsx.logging.Level.INFO.isGreaterOrEqual(this.getLevel());
	}

	jsx.logging.Logger.prototype.isWarnEnabled = function()
	{
		return jsx.logging.Level.WARN.isGreaterOrEqual(this.getLevel());
	}

	jsx.logging.Logger.prototype.isErrorEnabled = function()
	{
		return jsx.logging.Level.ERROR.isGreaterOrEqual(this.getLevel());
	}

	jsx.logging.Logger.prototype.isFatalEnabled = function()
	{
		return jsx.logging.Level.FATAL.isGreaterOrEqual(this.getLevel());
	}


jsx.logging.Logger.PACKAGE = "jsx.logging";
jsx.logging.Logger.CLASS = "jsx.logging.Logger";
jsx.logging.Logger.SUPER_CLASS = "";
jsx.logging.Logger.IMPORTS = ["jsx.collections.ArrayList","jsx.logging.Level","jsx.logging.LogEvent"];
jsx.logging.Logger.INTERFACES = [];
jsx.logging.Logger.MIXINS = [];
jsx.logging.Logger.getName = function(){return jsx.logging.Logger.CLASS;}
jsx.logging.Logger.klass = new jsx.lang.Class(jsx.logging.Logger.getName());
jsx.logging.Logger.prototype.getClass = function(){return jsx.logging.Logger.klass;}
jsx.logging.Logger.WARNINGS = [];
