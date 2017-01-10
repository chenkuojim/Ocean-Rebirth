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

class EnumerableMapTest extends MapTest
{

   	EnumerableMapTest()
   	{
	}

	instance testEach()
	{
		var me = this;
		var counter = 0;
		this.map.each(function(_value, _key)
		{
			counter++;
		});

		this.assertTrue(counter == 10);
	}

	instance testEachBreak()
	{
		var me = this;
		var result = null;
		this.map.each(function(_value, _key)
		{
			if(_key == "Seven")
			{
				result = _value;
				me.map.$break();
			}
		});

		this.assertTrue(result.name == "Seven");
	}

	instance testEachContinue()
	{
		var me = this;
		var result = null;
		var counter = 0;
		var counter2 = 0;
		this.map.each(function(_value, _key)
		{
			counter++;

			if(_key != "Seven")
			{
				me.map.$continue();
			}

			result = _value;
			counter2++;
		});

		this.assertTrue(result.name == "Seven");
		this.assertTrue(counter == 10);
		this.assertTrue(counter2 == 1);
	}

	instance testAll()
	{
		var result = this.map.all(function(_value, _key)
					{
						return _value.id >= 1 && _value.id <= 10;
					});

		this.assertTrue(result);

		var result = this.map.all(function(_value, _key)
					{
						return _value.id >= 1 && _value.id <= 9;
					});

		this.assertFalse(result);
	}

	instance testAny()
	{
		var result = this.map.any(function(_value, _key)
					{
						return _value.id == 5;
					});

		this.assertTrue(result);

		var result = this.map.any(function(_value, _key)
					{
						return _value.id == 11;
					});

		this.assertFalse(result);
	}

	instance testCollect()
	{
		var items = this.map.collect(function(_value, _key)
					{
						return _value.name;
					});
		this.assertTrue(items[0] == "One");
		this.assertTrue(items[1] == "Two");
		this.assertTrue(items[2] == "Three");
		this.assertTrue(items[3] == "Four");
		this.assertTrue(items[4] == "Five");
		this.assertTrue(items[5] == "Six");
		this.assertTrue(items[6] == "Seven");
		this.assertTrue(items[7] == "Eight");
		this.assertTrue(items[8] == "Nine");
		this.assertTrue(items[9] == "Ten");
		this.assertTrue(items.length == 10);

		var items = this.map.collect()
		this.assertTrue(items[0].name == "One");
		this.assertTrue(items[1].name == "Two");
		this.assertTrue(items[2].name == "Three");
		this.assertTrue(items[3].name == "Four");
		this.assertTrue(items[4].name == "Five");
		this.assertTrue(items[5].name == "Six");
		this.assertTrue(items[6].name == "Seven");
		this.assertTrue(items[7].name == "Eight");
		this.assertTrue(items[8].name == "Nine");
		this.assertTrue(items[9].name == "Ten");
		this.assertTrue(items.length == 10);
	}

	instance testDetect()
	{
		var result = this.map.detect(function(_value, _key)
					{
						return _value.name == "Eight";
					});

		this.assertTrue(result.name == "Eight");
	}

	instance testFindAll()
	{
		var items = this.map.findAll(function(_value, _key)
					{
						return _value.id >= 6 && _value.id <= 10;
					});

		this.assertTrue(items[0].name == "Six");
		this.assertTrue(items[1].name == "Seven");
		this.assertTrue(items[2].name == "Eight");
		this.assertTrue(items[3].name == "Nine");
		this.assertTrue(items[4].name == "Ten");
	}

	instance testGrep()
	{
		var items = this.map.grep(/ne/, function(_value, _key)
					{
						return _value.id;
					});

		this.assertTrue(items[0] == "1");
		this.assertTrue(items[1] == "9");
	}

	instance testInclude()
	{
		var match = this.map.get("Five");
		this.assertTrue(this.map.include(match));

		var match = {name:"Eleven"};
		this.assertFalse(this.map.include(match));
	}

	instance testInject()
	{
		var memo = this.map.inject("Zero ", function(_memo, _value, _key)
					{
						return _memo + _value.name + " ";
					});

		this.assertTrue(memo == "Zero One Two Three Four Five Six Seven Eight Nine Ten ");
	}

	instance testInvoke()
	{
		this.map.invoke("talk", "My name is ");
	}

	instance testMax()
	{
		var result = this.map.max(function(_value, _key, _value2)
					{
						if(_value.id < _value2.id)
						{
							return _value2;
						}
						return _value.id;
					});

		this.assertEquals(this.map.get("Ten"), result);
	}

	instance testMin()
	{
		var result = this.map.min(function(_value, _key)
					{
						return _value.id;
					});

		this.assertEquals(this.map.get("One"), result);
	}

	instance testPartition()
	{
		var items = this.map.partition(function(_value, _key)
					{
						if(_value.id >= 1 && _value.id <= 5)
						{
							return true;
						}

						return false
					});

		var trues = items[0];
		var falses = items[1];

		this.assertTrue(trues.length == 5);
		this.assertTrue(falses.length == 5);

		this.assertTrue(trues[0].name == "One");
		this.assertTrue(trues[1].name == "Two");
		this.assertTrue(trues[2].name == "Three");
		this.assertTrue(trues[3].name == "Four");
		this.assertTrue(trues[4].name == "Five");

		this.assertTrue(falses[0].name == "Six");
		this.assertTrue(falses[1].name == "Seven");
		this.assertTrue(falses[2].name == "Eight");
		this.assertTrue(falses[3].name == "Nine");
		this.assertTrue(falses[4].name == "Ten");
	}

	instance testPluck()
	{
		var items = this.map.pluck("name");

		this.assertTrue(items[0] == "One");
		this.assertTrue(items[1] == "Two");
		this.assertTrue(items[2] == "Three");
		this.assertTrue(items[3] == "Four");
		this.assertTrue(items[4] == "Five");
		this.assertTrue(items[5] == "Six");
		this.assertTrue(items[6] == "Seven");
		this.assertTrue(items[7] == "Eight");
		this.assertTrue(items[8] == "Nine");
		this.assertTrue(items[9] == "Ten");
	}

	instance testReject()
	{
		var items = this.map.reject(function(_value, _key)
					{
						return _value.id < 9;
					});

		this.assertTrue(items[0].name == "Nine");
		this.assertTrue(items[1].name == "Ten");
	}

	instance testSortBy()
	{
		var items = this.map.toArray();
		this.assertTrue(items[0].id == 1);

		var items2 = this.map.sortBy(function(_value, _key)
		{
			return -1 * _value.id;
		});
		this.assertTrue(items2[0].id == 10);
	}

	instance testZip()
	{
		var map1 = new HashMap();
		var map2 = new HashMap();
		var map3 = new HashMap();

		map1.put(0, this.map.get("One"));
		map1.put(1, this.map.get("Two"));
		map1.put(2, this.map.get("Three"));

		map2.put(0, this.map.get("Four"));
		map2.put(1, this.map.get("Five"));
		map2.put(2, this.map.get("Six"));

		map3.put(0, this.map.get("Seven"));
		map3.put(1, this.map.get("Eight"));
		map3.put(2, this.map.get("Nine"));

		this.assertEquals([[this.map.get("One"), this.map.get("Four"), this.map.get("Seven")],
							[this.map.get("Two"), this.map.get("Five"), this.map.get("Eight")],
							[this.map.get("Three"), this.map.get("Six"), this.map.get("Nine")]], map1.zip(map2, map3));
	}

}