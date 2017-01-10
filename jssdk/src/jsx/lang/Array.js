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

import jsx.collections.Enumerable;

class Array mixin Enumerable
{
	/**
	* @fileOverview Array is one of the core classes to native JavaScript. Array mixes in the jsx.collections.Enumerable class
	*  which gives Array a lot more functionalilty. See jsx.collections.Enumerable to see all the additional methods on Array.
	* @example
	*/

	/**
	* Sets or returns the number of elements in an array.
	* @name length
	* @type {Number}
	*/
	/** @ignore */
	##_$length$_ = "don't use me, used for reflection.";
	/**
	* Joins two or more arrays and returns the result.
	* @example
	["Tom", "Dick", "Harry"].concat(["Matt", "Annie", "Sam"]); -> ["Tom", "Dick", "Harry", "Matt", "Annie", "Sam"]
	* @name concat
	* @param {Array} _args One or more array objects to be joined to an array. Array#unshift(_args1, _args2,.....,_argsX) allowed.
	* @return {Array}
	* @function
	* @memberOf Array
	*/
	/** @ignore */
	instance _$concat$_(_args){throw "don't call me, used for reflection.";}
	/**
	* Puts all the elements of an array into a string. The elements are separated by a specified delimiter.
	* @example
	["Tom", "Dick", "Harry"].join(" - "); -> "Tom - Dick - Harry"
	* @name join
	* @param {String} [_sep] Specifies the separator to be used. Comma is the default separator.
	* @function
	* @memberOf Array
	*/
	/** @ignore */
	instance _$join$_(_sep){throw "don't call me, used for reflection.";}
	/**
	* Removes and returns the last element of an array.
	* @example
	["Tom", "Dick", "Harry"].pop(); -> "Harry"
	* @name pop
	* @return {Object}
	* @function
	* @memberOf Array
	*/
	/** @ignore */
	instance _$pop$_(){throw "don't call me, used for reflection.";}
	/**
	* Adds one or more elements to the end of an array and returns the new length.
	* @example
	["Tom", "Dick", "Harry"].push("Matt"); -> 4, contents = ["Tom", "Dick", "Harry", "Matt"]
	* @name push
	* @param {Object} _args One or more items. Array#push(_args1,.....,_argsX) allowed.
	* @return {Number}
	* @function
	* @memberOf Array
	*/
	/** @ignore */
	instance _$push$_(_args){throw "don't call me, used for reflection.";}
	/**
	* Reverses the order of the elements in an array.
	* @example
	["Tom", "Dick", "Harry"].reverse(); -> ["Harry", "Dick", "Tom"]
	* @name reverse
	* @function
	* @memberOf Array
	*/
	/** @ignore */
	instance _$reverse$_(){throw "don't call me, used for reflection.";}
	/**
	* Removes and returns the first element of an array.
	* @example
	["Tom", "Dick", "Harry"].shift(); -> "Tom", contents = ["Dick", "Harry"]
	* @name shift
	* @return {Object}
	* @function
	* @memberOf Array
	*/
	/** @ignore */
	instance _$shift$_(){throw "don't call me, used for reflection.";}
	/**
	* Returns selected elements from an existing array.
	* @example
	["Tom", "Dick", "Harry"].slice(1,3); -> ["Dick", "Harry"]
	* @name slice
	* @param {Number} _start
	* @param {Number} [_end]
	* @return {Array}
	* @function
	* @memberOf Array
	*/
	/** @ignore */
	instance _$slice$_(_start, _end){throw "don't call me, used for reflection.";}
	/**
	* Sorts the elements of an array.
	* @example
	["Tom", "Dick", "Harry"].sort(); -> ["Dick", "Harry", "Tom"]
	* @name sort
	* @param {Function} [_func] The block function of the sort implementation
	* @function
	* @memberOf Array
	*/
	/** @ignore */
	instance _$sort$_(_func){throw "don't call me, used for reflection.";}
	/**
	* Removes and adds new elements to an array.
	* @example
	<div>["Tom", "Dick", "Harry", "Matt", "Annie", "Sam"].splice(2, 0, "Carson"); -> contents = ["Tom", "Dick", "Carson", "Harry", "Matt", "Annie", "Sam"]</div>
	<div>["Tom", "Dick", "Harry", "Matt", "Annie", "Sam"].splice(2, 1, "Carson"); -> contents = ["Tom", "Dick", "Carson", "Matt", "Annie", "Sam"]</div>
	* @param {Number} _start Specify where to add/remove elements
	* @param {Number} _deleteCount Specify how many elements should be removed. Greater then zero.
	* @param {Object} [_args] Specify a new element to add to the array. Array#splice(_start, _deleteCount, _args1,.....,_argsX) allowed.
	* @name splice
	* @function
	* @memberOf Array
	*/
	/** @ignore */
	instance _$splice$_(_start, _deleteCount, _args){throw "don't call me, used for reflection.";}
	/**
	* Adds one or more elements to the beginning of an array and returns the new length.
	* @example
	["Tom", "Dick", "Harry"].unshift("Matt", "Annie", "Sam"); -> 6, contents = ["Tom", "Dick", "Harry", "Matt", "Annie", "Sam"]
	* @name unshift
	* @param {Object} _args1 The first element to add to the array.
	* @param {Object} [_args2] The second element to add to the array. Array#unshift(_args1, _args2,.....,_argsX) allowed.
	* @function
	* @memberOf Array
	*/
	/** @ignore */
	instance _$unshift$_(_args1, _args2){throw "don't call me, used for reflection.";}

	/**
	* Required by the <code>jsx.collections.Enumerable</code> mixin. Calls <code>Array#iterator(_block)</code> passing a value and index to the block.
	* @param {Function} _block. Parameters passed to the _block are Object and the Number.
	*/
	instance each(_block)
	{
		var me = this;
		var index = 0;
		try
		{
			this.iterator(function(value)
			{
				try
				{
					_block(value, index++);
				}
				catch(e)
				{
					if(e != Enumerable.$continue) throw e;
				}
			});
		}
		catch(e)
		{
			if(e != Enumerable.$break) throw e;
		}
	}

	/**
	* Iterates through the array, executing the _block and passing a value from Array[index] as its parameter. Used by <code>Array#each(_block)</code>.
	* @param {Function} _block. Parameter passed to the _block is the element object at the index.
	*/
	instance iterator(_block)
	{
		for(var i=0;i<this.length;i++)
		{
			_block(this[i]);
		}
	}

	/**
	* Returns the index location of the specified _object.
	* @example
	["Tom", "Dick", "Harry", "Matt", "Annie", "Sam"].indexOf("Annie"); -> 4
	* @param {Object} _object
	* @return {Number}
	*/
	instance indexOf(_object)
	{
		for(var i=0;i<this.length;i++)
		{
			if(this[i] == _object)
			{
				return i;
			}
		}
		return -1;
	}

	/**
	* Returns whether this object is equal to the specified _object.
	* @example
	["Tom", "Dick", "Harry"].equals(["Tom", "Dick", "Harry"]); -> true;
	* @param {Object} _object
	* @return {Boolean}
	*/
	instance equals(_object)
	{
		if(this === _object)
		{
			return true;
		}
		if(!this.getClass().isInstance(_object))
		{
			return false;
		}

		// compare lengths
		if(this.length != _object.length){ return false; }

		// compare entries in the indexes
		for(var i=0;i<this.length;i++)
		{
			// if both element are null pass them.
			if((this[i] == null) && (_object[i] == null)) continue;

			if(!this[i].equals(_object[i]))
			{
				return false;
			}
		}

		return true;
	}

}