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

import test.jsx.TestBase;

class EnumerableTest extends TestBase
{

   	EnumerableTest()
   	{
	}

	instance testEach()
	{
		var result = 0;
		Number(1).toArray(5).each(function(_value)
		{
			result = _value;
		});
		this.assertEquals(5, result);
	}

	instance testEachBreak()
	{
		var result = 0;
		var array = [1, 2, 3, 4, 5];
		array.each(function(_value)
		{
			if(_value == 4)
			{
				array.$break();
			}

			result = _value;
		});
		this.assertEquals(3, result);
	}

	instance testEachContinue()
	{
		var result = 0;
		var array = [1, 2, 3, 4, 5];
		array.each(function(_value)
		{
			if(_value != 4)
			{
				array.$continue();
			}

			result = _value;
		});
		this.assertEquals(4, result);
	}

	instance testAll()
	{
		this.assertTrue(["ant", "bear", "cat"].all(function(_value){return _value.length >= 3}));
		this.assertFalse(["ant", "bear", "cat"].all(function(_value){return _value.length >= 4}));
		this.assertFalse([null, Object.NOT_DEF, 99].all());
	}

	instance testAny()
	{
		this.assertTrue(["ant", "bear", "cat"].any(function(_value){return _value.length >= 3}));
		this.assertTrue(["ant", "bear", "cat"].any(function(_value){return _value.length >= 4}));
		this.assertTrue([null, Object.NOT_DEF, 99].any());
	}

	instance testCollect()
	{
		this.assertEquals([1, 4, 9, 16], [1, 2, 3, 4].collect(function(_value){return _value*_value}));
		this.assertEquals(["cat", "cat", "cat", "cat"], [1, 2, 3, 4].collect(function(_value){return "cat"}));
	}

	instance testDetect()
	{
		this.assertEquals(Object.NOT_DEF, Number(1).toArray(10).detect(function(_value){return _value % 5 == 0 && _value % 7 == 0}));
		this.assertEquals(35, Number(1).toArray(100).detect(function(_value){return _value % 5 == 0 && _value % 7 == 0}));
	}

	instance testFindAll()
	{
		this.assertEquals([3, 6, 9], Number(1).toArray(10).findAll(function(_value){return _value % 3 == 0}));
	}

	instance testGrep()
	{
		this.assertEquals(["Matthew", "Mathew", "Matt", "Mat"], ["Matthew", "Mathew", "Matt", "Mat"].grep(/Mat/));
		this.assertEquals(["Matthew", "Matt"], ["Matthew", "Mathew", "Matt", "Mat"].grep(/Matt/));
		this.assertEquals([3, 4], [1, 2, 3, 4, 5].grep(/3|4/));
	}

	instance testInclude()
	{
		this.assertTrue(["Matthew", "Mathew", "Matt", "Mat"].include("Mat"));
		this.assertTrue(["Matthew", "Mathew", "Matt", "Mat"].include("Matt"));
		this.assertFalse(["Matthew", "Mathew", "Matt", "Mat"].include("Sam"));
		this.assertTrue([1, 2, 3, 4, 5].include(3))
	}

	instance testInject()
	{
		// Sum some numbers
		this.assertEquals(45, [5, 6, 7, 8, 9, 10].inject(0, function(_memo, _value){return _memo + _value}));
		// Multiply some numbers
		this.assertEquals(151200, [5, 6, 7, 8, 9, 10].inject(1, function(_memo, _value){return _memo * _value}));
		// find the longest word
		this.assertEquals("sheep", ["cat", "sheep", "bear"].inject("", function(_memo, _value){return _memo.length > _value.length ? _memo : _value}));
		// find the length of the longest word
		this.assertEquals(5, ["cat", "sheep", "bear"].inject(0, function(_memo, _value){return _memo >= _value.length ? _memo : _value.length}));
	}

	instance testInvoke()
	{
		this.assertEquals(["1", "1-2", "1-2-3", "1-2-3-4", "1-2-3-4-5"], [[1], [1, 2], [1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5]].invoke("join", "-"));
	}

	instance testMax()
	{
		this.assertEquals("horse", ["albatross", "dog", "horse"].max());
		this.assertEquals("albatross", ["albatross", "dog", "horse"].max(function(a, _index, b){return a.length<b.length?-1:a.length>b.length?1:0}));
	}

	instance testMin()
	{
		this.assertEquals("albatross", ["albatross", "dog", "horse"].min());
		this.assertEquals("dog", ["albatross", "dog", "horse"].min(function(a, _index, b){return a.length<b.length?-1:a.length>b.length?1:0}));
	}

	instance testPartition()
	{
		this.assertEquals([[2,4,6],[1,3,5]], [1, 2, 3, 4, 5, 6].partition(function(_value){ return (_value%2 == 0) }));
	}

	instance testPluck()
	{
		this.assertEquals([1,2,3,4], [[1], [1,2], [1,2,3], [1,2,3,4]].pluck("length"));
	}

	instance testReject()
	{
		this.assertEquals([1, 2, 4, 5, 7, 8, 10], Number(1).toArray(10).reject(function(_value){return (_value%3==0)}));
	}

	instance testSortBy()
	{
		this.assertEquals(["flea", "kea", "rhea"], ["rhea", "kea", "flea"].sortBy());
		this.assertEquals([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], Number(1).toArray(10).sortBy(function(_value, _index){return -1 * _value}));
		this.assertEquals(["fig", "pear", "apple"], ["apple", "pear", "fig"].sortBy(function(_value, _index){return _value.length}));
	}

	instance testZip()
	{
		this.assertEquals([[1, 4, 7], [2, 5, 8], [3, 6, 9]], [1, 2, 3].zip([4, 5, 6], [7, 8, 9]));
		this.assertEquals([["cat", 1], ["dog", null]], ["cat", "dog"].zip([1]));
		this.assertEquals([[1], [2], [3]], [1, 2, 3].zip());
	}

}
