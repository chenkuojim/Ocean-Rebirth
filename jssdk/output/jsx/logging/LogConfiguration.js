jsx.logging.LogConfiguration = function(){this.initialize.apply(this, arguments);}


	/** @ignore */
	jsx.logging.LogConfiguration.prototype.initialize = function(_configuration)
	{
		var configuration = _configuration;
		this.getConfiguration = function()
		{
			return configuration;
		}
	}

	jsx.logging.LogConfiguration.prototype.configure = function()
	{
		var _appenersMap = new jsx.collections.HashMap();

		var _appenders = this.getConfiguration().appenders;
		for(var i=0;i<_appenders.length;i++)
		{
			_appender = _appenders[i];

			var realAppender = jsx.lang.Class.forName(_appender.type).newInstance(_appender.name);

			if(_appender.threshold)
			{
				realAppender.setThreshold(jsx.logging.Level.toLevel(_appender.threshold));
			}

			if(_appender.layout)
			{
				var realLayout = jsx.lang.Class.forName(_appender.layout).newInstance();

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

			var realLogger = jsx.logging.LogManager.getLogger(logger.name);
			if(logger.effectiveLevel)
			{
				realLogger.setEffectiveLevel(jsx.logging.Level.toLevel(logger.effectiveLevel));
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


jsx.logging.LogConfiguration.PACKAGE = "jsx.logging";
jsx.logging.LogConfiguration.CLASS = "jsx.logging.LogConfiguration";
jsx.logging.LogConfiguration.SUPER_CLASS = "";
jsx.logging.LogConfiguration.IMPORTS = ["jsx.collections.HashMap","jsx.logging.Appender","jsx.logging.Layout","jsx.logging.DefaultAppender","jsx.logging.ConsoleAppender","jsx.logging.DefaultLayout","jsx.logging.PatternLayout","jsx.logging.Level","jsx.logging.LogEvent","jsx.logging.Logger","jsx.logging.LogManager","jsx.logging.WindowConsoleAppender","jsx.lang.Class"];
jsx.logging.LogConfiguration.INTERFACES = [];
jsx.logging.LogConfiguration.MIXINS = [];
jsx.logging.LogConfiguration.getName = function(){return jsx.logging.LogConfiguration.CLASS;}
jsx.logging.LogConfiguration.klass = new jsx.lang.Class(jsx.logging.LogConfiguration.getName());
jsx.logging.LogConfiguration.prototype.getClass = function(){return jsx.logging.LogConfiguration.klass;}
jsx.logging.LogConfiguration.WARNINGS = [];
