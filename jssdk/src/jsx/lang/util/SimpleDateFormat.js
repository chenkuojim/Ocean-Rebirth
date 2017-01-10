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

package jsx.lang.util;

import jsx.lang.StringBuffer;

class SimpleDateFormat
{
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class SimpleDateFormat
	* @constructor
	* @param {String} _formatString
	*/
	SimpleDateFormat(_formatString)
	{
		this.formatString = _formatString;

		this.minimalDaysInFirstWeek = Date.DEFAULT_MINIMAL_DAYS_IN_FIRST_WEEK
	}

	SimpleDateFormat.__PATTERN_REG_EXP__ = "('[^']*')|(G+|y+|M+|w+|W+|D+|d+|F+|E+|a+|H+|k+|K+|h+|m+|s+|S+|z+|Z+)|([a-zA-Z]+)|([^a-zA-Z']+)";

	SimpleDateFormat.TEXT2			= 0;
	SimpleDateFormat.TEXT3			= 1;
	SimpleDateFormat.NUMBER			= 2;
	SimpleDateFormat.YEAR			= 3;
	SimpleDateFormat.MONTH			= 4;
	SimpleDateFormat.TIMEZONE_TEXT	= 5;
	SimpleDateFormat.TIMEZONE		= 6;

	SimpleDateFormat.TYPES = {
			G : SimpleDateFormat.TEXT2,
			y : SimpleDateFormat.YEAR,
			M : SimpleDateFormat.MONTH,
			w : SimpleDateFormat.NUMBER,
			W : SimpleDateFormat.NUMBER,
			D : SimpleDateFormat.NUMBER,
			d : SimpleDateFormat.NUMBER,
			F : SimpleDateFormat.NUMBER,
			E : SimpleDateFormat.TEXT3,
			a : SimpleDateFormat.TEXT2,
			H : SimpleDateFormat.NUMBER,
			k : SimpleDateFormat.NUMBER,
			K : SimpleDateFormat.NUMBER,
			h : SimpleDateFormat.NUMBER,
			m : SimpleDateFormat.NUMBER,
			s : SimpleDateFormat.NUMBER,
			S : SimpleDateFormat.NUMBER,
			z : SimpleDateFormat.TIMEZONE_TEXT,
			Z : SimpleDateFormat.TIMEZONE
	};

	/**
	*
	*/
	instance setMinimalDaysInFirstWeek(_minimalDaysInFirstWeek)
	{
		this.minimalDaysInFirstWeek = _minimalDaysInFirstWeek;
	}

	/**
	*
	*/
	instance getMinimalDaysInFirstWeek()
	{
		return this.minimalDaysInFirstWeek;
	}

	/**
	*
	* @param {Date}
	*/
	instance format(_date)
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

		var _formattedString = new StringBuffer();

		var _regexp = new RegExp(SimpleDateFormat.__PATTERN_REG_EXP__, "g");
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
				switch(SimpleDateFormat.TYPES[_patternLetter])
				{
					case SimpleDateFormat.TEXT2:
						_formattedString.append(formatText(_rawData, _numberOfLetters, 2));
						break;
					case SimpleDateFormat.TEXT3:
						_formattedString.append(formatText(_rawData, _numberOfLetters, 3));
						break;
					case SimpleDateFormat.NUMBER:
						_formattedString.append(formatNumber(_rawData, _numberOfLetters));
						break;
					case SimpleDateFormat.YEAR:
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
					case SimpleDateFormat.MONTH:
						if(_numberOfLetters >= 3)
						{
							_formattedString.append(formatText(Date.MONTH_NAMES[_rawData], _numberOfLetters, _numberOfLetters));
						}
						else
						{
							_formattedString.append(formatNumber(_rawData + 1, _numberOfLetters));
						}
						break;
					case SimpleDateFormat.TIMEZONE_TEXT:
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
					case SimpleDateFormat.TIMEZONE:
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

}
