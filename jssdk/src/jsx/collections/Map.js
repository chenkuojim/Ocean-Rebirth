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

class Map extends Iterable
{
	/**
	* @fileOverview <code>jsx.collections.Map</code> is an Interface class. Defines the methods for base map. A map is an object that maps keys to values.
	* @example
	<pre>
		class MyMap implements Map
	</pre>
	*/
	/**
	* @class Map
	* @extends jsx.collections.Iterable
	*/
	Map(){}

	/**
	* Clears all the keys and values in the map
	*/
	abstract clear()
	/**
	* Returns whether the map contains the specified key.
	* @param {Object} _key
	* @return {Boolean}
	*/
	abstract containsKey(_key)
	/**
	* Returns whether the map contains the specified value.
	* @param {Object} _value
	* @return {Boolean}
	*/
	abstract containsValue(_value)
	/**
	* Returns a set view of the mappings contained in this map.
	* @return {jsx.collection.Set}
	*/
	abstract entrySet()
	/**
	* Returns the value to which this map maps the specified key.
	* @param {Object} _key
	* @return {Object}
	*/
	abstract get(_key)
	/**
	* Returns whether if this map contains no key-value mappings.
	* @return {Boolean}
	*/
	abstract isEmpty()
	/**
	* Returns a set view of the keys contained in this map.
	* @return {jsx.collection.Set}
	*/
	abstract keySet()
	/**
	* Associates the specified value with the specified key in this map. Returns previous value associated with specified key,
	*  or null  if there was no mapping for key.
	* @param {Object} _key
	* @param {Object} _value
	* @return {Object}
	*/
	abstract put(_key, _value)
	/**
	* Copies all of the mappings from the specified map to this map.
	* @param {jsx.collections.Map} _map
	*/
	abstract putAll(_map)
	/**
	* Removes and returns the mapping for this key from this map if it is present.
	* @param {Object} _key
	* @return {Object}
	*/
	abstract remove(_key)
	/**
	* Returns the number of key-value mappings in this map.
	* @return {Number}
	*/
	abstract size()
	/**
	* Returns a collection view of the values contained in this map.
	* @return {jsx.collection.Collection}
	*/
	abstract values()

}