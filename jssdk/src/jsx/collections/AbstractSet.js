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
import jsx.collections.Set;

class AbstractSet extends AbstractCollection implements Set
{
	/**
	* @fileOverview <code>jsx.collections.AbstractSet</code> is an abstract class used as a base implementation for <code>jsx.collections.Set</code> classes.
	* @example
	*/
	/**
	* @class AbstractSet
	* @extends jsx.collections.AbstractCollection
	*/
	AbstractSet(){}

	/**
	* Returns a list view of the entries.
	* @return {jsx.collection.List}
	*/
	abstract entryList()

	/**
	* Iterate over the set of elements.
	* @param {Function} _block The function to execute for every element in the set.
	*/
	instance iterator(_block)
	{
		var keys = this.entryList().keys();
		var size = keys.size();
		for(var i=0;i<size;i++)
		{
			_block(keys.get(i));
		}
	}

	/**
	* Returns whether this Set is equal to the specified Set.
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

		return this.containsAll(_object);
	}

}