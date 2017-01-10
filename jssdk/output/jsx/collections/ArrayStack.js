
	/**
	* @fileOverview An implementation of the Stack api that is based on an jsx.collections.ArrayList,
	* @example
	*/
	/**
	* @class ArrayStack
	* @constructor
	* @extends jsx.collections.ArrayList
	*/
	jsx.collections.ArrayStack = function(){this.initialize.apply(this, arguments);}
jsx.collections.ArrayStack.prototype = new jsx.collections.ArrayList();
jsx.collections.ArrayStack.prototype.constructor = jsx.collections.ArrayStack;
jsx.collections.ArrayStack.superclass = jsx.collections.ArrayList.prototype;

	/** @ignore */
	jsx.collections.ArrayStack.prototype.initialize = function(_collection)
	{
		jsx.collections.ArrayStack.superclass.initialize.apply(this, [_collection]);
	}

	/**
	* Return true if this stack is currently empty..
	* @return {Boolean}
	*/
	jsx.collections.ArrayStack.prototype.empty = function()
	{
		return this.isEmpty();
	}

	/**
	* Returns the top item off of this stack without removing it.
	* @return {Object}
	*/
	jsx.collections.ArrayStack.prototype.peek = function()
	{
		var size = this.size();
		if(size == 0)
		{
			return null;
		}

		return this.get(size - 1);
	}

	/**
	* Pops the top item off of this stack and return it.
	* @return {Object}
	*/
	jsx.collections.ArrayStack.prototype.pop = function()
	{
		var size = this.size();
		var object = this.peek();

		this.removeAt(size - 1);

		return object;
	}

	/**
	* Pushes a new item onto the top of this stack.
	* @param {Object}
	*/
	jsx.collections.ArrayStack.prototype.push = function(_object)
	{
		this.add(_object);
	}

	/**
	* Returns the one-based position of the distance from the top that the specified object exists on this stack, where the top-most element is considered to be at distance 1.
	* @param {Object} _object
	* @return {Number}
	*/
	jsx.collections.ArrayStack.prototype.search = function(_object)
	{
		var index = this.lastIndexOf(_object);
		if(index > -1)
		{
			return this.size() - index;
		}
		return -1;
	}


jsx.collections.ArrayStack.PACKAGE = "jsx.collections";
jsx.collections.ArrayStack.CLASS = "jsx.collections.ArrayStack";
jsx.collections.ArrayStack.SUPER_CLASS = "jsx.collections.ArrayList";
jsx.collections.ArrayStack.IMPORTS = ["jsx.collections.ArrayList"];
jsx.collections.ArrayStack.INTERFACES = [];
jsx.collections.ArrayStack.MIXINS = [];
jsx.collections.ArrayStack.getName = function(){return jsx.collections.ArrayStack.CLASS;}
jsx.collections.ArrayStack.klass = new jsx.lang.Class(jsx.collections.ArrayStack.getName());
jsx.collections.ArrayStack.prototype.getClass = function(){return jsx.collections.ArrayStack.klass;}
jsx.collections.ArrayStack.WARNINGS = [];
