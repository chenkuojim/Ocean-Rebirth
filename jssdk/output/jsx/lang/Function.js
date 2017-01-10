
	/**
	* @fileOverview
	* @example
	*/


Function.PACKAGE = "";
Function.CLASS = "Function";
Function.SUPER_CLASS = "";
Function.IMPORTS = [];
Function.INTERFACES = [];
Function.MIXINS = [];
Function.getName = function(){return Function.CLASS;}
Function.klass = new jsx.lang.Class(Function.getName());
Function.prototype.getClass = function(){return Function.klass;}
Function.WARNINGS = [];
