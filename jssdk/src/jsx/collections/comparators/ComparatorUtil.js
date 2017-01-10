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

package jsx.collections.comparators;

class ComparatorUtil
{
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class ComparatorUtil
	*/
	ComparatorUtil(){}

	/**
	* Used as a base compare method to compare two objects.
	* @param {Object} _objectA
	* @param {Object} _objectB
	* @param {Boolean} _reversal
	*/
	static compare(_objectA, _objectB, _reversal)
	{
		var a = _objectA;
		var b = _objectB;

		var comp;

		if(a < b) comp = -1;
		if(a == b) comp = 0;
		if(a > b) comp = 1;

		if(_reversal)
		{
			return -1 * comp;
		}

		return comp;
	}

}