
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class DateComparatorUtil
	*/
	jsx.collections.comparators.DateComparatorUtil = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.collections.comparators.DateComparatorUtil.prototype.initialize = function(){}

	/**
	* Used by the jsx.collections.comparators.DateComparator to compare date values.
	* @param {Date} _objectA
	* @param {Date} _objectB
	* @param {Boolean} _reversal
	*/
	jsx.collections.comparators.DateComparatorUtil.compare = function(_objectA, _objectB, _reversal)
	{
		var _10digit = function(_date)
		{
			return _date.substr(6,4)+_date.substr(0,2)+_date.substr(3,2);
		}

		var _less10digit = function(_date)
		{
			var yr = _date.substr(6,2);
			if(Number.parseInt(yr) < 50) { yr = "20"+yr; } else { yr = "19"+yr; }
			return yr+_date.substr(0,2)+_date.substr(3,2);
		}

		var a = _objectA;
		var b = _objectB;

		// format month/day/year
		// y2k notes: two digit years less than 50 are treated as 20XX, greater than 50 are treated as 19XX

		if(a.length == 10)
		{
			a = _10digit(a);
		}
		else
		{
			a = _less10digit(a);
		}

		if(b.length == 10)
		{
			b = _10digit(b);
		}
		else
		{
			b = _less10digit(b);
		}

		return jsx.collections.comparators.ComparatorUtil.compare(a, b, _reversal);
	}


jsx.collections.comparators.DateComparatorUtil.PACKAGE = "jsx.collections.comparators";
jsx.collections.comparators.DateComparatorUtil.CLASS = "jsx.collections.comparators.DateComparatorUtil";
jsx.collections.comparators.DateComparatorUtil.SUPER_CLASS = "";
jsx.collections.comparators.DateComparatorUtil.IMPORTS = ["jsx.collections.comparators.ComparatorUtil"];
jsx.collections.comparators.DateComparatorUtil.INTERFACES = [];
jsx.collections.comparators.DateComparatorUtil.MIXINS = [];
jsx.collections.comparators.DateComparatorUtil.getName = function(){return jsx.collections.comparators.DateComparatorUtil.CLASS;}
jsx.collections.comparators.DateComparatorUtil.klass = new jsx.lang.Class(jsx.collections.comparators.DateComparatorUtil.getName());
jsx.collections.comparators.DateComparatorUtil.prototype.getClass = function(){return jsx.collections.comparators.DateComparatorUtil.klass;}
jsx.collections.comparators.DateComparatorUtil.WARNINGS = [];
