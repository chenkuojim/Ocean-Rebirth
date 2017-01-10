
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class DateComparator
	* @constructor
	* @param {Boolean} _reversal
	*/
	jsx.collections.comparators.DateComparator = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.collections.comparators.DateComparator.prototype.initialize = function(_reversal)
	{
		/**
		* Comparator function used to compare date values.
		*/
		this.compare = function(_objectA, _objectB)
		{
			return jsx.collections.comparators.DateComparatorUtil.compare(_objectA, _objectB, _reversal);
		}
	}


jsx.collections.comparators.DateComparator.PACKAGE = "jsx.collections.comparators";
jsx.collections.comparators.DateComparator.CLASS = "jsx.collections.comparators.DateComparator";
jsx.collections.comparators.DateComparator.SUPER_CLASS = "";
jsx.collections.comparators.DateComparator.IMPORTS = ["jsx.collections.comparators.DateComparatorUtil"];
jsx.collections.comparators.DateComparator.INTERFACES = [];
jsx.collections.comparators.DateComparator.MIXINS = [];
jsx.collections.comparators.DateComparator.getName = function(){return jsx.collections.comparators.DateComparator.CLASS;}
jsx.collections.comparators.DateComparator.klass = new jsx.lang.Class(jsx.collections.comparators.DateComparator.getName());
jsx.collections.comparators.DateComparator.prototype.getClass = function(){return jsx.collections.comparators.DateComparator.klass;}
jsx.collections.comparators.DateComparator.WARNINGS = [];
