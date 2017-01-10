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

class Date
{
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
	static _$parse$_(_dateString){throw "don't call me, used for reflection.";}
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
	static _$UTC$_(_year, _month, _day, _hours, _minutes, _seconds, _ms){throw "don't call me, used for reflection.";}

	/**
	* Returns the day of the month from a Date object (from 1-31).
	* @name getDate
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$getDate$_(){throw "don't call me, used for reflection.";}
	/**
	* Sets the day of the month in a Date object (from 1-31).
	* @name setDate
	* @param {Number} _date
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$setDate$_(_date){throw "don't call me, used for reflection.";}
	/**
	* Returns the day of the month from a Date object according to universal time (from 1-31).
	* @name getUTCDate
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$getUTCDate$_(){throw "don't call me, used for reflection.";}
	/**
	* Sets the day of the month in a Date object according to universal time (from 1-31).
	* @name setUTCDate
	* @param {Number} _date
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$setUTCDate$_(_date){throw "don't call me, used for reflection.";}

	/**
	* Returns the day of the week from a Date object (from 0-6).
	* @name getDay
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$getDay$_(){throw "don't call me, used for reflection.";}
	/**
	* Returns the day of the week from a Date object according to universal time (from 0-6).
	* @name getUTCDay
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$getUTCDay$_(){throw "don't call me, used for reflection.";}

	/**
	* Returns the month from a Date object (from 0-11).
	* @name getMonth
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$getMonth$_(){throw "don't call me, used for reflection.";}
	/**
	* Sets the month in a Date object (from 0-11).
	* @name setMonth
	* @param {Number} _month
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$setMonth$_(_month){throw "don't call me, used for reflection.";}
	/**
	* Returns the month from a Date object according to universal time (from 0-11).
	* @name getUTCMonth
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$getUTCMonth$_(){throw "don't call me, used for reflection.";}
	/**
	* Sets the month in a Date object according to universal time (from 0-11).
	* @name setUTCMonth
	* @param {Number} _month
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$setUTCMonth$_(_month){throw "don't call me, used for reflection.";}

	/**
	* Returns the year, as a four-digit number, from a Date object.
	* @name getFullYear
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$getFullYear$_(){throw "don't call me, used for reflection.";}
	/**
	* Sets the year in a Date object (four digits).
	* @name setFullYear
	* @param {Number} _fullYear
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$setFullYear$_(_fullYear){throw "don't call me, used for reflection.";}
	/**
	* Returns the four-digit year from a Date object according to universal time.
	* @name getUTCFullYear
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$getUTCFullYear$_(){throw "don't call me, used for reflection.";}
	/**
	* Sets the year in a Date object according to universal time (four digits).
	* @name setUTCFullYear
	* @param {Number} _fullYear
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$setUTCFullYear$_(_fullYear){throw "don't call me, used for reflection.";}

	/**
	* Returns the year, as a two-digit or a four-digit number, from a Date object. Use getFullYear() instead!
	* @name getYear
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$getYear$_(){throw "don't call me, used for reflection.";}
	/**
	* ets the year in the Date object (two or four digits). Use setFullYear() instead!
	* @name setYear
	* @param {Number} _year
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$setYear$_(_year){throw "don't call me, used for reflection.";}

	/**
	* Returns the hour of a Date object (from 0-23).
	* @name getHours
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$getHours$_(){throw "don't call me, used for reflection.";}
	/**
	* Sets the hour in a Date object (from 0-23).
	* @name setHours
	* @param {Number} _year
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$setHours$_(_hours){throw "don't call me, used for reflection.";}
	/**
	* Returns the hour of a Date object according to universal time (from 0-23).
	* @name getUTCHours
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$getUTCHours$_(){throw "don't call me, used for reflection.";}
	/**
	* Sets the hour in a Date object according to universal time (from 0-23).
	* @name setUTCHours
	* @param {Number} _hours
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$setUTCHours$_(_hours){throw "don't call me, used for reflection.";}

	/**
	* Returns the minutes of a Date object (from 0-59).
	* @name getMinutes
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$getMinutes$_(){throw "don't call me, used for reflection.";}
	/**
	* Set the minutes in a Date object (from 0-59).
	* @name setMinutes
	* @param {Number} _minutes
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$setMinutes$_(_minutes){throw "don't call me, used for reflection.";}
	/**
	* Returns the minutes of a Date object according to universal time (from 0-59).
	* @name getUTCMinutes
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$getUTCMinutes$_(){throw "don't call me, used for reflection.";}
	/**
	* Set the minutes in a Date object according to universal time (from 0-59).
	* @name setUTCMinutes
	* @param {Number} _minutes
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$setUTCMinutes$_(_minutes){throw "don't call me, used for reflection.";}

	/**
	* Returns the seconds of a Date object (from 0-59).
	* @name getSeconds
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$getSeconds$_(){throw "don't call me, used for reflection.";}
	/**
	* Sets the seconds in a Date object (from 0-59).
	* @name setSeconds
	* @param {Number} _seconds
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$setSeconds$_(_seconds){throw "don't call me, used for reflection.";}
	/**
	* Returns the seconds of a Date object according to universal time (from 0-59).
	* @name getUTCSeconds
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$getUTCSeconds$_(){throw "don't call me, used for reflection.";}
	/**
	* Set the seconds in a Date object according to universal time (from 0-59).
	* @name setUTCSeconds
	* @param {Number} _seconds
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$setUTCSeconds$_(_seconds){throw "don't call me, used for reflection.";}

	/**
	* Returns the milliseconds of a Date object (from 0-999).
	* @name getMilliseconds
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$getMilliseconds$_(){throw "don't call me, used for reflection.";}
	/**
	* Sets the milliseconds in a Date object (from 0-999).
	* @name setMilliseconds
	* @param {Number} _milliseconds
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$setMilliseconds$_(_milliseconds){throw "don't call me, used for reflection.";}
	/**
	* Returns the milliseconds of a Date object according to universal time (from 0-999).
	* @name getUTCMilliseconds
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$getUTCMilliseconds$_(){throw "don't call me, used for reflection.";}
	/**
	* Sets the milliseconds in a Date object according to universal time (from 0-999).
	* @name setUTCMilliseconds
	* @param {Number} _milliseconds
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$setUTCMilliseconds$_(_milliseconds){throw "don't call me, used for reflection.";}

	/**
	* Returns the number of milliseconds since midnight Jan 1, 1970.
	* @name getTime
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$getTime$_(){throw "don't call me, used for reflection.";}
	/**
	* Calculates a date and time by adding or subtracting a specified number of milliseconds to/from midnight January 1, 1970.
	* @name setTime
	* @param {Number} _time
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$setTime$_(_time){throw "don't call me, used for reflection.";}
	/**
	* Returns the difference in minutes between local time and Greenwich Mean Time (GMT).
	* @name getTimezoneOffset
	* @return {Number}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$getTimezoneOffset$_(){throw "don't call me, used for reflection.";}

	/**
	* Returns a string representation of the date. Ex... Fri May 09 2008.
	* @name toDateString
	* @return {String}
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$toDateString$_(){throw "don't call me, used for reflection.";}
	/**
	* Converts a Date object, according to Greenwich time, to a string. Use toUTCString() instead!
	* @name toGMTString
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$toGMTString$_(){throw "don't call me, used for reflection.";}
	/**
	* Returns a string representation of the time. Ex... 21:28:42 GMT-0400 (EDT).
	* @name toTimeString
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$toTimeString$_(){throw "don't call me, used for reflection.";}
	/**
	* Converts a Date object, according to universal time, to a string.
	* @name toUTCString
	* @memberof Date
	* @function
	*/
	/** @ignore */
	instance _$toUTCString$_(){throw "don't call me, used for reflection.";}

