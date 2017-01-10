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

import jsx.collections.comparators.ComparatorUtil;

class StringComparatorUtil
{
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class StringComparatorUtil
	*/
	StringComparatorUtil(){}

	/**
	* Used by the jsx.collections.comparators.StringComparator to compare string values.
	* @param {String} _objectA
	* @param {String} _objectB
	* @param {Boolean} _reversal
	* @param {Boolean} _insensitiveComparator
	*/
	static compare(_objectA, _objectB, _reversal, _insensitiveComparator)
	{
		var a = _objectA;
		var b = _objectB;

		if(_insensitiveComparator)
		{
			a = a.toLowerCase();
			b = b.toLowerCase();
		}

		return ComparatorUtil.compare(a, b, _reversal);
	}

}