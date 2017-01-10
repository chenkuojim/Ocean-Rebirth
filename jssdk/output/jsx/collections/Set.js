
	/**
	* @fileOverview <code>jsx.collections.Set</code> is an Interface class. Defines the methods for base set. A set is a collection that contains no duplicate elements.
	* @example
	<pre>
		class MySet implements Set
	</pre>
	*/
	/**
	* @class Set
	* @extends jsx.collections.Collection
	*/
	jsx.collections.Set = function(){this.initialize.apply(this, arguments);}
jsx.collections.Set.prototype = new jsx.collections.Collection();
jsx.collections.Set.prototype.constructor = jsx.collections.Set;
jsx.collections.Set.superclass = jsx.collections.Collection.prototype;

	/** @ignore */
	jsx.collections.Set.prototype.initialize = function(){}

	/**
	* Adds the specified element to this set if it is not already present. Returns true if the element was not present before adding.
	* @param {Object} _object
	* @return {Boolean}
	*/
	jsx.collections.Set.prototype.add = function(_object){throw 'Set.add is abstract';}
	/**
	* Adds all of the elements in the specified collection to this set if they're not already present. Returns whether the this set was modified.
	* @param {jsx.collections.Collection} _collection
	* @return {Boolean}
	*/
	jsx.collections.Set.prototype.addAll = function(_collection){throw 'Set.addAll is abstract';}
	/**
	* Removes all elements in the collection.
	*/
	jsx.collections.Set.prototype.clear = function(){throw 'Set.clear is abstract';}
	/**
	* Returns whether the specified object is contained in the collection.
	* @param {Object} _object Parameter could be null. If there is a null element in the collection, true will be returned.
	* @return {Boolean}
	*/
	jsx.collections.Set.prototype.contains = function(_object){throw 'Set.contains is abstract';}
	/**
	* Returns whether the elements in the specified collection exist in the collection.
	* @param {jsx.collections.Collection}
	* @return {Boolean}
	*/
	jsx.collections.Set.prototype.containsAll = function(_collection){throw 'Set.containsAll is abstract';}
	/**
	* Returns whether the collection is empty.
	* @return {Boolean}
	*/
	jsx.collections.Set.prototype.isEmpty = function(){throw 'Set.isEmpty is abstract';}
	/**
	* Removes the specified object from the collection. Return whether the object was removed.
	* @param {Object} _object
	* @return {Boolean}
	*/
	jsx.collections.Set.prototype.remove = function(_object){throw 'Set.remove is abstract';}
	/**
	* Removes all the elements in the specified collection from the current collection. Returns whether the current collection was modified.
	* @param {jsx.collections.Collection} _collection
	* @return {Boolean}
	*/
	jsx.collections.Set.prototype.removeAll = function(_collection){throw 'Set.removeAll is abstract';}
	/**
	* Removes all elements in the current collection if they are not in the specified collection. Returns whether the current collection was modified.
	* @param {Object} _collection
	* @return {Boolean}
	*/
	jsx.collections.Set.prototype.retainAll = function(_collection){throw 'Set.retainAll is abstract';}
	/**
	* Returns the size of the collection.
	* @return {Number}
	*/
	jsx.collections.Set.prototype.size = function(){throw 'Set.size is abstract';}


jsx.collections.Set.PACKAGE = "jsx.collections";
jsx.collections.Set.CLASS = "jsx.collections.Set";
jsx.collections.Set.SUPER_CLASS = "jsx.collections.Collection";
jsx.collections.Set.IMPORTS = ["jsx.collections.Collection"];
jsx.collections.Set.INTERFACES = [];
jsx.collections.Set.MIXINS = [];
jsx.collections.Set.getName = function(){return jsx.collections.Set.CLASS;}
jsx.collections.Set.klass = new jsx.lang.Class(jsx.collections.Set.getName());
jsx.collections.Set.prototype.getClass = function(){return jsx.collections.Set.klass;}
jsx.collections.Set.WARNINGS = [];
