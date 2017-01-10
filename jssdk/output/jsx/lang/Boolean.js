
	/**
	* @fileOverview
	* @example
	*/

	/**
	* Returns whether this object is equal to the specified _object.
	* @param {Object} _object
	* @return {Boolean}
	*/
	Boolean.prototype.equals = function(_object)
	{
		if(this === _object)
		{
			return true;
		}
		if(!this.getClass().isInstance(_object))
		{
			return false;
		}

		return this.toString().equals(_object.toString());
	}

Boolean.PACKAGE = "";
Boolean.CLASS = "Boolean";
Boolean.SUPER_CLASS = "";
Boolean.IMPORTS = [];
Boolean.INTERFACES = [];
Boolean.MIXINS = [];
Boolean.getName = function(){return Boolean.CLASS;}
Boolean.klass = new jsx.lang.Class(Boolean.getName());
Boolean.prototype.getClass = function(){return Boolean.klass;}
Boolean.WARNINGS = [];
