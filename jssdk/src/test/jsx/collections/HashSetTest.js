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

import jsx.collections.HashSet;
import test.jsx.collections.CollectionTest;
import test.jsx.collections.AbstractSetTest;

class HashSetTest extends AbstractSetTest
{

   	HashSetTest()
   	{
	}

	instance testCreation()
	{
		this.assertTrue(this.set.size() == 10);

		this.set.each(function(_value, _index)
		{
//			console.log(_value.id)
		});
	}

    instance testAdd()
    {
		this.assertTrue(this.set.size() == 10);

		this.assertTrue(this.set.add(1));
		this.assertTrue(this.set.size() == 11);

		this.assertFalse(this.set.add(1));
		this.assertTrue(this.set.size() == 11);
    }

    instance testClear()
    {
		this.assertTrue(this.set.size() == 10);
		this.set.clear();
		this.assertTrue(this.set.size() == 0);
    }

    instance testContains()
    {
		this.assertTrue(this.set.add(1));

		this.assertTrue(this.set.contains(1));

		this.assertFalse(this.set.contains("Eleven"));
    }

    instance testIsEmpty()
    {
		this.assertFalse(this.set.isEmpty());
		this.set.clear();
		this.assertTrue(this.set.isEmpty());
    }

    instance testRemove()
    {
		this.assertTrue(this.set.add(1));
		this.assertTrue(this.set.add(2));
		this.assertTrue(this.set.add(3));
		this.assertTrue(this.set.size() == 13);
		this.set.each(function(_value)
		{
//			console.log(_value)
		});
		this.assertTrue(this.set.remove(1));
		this.assertTrue(this.set.remove(2));
		this.assertTrue(this.set.remove(3));
		this.assertTrue(this.set.size() == 10);
		this.set.each(function(_value)
		{
//			console.log(_value)
		});
    }

    instance testSize()
    {
		this.assertTrue(this.set.size() == 10);
		this.set.clear();
		this.assertTrue(this.set.size() == 0);
    }

}
