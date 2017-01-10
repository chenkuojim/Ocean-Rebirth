
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class StringComparator
	* @constructor
	* @param {Boolean} _reversal
	* @param {Boolean} _insensitiveComparator
	*/
	jsx.collections.comparators.StringComparator = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.collections.comparators.StringComparator.prototype.initialize = function(_reversal, _insensitiveComparator)
	{
		/**
		* Comparator function used to compare string values.
		*/
		this.compare = function(_objectA, _objectB)
		{
			return jsx.collections.comparators.StringComparatorUtil.compare(_objectA, _objectB, _reversal, _insensitiveComparator);
		}
	}


jsx.collections.comparators.StringComparator.PACKAGE = "jsx.collections.comparators";
jsx.collections.comparators.StringComparator.CLASS = "jsx.collections.comparators.StringComparator";
jsx.collections.comparators.StringComparator.SUPER_CLASS = "";
jsx.collections.comparators.StringComparator.IMPORTS = ["jsx.collections.comparators.StringComparatorUtil"];
jsx.collections.comparators.StringComparator.INTERFACES = [];
jsx.collections.comparators.StringComparator.MIXINS = [];
jsx.collections.comparators.StringComparator.getName = function(){return jsx.collections.comparators.StringComparator.CLASS;}
jsx.collections.comparators.StringComparator.klass = new jsx.lang.Class(jsx.collections.comparators.StringComparator.getName());
jsx.collections.comparators.StringComparator.prototype.getClass = function(){return jsx.collections.comparators.StringComparator.klass;}
jsx.collections.comparators.StringComparator.WARNINGS = [];
