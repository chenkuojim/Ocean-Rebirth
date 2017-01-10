
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class SimpleDateFormat
	* @constructor
	* @param {String} _formatString
	*/
	jsx.lang.util.SimpleDateFormat = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.lang.util.SimpleDateFormat.prototype.initialize = function(_formatString)
	{
		this.formatString = _formatString;

		this.minimalDaysInFirstWeek = Date.DEFAULT_MINIMAL_DAYS_IN_FIRST_WEEK
	}

	jsx.lang.util.SimpleDateFormat.__PATTERN_REG_EXP__ = "('[^']*')|(G+|y+|M+|w+|W+|D+|d+|F+|E+|a+|H+|k+|K+|h+|m+|s+|S+|z+|Z+)|([a-zA-Z]+)|([^a-zA-Z']+)";

	jsx.lang.util.SimpleDateFormat.TEXT2			= 0;
	jsx.lang.util.SimpleDateFormat.TEXT3			= 1;
	jsx.lang.util.SimpleDateFormat.NUMBER			= 2;
	jsx.lang.util.SimpleDateFormat.YEAR			= 3;
	jsx.lang.util.SimpleDateFormat.MONTH			= 4;
	jsx.lang.util.SimpleDateFormat.TIMEZONE_TEXT	= 5;
	jsx.lang.util.SimpleDateFormat.TIMEZONE		= 6;

	jsx.lang.util.SimpleDateFormat.TYPES = {
			G : jsx.lang.util.SimpleDateFormat.TEXT2,
			y : jsx.lang.util.SimpleDateFormat.YEAR,
			M : jsx.lang.util.SimpleDateFormat.MONTH,
			w : jsx.lang.util.SimpleDateFormat.NUMBER,
			W : jsx.lang.util.SimpleDateFormat.NUMBER,
			D : jsx.lang.util.SimpleDateFormat.NUMBER,
			d : jsx.lang.util.SimpleDateFormat.NUMBER,
			F : jsx.lang.util.SimpleDateFormat.NUMBER,
			E : jsx.lang.util.SimpleDateFormat.TEXT3,
			a : jsx.lang.util.SimpleDateFormat.TEXT2,
			H : jsx.lang.util.SimpleDateFormat.NUMBER,
			k : jsx.lang.util.SimpleDateFormat.NUMBER,
			K : jsx.lang.util.SimpleDateFormat.NUMBER,
			h : jsx.lang.util.SimpleDateFormat.NUMBER,
			m : jsx.lang.util.SimpleDateFormat.NUMBER,
			s : jsx.lang.util.SimpleDateFormat.NUMBER,
			S : jsx.lang.util.SimpleDateFormat.NUMBER,
			z : jsx.lang.util.SimpleDateFormat.TIMEZONE_TEXT,
			Z : jsx.lang.util.SimpleDateFormat.TIMEZONE
	};

	/**
	*
	*/
	jsx.lang.util.SimpleDateFormat.prototype.setMinimalDaysInFirstWeek = function(_minimalDaysInFirstWeek)
	{
		this.minimalDaysInFirstWeek = _minimalDaysInFirstWeek;
	}

	/**
	*
	*/
	jsx.lang.util.SimpleDateFormat.prototype.getMinimalDaysInFirstWeek = function()
	{
		return this.minimalDaysInFirstWeek;
	}

	/**
	*
	* @param {Date}
	*/
	jsx.lang.util.SimpleDateFormat.prototype.format = function(_date)
	{
		var padWithZeroes = function(_string, _length)
		{
			while(_string.length < _length)
			{
				_string = "0" + _string;
			}
			return _string;
		}

		var formatText = function(_data, _numberOfLetters, minLength)
		{
			return (_numberOfLetters >= 4) ? _data : _data.substr(0, Math.max(minLength, _numberOfLetters));
		}

		var formatNumber = function(_data, _numberOfLetters)
		{
			return padWithZeroes("" + _data, _numberOfLetters);
		}

		var _formattedString = new jsx.lang.StringBuffer();

		var _regexp = new RegExp(jsx.lang.util.SimpleDateFormat.__PATTERN_REG_EXP__, "g");
		var _result;
		while((_result = _regexp.exec(this.formatString)) != null)
		{
			var _matchedString = _result[0];
			var _quotedString = _result[1];
			var _patternLetters = _result[2];
			var _otherLetters = _result[3];
			var _otherCharacters = _result[4];

			if(_quotedString)
			{
				if("''".equals(_quotedString))
				{
					_formattedString.append("'");
				}
				else
				{
					_formattedString.append(_quotedString.substring(1, _quotedString.length - 1));
				}
			}
			else if(_otherLetters)
			{
				// ignore
			}
			else if(_otherCharacters)
			{
				_formattedString.append(_otherCharacters);
			}
			else if(_patternLetters)
			{
				var _patternLetter = _patternLetters.charAt(0);
				var _numberOfLetters = _patternLetters.length;
				var _rawData = "";
				switch(_patternLetter)
				{
					case "G":
						_rawData = "AD";
						break;
					case "y":
						_rawData = _date.getFullYear();
						break;
					case "M":
						_rawData = _date.getMonth();
						break;
					case "w":
						_rawData = _date.getWeekInYear(this.getMinimalDaysInFirstWeek());
						break;
					case "W":
						_rawData = _date.getWeekInMonth(this.getMinimalDaysInFirstWeek());
						break;
					case "D":
						_rawData = _date.getDayInYear();
						break;
					case "d":
						_rawData = _date.getDate();
						break;
					case "F":
						_rawData = 1 + Math.floor((_date.getDate() - 1) / 7);
						break;
					case "E":
						_rawData = Date.DAY_NAMES[_date.getDay()];
						break;
					case "a":
						_rawData = (_date.getHours() >= 12) ? "PM" : "AM";
						break;
					case "H":	// Hour in day (0-23)
						_rawData = _date.getHours();
						break;
					case "k":	// Hour in day (1-24)
						_rawData = _date.getHours() + 1;
						break;
					case "K":	// Hour in am/pm (0-11)
						_rawData = _date.getHours() % 12;
						break;
					case "h":	// Hour in am/pm (1-12)
						_rawData = (_date.getHours() <= 12) ? _date.getHours() : _date.getHours() - 12;
						break;
					case "m":
						_rawData = _date.getMinutes();
						break;
					case "s":
						_rawData = _date.getSeconds();
						break;
					case "S":
						_rawData = _date.getMilliseconds();
						break;
					case "z":
						_rawData = _date.getTimeZone();
						break;
					case "Z":
						_rawData = _date.getTimezoneOffset();
						break;
				}

				// Format the raw data depending on the type
				switch(jsx.lang.util.SimpleDateFormat.TYPES[_patternLetter])
				{
					case jsx.lang.util.SimpleDateFormat.TEXT2:
						_formattedString.append(formatText(_rawData, _numberOfLetters, 2));
						break;
					case jsx.lang.util.SimpleDateFormat.TEXT3:
						_formattedString.append(formatText(_rawData, _numberOfLetters, 3));
						break;
					case jsx.lang.util.SimpleDateFormat.NUMBER:
						_formattedString.append(formatNumber(_rawData, _numberOfLetters));
						break;
					case jsx.lang.util.SimpleDateFormat.YEAR:
						if(_numberOfLetters <= 2)
						{
							// Output a 2-digit year
							_formattedString.append((""+_rawData).substr(2, 2));
						}
						else
						{
							_formattedString.append(formatNumber(_rawData, _numberOfLetters));
						}
						break;
					case jsx.lang.util.SimpleDateFormat.MONTH:
						if(_numberOfLetters >= 3)
						{
							_formattedString.append(formatText(Date.MONTH_NAMES[_rawData], _numberOfLetters, _numberOfLetters));
						}
						else
						{
							_formattedString.append(formatNumber(_rawData + 1, _numberOfLetters));
						}
						break;
					case jsx.lang.util.SimpleDateFormat.TIMEZONE_TEXT:
						if(_numberOfLetters <= 3)
						{
							var _timezone = "";
							(""+_rawData).each(" ", function(_value)
							{
								_timezone += _value.charAt(0);
							});
							_formattedString.append(_timezone);
						}
						else
						{
							_formattedString.append(_rawData);
						}
						break;
					case jsx.lang.util.SimpleDateFormat.TIMEZONE:
						var isPositive = (_rawData > 0);
						// The following line looks like a mistake but isn't because of the way getTimezoneOffset measures.
						var prefix = isPositive ? "-" : "+";
						var absData = Math.abs(_rawData);

						// Hours
						var hours = "" + Math.floor(absData / 60);
						hours = padWithZeroes(hours, 2);

						// Minutes
						var minutes = "" +(absData % 60);
						minutes = padWithZeroes(minutes, 2);

						_formattedString.append(prefix + hours + minutes);
						break;
				}
			}
		}

		return _formattedString.toString();
	}


jsx.lang.util.SimpleDateFormat.PACKAGE = "jsx.lang.util";
jsx.lang.util.SimpleDateFormat.CLASS = "jsx.lang.util.SimpleDateFormat";
jsx.lang.util.SimpleDateFormat.SUPER_CLASS = "";
jsx.lang.util.SimpleDateFormat.IMPORTS = ["jsx.lang.StringBuffer"];
jsx.lang.util.SimpleDateFormat.INTERFACES = [];
jsx.lang.util.SimpleDateFormat.MIXINS = [];
jsx.lang.util.SimpleDateFormat.getName = function(){return jsx.lang.util.SimpleDateFormat.CLASS;}
jsx.lang.util.SimpleDateFormat.klass = new jsx.lang.Class(jsx.lang.util.SimpleDateFormat.getName());
jsx.lang.util.SimpleDateFormat.prototype.getClass = function(){return jsx.lang.util.SimpleDateFormat.klass;}
jsx.lang.util.SimpleDateFormat.WARNINGS = [];
