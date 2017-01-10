
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
	jsx.collections.Collection = function(){this.initialize.apply(this, arguments);}
jsx.collections.Collection.prototype = new jsx.collections.Iterable();
jsx.collections.Collection.prototype.constructor = jsx.collections.Collection;
jsx.collections.Collection.superclass = jsx.collections.Iterable.prototype;

	/** @ignore */
	jsx.collections.Collection.prototype.initialize = function(){}

	/**
	* Add an element to the end of collection. Returns whether the element was added to the collection.
	* @param {Object} _object The element added to the collection
	* @return {Boolean}
	*/
	jsx.collections.Collection.prototype.add = function(_object){throw 'Collection.add is abstract';}
	/**
	* Adds all the elements in the specified collecion to the end of the collection. Returns whether the current collection was modified.
	* @param {jsx.collections.Collection} _collection
	* @return {Boolean}
	*/
	jsx.collections.Collection.prototype.addAll = function(_collection){throw 'Collection.addAll is abstract';}
	/**
	* Removes all elements in the collection.
	*/
	jsx.collections.Collection.prototype.clear = function(){throw 'Collection.clear is abstract';}
	/**
	* Returns whether the specified object is contained in the collection.
	* @param {Object} _object Parameter could be null. If there is a null element in the collection, true will be returned.
	* @return {Boolean}
	*/
	jsx.collections.Collection.prototype.contains = function(_object){throw 'Collection.contains is abstract';}
	/**
	* Returns whether the elements in the specified collection exist in the collection.
	* @param {jsx.collections.Collection}
	* @return {Boolean}
	*/
	jsx.collections.Collection.prototype.containsAll = function(_collection){throw 'Collection.containsAll is abstract';}
	/**
	* Returns whether the collection is empty.
	* @return {Boolean}
	*/
	jsx.collections.Collection.prototype.isEmpty = function(){throw 'Collection.isEmpty is abstract';}
	/**
	* Removes the specified object from the collection. Return whether the object was removed.
	* @param {Object} _object
	* @return {Boolean}
	*/
	jsx.collections.Collection.prototype.remove = function(_object){throw 'Collection.remove is abstract';}
	/**
	* Removes all the elements in the specified collection from the current collection. Returns whether the current collection was modified.
	* @param {jsx.collections.Collection} _collection
	* @return {Boolean}
	*/
	jsx.collections.Collection.prototype.removeAll = function(_collection){throw 'Collection.removeAll is abstract';}
	/**
	* Removes all elements in the current collection if they are not in the specified collection.
	*  Returns whether the current collection was modified.
	* @param {Object} _collection
	* @return {Boolean}
	*/
	jsx.collections.Collection.prototype.retainAll = function(_collection){throw 'Collection.retainAll is abstract';}
	/**
	* Returns the size of the collection.
	* @return {Number}
	*/
	jsx.collections.Collection.prototype.size = function(){throw 'Collection.size is abstract';}


jsx.collections.Collection.PACKAGE = "jsx.collections";
jsx.collections.Collection.CLASS = "jsx.collections.Collection";
jsx.collections.Collection.SUPER_CLASS = "jsx.collections.Iterable";
jsx.collections.Collection.IMPORTS = ["jsx.collections.Iterable"];
jsx.collections.Collection.INTERFACES = [];
jsx.collections.Collection.MIXINS = [];
jsx.collections.Collection.getName = function(){return jsx.collections.Collection.CLASS;}
jsx.collections.Collection.klass = new jsx.lang.Class(jsx.collections.Collection.getName());
jsx.collections.Collection.prototype.getClass = function(){return jsx.collections.Collection.klass;}
jsx.collections.Collection.WARNINGS = [];
