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

import jsx.collections.comparators.NumericComparatorUtil;

class CurrencyComparatorUtil
{
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class CurrencyComparatorUtil
	*/
	CurrencyComparatorUtil(){}

	/**
	* Used by the jsx.collections.comparators.CurrencyComparator to compare currency values.
	* @param {String} _objectA
	* @param {String} _objectB
	* @param {Boolean} _reversal
	*/
	static compare(_objectA, _objectB, _reversal)
	{
		var a = _objectA;
		var b = _objectB;

		a = a.replace(/[^0-9.]/g, '');
		b = b.replace(/[^0-9.]/g, '');

		a = Number.parseFloat(a);
		b = Number.parseFloat(b);

		return NumericComparatorUtil.compare(a, b, _reversal);
	}

}