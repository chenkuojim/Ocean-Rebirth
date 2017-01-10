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

import jsx.collections.Collection;

class List extends Collection
{
	/**
	* @fileOverview <code>jsx.collections.List</code> is an Interface class. Defines the methods for base lists.
	* @example
	<pre>
		class MyList implements List
	</pre>
	*/
	/**
	* @class List
	* @extends jsx.collections.Collection
	*/
	List(){}

	/**
	* Add an element to the list at a specified index. Returns whether the element was added into the list.
	* @param {Number} _index Number must be >= 0 and < size
	* @param {Object} _object
	* @return {Boolean}
	*/
	abstract addAt(_index, _object)
	/**
	* Add all the elements in the specified collection starting at the specified index. Returns whether the current list was modified.
	* @param {Number} _index Number must be >= 0 and < the size.
	* @param {jsx.collections.Collection} _collection
	* @return {Boolean}
	*/
	abstract addAllAt(_index, _collection)
	/**
	* Returns an element from the list at the specifed index.
	* @param {Number} _index
	* @return {Object}
	*/
	abstract get(_index)
	/**
	* Returns the index of the first occurance of the specified object. If the specified object does not exist in the collection, -1 will be returned.
	* @param {Object} _object
	* @return {Number] -1 if the object was not found, otherwise the number will be >= 0 and < the size.
	*/
	abstract indexOf(_object)
	/**
	* Returns the index of the last occurance of the specified object. If the specified object does not exist in the collection, -1 will be returned.
	* @param {Object} _object
	* @return {Number] -1 if the object was not found, otherwise the number will be >= 0 and < the size.
	*/
	abstract lastIndexOf(_object)
	/**
	* Removes and returns the element from the collection at the specifed index.
	* @param {Number} _index
	* @return {Object}
	*/
	abstract removeAt(_index)
	/**
	* Assigns the specified object to the collection at the specified index. If an object is already living at the index, it is replaced.
	* @param {Number} _index
	* @param {Object} _object
	*/
	abstract set(_index, _object)
	/**
	* Returns a view of the portion of this list between the specified fromIndex, inclusive, and toIndex, exclusive.
	* @param {Number} _fromIndex
	* @param {Number} _toIndex
	*/
	abstract subList(_fromIndex, _toIndex)

}