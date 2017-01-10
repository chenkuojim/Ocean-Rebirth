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

package jsx.lang;

class StringBuffer
{
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class StringBuffer
	* @description A cleaner way to concatenate strings.
	* @constructor
	* @param {String} _initString Initialize the buffer.
	*/
	StringBuffer(_initString)
	{
		this.str = null;
		this.current = 0;
		this.parts = [];
		this.length = 0;

		if(_initString != null)
		{
			this.append(_initString);
		}
	}

	/**
	* Appends the _appendString String to the current buffer.
	* @param {String} _appendString
	* @return StringBuffer
	*/
	instance append(_appendString)
	{
		// append the string
		this.parts[this.current++] = _appendString.toString();

		// reset the add new lengh for appended string
		this.length += _appendString.toString().length;

		// reset cache
		this.str = null;

		// return the Instance for method chaining
		return this;
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

		return this.toString() == _object.toString();
	}

	/**
	* Returns a String representation of a StringBuffer.
	* @return {String}
	*/
	instance toString()
	{
		if(this.str)
		{
			return this.str;
		}

		var newStr = this.parts.join("");
		this.parts = [newStr];
		this.current = 1;
		this.length = newStr.length;
		this.str = newStr;

		return this.str;
	}

}