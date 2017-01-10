
	/**
	* @fileOverview Resizable-array implementation of the jsx.collections.List interface.
	* @example
	*/
	/**
	* @class ArrayList
	* @constructor
	* @extends jsx.collections.AbstractList
	*/
	jsx.collections.ArrayList = function(){this.initialize.apply(this, arguments);}
jsx.collections.ArrayList.prototype = new jsx.collections.AbstractList();
jsx.collections.ArrayList.prototype.constructor = jsx.collections.ArrayList;
jsx.collections.ArrayList.superclass = jsx.collections.AbstractList.prototype;

	/** @ignore */
	jsx.collections.ArrayList.prototype.initialize = function(_collection)
	{
		this.entryItems = [];
		if(_collection)
		{
			this.entryItems = _collection.toArray();
		}
	}

	/**
	* Returns a list view of the entries.
	* @return {jsx.collection.List}
	*/
	jsx.collections.ArrayList.prototype.entryList = function()
	{
		return this.entryItems;
	}

	/**
	* Returns the size of the list.
	* @return {Number}
	*/
    jsx.collections.ArrayList.prototype.size = function()
    {
    	return this.entryItems.length;
    }

	/**
	* Inserts the specified element at the specified position in this list.
	* @param {Number} _index
	* @param {Object} _object
	*/
	jsx.collections.ArrayList.prototype.addAt = function(_index, _object)
	{
		if(_index < 0){return false;}
		// adding at _index, removing 0 items
		this.entryItems.splice(_index, 0, _object);
		return true;
	}


	/**
	* Removes and returns the element at the specified position in this list.
	* @param {Number} _index
	* @return {Object}
	*/
	jsx.collections.ArrayList.prototype.removeAt = function(_index)
	{
		if(_index < 0){ return false; }

		var items = this.entryItems.splice(_index, 1);

		if(items.length == 0){ return false; }

		return true;
	}

	/**
	* Returns the element at the specified position in this list.
	* @param {Number} _index
	* @return {Object}
	*/
	jsx.collections.ArrayList.prototype.get = function(_index)
	{
		return this.entryItems[_index];
	}

	/**
	* Replaces the element at the specified position in this list with the specified element. Returns the element previously at the specified position.
	* @param {Number} _index
	* @param {Object} _object
	* @return {Object}
	*/
	jsx.collections.ArrayList.prototype.set = function(_index, _object)
	{
		this.entryItems[_index] = _object;
	}

	/**
	* Returns a view of the portion of this list between fromIndex, inclusive, and toIndex, exclusive.
	* @param {Number} _fromIndex
	* @param {Number} _toIndex
	* @reutrn {jsx.collections.List}
	*/
	jsx.collections.ArrayList.prototype.subList = function(_fromIndex, _toIndex)
	{
		var sublist = new jsx.collections.ArrayList();

		this.inject(0, function(_memo, _value, _index)
		{
			if(_index >= _fromIndex && _index <= _toIndex)
			{
				sublist.add(_value);
			}

			return _memo;
		});

		return sublist;
	}

	/**
	* Removes all elements in the collection.
	*/
	jsx.collections.ArrayList.prototype.clear = function()
	{
		this.entryItems.length = 0;
	}


jsx.collections.ArrayList.PACKAGE = "jsx.collections";
jsx.collections.ArrayList.CLASS = "jsx.collections.ArrayList";
jsx.collections.ArrayList.SUPER_CLASS = "jsx.collections.AbstractList";
jsx.collections.ArrayList.IMPORTS = ["jsx.collections.AbstractList","jsx.collections.List"];
jsx.collections.ArrayList.INTERFACES = ["jsx.collections.List"];
jsx.collections.ArrayList.MIXINS = [];
jsx.collections.ArrayList.getName = function(){return jsx.collections.ArrayList.CLASS;}
jsx.collections.ArrayList.klass = new jsx.lang.Class(jsx.collections.ArrayList.getName());
jsx.collections.ArrayList.prototype.getClass = function(){return jsx.collections.ArrayList.klass;}
jsx.collections.ArrayList.WARNINGS = [];
