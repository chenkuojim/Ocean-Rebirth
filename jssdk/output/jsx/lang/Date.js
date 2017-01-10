
	/**
	* @fileOverview
	* @example
	*/

	/**
	* The long version of the months, ex. January.
	*/
	Date.MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	/**
	* The short verions of the months, ex. Jan.
	*/
	Date.MONTH_NAMES_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	/**
	* The long verion of the days of the week, ex. Sunday.
	*/
	Date.DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	/**
	* The short version of the days of the week, ex. Sun.
	*/
	Date.DAY_NAMES_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	/**
	* The number of milliseconds in a day.
	*/
	Date.ONE_DAY_MILLISECONDS = 24 * 60 * 60 * 1000;
	/**
	* The number of milliseconds in a week.
	*/
	Date.ONE_WEEK_MILLISECONDS = 7 * Date.ONE_DAY_MILLISECONDS;

	/** @ignore */
	Date.DEFAULT_MINIMAL_DAYS_IN_FIRST_WEEK = 1;

	/**
	* Takes a date string and returns the number of milliseconds since midnight of January 1, 1970.
	* @name Date.parse
	* @param {String} _dateString A string representing a date.
	* @function
	*/
	/** @ignore */
	Date._$parse$_ = function(_dateString){throw "don't call me, used for reflection.";}
	/**
	* Takes a date and returns the number of milliseconds since midnight of January 1, 1970 according to universal time.
	* @name Datea.UTC
	* @param {Number} _year
	* @param {Number} _month
	* @param {Number} _day
	* @param {Number} [_hours]
	* @param {Number} [_minutes]
	* @param {Number} [_seconds]
	* @param {Number} [_ms]
	* @function
	*/
	/** @ignore */
	Date._$UTC$_ = function(_year, _month, _day, _hours, _minutes, _seconds, _ms){throw "don't call me, used for reflection.";}

	/**
	* Returns the day of the month from a Date object (from 1-31).
	* @name getDate
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$getDate$_ = function(){throw "don't call me, used for reflection.";}
	/**
	* Sets the day of the month in a Date object (from 1-31).
	* @name setDate
	* @param {Number} _date
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$setDate$_ = function(_date){throw "don't call me, used for reflection.";}
	/**
	* Returns the day of the month from a Date object according to universal time (from 1-31).
	* @name getUTCDate
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$getUTCDate$_ = function(){throw "don't call me, used for reflection.";}
	/**
	* Sets the day of the month in a Date object according to universal time (from 1-31).
	* @name setUTCDate
	* @param {Number} _date
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$setUTCDate$_ = function(_date){throw "don't call me, used for reflection.";}

	/**
	* Returns the day of the week from a Date object (from 0-6).
	* @name getDay
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$getDay$_ = function(){throw "don't call me, used for reflection.";}
	/**
	* Returns the day of the week from a Date object according to universal time (from 0-6).
	* @name getUTCDay
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$getUTCDay$_ = function(){throw "don't call me, used for reflection.";}

	/**
	* Returns the month from a Date object (from 0-11).
	* @name getMonth
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$getMonth$_ = function(){throw "don't call me, used for reflection.";}
	/**
	* Sets the month in a Date object (from 0-11).
	* @name setMonth
	* @param {Number} _month
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$setMonth$_ = function(_month){throw "don't call me, used for reflection.";}
	/**
	* Returns the month from a Date object according to universal time (from 0-11).
	* @name getUTCMonth
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$getUTCMonth$_ = function(){throw "don't call me, used for reflection.";}
	/**
	* Sets the month in a Date object according to universal time (from 0-11).
	* @name setUTCMonth
	* @param {Number} _month
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$setUTCMonth$_ = function(_month){throw "don't call me, used for reflection.";}

	/**
	* Returns the year, as a four-digit number, from a Date object.
	* @name getFullYear
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$getFullYear$_ = function(){throw "don't call me, used for reflection.";}
	/**
	* Sets the year in a Date object (four digits).
	* @name setFullYear
	* @param {Number} _fullYear
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$setFullYear$_ = function(_fullYear){throw "don't call me, used for reflection.";}
	/**
	* Returns the four-digit year from a Date object according to universal time.
	* @name getUTCFullYear
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$getUTCFullYear$_ = function(){throw "don't call me, used for reflection.";}
	/**
	* Sets the year in a Date object according to universal time (four digits).
	* @name setUTCFullYear
	* @param {Number} _fullYear
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$setUTCFullYear$_ = function(_fullYear){throw "don't call me, used for reflection.";}

	/**
	* Returns the year, as a two-digit or a four-digit number, from a Date object. Use getFullYear() instead!
	* @name getYear
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$getYear$_ = function(){throw "don't call me, used for reflection.";}
	/**
	* ets the year in the Date object (two or four digits). Use setFullYear() instead!
	* @name setYear
	* @param {Number} _year
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$setYear$_ = function(_year){throw "don't call me, used for reflection.";}

	/**
	* Returns the hour of a Date object (from 0-23).
	* @name getHours
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$getHours$_ = function(){throw "don't call me, used for reflection.";}
	/**
	* Sets the hour in a Date object (from 0-23).
	* @name setHours
	* @param {Number} _year
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$setHours$_ = function(_hours){throw "don't call me, used for reflection.";}
	/**
	* Returns the hour of a Date object according to universal time (from 0-23).
	* @name getUTCHours
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$getUTCHours$_ = function(){throw "don't call me, used for reflection.";}
	/**
	* Sets the hour in a Date object according to universal time (from 0-23).
	* @name setUTCHours
	* @param {Number} _hours
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$setUTCHours$_ = function(_hours){throw "don't call me, used for reflection.";}

	/**
	* Returns the minutes of a Date object (from 0-59).
	* @name getMinutes
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$getMinutes$_ = function(){throw "don't call me, used for reflection.";}
	/**
	* Set the minutes in a Date object (from 0-59).
	* @name setMinutes
	* @param {Number} _minutes
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$setMinutes$_ = function(_minutes){throw "don't call me, used for reflection.";}
	/**
	* Returns the minutes of a Date object according to universal time (from 0-59).
	* @name getUTCMinutes
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$getUTCMinutes$_ = function(){throw "don't call me, used for reflection.";}
	/**
	* Set the minutes in a Date object according to universal time (from 0-59).
	* @name setUTCMinutes
	* @param {Number} _minutes
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$setUTCMinutes$_ = function(_minutes){throw "don't call me, used for reflection.";}

	/**
	* Returns the seconds of a Date object (from 0-59).
	* @name getSeconds
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$getSeconds$_ = function(){throw "don't call me, used for reflection.";}
	/**
	* Sets the seconds in a Date object (from 0-59).
	* @name setSeconds
	* @param {Number} _seconds
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$setSeconds$_ = function(_seconds){throw "don't call me, used for reflection.";}
	/**
	* Returns the seconds of a Date object according to universal time (from 0-59).
	* @name getUTCSeconds
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$getUTCSeconds$_ = function(){throw "don't call me, used for reflection.";}
	/**
	* Set the seconds in a Date object according to universal time (from 0-59).
	* @name setUTCSeconds
	* @param {Number} _seconds
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$setUTCSeconds$_ = function(_seconds){throw "don't call me, used for reflection.";}

	/**
	* Returns the milliseconds of a Date object (from 0-999).
	* @name getMilliseconds
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$getMilliseconds$_ = function(){throw "don't call me, used for reflection.";}
	/**
	* Sets the milliseconds in a Date object (from 0-999).
	* @name setMilliseconds
	* @param {Number} _milliseconds
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$setMilliseconds$_ = function(_milliseconds){throw "don't call me, used for reflection.";}
	/**
	* Returns the milliseconds of a Date object according to universal time (from 0-999).
	* @name getUTCMilliseconds
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$getUTCMilliseconds$_ = function(){throw "don't call me, used for reflection.";}
	/**
	* Sets the milliseconds in a Date object according to universal time (from 0-999).
	* @name setUTCMilliseconds
	* @param {Number} _milliseconds
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$setUTCMilliseconds$_ = function(_milliseconds){throw "don't call me, used for reflection.";}

	/**
	* Returns the number of milliseconds since midnight Jan 1, 1970.
	* @name getTime
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$getTime$_ = function(){throw "don't call me, used for reflection.";}
	/**
	* Calculates a date and time by adding or subtracting a specified number of milliseconds to/from midnight January 1, 1970.
	* @name setTime
	* @param {Number} _time
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$setTime$_ = function(_time){throw "don't call me, used for reflection.";}
	/**
	* Returns the difference in minutes between local time and Greenwich Mean Time (GMT).
	* @name getTimezoneOffset
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$getTimezoneOffset$_ = function(){throw "don't call me, used for reflection.";}

	/**
	* Returns a string representation of the date. Ex... Fri May 09 2008.
	* @name toDateString
	* @return {String}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$toDateString$_ = function(){throw "don't call me, used for reflection.";}
	/**
	* Converts a Date object, according to Greenwich time, to a string. Use toUTCString() instead!
	* @name toGMTString
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$toGMTString$_ = function(){throw "don't call me, used for reflection.";}
	/**
	* Returns a string representation of the time. Ex... 21:28:42 GMT-0400 (EDT).
	* @name toTimeString
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$toTimeString$_ = function(){throw "don't call me, used for reflection.";}
	/**
	* Converts a Date object, according to universal time, to a string.
	* @name toUTCString
	* @memberof Date
	* @function
	*/
	/** @ignore */
	Date.prototype._$toUTCString$_ = function(){throw "don't call me, used for reflection.";}

	/**
	* Returns the difference in milliseconds from this date object to _date parameter.
	* @return {Number}
	* @param {Date} _date
	* @return {Number}
	*/
	Date.prototype.getDifference = function(_date)
	{
		return this.getTime() - _date.getTime();
	}

	/**
	* Returns whether this date object is before _date parameter.
	* @param {Date} _date
	* @return {Boolean}
	*/
	Date.prototype.isBefore = function(_date)
	{
		return this.getTime() < _date.getTime();
	}

	/**
	* Returns whether this date object is after _date parameter.
	* @param {Date} _date
	* @return {Boolean}
	*/
	Date.prototype.isAfter = function(_date)
	{
		return this.getTime() > _date.getTime();
	}

	/**
	* Returns the number of week in the year. Ex... 29.
	* @param {Number} _minimalDaysInFirstWeek
	* @return {Number}
	*/
	// This method was adopted from log4javascript -> http://www.timdown.co.uk/log4javascript
	Date.prototype.getWeekInYear = function(_minimalDaysInFirstWeek)
	{
		if(Object.isUndefined(_minimalDaysInFirstWeek)) {
			_minimalDaysInFirstWeek = Date.DEFAULT_MINIMAL_DAYS_IN_FIRST_WEEK;
		}

		var _previousSunday = new Date(this.getTime() - (this.getDay() * Date.ONE_DAY_MILLISECONDS));
		_previousSunday = new Date(_previousSunday.getFullYear(), _previousSunday.getMonth(), _previousSunday.getDate());

		var _startOfYear = new Date(this.getFullYear(), 0, 1);

		var _numberOfSundays = _previousSunday.isBefore(_startOfYear) ?
								0 : 1 + Math.floor((_previousSunday.getTime() - _startOfYear.getTime()) / Date.ONE_WEEK_MILLISECONDS);

		var _weekInYear = _numberOfSundays;

		var _numberOfDaysInFirstWeek = 7 - _startOfYear.getDay();
		if(_numberOfDaysInFirstWeek >= _minimalDaysInFirstWeek)
		{
			_weekInYear++;
		}

		return _weekInYear;
	}

	/**
	* Returns the number of week in the month. Ex... 4.
	* @param {Number} _minimalDaysInFirstWeek
	* @return {Number}
	*/
	// This method was adopted from log4javascript -> http://www.timdown.co.uk/log4javascript
	Date.prototype.getWeekInMonth = function(_minimalDaysInFirstWeek)
	{
		if(Object.isUndefined(_minimalDaysInFirstWeek)) {
			_minimalDaysInFirstWeek = Date.DEFAULT_MINIMAL_DAYS_IN_FIRST_WEEK;
		}

		var _previousSunday = new Date(this.getTime() - (this.getDay() * Date.ONE_DAY_MILLISECONDS));
		_previousSunday = new Date(_previousSunday.getFullYear(), _previousSunday.getMonth(), _previousSunday.getDate());

		var _startOfMonth = new Date(this.getFullYear(), this.getMonth(), 1);

		var _numberOfSundays = _previousSunday.isBefore(_startOfMonth) ?
								0 : Math.floor((_previousSunday.getTime() - _startOfMonth.getTime()) / Date.ONE_WEEK_MILLISECONDS);

		var _weekInMonth = _numberOfSundays;

		var _numberOfDaysInFirstWeek = 7 - _startOfMonth.getDay();
		if(_numberOfDaysInFirstWeek >= _minimalDaysInFirstWeek)
		{
			_weekInMonth++;
		}

		return _weekInMonth;
	}

	/**
	* Returns the day in the year. Ex... 360.
	* @return {Number}
	*/
	// This method was adopted from log4javascript -> http://www.timdown.co.uk/log4javascript
	Date.prototype.getDayInYear = function()
	{
		var _startOfYear = new Date(this.getFullYear(), 0, 1);
		return 1 + Math.floor((this.getTime() - _startOfYear.getTime()) / Date.ONE_DAY_MILLISECONDS);
	}

	/**
	* Not Implemented.
	* @return {String}
	*/
	Date.prototype.getTimeZone = function()
	{
		var _timezone = "xxx";

		//var _timezoneOffset = this.getTimezoneOffset();


		return _timezone;
	}

	/**
	* Returns whether this object is equal to the specified _object.
	* @param {Object} _object
	* @return {Boolean}
	*/
	Date.prototype.equals = function(_object)
	{
		if(this === _object)
		{
			return true;
		}
		if(!this.getClass().isInstance(_object))
		{
			return false;
		}

		return this.getTime() == _object.getTime();
	}


Date.PACKAGE = "";
Date.CLASS = "Date";
Date.SUPER_CLASS = "";
Date.IMPORTS = [];
Date.INTERFACES = [];
Date.MIXINS = [];
Date.getName = function(){return Date.CLASS;}
Date.klass = new jsx.lang.Class(Date.getName());
Date.prototype.getClass = function(){return Date.klass;}
Date.WARNINGS = [];
