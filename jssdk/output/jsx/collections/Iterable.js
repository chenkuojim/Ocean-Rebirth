
	/**
	* @fileOverview <code>jsx.collections.Iterable</code> is an Interface class. Defines the method used to iterate over the collection.
	* @example
	<pre>
		class MyIterable implements Iterable
	</pre>
	*/
	/**
	* @class Iterable
	*/
	jsx.collections.Iterable = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.collections.Iterable.prototype.initialize = function(){}

	/**
	* Iterate over the collection of elements.
	* @param {Function} _block The function to execute for every element in the collection.
	*/
	jsx.collections.Iterable.prototype.iterator = function(_block){throw 'Iterable.iterator is abstract';}


jsx.collections.Iterable.PACKAGE = "jsx.collections";
jsx.collections.Iterable.CLASS = "jsx.collections.Iterable";
jsx.collections.Iterable.SUPER_CLASS = "";
jsx.collections.Iterable.IMPORTS = [];
jsx.collections.Iterable.INTERFACES = [];
jsx.collections.Iterable.MIXINS = [];
jsx.collections.Iterable.getName = function(){return jsx.collections.Iterable.CLASS;}
jsx.collections.Iterable.klass = new jsx.lang.Class(jsx.collections.Iterable.getName());
jsx.collections.Iterable.prototype.getClass = function(){return jsx.collections.Iterable.klass;}
jsx.collections.Iterable.WARNINGS = [];
