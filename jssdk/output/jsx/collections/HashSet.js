
	/**
	* @fileOverview This class implements the Set interface, backed by a jsx.collections.HashMap instance.
	* @example
	*/
	/**
	* @class HashSet
	* @constructor
	* @extends jsx.collections.AbstractSet
	*/
	jsx.collections.HashSet = function(){this.initialize.apply(this, arguments);}
jsx.collections.HashSet.prototype = new jsx.collections.AbstractSet();
jsx.collections.HashSet.prototype.constructor = jsx.collections.HashSet;
jsx.collections.HashSet.superclass = jsx.collections.AbstractSet.prototype;

	/** @ignore */
	jsx.collections.HashSet.prototype.initialize = function(_collection)
	{
		this.entryItems = new jsx.collections.HashMap();

		var _present = {};

		var me = this;
		if(_collection)
		{
			_collection.each(function(_value)
			{
				me.entryItems.put(_value, _present);
			});
		}

		/** @ignore */
		this.__dummy__ = function()
		{
			return _present;
		}
	}

	/**
	* Returns a list view of the entries.
	* @return {jsx.collection.List}
	*/
	jsx.collections.HashSet.prototype.entryList = function()
	{
		return this.entryItems;
	}

	/**
	* Adds the specified element to this set if it is not already present.
	* @param {Object} _object
	* @return {Boolean}
	*/
    jsx.collections.HashSet.prototype.add = function(_object)
    {
		return (this.entryItems.put(_object, this.__dummy__()) == null);
    }

	/**
	* Removes all of the elements from this set.
	*/
    jsx.collections.HashSet.prototype.clear = function()
    {
		this.entryItems.clear();
    }

	/**
	* Returns true if this set contains the specified element.
	* @return {Boolean}
	*/
    jsx.collections.HashSet.prototype.contains = function(_object)
    {
		return this.entryItems.containsKey(_object);
    }

	/**
	* Returns true if this set contains no elements.
	* @return {Boolean}
	*/
    jsx.collections.HashSet.prototype.isEmpty = function()
    {
		return this.entryItems.isEmpty();
    }

	/**
	* Removes the specified element from this set if it is present.
	* @param {Object} _object
	* @return {Bolean}
	*/
    jsx.collections.HashSet.prototype.remove = function(_object)
    {
		return (this.entryItems.remove(_object) == this.__dummy__());
    }

	/**
	* Returns the number of elements in this set.
	* @return {Number}
	*/
    jsx.collections.HashSet.prototype.size = function()
    {
		return this.entryItems.size();
    }


jsx.collections.HashSet.PACKAGE = "jsx.collections";
jsx.collections.HashSet.CLASS = "jsx.collections.HashSet";
jsx.collections.HashSet.SUPER_CLASS = "jsx.collections.AbstractSet";
jsx.collections.HashSet.IMPORTS = ["jsx.collections.HashMap","jsx.collections.Set","jsx.collections.AbstractSet"];
jsx.collections.HashSet.INTERFACES = ["jsx.collections.Set"];
jsx.collections.HashSet.MIXINS = [];
jsx.collections.HashSet.getName = function(){return jsx.collections.HashSet.CLASS;}
jsx.collections.HashSet.klass = new jsx.lang.Class(jsx.collections.HashSet.getName());
jsx.collections.HashSet.prototype.getClass = function(){return jsx.collections.HashSet.klass;}
jsx.collections.HashSet.WARNINGS = [];
