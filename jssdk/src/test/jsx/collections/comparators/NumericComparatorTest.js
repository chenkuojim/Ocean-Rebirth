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

import jsx.collections.comparators.NumericComparator;
import test.jsx.TestBase;

class NumericComparatorTest extends TestBase
{

   	NumericComparatorTest()
   	{
	}

    instance setUp()
    {
    	super.setUp();
		this.asc = new NumericComparator();
		this.desc = new NumericComparator(true);
		this.numbers = [5, 2, 4, 3, 1];
    }

    instance tearDown()
    {
		super.tearDown();
		this.asc = null;
		this.desc = null;
		this.numbers = null;
    }

    instance testAscendingSort()
    {
		this.numbers.sort(this.asc.compare);

		this.assertTrue(this.numbers[0] == 1);
		this.assertTrue(this.numbers[this.numbers.length-1] == 5);

		this.assertFalse(this.numbers[0] == 5);
		this.assertFalse(this.numbers[this.numbers.length-1] == 1);
	}

    instance testDescendingSort()
    {
		this.numbers.sort(this.desc.compare);

		this.assertTrue(this.numbers[0] == 5);
		this.assertTrue(this.numbers[this.numbers.length-1] == 1);

		this.assertFalse(this.numbers[0] == 1);
		this.assertFalse(this.numbers[this.numbers.length-1] == 5);
	}

}
