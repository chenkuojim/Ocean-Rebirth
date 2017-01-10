
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class ComparatorUtil
	*/
	jsx.collections.comparators.ComparatorUtil = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.collections.comparators.ComparatorUtil.prototype.initialize = function(){}

	/**
	* Used as a base compare method to compare two objects.
	* @param {Object} _objectA
	* @param {Object} _objectB
	* @param {Boolean} _reversal
	*/
	jsx.collections.comparators.ComparatorUtil.compare = function(_objectA, _objectB, _reversal)
	{
		var a = _objectA;
		var b = _objectB;

		var comp;

		if(a < b) comp = -1;
		if(a == b) comp = 0;
		if(a > b) comp = 1;

		if(_reversal)
		{
			return -1 * comp;
		}

		return comp;
	}


jsx.collections.comparators.ComparatorUtil.PACKAGE = "jsx.collections.comparators";
jsx.collections.comparators.ComparatorUtil.CLASS = "jsx.collections.comparators.ComparatorUtil";
jsx.collections.comparators.ComparatorUtil.SUPER_CLASS = "";
jsx.collections.comparators.ComparatorUtil.IMPORTS = [];
jsx.collections.comparators.ComparatorUtil.INTERFACES = [];
jsx.collections.comparators.ComparatorUtil.MIXINS = [];
jsx.collections.comparators.ComparatorUtil.getName = function(){return jsx.collections.comparators.ComparatorUtil.CLASS;}
jsx.collections.comparators.ComparatorUtil.klass = new jsx.lang.Class(jsx.collections.comparators.ComparatorUtil.getName());
jsx.collections.comparators.ComparatorUtil.prototype.getClass = function(){return jsx.collections.comparators.ComparatorUtil.klass;}
jsx.collections.comparators.ComparatorUtil.WARNINGS = [];
