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

class AbstractMapTest extends MapTest
{

   	AbstractMapTest()
   	{
	}

	instance testRemove()
	{
		this.assertTrue(this.map.size() == 10);
		this.map.remove("One");
		this.assertTrue(this.map.size() == 9);
		this.map.remove("Two");
		this.assertTrue(this.map.size() == 8);
		this.map.remove("Three");
		this.assertTrue(this.map.size() == 7);
		this.map.remove("Four");
		this.assertTrue(this.map.size() == 6);
		this.map.remove("Five");
		this.assertTrue(this.map.size() == 5);
		this.map.remove("Six");
		this.assertTrue(this.map.size() == 4);
		this.map.remove("Seven");
		this.assertTrue(this.map.size() == 3);
		this.map.remove("Eight");
		this.assertTrue(this.map.size() == 2);
		this.map.remove("Nine");
		this.assertTrue(this.map.size() == 1);
		this.map.remove("Ten");
		this.assertTrue(this.map.size() == 0);
	}

	instance testPutAll()
	{
		var key1 = "Annie";
		var key2 = "Matt";
		var key3 = "Sam";

		var newMap = new HashMap();
		newMap.put(key1, 28);
		newMap.put(key2, 30);
		newMap.put(key3, 1);

		this.assertTrue(this.map.size() == 10);

		this.map.putAll(newMap);

		this.assertTrue(this.map.size() == 13);

		this.assertTrue(this.map.get(key1).equals(newMap.get(key1)));
		this.assertTrue(this.map.get(key2).equals(newMap.get(key2)));
		this.assertTrue(this.map.get(key3).equals(newMap.get(key3)));
	}

	instance testClear()
	{
		this.assertTrue(this.map.size() == 10);
		this.map.clear();
		this.assertTrue(this.map.size() == 0);
	}

	instance testGet()
	{
		this.map.put(null, 101010101);

		this.assertTrue(this.map.get(null) != null);
		this.assertTrue(this.map.get("One") != null);
		this.assertTrue(this.map.get("Two") != null);
		this.assertTrue(this.map.get("Three") != null);
		this.assertTrue(this.map.get("Four") != null);
		this.assertTrue(this.map.get("Five") != null);
		this.assertTrue(this.map.get("Six") != null);
		this.assertTrue(this.map.get("Seven") != null);
		this.assertTrue(this.map.get("Eight") != null);
		this.assertTrue(this.map.get("Nine") != null);
		this.assertTrue(this.map.get("Ten") != null);

		this.assertTrue(this.map.get("Eleven") == null);
	}

	instance testKeySet()
	{
		var keys = this.map.keys();
		this.assertTrue(keys.size() == 10);

		this.assertTrue(keys.contains("One"));
		this.assertTrue(keys.contains("Two"));
		this.assertTrue(keys.contains("Three"));
		this.assertTrue(keys.contains("Four"));
		this.assertTrue(keys.contains("Five"));
		this.assertTrue(keys.contains("Six"));
		this.assertTrue(keys.contains("Seven"));
		this.assertTrue(keys.contains("Eight"));
		this.assertTrue(keys.contains("Nine"));
		this.assertTrue(keys.contains("Ten"));

		this.assertFalse(keys.contains("Eleven"));
	}

	instance testValues()
	{
		var values = this.map.values();
		this.assertTrue(values.size() == 10);
	}

	instance testContainsKey()
	{
		var me = this;
		this.map.keys().each(function(_value)
		{
			me.assertTrue(me.map.containsKey(_value));
		});

		this.assertFalse(this.map.containsKey("Eleven"));
	}

	instance testContainsValue()
	{
		var me = this;
		this.map.values().each(function(_value)
		{
			me.assertTrue(me.map.containsValue(_value));
		});
	}

	instance testIsEmpty()
	{
		this.assertFalse(this.map.isEmpty());
		this.map.clear();
		this.assertTrue(this.map.isEmpty());
	}

	instance testSize()
	{
		this.assertTrue(this.map.size() == 10);
		this.map.clear();
		this.assertTrue(this.map.size() == 0);
	}

	instance testEquals()
	{
		this.assertTrue(this.map.equals(this.map));

		var newMap = new HashMap();

		this.map.each(function(_value, _key)
		{
			newMap.put(_key, _value);
		});

		this.assertTrue(this.map.equals(newMap));

		var temp = newMap.get("Ten");
		newMap.remove("Ten");

		this.assertFalse(this.map.equals(newMap));

		newMap.put("Ten", this.map.get("One"));

		this.assertFalse(this.map.equals(newMap));
	}

}
