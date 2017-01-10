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

import jsx.collections.comparators.DateComparator;
import test.jsx.TestBase;

class DateComparatorTest extends TestBase
{

   	DateComparatorTest()
   	{
	}

    instance setUp()
    {
    	super.setUp();
		this.asc = new DateComparator();
		this.desc = new DateComparator(true);
		this.dates = ["12/23/06", "03/28/06", "06/30/06", "09/16/06", "01/01/06"];
    }

    instance tearDown()
    {
		super.tearDown();
		this.asc = null;
		this.desc = null;
		this.dates = null;
    }

    instance testAscendingSort()
    {
		this.dates.sort(this.asc.compare);

		this.assertTrue(this.dates[0] == "01/01/06");
		this.assertTrue(this.dates[this.dates.length-1] == "12/23/06");

		this.assertFalse(this.dates[0] == "12/23/06");
		this.assertFalse(this.dates[this.dates.length-1] == "01/01/06");
	}

    instance testDescendingSort()
    {
		this.dates.sort(this.desc.compare);

		this.assertTrue(this.dates[0] == "12/23/06");
		this.assertTrue(this.dates[this.dates.length-1] == "01/01/06");

		this.assertFalse(this.dates[0] == "01/01/06");
		this.assertFalse(this.dates[this.dates.length-1] == "12/23/06");
	}

}
