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

class AbstractCollectionTest extends CollectionTest
{

   	AbstractCollectionTest()
   	{
	}

	instance testAddAll()
	{
		this.assertTrue(this.list.size() == 10);

		var newList = new ArrayList();
		newList.add(5);
		newList.add(4);
		newList.add(3);

		this.assertTrue(this.list.addAll(newList) == true);
		this.assertTrue(this.list.size() == 13);
	}

	instance testClear()
	{
		this.assertTrue(this.list.size() == 10);
		this.list.clear();
		this.assertTrue(this.list.size() == 0);
	}

	instance testContains()
	{
		this.assertFalse(this.list.contains(null));
		this.list.add(null);
		this.assertTrue(this.list.contains(null));

		this.assertFalse(this.list.contains(1000));
		this.list.add(1000)
		this.assertTrue(this.list.contains(1000));
	}

	instance testContainsAll()
	{
		var newList = new ArrayList();
		newList.add(this.list.get(0));
		newList.add(this.list.get(1));
		newList.add(this.list.get(2));

		this.assertTrue(this.list.containsAll(newList));

		newList.add(1000);

		this.assertFalse(this.list.containsAll(newList));

		this.list.add(1000);

		this.assertTrue(this.list.containsAll(newList));
	}

	instance testIsEmpty()
	{
		var newList = new ArrayList();

		this.assertTrue(newList.isEmpty());

		newList.add(this.list.get(0));
		newList.add(this.list.get(1));
		newList.add(this.list.get(2));

		this.assertFalse(newList.isEmpty());
	}

	instance testRemoveAll()
	{
		var newList = new ArrayList();

		newList.add(1000);
		this.assertFalse(this.list.removeAll(newList));
		this.assertTrue(this.list.size() == 10);

		newList.clear();

		newList.add(this.list.get(5));
		newList.add(this.list.get(9));
		newList.add(this.list.get(2));
		this.assertTrue(this.list.removeAll(newList));
		this.assertTrue(this.list.size() == 7);
	}

	instance testRetainAllNoFind()
	{
		var newList = new ArrayList();

		newList.add(1000);
		this.assertTrue(this.list.retainAll(newList));
		this.assertTrue(this.list.size() == 0);
	}

	instance testRetainAllFind()
	{
		var newList = new ArrayList();

		newList.add(this.list.get(5));
		newList.add(this.list.get(9));
		newList.add(this.list.get(2));
		this.assertTrue(this.list.retainAll(newList));
		this.assertTrue(this.list.size() == 3);
	}

	instance testToString()
	{
		this.assertTrue(!"".equals(this.list.toString()));
	}

}
