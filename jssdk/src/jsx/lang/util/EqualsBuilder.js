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

package jsx.lang.util;

class EqualsBuilder
{
	/**
	* @fileOverview  Utility to test equality among various objects. Mostly used in individual <Class>#equals method to one object against another.
	* @example
	*/
	/**
	* @class EqualsBuilder
	* @constructor
	*/
	EqualsBuilder()
	{
		this.isEquals = true;
	}

	/**
	* Test two objects for equality.
	* @param {Object} _object1
	* @param {Object} _object2
	* @return {jsx.lang.util.EqualsBuilder}
	*/
	instance append(_object1, _object2)
	{
		if(!this.isEquals){ return this; }
		if(_object1 === _object2){ return this; }
		if(_object1 == null || _object2 == null)
		{
			this.isEquals = false;
		}

		if(this.isEquals)
		{
			this.isEquals = _object1.equals(_object2);
		}

		return this;
	}

	/**
	* Returns the derived equals boolean.
	* @return {Boolean}
	*/
	instance getEquals()
	{
		return this.isEquals;
	}

}
