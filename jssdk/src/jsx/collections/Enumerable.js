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

package jsx.collections;

class Enumerable
{
	/**
	* @fileOverview <code>jsx.collections.Enumerable</code> is a Mixin class. It provides a set of helper methods for any class that implements the each method.
	* @example
	<pre>
		class MyEnumerable mixin Enumerable
	</pre>
	*/
	/**
	* @class Enumerable
	*/
	Enumerable(){}

	/**
	* Use to break out of a loop within closure.
	* @example
	<div>var result = 0;</div>
	<div>var array = [1, 2, 3, 4, 5];</div>
	<div>array.each(function(_value)</div>
	<div>{</div>
	<div>	if(_value == 4)</div>
	<div>	{</div>
	<div>		array.$break();</div>
	<div>	}</div>
	<div>	result = _value;</div>
	<div>});</div>
	<div>this.assertEquals(3, result);</div>
	*/
	static $break(){throw Enumerable.$break;}
	/**
	* Use to continue a loop within closure.
	* @example
	<div>var result = 0;</div>
	<div>var array = [1, 2, 3, 4, 5];</div>
	<div>array.each(function(_value)</div>
	<div>{</div>
	<div>	if(_value != 4)</div>
	<div>	{</div>
	<div>		array.$continue();</div>
	<div>	}</div>
	<div>	result = _value;</div>
	<div>});</div>
	<div>this.assertEquals(4, result);</div>
	*/
	static $continue(){throw Enumerable.$continue;}

	/**
	* Returns the same object as the specified object.
	* @param {Object} _object
	* @return {Object}
	*/
	static echo(_object)
	{
		return _object;
	}

	/**
	* Returns an array of items from the specified iterable.
	* @param {Object} _iterable If _iterable is null or undefined an empty array is returned. If _iterable.toArray exists, it will be used
	*  to convert. If _iterable.length exists, it is used to convert.
	* @return {Array}
	*/
	static convertToArray(_iterable)
	{
		if(!_iterable) return [];
		if(_iterable.toArray)
		{
			return _iterable.toArray();
		}
		else
		{
			var results = [];
			for (var i=0;i<_iterable.length;i++)
			{
				results[results.length] = _iterable[i];
			}
			return results;
		}
	}

	/**
	* Passes each element of a enumeration to the specifed block. Returns true if the block nevers returns false.
	* @example
	<div>["ant", "bear", "cat"].all(function(_value){return _value.length >= 3}); -> true</div>
	<div>["ant", "bear", "cat"].all(function(_value){return _value.length >= 4}); -> false</div>
	<div>[null, Object.NOT_DEF,,"", 99].all(); -> false</div>
	* @param {Function} _block If the given block is null, Enumerable#echo is used.
	* @return {Boolean}
	*/
	static all(_block)
	{
		var me = this;
		var result = true;
		this.each(function(_object1, _object2)
		{
			result = result && !!(_block || me.echo)(_object1, _object2);
			if(!result)
			{
				me.$break();
			}
		});
		return result;
	}

	/**
	* Passes each element of a enumeration to the specifed block. Returns true if the block returns at least one true.
	* @example
	<div>["ant", "bear", "cat"].any(function(_value){return _value.length >= 3}); -> true</div>
	<div>["ant", "bear", "cat"].any(function(_value){return _value.length >= 4}); -> true</div>
	<div>[null, Object.NOT_DEF,,"", 99].any(); -> true</div>
	* @param {Function} _block If the given block is null, Enumerable#echo is used.
	* @return {Boolean}
	*/
	static any(_block)
	{
		var me = this;
		var result = true;
		this.each(function(_object1, _object2)
		{
			if(result = !!(_block || me.echo)(_object1, _object2))
			{
				me.$break();
			}
		});
		return result;
	}

	/**
	* Returns a new array of results from the specifed block.
	* @example
	<div>[1, 2, 3, 4].collect(function(_value){return _value*_value}); -> [1, 4, 9, 16]</div>
	<div>[1, 2, 3, 4].collect(function(_value){return "cat"}); -> ["cat", "cat", "cat", "cat"]</div>
	* @param {Function} _block
	* @return {Array}
	*/
	static collect(_block)
	{
		var me = this;
		var results = [];
		this.each(function(_object1, _object2)
		{
			results[results.length]	= (_block || me.echo)(_object1, _object2);
		});
		return results;
	}

	/**
	* Passes each element in the enumeration to the specified block. Returns the first for which block is not false.
	* @example
	<div>Number(1).toArray(10).detect(function(_value){return _value % 5 == 0 && _value % 7 == 0}); -> undefined</div>
	<div>Number(1).toArray(100).detect(function(_value){return _value % 5 == 0 && _value % 7 == 0}); -> 35</div>
	* @param {Function} _block
	* @return {Object}
	*/
	static detect(_block)
	{
		var me = this;
		var result;
		this.each(function(_object1, _object2)
		{
			if(_block(_object1, _object2))
			{
				result = _object1;
				me.$break();
			}
		});
		return result;
	}

