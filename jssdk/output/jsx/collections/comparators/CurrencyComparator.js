
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class CurrencyComparator
	* @constructor
	* @param {Boolean} _reversal
	*/
	jsx.collections.comparators.CurrencyComparator = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.collections.comparators.CurrencyComparator.prototype.initialize = function(_reversal)
	{
		/**
		* Comparator function used to compare currency values.
		*/
		this.compare = function(_objectA, _objectB)
		{
			return jsx.collections.comparators.CurrencyComparatorUtil.compare(_objectA, _objectB, _reversal);
		}
	}


jsx.collections.comparators.CurrencyComparator.PACKAGE = "jsx.collections.comparators";
jsx.collections.comparators.CurrencyComparator.CLASS = "jsx.collections.comparators.CurrencyComparator";
jsx.collections.comparators.CurrencyComparator.SUPER_CLASS = "";
jsx.collections.comparators.CurrencyComparator.IMPORTS = ["jsx.collections.comparators.CurrencyComparatorUtil"];
jsx.collections.comparators.CurrencyComparator.INTERFACES = [];
jsx.collections.comparators.CurrencyComparator.MIXINS = [];
jsx.collections.comparators.CurrencyComparator.getName = function(){return jsx.collections.comparators.CurrencyComparator.CLASS;}
jsx.collections.comparators.CurrencyComparator.klass = new jsx.lang.Class(jsx.collections.comparators.CurrencyComparator.getName());
jsx.collections.comparators.CurrencyComparator.prototype.getClass = function(){return jsx.collections.comparators.CurrencyComparator.klass;}
jsx.collections.comparators.CurrencyComparator.WARNINGS = [];
