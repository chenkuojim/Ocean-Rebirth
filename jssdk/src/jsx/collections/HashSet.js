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

import jsx.collections.HashMap;
import jsx.collections.Set;
import jsx.collections.AbstractSet;

class HashSet extends AbstractSet implements Set
{
	/**
	* @fileOverview This class implements the Set interface, backed by a jsx.collections.HashMap instance.
	* @example
	*/
	/**
	* @class HashSet
	* @constructor
	* @extends jsx.collections.AbstractSet
	*/
	HashSet(_collection)
	{
		this.entryItems = new HashMap();

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
	instance entryList()
	{
		return this.entryItems;
	}

	/**
	* Adds the specified element to this set if it is not already present.
	* @param {Object} _object
	* @return {Boolean}
	*/
    instance add(_object)
    {
		return (this.entryItems.put(_object, this.__dummy__()) == null);
    }

	/**
	* Removes all of the elements from this set.
	*/
    instance clear()
    {
		this.entryItems.clear();
    }

	/**
	* Returns true if this set contains the specified element.
	* @return {Boolean}
	*/
    instance contains(_object)
    {
		return this.entryItems.containsKey(_object);
    }

	/**
	* Returns true if this set contains no elements.
	* @return {Boolean}
	*/
    instance isEmpty()
    {
		return this.entryItems.isEmpty();
    }

	/**
	* Removes the specified element from this set if it is present.
	* @param {Object} _object
	* @return {Bolean}
	*/
    instance remove(_object)
    {
		return (this.entryItems.remove(_object) == this.__dummy__());
    }

	/**
	* Returns the number of elements in this set.
	* @return {Number}
	*/
    instance size()
    {
		return this.entryItems.size();
    }

}