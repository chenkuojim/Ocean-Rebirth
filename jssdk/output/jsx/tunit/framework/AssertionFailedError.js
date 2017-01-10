
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class AssertionFailedError
	* @constructor
	* @param {String} _message
	*/
	jsx.tunit.framework.AssertionFailedError = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.tunit.framework.AssertionFailedError.prototype.initialize = function(_message)
	{
		this.message = _message;
	}


jsx.tunit.framework.AssertionFailedError.PACKAGE = "jsx.tunit.framework";
jsx.tunit.framework.AssertionFailedError.CLASS = "jsx.tunit.framework.AssertionFailedError";
jsx.tunit.framework.AssertionFailedError.SUPER_CLASS = "";
jsx.tunit.framework.AssertionFailedError.IMPORTS = [];
jsx.tunit.framework.AssertionFailedError.INTERFACES = [];
jsx.tunit.framework.AssertionFailedError.MIXINS = [];
jsx.tunit.framework.AssertionFailedError.getName = function(){return jsx.tunit.framework.AssertionFailedError.CLASS;}
jsx.tunit.framework.AssertionFailedError.klass = new jsx.lang.Class(jsx.tunit.framework.AssertionFailedError.getName());
jsx.tunit.framework.AssertionFailedError.prototype.getClass = function(){return jsx.tunit.framework.AssertionFailedError.klass;}
jsx.tunit.framework.AssertionFailedError.WARNINGS = [];
