
	/**
	* @fileOverview <code>jsx.collections.AbstractCollection</code> is an abstract class used as a base implementation for <code>jsx.collections.Collection</code> classes.
	* @example
	*/
	/**
	* @class AbstractCollection
	*/
	jsx.collections.AbstractCollection = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.collections.AbstractCollection.prototype.initialize = function(){}

	/**
	* Iterate over the collection of elements.
	* @param {Function} _block The function to execute for every element in the collection during iteration.
	*/
	jsx.collections.AbstractCollection.prototype.iterator = function(_block){throw 'AbstractCollection.iterator is abstract';}

	/**
	* Add an element to the end of collection. Returns whether the element was added to the collection.
	* @param {Object} _object The element added to the collection
	* @return {Boolean}
	*/
    jsx.collections.AbstractCollection.prototype.add = function(_object){throw 'AbstractCollection.add is abstract';}

	/**
	* Removes the specified object from the collection. Return whether the object was removed.
	* @param {Object} _object
	* @return {Boolean}
	*/
    jsx.collections.AbstractCollection.prototype.remove = function(_object){throw 'AbstractCollection.remove is abstract';}

	/**
	* Returns the size of the collection.
	* @return {Number}
	*/
    jsx.collections.AbstractCollection.prototype.size = function(){throw 'AbstractCollection.size is abstract';}

	/**
	* Required by the jsx.collections.Enumerable mixin. Calls <subclass>#iterator(_block) passing a {Object}value and {Number}index to the block.
	* @param {Function} _block. Parameters passed to the _block are <value>Object and <index>Number.
	*/
	jsx.collections.AbstractCollection.prototype.each = function(_block)
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
					if (e != jsx.collections.Enumerable.$continue) throw e;
				}
			});
		}
		catch(e)
		{
			if (e != jsx.collections.Enumerable.$break) throw e;
		}
	}

	/**
	* Adds all the elements in the specified collecion to the end of the collection. Returns whether the current collection was modified.
	* @param {jsx.collections.Collection} _collection
	* @return {Boolean}
	*/
    jsx.collections.AbstractCollection.prototype.addAll = function(_collection)
    {
    	var me = this;
    	var modified = false;
		_collection.each(function(_value)
		{
			if(me.add(_value))
			{
				modified = true;
			}
		});
    	return modified;
    }

	/**
	* Removes all elements in the collection.
	*/
	jsx.collections.AbstractCollection.prototype.clear = function()
	{
		var me = this;
		this.each(function(_value)
		{
			me.remove(_value);
		});
	}

	/**
	* Returns whether the specified object is contained in the collection.
	* @param {Object} _object Parameter could be null. If there is a null element in the collection, true will be returned.
	* @return {Boolean}
	*/
	jsx.collections.AbstractCollection.prototype.contains = function(_object)
	{
		var me = this;
		if(_object == null)
		{
			// check for null
			var result = false;
			this.each(function(_value)
			{
				if(_value == null)
				{
					result = true;
					me.$break();
				}
			});
			return result;
		}
		else
		{
			return this.include(_object);
		}
	}

	/**
	* Returns whether the elements in the specified collection exist in the collection.
	* @param {jsx.collections.Collection}
	* @return {Boolean}
	*/
    jsx.collections.AbstractCollection.prototype.containsAll = function(_collection)
    {
    	var me = this;
    	var result = true;
		_collection.each(function(_value)
		{
			if(!me.contains(_value))
			{
				result = false;
				me.$break();
			}
		});
    	return result;
    }

	/**
	* Returns whether the collection is empty.
	* @return {Boolean}
	*/
	jsx.collections.AbstractCollection.prototype.isEmpty = function()
	{
		return this.size() == 0;
	}

	/**
	* Removes all the elements in the specified collection from the current collection. Returns whether the current collection was modified.
	* @param {jsx.collections.Collection} _collection
	* @return {Boolean}
	*/
    jsx.collections.AbstractCollection.prototype.removeAll = function(_collection)
    {
    	var me = this;
    	var modified = false;
		_collection.each(function(_value)
		{
			if(me.remove(_value))
			{
				modified = true;
			}
		});
    	return modified;
    }

	/**
	* Removes all elements in the current collection if they are not in the specified collection. Returns whether the current collection was modified.
	* @param {Object} _collection
	* @return {Boolean}
	*/
    jsx.collections.AbstractCollection.prototype.retainAll = function(_collection)
    {
    	var me = this;
    	var modified = false;
		//TODO, not very elegant
		var tmp = [];
		this.each(function(_value)
		{
			if(!_collection.contains(_value))
			{
				tmp[tmp.length] = _value;
				modified = true;
			}
		});

		if(modified)
		{
			for(var i=0;i<tmp.length;i++)
			{
				this.remove(tmp[i]);
			}
		}

    	return modified;
    }

	/**
	* Returns a String representation of a jsx.collections.Collection.
	* @return {Stirng}
	*/
	jsx.collections.AbstractCollection.prototype.toString = function()
	{
		var me = this;
		var sb = new jsx.lang.StringBuffer();
		sb.append("[");

		this.each(function(_value, _index)
		{
			sb.append(_value);
			if(_index != (me.size() -1)){sb.append(", ");}
		});

		sb.append("]")
		return sb.toString();
	}


