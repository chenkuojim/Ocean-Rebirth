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

import jsx.lang.StringBuffer;

class ToStringBuilder
{
	/**
	* @fileOverview Utility to build a string. Mostly used in individual <Class>#toString method to build a string displaying the state of an object.
	* @example
	*/
	/**
	* @class ToStringBuilder
	* @constructor
	* @param {String} _prefix
	*/
	ToStringBuilder(_prefix)
	{
		this.str = new StringBuffer((_prefix)?_prefix:"");
	}

	/**
	* Append the specified object's toString keyed by the specified name.
	* @param {Object} _object
	* @param {String} _name
	* @return {jsx.lang.util.ToStringBuilder}
	*/
	instance append(_object, _name)
	{
		this.str.append("\n");
		this.str.append(_name);
		this.str.append(" = ");
		this.str.append(_object.toString());

		return this;
	}

	/**
	* Returns the derived string.
	* @return {String}
	*/
	instance getString()
	{
		return this.str.toString();
	}

}
