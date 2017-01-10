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

package test.jsx.collections.comparators;

import jsx.collections.comparators.CurrencyComparator;
import test.jsx.TestBase;

class CurrencyComparatorTest extends TestBase
{

   	CurrencyComparatorTest()
   	{
	}

    instance setUp()
    {
    	super.setUp();
		this.asc = new CurrencyComparator();
		this.desc = new CurrencyComparator(true);
		this.amounts = ["$2.29", "$5.19", "$4.87", "$1.32", "$3.65"];
    }

    instance tearDown()
    {
		super.tearDown();
		this.asc = null;
		this.desc = null;
		this.amounts = null;
    }

    instance testAscendingSort()
    {
		this.amounts.sort(this.asc.compare);

		this.assertTrue(this.amounts[0] == "$1.32");
		this.assertTrue(this.amounts[this.amounts.length-1] == "$5.19");

		this.assertFalse(this.amounts[0] == "$5.19");
		this.assertFalse(this.amounts[this.amounts.length-1] == "$1.32");
	}

    instance testDescendingSort()
    {
		this.amounts.sort(this.desc.compare);

		this.assertTrue(this.amounts[0] == "$5.19");
		this.assertTrue(this.amounts[this.amounts.length-1] == "$1.32");

		this.assertFalse(this.amounts[0] == "$1.32");
		this.assertFalse(this.amounts[this.amounts.length-1] == "$5.19");
	}

}
