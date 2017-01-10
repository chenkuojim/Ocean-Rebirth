jsx.logging.DefaultLayout = function(){this.initialize.apply(this, arguments);}


	/** @ignore */
	jsx.logging.DefaultLayout.prototype.initialize = function(){}

	jsx.logging.DefaultLayout.prototype.format = function(_logEvent)
	{
		return _logEvent.getMessage().toString();
	}

	jsx.logging.DefaultLayout.prototype.getContentType = function()
	{
		return "text/plain";
	}

	jsx.logging.DefaultLayout.prototype.getHeader = function()
	{
		return "";
	}

	jsx.logging.DefaultLayout.prototype.getFooter = function()
	{
		return "";
	}


jsx.logging.DefaultLayout.PACKAGE = "jsx.logging";
jsx.logging.DefaultLayout.CLASS = "jsx.logging.DefaultLayout";
jsx.logging.DefaultLayout.SUPER_CLASS = "";
jsx.logging.DefaultLayout.IMPORTS = ["jsx.logging.Layout"];
jsx.logging.DefaultLayout.INTERFACES = ["jsx.logging.Layout"];
jsx.logging.DefaultLayout.MIXINS = [];
jsx.logging.DefaultLayout.getName = function(){return jsx.logging.DefaultLayout.CLASS;}
jsx.logging.DefaultLayout.klass = new jsx.lang.Class(jsx.logging.DefaultLayout.getName());
jsx.logging.DefaultLayout.prototype.getClass = function(){return jsx.logging.DefaultLayout.klass;}
jsx.logging.DefaultLayout.WARNINGS = [];
