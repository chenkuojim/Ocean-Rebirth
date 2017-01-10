
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class NumericComparatorUtil
	*/
	jsx.collections.comparators.NumericComparatorUtil = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.collections.comparators.NumericComparatorUtil.prototype.initialize = function(){}

	/**
	* Used by the jsx.collections.comparators.NumberComparator to compare number values.
	* @param {Number} _objectA
	* @param {Number} _objectB
	* @param {Boolean} _reversal
	*/
	jsx.collections.comparators.NumericComparatorUtil.compare = function(_objectA, _objectB, _reversal)
	{
		var a = _objectA;
		var b = _objectB;

		if(Number.isNaN(a)) a = 0;
		if(Number.isNaN(b)) b = 0;

		return jsx.collections.comparators.ComparatorUtil.compare(a, b, _reversal);
	}


jsx.collections.comparators.NumericComparatorUtil.PACKAGE = "jsx.collections.comparators";
jsx.collections.comparators.NumericComparatorUtil.CLASS = "jsx.collections.comparators.NumericComparatorUtil";
jsx.collections.comparators.NumericComparatorUtil.SUPER_CLASS = "";
jsx.collections.comparators.NumericComparatorUtil.IMPORTS = ["jsx.collections.comparators.ComparatorUtil"];
jsx.collections.comparators.NumericComparatorUtil.INTERFACES = [];
jsx.collections.comparators.NumericComparatorUtil.MIXINS = [];
jsx.collections.comparators.NumericComparatorUtil.getName = function(){return jsx.collections.comparators.NumericComparatorUtil.CLASS;}
jsx.collections.comparators.NumericComparatorUtil.klass = new jsx.lang.Class(jsx.collections.comparators.NumericComparatorUtil.getName());
jsx.collections.comparators.NumericComparatorUtil.prototype.getClass = function(){return jsx.collections.comparators.NumericComparatorUtil.klass;}
jsx.collections.comparators.NumericComparatorUtil.WARNINGS = [];
