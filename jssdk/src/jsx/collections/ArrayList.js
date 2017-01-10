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

import jsx.collections.AbstractList;
import jsx.collections.List;

class ArrayList extends AbstractList implements List
{
	/**
	* @fileOverview Resizable-array implementation of the jsx.collections.List interface.
	* @example
	*/
	/**
	* @class ArrayList
	* @constructor
	* @extends jsx.collections.AbstractList
	*/
	ArrayList(_collection)
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
	instance entryList()
	{
		return this.entryItems;
	}

	/**
	* Returns the size of the list.
	* @return {Number}
	*/
    instance size()
    {
    	return this.entryItems.length;
    }

	/**
	* Inserts the specified element at the specified position in this list.
	* @param {Number} _index
	* @param {Object} _object
	*/
	instance addAt(_index, _object)
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
	instance removeAt(_index)
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
	instance get(_index)
	{
		return this.entryItems[_index];
	}

	/**
	* Replaces the element at the specified position in this list with the specified element. Returns the element previously at the specified position.
	* @param {Number} _index
	* @param {Object} _object
	* @return {Object}
	*/
	instance set(_index, _object)
	{
		this.entryItems[_index] = _object;
	}

	/**
	* Returns a view of the portion of this list between fromIndex, inclusive, and toIndex, exclusive.
	* @param {Number} _fromIndex
	* @param {Number} _toIndex
	* @reutrn {jsx.collections.List}
	*/
	instance subList(_fromIndex, _toIndex)
	{
		var sublist = new ArrayList();

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
	instance clear()
	{
		this.entryItems.length = 0;
	}

}