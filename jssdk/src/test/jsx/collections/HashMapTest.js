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

import jsx.collections.HashMap;
import test.jsx.collections.MapTest;

class HashMapTest extends MapTest
{

   	HashMapTest()
   	{
	}

	instance testConstructorMap()
	{
		var testMap = new HashMap(this.map);

		this.assertTrue(this.map.equals(testMap));
	}

	instance testEntrySet()
	{
		var entries = this.map.entryList();
		this.assertTrue(entries.size() == 10);

		var me = this;
		entries.each(function(_entry)
		{
			me.assertTrue(_entry.value.equals(me.map.get(_entry.key)));
		});
	}

	instance testPut()
	{
		this.assertTrue(this.map.size() == 10);

		var key = "Test";
		var object = 101010101;

		this.map.put(key, object);

		this.assertTrue(this.map.size() == 11);
		this.assertTrue(this.map.get(key).equals(object));

		this.map.put(null, object);
		this.assertTrue(this.map.size() == 12);
		this.assertTrue(this.map.get(null).equals(object));
	}

}
