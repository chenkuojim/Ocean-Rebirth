
	/**
	* @fileOverview Base Object for all Objects
	* @example
	*/

	/**
	* Pointer to the 'undefined' value in the global object.
	*/
	Object.NOT_DEF = undefined;

	/** @ignore */
	Object.prototype._$toString$_ = function(){throw "don't call me, used for reflection.";}

	/**
	* Returns whether this object can respond to the _methodName parameter.
	* @param {String} _methodName
	* @return {Boolean}
	*/
	Object.prototype.respondsTo = function(_methodName)
	{
		return this.getClass().getMethod(_methodName) != null;
	}

	/**
	* Returns whether the _object parameter is 'undefined'.
	* @param {Object} _object
	* @return {Boolean}
	*/
	Object.isUndefined = function(_object)
	{
		return _object == Object.NOT_DEF;
	}

	/**
	* Returns whether this object is equal to the specifiec _object.
	* @param {Object} _object
	* @return {Boolean}
	*/
	Object.prototype.equals = function(_object)
	{
		if(this === _object)
		{
			return true;
		}
		if(!this.getClass().isInstance(_object))
		{
			return false;
		}

		return this == _object;
	}

	/**
	* Returns the default representation of the object.
	* @return {String}
	*/
	Object.prototype.toString = function()
	{
		return this.getClass().getName();
	}


Object.PACKAGE = "";
Object.CLASS = "Object";
Object.SUPER_CLASS = "";
Object.IMPORTS = [];
Object.INTERFACES = [];
Object.MIXINS = [];
Object.getName = function(){return Object.CLASS;}
Object.klass = new jsx.lang.Class(Object.getName());
Object.prototype.getClass = function(){return Object.klass;}
Object.WARNINGS = [];
