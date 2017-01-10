
	/**
	* @fileOverview  Utility to test equality among various objects. Mostly used in individual <Class>#equals method to one object against another.
	* @example
	*/
	/**
	* @class EqualsBuilder
	* @constructor
	*/
	jsx.lang.util.EqualsBuilder = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.lang.util.EqualsBuilder.prototype.initialize = function()
	{
		this.isEquals = true;
	}

	/**
	* Test two objects for equality.
	* @param {Object} _object1
	* @param {Object} _object2
	* @return {jsx.lang.util.EqualsBuilder}
	*/
	jsx.lang.util.EqualsBuilder.prototype.append = function(_object1, _object2)
	{
		if(!this.isEquals){ return this; }
		if(_object1 === _object2){ return this; }
		if(_object1 == null || _object2 == null)
		{
			this.isEquals = false;
		}

		if(this.isEquals)
		{
			this.isEquals = _object1.equals(_object2);
		}

		return this;
	}

	/**
	* Returns the derived equals boolean.
	* @return {Boolean}
	*/
	jsx.lang.util.EqualsBuilder.prototype.getEquals = function()
	{
		return this.isEquals;
	}


jsx.lang.util.EqualsBuilder.PACKAGE = "jsx.lang.util";
jsx.lang.util.EqualsBuilder.CLASS = "jsx.lang.util.EqualsBuilder";
jsx.lang.util.EqualsBuilder.SUPER_CLASS = "";
jsx.lang.util.EqualsBuilder.IMPORTS = [];
jsx.lang.util.EqualsBuilder.INTERFACES = [];
jsx.lang.util.EqualsBuilder.MIXINS = [];
jsx.lang.util.EqualsBuilder.getName = function(){return jsx.lang.util.EqualsBuilder.CLASS;}
jsx.lang.util.EqualsBuilder.klass = new jsx.lang.Class(jsx.lang.util.EqualsBuilder.getName());
jsx.lang.util.EqualsBuilder.prototype.getClass = function(){return jsx.lang.util.EqualsBuilder.klass;}
jsx.lang.util.EqualsBuilder.WARNINGS = [];
