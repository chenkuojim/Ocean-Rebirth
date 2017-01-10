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

class Object
{
	/**
	* @fileOverview Base Object for all Objects
	* @example
	*/

	/**
	* Pointer to the 'undefined' value in the global object.
	*/
	Object.NOT_DEF = undefined;

	/** @ignore */
	instance _$toString$_(){throw "don't call me, used for reflection.";}

	/**
	* Returns whether this object can respond to the _methodName parameter.
	* @param {String} _methodName
	* @return {Boolean}
	*/
	instance respondsTo(_methodName)
	{
		return this.getClass().getMethod(_methodName) != null;
	}

	/**
	* Returns whether the _object parameter is 'undefined'.
	* @param {Object} _object
	* @return {Boolean}
	*/
	static isUndefined(_object)
	{
		return _object == Object.NOT_DEF;
	}

	/**
	* Returns whether this object is equal to the specifiec _object.
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

		return this == _object;
	}

	/**
	* Returns the default representation of the object.
	* @return {String}
	*/
	instance toString()
	{
		return this.getClass().getName();
	}

}