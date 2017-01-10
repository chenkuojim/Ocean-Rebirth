
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
	jsx.collections.Map = function(){this.initialize.apply(this, arguments);}
jsx.collections.Map.prototype = new jsx.collections.Iterable();
jsx.collections.Map.prototype.constructor = jsx.collections.Map;
jsx.collections.Map.superclass = jsx.collections.Iterable.prototype;

	/** @ignore */
	jsx.collections.Map.prototype.initialize = function(){}

	/**
	* Clears all the keys and values in the map
	*/
	jsx.collections.Map.prototype.clear = function(){throw 'Map.clear is abstract';}
	/**
	* Returns whether the map contains the specified key.
	* @param {Object} _key
	* @return {Boolean}
	*/
	jsx.collections.Map.prototype.containsKey = function(_key){throw 'Map.containsKey is abstract';}
	/**
	* Returns whether the map contains the specified value.
	* @param {Object} _value
	* @return {Boolean}
	*/
	jsx.collections.Map.prototype.containsValue = function(_value){throw 'Map.containsValue is abstract';}
	/**
	* Returns a set view of the mappings contained in this map.
	* @return {jsx.collection.Set}
	*/
	jsx.collections.Map.prototype.entrySet = function(){throw 'Map.entrySet is abstract';}
	/**
	* Returns the value to which this map maps the specified key.
	* @param {Object} _key
	* @return {Object}
	*/
	jsx.collections.Map.prototype.get = function(_key){throw 'Map.get is abstract';}
	/**
	* Returns whether if this map contains no key-value mappings.
	* @return {Boolean}
	*/
	jsx.collections.Map.prototype.isEmpty = function(){throw 'Map.isEmpty is abstract';}
	/**
	* Returns a set view of the keys contained in this map.
	* @return {jsx.collection.Set}
	*/
	jsx.collections.Map.prototype.keySet = function(){throw 'Map.keySet is abstract';}
	/**
	* Associates the specified value with the specified key in this map. Returns previous value associated with specified key,
	*  or null  if there was no mapping for key.
	* @param {Object} _key
	* @param {Object} _value
	* @return {Object}
	*/
	jsx.collections.Map.prototype.put = function(_key, _value){throw 'Map.put is abstract';}
	/**
	* Copies all of the mappings from the specified map to this map.
	* @param {jsx.collections.Map} _map
	*/
	jsx.collections.Map.prototype.putAll = function(_map){throw 'Map.putAll is abstract';}
	/**
	* Removes and returns the mapping for this key from this map if it is present.
	* @param {Object} _key
	* @return {Object}
	*/
	jsx.collections.Map.prototype.remove = function(_key){throw 'Map.remove is abstract';}
	/**
	* Returns the number of key-value mappings in this map.
	* @return {Number}
	*/
	jsx.collections.Map.prototype.size = function(){throw 'Map.size is abstract';}
	/**
	* Returns a collection view of the values contained in this map.
	* @return {jsx.collection.Collection}
	*/
	jsx.collections.Map.prototype.values = function(){throw 'Map.values is abstract';}


jsx.collections.Map.PACKAGE = "jsx.collections";
jsx.collections.Map.CLASS = "jsx.collections.Map";
jsx.collections.Map.SUPER_CLASS = "jsx.collections.Iterable";
jsx.collections.Map.IMPORTS = ["jsx.collections.Iterable"];
jsx.collections.Map.INTERFACES = [];
jsx.collections.Map.MIXINS = [];
jsx.collections.Map.getName = function(){return jsx.collections.Map.CLASS;}
jsx.collections.Map.klass = new jsx.lang.Class(jsx.collections.Map.getName());
jsx.collections.Map.prototype.getClass = function(){return jsx.collections.Map.klass;}
jsx.collections.Map.WARNINGS = [];
