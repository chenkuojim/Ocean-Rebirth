
	/**
	* @fileOverview Utility to build a string. Mostly used in individual <Class>#toString method to build a string displaying the state of an object.
	* @example
	*/
	/**
	* @class ToStringBuilder
	* @constructor
	* @param {String} _prefix
	*/
	jsx.lang.util.ToStringBuilder = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.lang.util.ToStringBuilder.prototype.initialize = function(_prefix)
	{
		this.str = new jsx.lang.StringBuffer((_prefix)?_prefix:"");
	}

	/**
	* Append the specified object's toString keyed by the specified name.
	* @param {Object} _object
	* @param {String} _name
	* @return {jsx.lang.util.ToStringBuilder}
	*/
	jsx.lang.util.ToStringBuilder.prototype.append = function(_object, _name)
	{
		this.str.append("\n");
		this.str.append(_name);
		this.str.append(" = ");
		this.str.append(_object.toString());

		return this;
	}

	/**
	* Returns the derived string.
	* @return {String}
	*/
	jsx.lang.util.ToStringBuilder.prototype.getString = function()
	{
		return this.str.toString();
	}


jsx.lang.util.ToStringBuilder.PACKAGE = "jsx.lang.util";
jsx.lang.util.ToStringBuilder.CLASS = "jsx.lang.util.ToStringBuilder";
jsx.lang.util.ToStringBuilder.SUPER_CLASS = "";
jsx.lang.util.ToStringBuilder.IMPORTS = ["jsx.lang.StringBuffer"];
jsx.lang.util.ToStringBuilder.INTERFACES = [];
jsx.lang.util.ToStringBuilder.MIXINS = [];
jsx.lang.util.ToStringBuilder.getName = function(){return jsx.lang.util.ToStringBuilder.CLASS;}
jsx.lang.util.ToStringBuilder.klass = new jsx.lang.Class(jsx.lang.util.ToStringBuilder.getName());
jsx.lang.util.ToStringBuilder.prototype.getClass = function(){return jsx.lang.util.ToStringBuilder.klass;}
jsx.lang.util.ToStringBuilder.WARNINGS = [];
