jsx.logging.LogEvent = function(){this.initialize.apply(this, arguments);}


	/** @ignore */
	jsx.logging.LogEvent.prototype.initialize = function(_logger, _level, _message, _exception)
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


jsx.logging.LogEvent.PACKAGE = "jsx.logging";
jsx.logging.LogEvent.CLASS = "jsx.logging.LogEvent";
jsx.logging.LogEvent.SUPER_CLASS = "";
jsx.logging.LogEvent.IMPORTS = [];
jsx.logging.LogEvent.INTERFACES = [];
jsx.logging.LogEvent.MIXINS = [];
jsx.logging.LogEvent.getName = function(){return jsx.logging.LogEvent.CLASS;}
jsx.logging.LogEvent.klass = new jsx.lang.Class(jsx.logging.LogEvent.getName());
jsx.logging.LogEvent.prototype.getClass = function(){return jsx.logging.LogEvent.klass;}
jsx.logging.LogEvent.WARNINGS = [];
