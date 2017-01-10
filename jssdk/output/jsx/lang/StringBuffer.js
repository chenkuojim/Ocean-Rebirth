
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class StringBuffer
	* @description A cleaner way to concatenate strings.
	* @constructor
	* @param {String} _initString Initialize the buffer.
	*/
	jsx.lang.StringBuffer = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.lang.StringBuffer.prototype.initialize = function(_initString)
	{
		this.str = null;
		this.current = 0;
		this.parts = [];
		this.length = 0;

		if(_initString != null)
		{
			this.append(_initString);
		}
	}

	/**
	* Appends the _appendString String to the current buffer.
	* @param {String} _appendString
	* @return StringBuffer
	*/
	jsx.lang.StringBuffer.prototype.append = function(_appendString)
	{
		// append the string
		this.parts[this.current++] = _appendString.toString();

		// reset the add new lengh for appended string
		this.length += _appendString.toString().length;

		// reset cache
		this.str = null;

		// return the Instance for method chaining
		return this;
	}

	/**
	* Returns whether this object is equal to the specified _object.
	* @param {Object} _object
	* @return {Boolean}
	*/
	jsx.lang.StringBuffer.prototype.equals = function(_object)
	{
		if(this === _object)
		{
			return true;
		}
		if(!this.getClass().isInstance(_object))
		{
			return false;
		}

		return this.toString() == _object.toString();
	}

	/**
	* Returns a String representation of a jsx.lang.StringBuffer.
	* @return {String}
	*/
	jsx.lang.StringBuffer.prototype.toString = function()
	{
		if(this.str)
		{
			return this.str;
		}

		var newStr = this.parts.join("");
		this.parts = [newStr];
		this.current = 1;
		this.length = newStr.length;
		this.str = newStr;

		return this.str;
	}


jsx.lang.StringBuffer.PACKAGE = "jsx.lang";
jsx.lang.StringBuffer.CLASS = "jsx.lang.StringBuffer";
jsx.lang.StringBuffer.SUPER_CLASS = "";
jsx.lang.StringBuffer.IMPORTS = [];
jsx.lang.StringBuffer.INTERFACES = [];
jsx.lang.StringBuffer.MIXINS = [];
jsx.lang.StringBuffer.getName = function(){return jsx.lang.StringBuffer.CLASS;}
jsx.lang.StringBuffer.klass = new jsx.lang.Class(jsx.lang.StringBuffer.getName());
jsx.lang.StringBuffer.prototype.getClass = function(){return jsx.lang.StringBuffer.klass;}
jsx.lang.StringBuffer.WARNINGS = [];