	/**
	* Passes each element in the enumeration to the specified block. Returns a new array of elements where the block returns true.
	* @example
	Number(1).toArray(10).findAll(function(_value){return _value % 3 == 0}); -> [3, 6, 9]
	* @param {Function} _block
	* @return {Array}
	*/
	static findAll(_block)
	{
		var results = [];
		this.each(function(_object1, _object2)
		{
			if(_block(_object1, _object2))
			{
				results[results.length] = _object1;
			}
		});
		return results;
	}

	/**
	* Passes each element in the enumeration to the specified block. The specified regexp pattern is used to test against the first object's <code>toString</code>.
	*  If the test is true, the specified block is called with parameters from the <code>each</code> method, and the results from the block
	*  are added to the array.
	* @example
	<div>["Matthew", "Mathew", "Matt", "Mat"].grep(/Mat/); -> ["Matthew", "Mathew", "Matt", "Mat"]</div>
	<div>["Matthew", "Mathew", "Matt", "Mat"].grep(/Matt/); -> ["Matthew", "Matt"]</div>
	<div>[1, 2, 3, 4, 5].grep(/3|4/); -> [3, 4]</div>
	* @param {RegExp} _pattern
	* @param {Function} _block
	* @return {Array}
	*/
	static grep(_pattern, _block)
	{
		var me = this;
		var results = [];
		this.each(function(_object1, _object2)
		{
			var stringValue = _object1.toString();
			if(stringValue.match(_pattern))
			{
				results[results.length] = (_block || me.echo)(_object1, _object2);
			}
		})
		return results;
	}

	/**
	* Returns whether the specified object exists in the enumerable.
	* @example
	<div>["Matthew", "Mathew", "Matt", "Mat"].include("Mat"); -> true</div>
	<div>["Matthew", "Mathew", "Matt", "Mat"].include("Matt"); -> true</div>
	<div>["Matthew", "Mathew", "Matt", "Mat"].include("Sam"); -> false</div>
	<div>[1, 2, 3, 4, 5].include(3); -> true</div>
	* @param {Object} _object
	* @return {Boolean}
	*/
	static include(_object)
	{
		var me = this;
		var found = false;
		this.each(function(_object1)
		{
			if(_object1 != null && _object1.equals(_object))
			{
				found = true;
				me.$break();
			}
		});
		return found;
	}

	/**
	* Combines the elements of enumeration by applying the block to an accumulator value (memo) and each element in turn.
	*  At each step, memo is set to the value returned by the block.
	* @example
	<div>[5, 6, 7, 8, 9, 10].inject(0, function(_memo, _value){return _memo + _value}); -> 45</div>
	<div>[5, 6, 7, 8, 9, 10].inject(1, function(_memo, _value){return _memo * _value}); -> 151200</div>
	<div>["cat", "sheep", "bear"].inject("", function(_memo, _value){return _memo.length > _value.length ? _memo : _value}); -> "sheep"</div>
	<div>["cat", "sheep", "bear"].inject(0, function(_memo, _value){return _memo >= _value.length ? _memo : _value.length}); -> 5</div>
	* @param {Object} _memo
	* @param {Function} _block
	* @return {Object}
	*/
	static inject(_memo, _block)
	{
		this.each(function(_object1, _object2)
		{
			_memo = _block(_memo, _object1, _object2);
		});
		return _memo;
	}

	/**
	* Invokes the specified method for each element in the enumeration. Returns an array of results from the invocation of the specified method.
	* @example
	[[1], [1, 2], [1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5]].invoke("join", "-"); -> ["1", "1-2", "1-2-3", "1-2-3-4", "1-2-3-4-5"]
	* @param {String} _method The name of the method to call on the object. Any parameter after the method name will act as parameters to the method call.
	* @return {Array}
	*/
	static invoke(_method)
	{
		var args = this.convertToArray(arguments).slice(1);
		return this.collect(function(_object1)
		{
			return _object1[_method].apply(_object1, args);
		});
	}

	/**
	* Returns the max element in the enumeration using the specifed block to return a comparable value -1, 0, 1.
	* @example
	<div>["albatross", "dog", "horse"].max(); -> "horse"</div>
	<div>["albatross", "dog", "horse"].max(function(a, _index, b){return a.length<b.length?-1:a.length>b.length?1:0}); -> "albatross"</div>
	* @param {Function} _block
	* @return {Object}
	*/
	static max(_block)
	{
		var me = this;
		var result;
		this.each(function(_object1, _object2)
		{
			if(!result)
			{
				result = _object1;
			}
			else
			{
				if(!_block)
				{
					if(_object1 >= result)
					{
						result = _object1;
					}
				}
				else
				{
					var comp = _block(_object1, _object2, result);
					if(comp >= 0)
					{
						result = _object1;
					}
				}
			}
		});
		return result;
	}

