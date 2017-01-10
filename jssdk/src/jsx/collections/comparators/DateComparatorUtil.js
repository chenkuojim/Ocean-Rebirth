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

class DateComparatorUtil
{
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class DateComparatorUtil
	*/
	DateComparatorUtil(){}

	/**
	* Used by the jsx.collections.comparators.DateComparator to compare date values.
	* @param {Date} _objectA
	* @param {Date} _objectB
	* @param {Boolean} _reversal
	*/
	static compare(_objectA, _objectB, _reversal)
	{
		var _10digit = function(_date)
		{
			return _date.substr(6,4)+_date.substr(0,2)+_date.substr(3,2);
		}

		var _less10digit = function(_date)
		{
			var yr = _date.substr(6,2);
			if(Number.parseInt(yr) < 50) { yr = "20"+yr; } else { yr = "19"+yr; }
			return yr+_date.substr(0,2)+_date.substr(3,2);
		}

		var a = _objectA;
		var b = _objectB;

		// format month/day/year
		// y2k notes: two digit years less than 50 are treated as 20XX, greater than 50 are treated as 19XX

		if(a.length == 10)
		{
			a = _10digit(a);
		}
		else
		{
			a = _less10digit(a);
		}

		if(b.length == 10)
		{
			b = _10digit(b);
		}
		else
		{
			b = _less10digit(b);
		}

		return ComparatorUtil.compare(a, b, _reversal);
	}

}