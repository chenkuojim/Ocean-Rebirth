jsx.logging.LogManager = function(){this.initialize.apply(this, arguments);}


	/** @ignore */
	jsx.logging.LogManager.prototype.initialize = function(){}

	jsx.logging.LogManager.START_TIMESTAMP = new Date();
	jsx.logging.LogManager.LOGGERS = new jsx.collections.HashMap();

	jsx.logging.LogManager.getLogger = function(_loggerName)
	{
		var contains = jsx.logging.LogManager.LOGGERS.containsKey(_loggerName);
		if (!contains)
		{
	   		jsx.logging.LogManager.LOGGERS.put(_loggerName, new jsx.logging.Logger(_loggerName));
		}

		return jsx.logging.LogManager.LOGGERS.get(_loggerName);
	}


jsx.logging.LogManager.PACKAGE = "jsx.logging";
jsx.logging.LogManager.CLASS = "jsx.logging.LogManager";
jsx.logging.LogManager.SUPER_CLASS = "";
jsx.logging.LogManager.IMPORTS = ["jsx.collections.HashMap","jsx.logging.Logger"];
jsx.logging.LogManager.INTERFACES = [];
jsx.logging.LogManager.MIXINS = [];
jsx.logging.LogManager.getName = function(){return jsx.logging.LogManager.CLASS;}
jsx.logging.LogManager.klass = new jsx.lang.Class(jsx.logging.LogManager.getName());
jsx.logging.LogManager.prototype.getClass = function(){return jsx.logging.LogManager.klass;}
jsx.logging.LogManager.WARNINGS = [];
