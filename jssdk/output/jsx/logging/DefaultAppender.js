jsx.logging.DefaultAppender = function(){this.initialize.apply(this, arguments);}


	/** @ignore */
	jsx.logging.DefaultAppender.prototype.initialize = function(_name)
	{
		this.name = _name;
		this.layout = new jsx.logging.DefaultLayout();
		this.threshold = jsx.logging.Level.ALL;
	}

	jsx.logging.DefaultAppender.prototype.doAppend = function(_logEvent)
	{
		if(_logEvent.getLevel().isGreaterOrEqual(this.getThreshold()))
		{
			this.append(_logEvent);
		}
	}

	jsx.logging.DefaultAppender.prototype.append = function(_logEvent)
	{
		var layout = this.getLayout();

		var _show = $GLOBAL_OBJECT.alert || print;
		_show(new jsx.lang.StringBuffer()
				.append(layout.getHeader())
				.append(layout.format(_logEvent))
				.append(layout.getFooter())
				.append("\n"));
	}

	jsx.logging.DefaultAppender.prototype.getName = function()
	{
		return this.name;
	}

	jsx.logging.DefaultAppender.prototype.getLayout = function()
	{
		return this.layout;
	}

	jsx.logging.DefaultAppender.prototype.setLayout = function(_layout)
	{
		this.layout = _layout;
	}

	jsx.logging.DefaultAppender.prototype.getThreshold = function()
	{
		return this.threshold;
	}

	jsx.logging.DefaultAppender.prototype.setThreshold = function(_threshold)
	{
		this.threshold = _threshold;
	}


jsx.logging.DefaultAppender.PACKAGE = "jsx.logging";
jsx.logging.DefaultAppender.CLASS = "jsx.logging.DefaultAppender";
jsx.logging.DefaultAppender.SUPER_CLASS = "";
jsx.logging.DefaultAppender.IMPORTS = ["jsx.logging.Appender","jsx.logging.DefaultLayout","jsx.logging.Level","jsx.lang.StringBuffer"];
jsx.logging.DefaultAppender.INTERFACES = ["jsx.logging.Appender"];
jsx.logging.DefaultAppender.MIXINS = [];
jsx.logging.DefaultAppender.getName = function(){return jsx.logging.DefaultAppender.CLASS;}
jsx.logging.DefaultAppender.klass = new jsx.lang.Class(jsx.logging.DefaultAppender.getName());
jsx.logging.DefaultAppender.prototype.getClass = function(){return jsx.logging.DefaultAppender.klass;}
jsx.logging.DefaultAppender.WARNINGS = [];
