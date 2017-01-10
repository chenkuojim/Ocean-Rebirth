jsx.logging.Layout = function(){this.initialize.apply(this, arguments);}


	/** @ignore */
	jsx.logging.Layout.prototype.initialize = function(){}

	jsx.logging.Layout.prototype.format = function(){throw 'Layout.format is abstract';}
	jsx.logging.Layout.prototype.getContentType = function(){throw 'Layout.getContentType is abstract';}
	jsx.logging.Layout.prototype.getHeader = function(){throw 'Layout.getHeader is abstract';}
	jsx.logging.Layout.prototype.getFooter = function(){throw 'Layout.getFooter is abstract';}


jsx.logging.Layout.PACKAGE = "jsx.logging";
jsx.logging.Layout.CLASS = "jsx.logging.Layout";
jsx.logging.Layout.SUPER_CLASS = "";
jsx.logging.Layout.IMPORTS = [];
jsx.logging.Layout.INTERFACES = [];
jsx.logging.Layout.MIXINS = [];
jsx.logging.Layout.getName = function(){return jsx.logging.Layout.CLASS;}
jsx.logging.Layout.klass = new jsx.lang.Class(jsx.logging.Layout.getName());
jsx.logging.Layout.prototype.getClass = function(){return jsx.logging.Layout.klass;}
jsx.logging.Layout.WARNINGS = [];
