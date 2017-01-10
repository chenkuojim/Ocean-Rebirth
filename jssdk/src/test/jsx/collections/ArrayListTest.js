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

class ArrayListTest extends CollectionTest
{

   	ArrayListTest()
   	{
	}

	instance testConstructor()
	{
		var newList = new ArrayList(this.list);

		this.assertTrue(newList.size() == this.list.size());

		var size = newList.size();
		for(var i=0;i<size;i++)
		{
			this.assertTrue(newList.get(i).equals(this.list.get(i)));
			this.assertTrue(newList.get(i) == (this.list.get(i)));
			this.assertTrue(newList.get(i) === (this.list.get(i)));
		}

		var newList2 = new ArrayList();
		this.assertTrue(newList2.size() == 0);
	}

	instance testSize()
	{
		this.assertTrue(this.list.size() == 10);
		this.assertTrue(new ArrayList().size() == 0);
	}

	instance testAdd()
	{
		this.assertTrue(this.list.add("Adding Item"));
		this.assertTrue(this.list.add(null));
	}

	instance testAddAt()
	{
		var _object = "Adding at index 5";
		this.list.addAt(5, _object);
		this.assertTrue(this.list.get(5).equals(_object));

		this.list.addAt(0, null);
		this.assertTrue(this.list.get(0) == null);
	}

	instance testAddAllAt()
	{
		var newCollection = new ArrayList();
		newCollection.add(1);
		newCollection.add(2);
		newCollection.add(3);
		newCollection.add(4);
		newCollection.add(5);

		var beforeSize = this.list.size();

		this.assertTrue(this.list.addAllAt(3, newCollection));

		this.assertTrue(this.list.size() == (beforeSize + newCollection.size()));
		this.assertTrue(this.list.get(3) == 1);
		this.assertTrue(this.list.get(4) == 2);
		this.assertTrue(this.list.get(5) == 3);
		this.assertTrue(this.list.get(6) == 4);
		this.assertTrue(this.list.get(7) == 5);
	}

	instance testRemove()
	{
		var testObject = this.list.get(4);

		this.assertTrue(this.list.get(4).equals(testObject));
		this.assertTrue(this.list.remove(testObject));
		this.assertTrue(this.list.size() == 9);
		this.assertFalse(this.list.get(4).equals(testObject));
		this.assertFalse(this.list.remove("not found"));
		this.assertFalse(this.list.remove(null));
	}

	instance testRemoveAt()
	{
		var testObject = this.list.get(4);

		this.assertTrue(this.list.get(4).equals(testObject));
		this.assertTrue(this.list.removeAt(4));
		this.assertTrue(this.list.size() == 9);
		this.assertFalse(this.list.get(4).equals(testObject));

		this.list.add(null);

		this.assertTrue(this.list.removeAt(this.list.indexOf(null)));

		this.assertFalse(this.list.removeAt(100));
	}

	instance testGet()
	{
		var testObject1 = this.list.get(0);
		var testObject2 = this.list.get(1);
		var testObject3 = this.list.get(2);
		var testObject4 = this.list.get(3);
		var testObject5 = this.list.get(4);
		var testObject6 = this.list.get(5);
		var testObject7 = this.list.get(6);
		var testObject8 = this.list.get(7);
		var testObject9 = this.list.get(8);
		var testObject10 = this.list.get(9);

		this.assertTrue(testObject1.equals(this.list.get(0)));
		this.assertTrue(testObject2.equals(this.list.get(1)));
		this.assertTrue(testObject3.equals(this.list.get(2)));
		this.assertTrue(testObject4.equals(this.list.get(3)));
		this.assertTrue(testObject5.equals(this.list.get(4)));
		this.assertTrue(testObject6.equals(this.list.get(5)));
		this.assertTrue(testObject7.equals(this.list.get(6)));
		this.assertTrue(testObject8.equals(this.list.get(7)));
		this.assertTrue(testObject9.equals(this.list.get(8)));
		this.assertTrue(testObject10.equals(this.list.get(9)));
	}

	instance testSet()
	{
		var testObject1 = this.list.get(0);
		var testObject2 = this.list.get(1);
		var testObject3 = this.list.get(2);
		var testObject4 = this.list.get(3);
		var testObject5 = this.list.get(4);
		var testObject6 = this.list.get(5);
		var testObject7 = this.list.get(6);
		var testObject8 = this.list.get(7);
		var testObject9 = this.list.get(8);
		var testObject10 = this.list.get(9);

		this.list.set(0, testObject10);
		this.list.set(1, testObject9);
		this.list.set(2, testObject8);
		this.list.set(3, testObject7);
		this.list.set(4, testObject6);
		this.list.set(5, testObject5);
		this.list.set(6, testObject4);
		this.list.set(7, testObject3);
		this.list.set(8, testObject2);
		this.list.set(9, testObject1);

		this.assertTrue(testObject1.equals(this.list.get(9)));
		this.assertTrue(testObject2.equals(this.list.get(8)));
		this.assertTrue(testObject3.equals(this.list.get(7)));
		this.assertTrue(testObject4.equals(this.list.get(6)));
		this.assertTrue(testObject5.equals(this.list.get(5)));
		this.assertTrue(testObject6.equals(this.list.get(4)));
		this.assertTrue(testObject7.equals(this.list.get(3)));
		this.assertTrue(testObject8.equals(this.list.get(2)));
		this.assertTrue(testObject9.equals(this.list.get(1)));
		this.assertTrue(testObject10.equals(this.list.get(0)));
	}

	instance testSubList()
	{
		var testObject1 = this.list.get(0);
		var testObject2 = this.list.get(1);
		var testObject3 = this.list.get(2);
		var testObject4 = this.list.get(3);
		var testObject5 = this.list.get(4);
		var testObject6 = this.list.get(5);
		var testObject7 = this.list.get(6);
		var testObject8 = this.list.get(7);
		var testObject9 = this.list.get(8);
		var testObject10 = this.list.get(9);

		var newList = this.list.subList(3, 8);

		this.assertTrue(newList.size() == 6);

		this.assertFalse(newList.indexOf(testObject1) > -1);
		this.assertFalse(newList.indexOf(testObject2) > -1);
		this.assertFalse(newList.indexOf(testObject3) > -1);

		this.assertTrue(newList.indexOf(testObject4) > -1);
		this.assertTrue(newList.indexOf(testObject5) > -1);
		this.assertTrue(newList.indexOf(testObject6) > -1);
		this.assertTrue(newList.indexOf(testObject8) > -1);
		this.assertTrue(newList.indexOf(testObject8) > -1);
		this.assertTrue(newList.indexOf(testObject9) > -1);

		this.assertFalse(newList.indexOf(testObject10) > -1);
	}

	instance testClear()
	{
		this.assertTrue(this.list.size() == 10);
		this.list.clear();
		this.assertTrue(this.list.size() == 0);
	}

}
