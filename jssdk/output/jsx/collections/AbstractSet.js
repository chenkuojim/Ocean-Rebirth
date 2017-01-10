
	/**
	* @fileOverview <code>jsx.collections.AbstractSet</code> is an abstract class used as a base implementation for <code>jsx.collections.Set</code> classes.
	* @example
	*/
	/**
	* @class AbstractSet
	* @extends jsx.collections.AbstractCollection
	*/
	jsx.collections.AbstractSet = function(){this.initialize.apply(this, arguments);}
jsx.collections.AbstractSet.prototype = new jsx.collections.AbstractCollection();
jsx.collections.AbstractSet.prototype.constructor = jsx.collections.AbstractSet;
jsx.collections.AbstractSet.superclass = jsx.collections.AbstractCollection.prototype;

	/** @ignore */
	jsx.collections.AbstractSet.prototype.initialize = function(){}

	/**
	* Returns a list view of the entries.
	* @return {jsx.collection.List}
	*/
	jsx.collections.AbstractSet.prototype.entryList = function(){throw 'AbstractSet.entryList is abstract';}

	/**
	* Iterate over the set of elements.
	* @param {Function} _block The function to execute for every element in the set.
	*/
	jsx.collections.AbstractSet.prototype.iterator = function(_block)
	{
		var keys = this.entryList().keys();
		var size = keys.size();
		for(var i=0;i<size;i++)
		{
			_block(keys.get(i));
		}
	}

	/**
	* Returns whether this Set is equal to the specified jsx.collections.Set.
	* @param {Object} _object
	* @return {Boolean}
	*/
	jsx.collections.AbstractSet.prototype.equals = function(_object)
	{
		if (this === _object)
		{
			return true;
		}
		if(!this.getClass().isInstance(_object))
		{
			return false;
		}

		// compare lengths
		if(this.size() != _object.size()){ return false; }

		return this.containsAll(_object);
	}


jsx.collections.AbstractSet.PACKAGE = "jsx.collections";
jsx.collections.AbstractSet.CLASS = "jsx.collections.AbstractSet";
jsx.collections.AbstractSet.SUPER_CLASS = "jsx.collections.AbstractCollection";
jsx.collections.AbstractSet.IMPORTS = ["jsx.collections.AbstractCollection","jsx.collections.Set"];
jsx.collections.AbstractSet.INTERFACES = ["jsx.collections.Set"];
jsx.collections.AbstractSet.MIXINS = [];
jsx.collections.AbstractSet.getName = function(){return jsx.collections.AbstractSet.CLASS;}
jsx.collections.AbstractSet.klass = new jsx.lang.Class(jsx.collections.AbstractSet.getName());
jsx.collections.AbstractSet.prototype.getClass = function(){return jsx.collections.AbstractSet.klass;}
jsx.collections.AbstractSet.WARNINGS = [];
