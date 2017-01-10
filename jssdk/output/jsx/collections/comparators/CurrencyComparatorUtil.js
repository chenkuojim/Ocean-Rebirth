
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class CurrencyComparatorUtil
	*/
	jsx.collections.comparators.CurrencyComparatorUtil = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.collections.comparators.CurrencyComparatorUtil.prototype.initialize = function(){}

	/**
	* Used by the jsx.collections.comparators.CurrencyComparator to compare currency values.
	* @param {String} _objectA
	* @param {String} _objectB
	* @param {Boolean} _reversal
	*/
	jsx.collections.comparators.CurrencyComparatorUtil.compare = function(_objectA, _objectB, _reversal)
	{
		var a = _objectA;
		var b = _objectB;

		a = a.replace(/[^0-9.]/g, '');
		b = b.replace(/[^0-9.]/g, '');

		a = Number.parseFloat(a);
		b = Number.parseFloat(b);

		return jsx.collections.comparators.NumericComparatorUtil.compare(a, b, _reversal);
	}


jsx.collections.comparators.CurrencyComparatorUtil.PACKAGE = "jsx.collections.comparators";
jsx.collections.comparators.CurrencyComparatorUtil.CLASS = "jsx.collections.comparators.CurrencyComparatorUtil";
jsx.collections.comparators.CurrencyComparatorUtil.SUPER_CLASS = "";
jsx.collections.comparators.CurrencyComparatorUtil.IMPORTS = ["jsx.collections.comparators.NumericComparatorUtil"];
jsx.collections.comparators.CurrencyComparatorUtil.INTERFACES = [];
jsx.collections.comparators.CurrencyComparatorUtil.MIXINS = [];
jsx.collections.comparators.CurrencyComparatorUtil.getName = function(){return jsx.collections.comparators.CurrencyComparatorUtil.CLASS;}
jsx.collections.comparators.CurrencyComparatorUtil.klass = new jsx.lang.Class(jsx.collections.comparators.CurrencyComparatorUtil.getName());
jsx.collections.comparators.CurrencyComparatorUtil.prototype.getClass = function(){return jsx.collections.comparators.CurrencyComparatorUtil.klass;}
jsx.collections.comparators.CurrencyComparatorUtil.WARNINGS = [];
