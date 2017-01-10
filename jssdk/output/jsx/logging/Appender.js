jsx.logging.Appender = function(){this.initialize.apply(this, arguments);}


	/** @ignore */
	jsx.logging.Appender.prototype.initialize = function(){}

	jsx.logging.Appender.prototype.doAppend = function(_logEvent){throw 'Appender.doAppend is abstract';}
	jsx.logging.Appender.prototype.getLayout = function(){throw 'Appender.getLayout is abstract';}
	jsx.logging.Appender.prototype.setLayout = function(_layout){throw 'Appender.setLayout is abstract';}
	jsx.logging.Appender.prototype.getThreshold = function(){throw 'Appender.getThreshold is abstract';}
	jsx.logging.Appender.prototype.setThreshold = function(_threshold){throw 'Appender.setThreshold is abstract';}


jsx.logging.Appender.PACKAGE = "jsx.logging";
jsx.logging.Appender.CLASS = "jsx.logging.Appender";
jsx.logging.Appender.SUPER_CLASS = "";
jsx.logging.Appender.IMPORTS = [];
jsx.logging.Appender.INTERFACES = [];
jsx.logging.Appender.MIXINS = [];
jsx.logging.Appender.getName = function(){return jsx.logging.Appender.CLASS;}
jsx.logging.Appender.klass = new jsx.lang.Class(jsx.logging.Appender.getName());
jsx.logging.Appender.prototype.getClass = function(){return jsx.logging.Appender.klass;}
jsx.logging.Appender.WARNINGS = [];
