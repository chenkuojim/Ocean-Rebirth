
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
	Array.prototype._$length$_ = "don't use me, used for reflection.";
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
	Array.prototype._$concat$_ = function(_args){throw "don't call me, used for reflection.";}
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
	Array.prototype._$join$_ = function(_sep){throw "don't call me, used for reflection.";}
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
	Array.prototype._$pop$_ = function(){throw "don't call me, used for reflection.";}
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
	Array.prototype._$push$_ = function(_args){throw "don't call me, used for reflection.";}
	/**
	* Reverses the order of the elements in an array.
	* @example
	["Tom", "Dick", "Harry"].reverse(); -> ["Harry", "Dick", "Tom"]
	* @name reverse
	* @function
	* @memberOf Array
	*/
	/** @ignore */
	Array.prototype._$reverse$_ = function(){throw "don't call me, used for reflection.";}
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
	Array.prototype._$shift$_ = function(){throw "don't call me, used for reflection.";}
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
	Array.prototype._$slice$_ = function(_start, _end){throw "don't call me, used for reflection.";}
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
	Array.prototype._$sort$_ = function(_func){throw "don't call me, used for reflection.";}
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
	Array.prototype._$splice$_ = function(_start, _deleteCount, _args){throw "don't call me, used for reflection.";}
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
	Array.prototype._$unshift$_ = function(_args1, _args2){throw "don't call me, used for reflection.";}

	/**
	* Required by the <code>jsx.collections.Enumerable</code> mixin. Calls <code>Array#iterator(_block)</code> passing a value and index to the block.
	* @param {Function} _block. Parameters passed to the _block are Object and the Number.
	*/
	Array.prototype.each = function(_block)
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
					if(e != jsx.collections.Enumerable.$continue) throw e;
				}
			});
		}
		catch(e)
		{
			if(e != jsx.collections.Enumerable.$break) throw e;
		}
	}

	/**
	* Iterates through the array, executing the _block and passing a value from Array[index] as its parameter. Used by <code>Array#each(_block)</code>.
	* @param {Function} _block. Parameter passed to the _block is the element object at the index.
	*/
	Array.prototype.iterator = function(_block)
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
	Array.prototype.indexOf = function(_object)
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
	Array.prototype.equals = function(_object)
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


Array.prototype.invoke = jsx.collections.Enumerable.invoke;
Array.prototype.map = jsx.collections.Enumerable.map;
Array.prototype.detect = jsx.collections.Enumerable.detect;
Array.prototype.echo = jsx.collections.Enumerable.echo;
Array.prototype.zip = jsx.collections.Enumerable.zip;
Array.prototype.max = jsx.collections.Enumerable.max;
Array.prototype.toArray = jsx.collections.Enumerable.toArray;
Array.prototype.min = jsx.collections.Enumerable.min;
Array.prototype.convertToArray = jsx.collections.Enumerable.convertToArray;
Array.prototype.$break = jsx.collections.Enumerable.$break;
Array.prototype.sortBy = jsx.collections.Enumerable.sortBy;
Array.prototype.select = jsx.collections.Enumerable.select;
Array.prototype.inject = jsx.collections.Enumerable.inject;
Array.prototype.find = jsx.collections.Enumerable.find;
Array.prototype.collect = jsx.collections.Enumerable.collect;
Array.prototype.any = jsx.collections.Enumerable.any;
Array.prototype.entries = jsx.collections.Enumerable.entries;
Array.prototype.findAll = jsx.collections.Enumerable.findAll;
Array.prototype.grep = jsx.collections.Enumerable.grep;
Array.prototype.pluck = jsx.collections.Enumerable.pluck;
Array.prototype.$continue = jsx.collections.Enumerable.$continue;
Array.prototype.partition = jsx.collections.Enumerable.partition;
Array.prototype.reject = jsx.collections.Enumerable.reject;
Array.prototype.all = jsx.collections.Enumerable.all;
Array.prototype.member = jsx.collections.Enumerable.member;
Array.prototype.include = jsx.collections.Enumerable.include;

Array.PACKAGE = "";
Array.CLASS = "Array";
Array.SUPER_CLASS = "";
Array.IMPORTS = ["jsx.collections.Enumerable"];
Array.INTERFACES = [];
Array.MIXINS = ["jsx.collections.Enumerable"];
Array.getName = function(){return Array.CLASS;}
Array.klass = new jsx.lang.Class(Array.getName());
Array.prototype.getClass = function(){return Array.klass;}
Array.WARNINGS = [];
