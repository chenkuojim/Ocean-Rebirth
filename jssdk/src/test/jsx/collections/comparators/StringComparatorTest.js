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

import jsx.collections.comparators.StringComparator;
import test.jsx.TestBase;

class StringComparatorTest extends TestBase
{

   	StringComparatorTest()
   	{
	}

    instance setUp()
    {
    	super.setUp();
		this.asc = new StringComparator();
		this.desc = new StringComparator(true, false);
		this.strings = ["Rick", "Mathew", "Todd", "Becky", "Annie"];
    }

    instance tearDown()
    {
		super.tearDown();
		this.asc = null;
		this.desc = null;
		this.strings = null;
    }

    instance testAscendingSort()
    {
		this.strings.sort(this.asc.compare);

		this.assertTrue("Annie" == this.strings[0]);
		this.assertTrue("Todd" == this.strings[this.strings.length-1]);
	}

    instance testDescendingSort()
    {
		this.strings.sort(this.desc.compare);

		this.assertTrue("Todd" == this.strings[0]);
		this.assertTrue("Annie" == this.strings[this.strings.length-1]);
	}
}
