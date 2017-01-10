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

package test.jsx.collections;

import jsx.collections.ArrayList;
import test.jsx.collections.CollectionTest;

class AbstractListTest extends CollectionTest
{

   	AbstractListTest()
   	{
	}

	instance testIndexOf()
	{
		var match = this.list.get(6);

		var index = this.list.indexOf(match);

		this.assertTrue(index == 6)

		this.assertTrue(this.list.indexOf(23422) == -1);
	}

	instance testLastIndexOf()
	{
		var match = this.list.get(4);

		this.list.add(match);

		var index = this.list.lastIndexOf(match);

		this.assertTrue(index == 10)

		this.assertTrue(this.list.lastIndexOf(23422) == -1);
	}

	instance testEquals()
	{
		var newList = new ArrayList(this.list);

		this.assertTrue(this.list.equals(newList));

		var hold = newList.get(2);
		newList.set(2, newList.get(3));
		this.assertFalse(this.list.equals(newList));

		newList.set(2, hold);
		this.assertTrue(this.list.equals(newList));
		this.assertTrue(this.list.size() == newList.size());

		newList.removeAt(3);
		this.assertFalse(this.list.size() == newList.size());
		this.assertFalse(this.list.equals(newList));
	}

}