jsx.collections.AbstractCollection.prototype.invoke = jsx.collections.Enumerable.invoke;
jsx.collections.AbstractCollection.prototype.map = jsx.collections.Enumerable.map;
jsx.collections.AbstractCollection.prototype.detect = jsx.collections.Enumerable.detect;
jsx.collections.AbstractCollection.prototype.echo = jsx.collections.Enumerable.echo;
jsx.collections.AbstractCollection.prototype.zip = jsx.collections.Enumerable.zip;
jsx.collections.AbstractCollection.prototype.max = jsx.collections.Enumerable.max;
jsx.collections.AbstractCollection.prototype.toArray = jsx.collections.Enumerable.toArray;
jsx.collections.AbstractCollection.prototype.min = jsx.collections.Enumerable.min;
jsx.collections.AbstractCollection.prototype.convertToArray = jsx.collections.Enumerable.convertToArray;
jsx.collections.AbstractCollection.prototype.$break = jsx.collections.Enumerable.$break;
jsx.collections.AbstractCollection.prototype.sortBy = jsx.collections.Enumerable.sortBy;
jsx.collections.AbstractCollection.prototype.select = jsx.collections.Enumerable.select;
jsx.collections.AbstractCollection.prototype.inject = jsx.collections.Enumerable.inject;
jsx.collections.AbstractCollection.prototype.find = jsx.collections.Enumerable.find;
jsx.collections.AbstractCollection.prototype.collect = jsx.collections.Enumerable.collect;
jsx.collections.AbstractCollection.prototype.any = jsx.collections.Enumerable.any;
jsx.collections.AbstractCollection.prototype.entries = jsx.collections.Enumerable.entries;
jsx.collections.AbstractCollection.prototype.findAll = jsx.collections.Enumerable.findAll;
jsx.collections.AbstractCollection.prototype.grep = jsx.collections.Enumerable.grep;
jsx.collections.AbstractCollection.prototype.pluck = jsx.collections.Enumerable.pluck;
jsx.collections.AbstractCollection.prototype.$continue = jsx.collections.Enumerable.$continue;
jsx.collections.AbstractCollection.prototype.partition = jsx.collections.Enumerable.partition;
jsx.collections.AbstractCollection.prototype.reject = jsx.collections.Enumerable.reject;
jsx.collections.AbstractCollection.prototype.all = jsx.collections.Enumerable.all;
jsx.collections.AbstractCollection.prototype.member = jsx.collections.Enumerable.member;
jsx.collections.AbstractCollection.prototype.include = jsx.collections.Enumerable.include;

jsx.collections.AbstractCollection.PACKAGE = "jsx.collections";
jsx.collections.AbstractCollection.CLASS = "jsx.collections.AbstractCollection";
jsx.collections.AbstractCollection.SUPER_CLASS = "";
jsx.collections.AbstractCollection.IMPORTS = ["jsx.lang.StringBuffer","jsx.collections.Enumerable","jsx.collections.Collection"];
jsx.collections.AbstractCollection.INTERFACES = ["jsx.collections.Collection"];
jsx.collections.AbstractCollection.MIXINS = ["jsx.collections.Enumerable"];
jsx.collections.AbstractCollection.getName = function(){return jsx.collections.AbstractCollection.CLASS;}
jsx.collections.AbstractCollection.klass = new jsx.lang.Class(jsx.collections.AbstractCollection.getName());
jsx.collections.AbstractCollection.prototype.getClass = function(){return jsx.collections.AbstractCollection.klass;}
jsx.collections.AbstractCollection.WARNINGS = [];
