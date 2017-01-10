jsx.logging.PatternLayout = function(){this.initialize.apply(this, arguments);}
jsx.logging.PatternLayout.prototype = new jsx.logging.DefaultLayout();
jsx.logging.PatternLayout.prototype.constructor = jsx.logging.PatternLayout;
jsx.logging.PatternLayout.superclass = jsx.logging.DefaultLayout.prototype;


	/** @ignore */
	jsx.logging.PatternLayout.prototype.initialize = function()
	{
		this.pattern = jsx.logging.PatternLayout.DEFAULT_CONVERSION_PATTERN;
	}

	jsx.logging.PatternLayout.TTCC_CONVERSION_PATTERN = "%r %p %c - %m%n";
	jsx.logging.PatternLayout.DEFAULT_CONVERSION_PATTERN = "%m%n";

	jsx.logging.PatternLayout.ISO8601_DATEFORMAT = "yyyy-MM-dd HH:mm:ss,SSS";
	jsx.logging.PatternLayout.DATETIME_DATEFORMAT = "dd MMM yyyy HH:mm:ss,SSS";
	jsx.logging.PatternLayout.ABSOLUTETIME_DATEFORMAT = "HH:mm:ss,SSS";

	jsx.logging.PatternLayout.__PATTERN_REG_EXP__ = "%(-?[0-9]+)?(\.?[0-9]+)?([cdmnpr%])(\{([^\}]+)\})?|([^%]+)";

	jsx.logging.PatternLayout.prototype.format = function(_logEvent)
	{
		var _msg = new jsx.lang.StringBuffer();

		var _regexp = new RegExp(jsx.logging.PatternLayout.__PATTERN_REG_EXP__, "g");
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
						var _dateFormat = jsx.logging.PatternLayout.ISO8601_DATEFORMAT;
						if(_specifier)
						{
							_dateFormat = _specifier;
							// Pick up special cases
							if(_dateFormat == "ISO8601")
							{
								_dateFormat = jsx.logging.PatternLayout.ISO8601_DATEFORMAT;
							}
							else if(_dateFormat == "ABSOLUTE")
							{
								_dateFormat = jsx.logging.PatternLayout.ABSOLUTETIME_DATEFORMAT;
							}
							else if(_dateFormat == "DATE")
							{
								_dateFormat = jsx.logging.PatternLayout.DATETIME_DATEFORMAT;
							}
						}
						_replacement = new jsx.lang.util.SimpleDateFormat(_dateFormat).format(_logEvent.getTimeStamp());
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
						_replacement = "" + _logEvent.getTimeStamp().getDifference(jsx.logging.LogManager.START_TIMESTAMP);
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

	jsx.logging.PatternLayout.prototype.setConversionPattern = function(_pattern)
	{
		this.pattern = _pattern
	}


jsx.logging.PatternLayout.PACKAGE = "jsx.logging";
jsx.logging.PatternLayout.CLASS = "jsx.logging.PatternLayout";
jsx.logging.PatternLayout.SUPER_CLASS = "jsx.logging.DefaultLayout";
jsx.logging.PatternLayout.IMPORTS = ["jsx.lang.util.SimpleDateFormat","jsx.logging.DefaultLayout","jsx.logging.LogManager","jsx.lang.StringBuffer"];
jsx.logging.PatternLayout.INTERFACES = [];
jsx.logging.PatternLayout.MIXINS = [];
jsx.logging.PatternLayout.getName = function(){return jsx.logging.PatternLayout.CLASS;}
jsx.logging.PatternLayout.klass = new jsx.lang.Class(jsx.logging.PatternLayout.getName());
jsx.logging.PatternLayout.prototype.getClass = function(){return jsx.logging.PatternLayout.klass;}
jsx.logging.PatternLayout.WARNINGS = [];
