
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class StringComparatorUtil
	*/
	jsx.collections.comparators.StringComparatorUtil = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.collections.comparators.StringComparatorUtil.prototype.initialize = function(){}

	/**
	* Used by the jsx.collections.comparators.StringComparator to compare string values.
	* @param {String} _objectA
	* @param {String} _objectB
	* @param {Boolean} _reversal
	* @param {Boolean} _insensitiveComparator
	*/
	jsx.collections.comparators.StringComparatorUtil.compare = function(_objectA, _objectB, _reversal, _insensitiveComparator)
	{
		var a = _objectA;
		var b = _objectB;

		if(_insensitiveComparator)
		{
			a = a.toLowerCase();
			b = b.toLowerCase();
		}

		return jsx.collections.comparators.ComparatorUtil.compare(a, b, _reversal);
	}


jsx.collections.comparators.StringComparatorUtil.PACKAGE = "jsx.collections.comparators";
jsx.collections.comparators.StringComparatorUtil.CLASS = "jsx.collections.comparators.StringComparatorUtil";
jsx.collections.comparators.StringComparatorUtil.SUPER_CLASS = "";
jsx.collections.comparators.StringComparatorUtil.IMPORTS = ["jsx.collections.comparators.ComparatorUtil"];
jsx.collections.comparators.StringComparatorUtil.INTERFACES = [];
jsx.collections.comparators.StringComparatorUtil.MIXINS = [];
jsx.collections.comparators.StringComparatorUtil.getName = function(){return jsx.collections.comparators.StringComparatorUtil.CLASS;}
jsx.collections.comparators.StringComparatorUtil.klass = new jsx.lang.Class(jsx.collections.comparators.StringComparatorUtil.getName());
jsx.collections.comparators.StringComparatorUtil.prototype.getClass = function(){return jsx.collections.comparators.StringComparatorUtil.klass;}
jsx.collections.comparators.StringComparatorUtil.WARNINGS = [];
