
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class NumericComparator
	* @constructor
	* @param {Boolean} _reversal
	*/
	jsx.collections.comparators.NumericComparator = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.collections.comparators.NumericComparator.prototype.initialize = function(_reversal)
	{
		/**
		* Comparator function used to compare number values.
		*/
		this.compare = function(_objectA, _objectB)
		{
			return jsx.collections.comparators.NumericComparatorUtil.compare(_objectA, _objectB, _reversal);
		}
	}


jsx.collections.comparators.NumericComparator.PACKAGE = "jsx.collections.comparators";
jsx.collections.comparators.NumericComparator.CLASS = "jsx.collections.comparators.NumericComparator";
jsx.collections.comparators.NumericComparator.SUPER_CLASS = "";
jsx.collections.comparators.NumericComparator.IMPORTS = ["jsx.collections.comparators.NumericComparatorUtil"];
jsx.collections.comparators.NumericComparator.INTERFACES = [];
jsx.collections.comparators.NumericComparator.MIXINS = [];
jsx.collections.comparators.NumericComparator.getName = function(){return jsx.collections.comparators.NumericComparator.CLASS;}
jsx.collections.comparators.NumericComparator.klass = new jsx.lang.Class(jsx.collections.comparators.NumericComparator.getName());
jsx.collections.comparators.NumericComparator.prototype.getClass = function(){return jsx.collections.comparators.NumericComparator.klass;}
jsx.collections.comparators.NumericComparator.WARNINGS = [];
