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

class EnumerableCollectionTest extends CollectionTest
{

   	EnumerableCollectionTest()
   	{
	}

	instance testEach()
	{
		var me = this;
		var counter = 0;
		this.list.each(function(_value, _index)
		{
			if(counter == 0){me.assertTrue(_value.name == "One");}

			if(counter == 9){me.assertTrue(_value.name == "Ten");}

			counter++;
		});

		this.assertTrue(counter == 10);
	}

	instance testEachBreak()
	{
		var me = this;
		var result = null;
		var counter = 0;
		this.list.each(function(_value, _index)
		{
			if(_value.name == "Seven")
			{
				result = _value;
				counter = _index;
				me.list.$break();
			}
		});

		this.assertTrue(result.name == "Seven");
		this.assertTrue(counter == 6);
	}

	instance testEachContinue()
	{
		var me = this;
		var result = null;
		var counter = 0;
		var counter2 = 0;
		var counter3 = 0;
		this.list.each(function(_value, _index)
		{
			counter3 = _index;

			if(_value.name != "Seven")
			{
				me.list.$continue();
			}

			result = _value;
			counter = _index;
			counter2++;
		});

		this.assertTrue(result.name == "Seven");
		this.assertTrue(counter == 6);
		this.assertTrue(counter2 == 1);
		this.assertTrue(counter3 == 9);
	}

	instance testAll()
	{
		var result = this.list.all(function(_value, _index)
					{
						return _value.id >= 1 && _value.id <= 10;
					});

		this.assertTrue(result);

		var result = this.list.all(function(_value, _index)
					{
						return _value.id >= 1 && _value.id <= 9;
					});

		this.assertFalse(result);
	}

	instance testAny()
	{
		var result = this.list.any(function(_value, _index)
					{
						return _value.id == 5;
					});

		this.assertTrue(result);

		var result = this.list.any(function(_value, _index)
					{
						return _value.id == 11;
					});

		this.assertFalse(result);
	}

	instance testCollect()
	{
		var items = this.list.collect(function(_value, _index)
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

		var items = this.list.collect()
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
		var result = this.list.detect(function(_value, _index)
					{
						return _value.name == "Eight";
					});

		this.assertTrue(result.name == "Eight");
	}

	instance testFindAll()
	{
		var items = this.list.findAll(function(_value, _index)
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
		var items = this.list.grep(/ne/, function(_value, _index)
					{
						return _value.id;
					});

		this.assertTrue(items[0] == "1");
		this.assertTrue(items[1] == "9");
	}

	instance testInclude()
	{
		var match = this.list.get(5);
		this.assertTrue(this.list.include(match));

		var match = {name:"Eleven"};
		this.assertFalse(this.list.include(match));
	}

	instance testInject()
	{
		var counter = 0;
		var counter2 = 0;
		var memo = this.list.inject("Zero ", function(_memo, _value, _index)
					{
						counter++;
						counter2 = _index;

						return _memo + _value.name + " ";
					});

		this.assertTrue(memo == "Zero One Two Three Four Five Six Seven Eight Nine Ten ");
		this.assertTrue(counter == 10);
		this.assertTrue(counter2 == 9);
	}

	instance testInvoke()
	{
		this.list.invoke("talk", "My name is ");
	}

	instance testMax()
	{
		var result = this.list.max(function(_value, _index, _value2)
					{
						if(_value.id < _value2.id)
						{
							return _value2;
						}
						return _value.id;
					});

		this.assertEquals(this.list.get(9), result);
	}

	instance testMin()
	{
		var result = this.list.min(function(_value, _index)
					{
						return _value.id;
					});

		this.assertTrue(this.list.get(0), result);
	}

	instance testPartition()
	{
		var items = this.list.partition(function(_value, _index)
					{
						if(_value.id >= 1 && _value.id <= 5)
						{
							return true;
						}

						return false;
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
		var items = this.list.pluck("name");

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
		var items = this.list.reject(function(_value, _index)
					{
						return _value.id < 9;
					});

		this.assertTrue(items[0].name == "Nine");
		this.assertTrue(items[1].name == "Ten");
	}

	instance testSortBy()
	{
		var items = this.list.toArray();
		this.assertTrue(items[0].id == 1);

		var items2 = this.list.sortBy(function(_value, _index)
		{
			return -1 * _value.id;
		});
		this.assertTrue(items2[0].id == 10);
	}

	instance testZip()
	{
		var list1 = new ArrayList();
		var list2 = new ArrayList();
		var list3 = new ArrayList();

		list1.add(this.list.get(0));
		list1.add(this.list.get(1));
		list1.add(this.list.get(2));

		list2.add(this.list.get(3));
		list2.add(this.list.get(4));
		list2.add(this.list.get(5));

		list3.add(this.list.get(6));
		list3.add(this.list.get(7));
		list3.add(this.list.get(8));

		this.assertEquals([[this.list.get(0), this.list.get(3), this.list.get(6)],
							[this.list.get(1), this.list.get(4), this.list.get(7)],
							[this.list.get(2), this.list.get(5), this.list.get(8)]], list1.zip(list2, list3));
	}

}