
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
	jsx.collections.List = function(){this.initialize.apply(this, arguments);}
jsx.collections.List.prototype = new jsx.collections.Collection();
jsx.collections.List.prototype.constructor = jsx.collections.List;
jsx.collections.List.superclass = jsx.collections.Collection.prototype;

	/** @ignore */
	jsx.collections.List.prototype.initialize = function(){}

	/**
	* Add an element to the list at a specified index. Returns whether the element was added into the list.
	* @param {Number} _index Number must be >= 0 and < size
	* @param {Object} _object
	* @return {Boolean}
	*/
	jsx.collections.List.prototype.addAt = function(_index, _object){throw 'List.addAt is abstract';}
	/**
	* Add all the elements in the specified collection starting at the specified index. Returns whether the current list was modified.
	* @param {Number} _index Number must be >= 0 and < the size.
	* @param {jsx.collections.Collection} _collection
	* @return {Boolean}
	*/
	jsx.collections.List.prototype.addAllAt = function(_index, _collection){throw 'List.addAllAt is abstract';}
	/**
	* Returns an element from the list at the specifed index.
	* @param {Number} _index
	* @return {Object}
	*/
	jsx.collections.List.prototype.get = function(_index){throw 'List.get is abstract';}
	/**
	* Returns the index of the first occurance of the specified object. If the specified object does not exist in the collection, -1 will be returned.
	* @param {Object} _object
	* @return {Number] -1 if the object was not found, otherwise the number will be >= 0 and < the size.
	*/
	jsx.collections.List.prototype.indexOf = function(_object){throw 'List.indexOf is abstract';}
	/**
	* Returns the index of the last occurance of the specified object. If the specified object does not exist in the collection, -1 will be returned.
	* @param {Object} _object
	* @return {Number] -1 if the object was not found, otherwise the number will be >= 0 and < the size.
	*/
	jsx.collections.List.prototype.lastIndexOf = function(_object){throw 'List.lastIndexOf is abstract';}
	/**
	* Removes and returns the element from the collection at the specifed index.
	* @param {Number} _index
	* @return {Object}
	*/
	jsx.collections.List.prototype.removeAt = function(_index){throw 'List.removeAt is abstract';}
	/**
	* Assigns the specified object to the collection at the specified index. If an object is already living at the index, it is replaced.
	* @param {Number} _index
	* @param {Object} _object
	*/
	jsx.collections.List.prototype.set = function(_index, _object){throw 'List.set is abstract';}
	/**
	* Returns a view of the portion of this list between the specified fromIndex, inclusive, and toIndex, exclusive.
	* @param {Number} _fromIndex
	* @param {Number} _toIndex
	*/
	jsx.collections.List.prototype.subList = function(_fromIndex, _toIndex){throw 'List.subList is abstract';}


jsx.collections.List.PACKAGE = "jsx.collections";
jsx.collections.List.CLASS = "jsx.collections.List";
jsx.collections.List.SUPER_CLASS = "jsx.collections.Collection";
jsx.collections.List.IMPORTS = ["jsx.collections.Collection"];
jsx.collections.List.INTERFACES = [];
jsx.collections.List.MIXINS = [];
jsx.collections.List.getName = function(){return jsx.collections.List.CLASS;}
jsx.collections.List.klass = new jsx.lang.Class(jsx.collections.List.getName());
jsx.collections.List.prototype.getClass = function(){return jsx.collections.List.klass;}
jsx.collections.List.WARNINGS = [];