	/**
	* Returns the difference in milliseconds from this date object to _date parameter.
	* @return {Number}
	* @param {Date} _date
	* @return {Number}
	*/
	instance getDifference(_date)
	{
		return this.getTime() - _date.getTime();
	}

	/**
	* Returns whether this date object is before _date parameter.
	* @param {Date} _date
	* @return {Boolean}
	*/
	instance isBefore(_date)
	{
		return this.getTime() < _date.getTime();
	}

	/**
	* Returns whether this date object is after _date parameter.
	* @param {Date} _date
	* @return {Boolean}
	*/
	instance isAfter(_date)
	{
		return this.getTime() > _date.getTime();
	}

	/**
	* Returns the number of week in the year. Ex... 29.
	* @param {Number} _minimalDaysInFirstWeek
	* @return {Number}
	*/
	// This method was adopted from log4javascript -> http://www.timdown.co.uk/log4javascript
	instance getWeekInYear(_minimalDaysInFirstWeek)
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
	instance getWeekInMonth(_minimalDaysInFirstWeek)
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
	instance getDayInYear()
	{
		var _startOfYear = new Date(this.getFullYear(), 0, 1);
		return 1 + Math.floor((this.getTime() - _startOfYear.getTime()) / Date.ONE_DAY_MILLISECONDS);
	}

	/**
	* Not Implemented.
	* @return {String}
	*/
	instance getTimeZone()
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
	instance equals(_object)
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

}