	/**
	* Returns the min element in the enumeration using the specifed block to return a comparable value -1, 0, 1.
	* @example
	<div>["albatross", "dog", "horse"].max(); -> "albatross"</div>
	<div>["albatross", "dog", "horse"].min(function(a, _index, b){return a.length<b.length?-1:a.length>b.length?1:0}); -> "dog"</div>
	* @param {Function} _block
	* @return {Object}
	*/
	static min(_block)
	{
		var me = this;
		var result;
		this.each(function(_object1, _object2)
		{
			if(!result)
			{
				result = _object1;
			}
			else
			{
				if(!_block)
				{
					if(_object1 < result)
					{
						result = _object1;
					}
				}
				else
				{
					var comp = _block(_object1, _object2, result);
					if(comp < 0)
					{
						result = _object1;
					}
				}
			}
		});
		return result;
	}

	/**
	* Uses the specified block to result in true or false and split the results.
	* @example
	[1, 2, 3, 4, 5, 6].partition(function(_value){ return (_value%2 == 0) }); -> [[2,4,6],[1,3,5]]
	* @param {Function} _block
	* @return {Array} [0] = true objects, [1] = false objects
	*/
	static partition(_block)
	{
		var me = this;
		var trues = [];
		var falses = [];
		this.each(function(_object1, _object2)
		{
			if((_block || me.echo)(_object1, _object2))
			{
				trues[trues.length] = _object1;
			}
			else
			{
				falses[falses.length] = _object1;
			}
		});
		return [trues, falses];
	}

	/**
	* Passes the specified property to each element in the enumeration and using the first object to evaluate the property. Returns a new
	*  array element containing the value of object[property].
	* @example
	[[1], [1,2], [1,2,3], [1,2,3,4]].pluck("length"); -> [1,2,3,4]
	* @param {String} _property
	* @return {Array}
	*/
	static pluck(_property)
	{
		var results = [];
		this.each(function(_object1, _object2)
		{
			results[results.length] = _object1[_property];
		});
		return results;
	}

	/**
	* Returns a new array where the specifed block results in false.
	* @example
	Number(1).toArray(10).reject(function(_value){return (_value%3==0)}); -> [1, 2, 4, 5, 7, 8, 10]
	* @param {Function} _block
	* @return {Array}
	*/
	static reject(_block)
	{
		var results = [];
		this.each(function(_object1, _object2)
		{
			if(!_block(_object1, _object2))
			{
				results[results.length] = _object1;
			}
		});
		return results;
	}

	/**
	* Returns a new array using the specified block to return a comparable value.
	* @example
	<div>["rhea", "kea", "flea"].sortBy(); -> ["flea", "kea", "rhea"]</div>
	<div>Number(1).toArray(10).sortBy(function(_value, _index){return -1 * _value}); -> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]</div>
	<div>["apple", "pear", "fig"].sortBy(function(_value, _index){return _value.length}); -> ["fig", "pear", "apple"]</div>
	* @param {Function} _block
	* @return {Array}
	*/
	static sortBy(_block)
	{
		var me = this;
		var items = this.collect(function(_object1, _object2)
					{
						return {value:_object1, criteria:(_block || me.echo)(_object1, _object2)};
					});

		items.sort(function(left, right)
		{
			var a = left.criteria;
			var b = right.criteria;
			return a < b ? -1 : a > b ? 1 : 0;
		});

		return items.pluck("value");
	}

	/**
	* Converts any arguments to arrays, then merges elements of enum with corresponding elements from each argument.
	*  This generates a sequence of enum#size n-element arrays, where n is one more that the count of arguments.
	*  If the size of any argument is less than enum#size, nil values are supplied. If a block given, it is invoked for
	*  each output array, otherwise an array of arrays is returned.
	* @example
	<div>[1, 2, 3].zip([4, 5, 6], [7, 8, 9]); -> [[1, 4, 7], [2, 5, 8], [3, 6, 9]]</div>
	<div>["cat", "dog"].zip([1]); -> [["cat", 1], ["dog", null]]</div>
	<div>[1, 2, 3].zip(); -> [[1], [2], [3]]</div>
	* @param {Function} _block
	* @return {Array}
	*/
	static zip()
	{
		var _block = this.echo;
		var args = this.convertToArray(arguments);

		// see if we have a transform block
		var last = args[args.length-1];
		if(typeof last == "function")
		{
			_block = args.pop();
		}

		var collections = [this].concat(args).map(this.convertToArray);

		return this.map(function(_object1, _object2)
						{
							return _block(collections.pluck(_object2));
						});
	}

	/**
	* Calls Enumerable.collect.
	*/
	static toArray(){return this.collect();}
	/**
	* Calls Enumerable.collect.
	*/
	static entries(){return this.collect();}
	/**
	* Calls Enumerable.collect.
	*/
	static map(_block){return this.collect(_block);}
	/**
	* Calls Enumerable.detect.
	*/
	static find(_block){return this.detect(_block);}
	/**
	* Calls Enumerable.include.
	*/
	static member(_object){return this.include(_object);}
	/**
	* Calls Enumerable.findAll.
	*/
	static select(_block){return this.findAll(_block);}

}