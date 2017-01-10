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

class NumericComparatorUtil
{
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class NumericComparatorUtil
	*/
	NumericComparatorUtil(){}

	/**
	* Used by the jsx.collections.comparators.NumberComparator to compare number values.
	* @param {Number} _objectA
	* @param {Number} _objectB
	* @param {Boolean} _reversal
	*/
	static compare(_objectA, _objectB, _reversal)
	{
		var a = _objectA;
		var b = _objectB;

		if(Number.isNaN(a)) a = 0;
		if(Number.isNaN(b)) b = 0;

		return ComparatorUtil.compare(a, b, _reversal);
	}

}