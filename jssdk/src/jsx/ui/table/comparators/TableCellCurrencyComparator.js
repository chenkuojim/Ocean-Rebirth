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

package jsx.ui.table.comparators;

import jsx.dom.*;
import jsx.collections.comparators.CurrencyComparatorUtil;

class TableCellCurrencyComparator
{

	TableCellCurrencyComparator(aColumn, aReversal)
	{
		this.compare = function(aObjectA, aObjectB)
		{
			var a = Element.getInnerText(aObjectA.cells[aColumn]);
			var b = Element.getInnerText(aObjectB.cells[aColumn]);

			return CurrencyComparatorUtil.compare(a, b, aReversal);
		}
	}

}
