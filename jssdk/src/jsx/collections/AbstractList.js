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

import jsx.collections.AbstractCollection;
import jsx.collections.List;

class AbstractList extends AbstractCollection implements List
{
	/**
	* @fileOverview <code>jsx.collections.AbstractList</code> is an abstract class used as a base implementation for <code>jsx.collections.List</code> classes.
	* @example
	*/
	/**
	* @class AbstractList
	* @extends jsx.collections.AbstractCollection
	*/
	AbstractList(){}

	/**
	* Returns a list view of the entries.
	* @return {jsx.collection.List}
	*/
	abstract entryList()

	/**
	* Inserts the specified element at the specified position in this list.
	* @param {Number} _index
	* @param {Object} _object
	*/
	abstract addAt(_index, _object)

	/**
	* Returns the element at the specified position in this list.
	* @param {Number} _index
	* @return {Object}
	*/
	abstract get(_index)

	/**
	* Removes and returns the element at the specified position in this list.
	* @param {Number} _index
	* @return {Object}
	*/
	abstract removeAt(_index)

	/**
	* Replaces the element at the specified position in this list with the specified element. Returns the element previously at the specified position.
	* @param {Number} _index
	* @param {Object} _object
	* @return {Object}
	*/
	abstract set(_index, _object)

	/**
	* Returns a view of the portion of this list between fromIndex, inclusive, and toIndex, exclusive.
	* @param {Number} _fromIndex
	* @param {Number} _toIndex
	* @reutrn {jsx.collections.List}
	*/
	abstract subList(_fromIndex, _toIndex)

	/**
	* Iterate over the list of elements.
	* @param {Function} _block The function to execute for every element in the list.
	*/
	instance iterator(_block)
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
	instance add(_object)
	{
		return this.addAt(this.size(), _object);
	}

	/**
	* Inserts all of the elements in the specified collection into this list at the specified position.
	* @param {Number} _index
	* @param {jsx.collections.Collections} _collection
	*/
	instance addAllAt(_index, _collection)
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
	instance remove(_object)
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
    instance indexOf(_object)
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
    instance lastIndexOf(_object)
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
	* Returns whether this List is equal to the specified List.
	* @param {Object} _object
	* @return {Boolean}
	*/
	instance equals(_object)
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

}