
	/**
	* @fileOverview <code>jsx.collections.AbstractList</code> is an abstract class used as a base implementation for <code>jsx.collections.List</code> classes.
	* @example
	*/
	/**
	* @class AbstractList
	* @extends jsx.collections.AbstractCollection
	*/
	jsx.collections.AbstractList = function(){this.initialize.apply(this, arguments);}
jsx.collections.AbstractList.prototype = new jsx.collections.AbstractCollection();
jsx.collections.AbstractList.prototype.constructor = jsx.collections.AbstractList;
jsx.collections.AbstractList.superclass = jsx.collections.AbstractCollection.prototype;

	/** @ignore */
	jsx.collections.AbstractList.prototype.initialize = function(){}

	/**
	* Returns a list view of the entries.
	* @return {jsx.collection.List}
	*/
	jsx.collections.AbstractList.prototype.entryList = function(){throw 'AbstractList.entryList is abstract';}

	/**
	* Inserts the specified element at the specified position in this list.
	* @param {Number} _index
	* @param {Object} _object
	*/
	jsx.collections.AbstractList.prototype.addAt = function(_index, _object){throw 'AbstractList.addAt is abstract';}

	/**
	* Returns the element at the specified position in this list.
	* @param {Number} _index
	* @return {Object}
	*/
	jsx.collections.AbstractList.prototype.get = function(_index){throw 'AbstractList.get is abstract';}

	/**
	* Removes and returns the element at the specified position in this list.
	* @param {Number} _index
	* @return {Object}
	*/
	jsx.collections.AbstractList.prototype.removeAt = function(_index){throw 'AbstractList.removeAt is abstract';}

	/**
	* Replaces the element at the specified position in this list with the specified element. Returns the element previously at the specified position.
	* @param {Number} _index
	* @param {Object} _object
	* @return {Object}
	*/
	jsx.collections.AbstractList.prototype.set = function(_index, _object){throw 'AbstractList.set is abstract';}

	/**
	* Returns a view of the portion of this list between fromIndex, inclusive, and toIndex, exclusive.
	* @param {Number} _fromIndex
	* @param {Number} _toIndex
	* @reutrn {jsx.collections.List}
	*/
	jsx.collections.AbstractList.prototype.subList = function(_fromIndex, _toIndex){throw 'AbstractList.subList is abstract';}

	/**
	* Iterate over the list of elements.
	* @param {Function} _block The function to execute for every element in the list.
	*/
	jsx.collections.AbstractList.prototype.iterator = function(_block)
	{
		var _entries = this.entryList();
		for(var i=0;i<this.size();i++)
		{
			_block(_entries[i]);
		}
	}

	/**
	* Appends the specified element to the end of this list. Returns whether the element was added to the list.
	* @param {Object} _object
	* @return {Boolean}
	*/
	jsx.collections.AbstractList.prototype.add = function(_object)
	{
		return this.addAt(this.size(), _object);
	}

	/**
	* Inserts all of the elements in the specified collection into this list at the specified position.
	* @param {Number} _index
	* @param {jsx.collections.Collections} _collection
	*/
	jsx.collections.AbstractList.prototype.addAllAt = function(_index, _collection)
	{
		var me = this;
    	var modified = false;
		_collection.each(function(_object, _itemIndex)
		{
			me.addAt((_index + _itemIndex), _object);
			modified = true;
		});
    	return modified;
	}

	/**
	* Removes the specified object from the collection. Return whether the object was removed.
	* @param {Object} _object
	* @return {Boolean}
	*/
	jsx.collections.AbstractList.prototype.remove = function(_object)
	{
		var index = this.indexOf(_object);
		if(index > -1)
		{
			return this.removeAt(index);
		}
		return false;
	}

	/**
	* Returns the index in this list of the first occurence of the specified element, or -1 if the list does not contain this element.
	* @param {Object} _object
	* @return {Number}
	*/
    jsx.collections.AbstractList.prototype.indexOf = function(_object)
    {
		var me = this;
		var result = -1;
		this.inject(0, function(_memo, _value, _index)
		{
			if(_object == null)
			{
				if(_value == null)
				{
					result = _index;
					me.$break();
				}
			}
			else if (_value.equals(_object))
			{
				result = _index;
				me.$break();
			}

			return _memo;
		});
		return result;
    }

	/**
	* Returns the index in this list of the last occurence of the specified element, or -1 if the list does not contain this element.
	* @param {Object} _object
	* @return {Number}
	*/
    jsx.collections.AbstractList.prototype.lastIndexOf = function(_object)
    {
		var result = -1;
		this.inject(0, function(_memo, _value, _index)
		{
			if(_object == null)
			{
				if(_value == null)
				{
					result = _index;
				}
			}
			else if (_value.equals(_object))
			{
				result = _index;
			}

			return _memo;
		});
		return result;
    }

	/**
	* Returns whether this List is equal to the specified jsx.collections.List.
	* @param {Object} _object
	* @return {Boolean}
	*/
	jsx.collections.AbstractList.prototype.equals = function(_object)
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

		// compare entries in the indexes
		for(var i=0;i<this.size();i++)
		{
			// if both element are null pass them.
			if((this.get(i) == null) && (_object.get(i) == null)) continue;

			if(!this.get(i).equals(_object.get(i)))
			{
				return false;
			}
		}

		return true;
	}


jsx.collections.AbstractList.PACKAGE = "jsx.collections";
jsx.collections.AbstractList.CLASS = "jsx.collections.AbstractList";
jsx.collections.AbstractList.SUPER_CLASS = "jsx.collections.AbstractCollection";
jsx.collections.AbstractList.IMPORTS = ["jsx.collections.AbstractCollection","jsx.collections.List"];
jsx.collections.AbstractList.INTERFACES = ["jsx.collections.List"];
jsx.collections.AbstractList.MIXINS = [];
jsx.collections.AbstractList.getName = function(){return jsx.collections.AbstractList.CLASS;}
jsx.collections.AbstractList.klass = new jsx.lang.Class(jsx.collections.AbstractList.getName());
jsx.collections.AbstractList.prototype.getClass = function(){return jsx.collections.AbstractList.klass;}
jsx.collections.AbstractList.WARNINGS = [];
