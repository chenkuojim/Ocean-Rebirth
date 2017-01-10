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

import jsx.collections.Iterable;

class Collection extends Iterable
{
	/**
	* @fileOverview <code>jsx.collections.Collection</code> is an Interface class. Defines the methods for base collections.
	* @example
	<pre>
		class MyCollection implements Collection
	</pre>
	*/
	/**
	* @class Collection
	* @extends jsx.collections.Iterable
	*/
	Collection(){}

	/**
	* Add an element to the end of collection. Returns whether the element was added to the collection.
	* @param {Object} _object The element added to the collection
	* @return {Boolean}
	*/
	abstract add(_object)
	/**
	* Adds all the elements in the specified collecion to the end of the collection. Returns whether the current collection was modified.
	* @param {jsx.collections.Collection} _collection
	* @return {Boolean}
	*/
	abstract addAll(_collection)
	/**
	* Removes all elements in the collection.
	*/
	abstract clear()
	/**
	* Returns whether the specified object is contained in the collection.
	* @param {Object} _object Parameter could be null. If there is a null element in the collection, true will be returned.
	* @return {Boolean}
	*/
	abstract contains(_object)
	/**
	* Returns whether the elements in the specified collection exist in the collection.
	* @param {jsx.collections.Collection}
	* @return {Boolean}
	*/
	abstract containsAll(_collection)
	/**
	* Returns whether the collection is empty.
	* @return {Boolean}
	*/
	abstract isEmpty()
	/**
	* Removes the specified object from the collection. Return whether the object was removed.
	* @param {Object} _object
	* @return {Boolean}
	*/
	abstract remove(_object)
	/**
	* Removes all the elements in the specified collection from the current collection. Returns whether the current collection was modified.
	* @param {jsx.collections.Collection} _collection
	* @return {Boolean}
	*/
	abstract removeAll(_collection)
	/**
	* Removes all elements in the current collection if they are not in the specified collection.
	*  Returns whether the current collection was modified.
	* @param {Object} _collection
	* @return {Boolean}
	*/
	abstract retainAll(_collection)
	/**
	* Returns the size of the collection.
	* @return {Number}
	*/
	abstract size()

}