jsx.logging.ConsoleAppender = function(){this.initialize.apply(this, arguments);}
jsx.logging.ConsoleAppender.prototype = new jsx.logging.DefaultAppender();
jsx.logging.ConsoleAppender.prototype.constructor = jsx.logging.ConsoleAppender;
jsx.logging.ConsoleAppender.superclass = jsx.logging.DefaultAppender.prototype;


	/** @ignore */
	jsx.logging.ConsoleAppender.prototype.initialize = function(_name)
	{
		if(!_name)
		{
			var _name = "Default";
		}
		jsx.logging.ConsoleAppender.superclass.initialize.apply(this, [_name]);

		var me = this;
		this.name = _name;
		this.suffix = "logging_console";

		this.scrollIndex = 200;
		this.scrollIndexLocked = 0;

		this.container = document.createElement("div");
		this.container.id = this.name +"."+ this.suffix;

		var containerStyle = this.container.style;
		containerStyle.backgroundColor = "#b5c9c6";
		containerStyle.border = "1px solid #000000";

		containerStyle.position = "absolute";
		containerStyle.zIndex = jsx.logging.ConsoleAppender.Z_INDEX++ + "";

		this.containerLeft = "10px";
		containerStyle.left = this.containerLeft;

		this.containerTop = "400px";
		containerStyle.top = this.containerTop;

		this.containerWidth = (screen.width-50)+"px";
		containerStyle.width = this.containerWidth;

//********************************************
// Controls
//********************************************
		var controls = document.createElement("div");
		var controlsStyle = controls.style;
		controlsStyle.width = "100%";
		controlsStyle.height = "20px";

//********************************************
// Appender Name
//********************************************
		var title = document.createElement("div");
		var titleStyle = title.style;
		titleStyle.display = "inline";
		titleStyle.color = "#000000";
		titleStyle.fontWeight = "bold";
		titleStyle.paddingLeft = "5px";
		titleStyle.paddingRight = "5px";
		title.appendChild(document.createTextNode(this.name + " Console Appender"));
//********************************************
//********************************************

//********************************************
// level filters
//********************************************
		var filters = document.createElement("div");
		var filtersStyle = filters.style;
		filtersStyle.display = "inline";
		filtersStyle.paddingLeft = "5px";
		filtersStyle.paddingRight = "5px";

		var filterTitle = document.createElement("span");
		filterTitleStyle = filterTitle.style;
		filterTitleStyle.color = "#000000";
		filterTitleStyle.fontWeight = "bold";
		filterTitle.appendChild(document.createTextNode("Filters:"));

		var trace = document.createElement("input");
		var debug = document.createElement("input");
		var info = document.createElement("input");
		var warn = document.createElement("input");
		var error = document.createElement("input");
		var fatal = document.createElement("input");
		trace.type = "checkbox";
		debug.type = "checkbox";
		info.type = "checkbox";
		warn.type = "checkbox";
		error.type = "checkbox";
		fatal.type = "checkbox";
		trace.id = this.container.id + ".trace_chk";
		debug.id = this.container.id + ".debug_chk";
		info.id = this.container.id + ".info_chk";
		warn.id = this.container.id + ".warn_chk";
		error.id = this.container.id + ".error_chk";
		fatal.id = this.container.id + ".fatal_chk";

		var traceSpan = document.createElement("span");
		var debugSpan = document.createElement("span");
		var infoSpan = document.createElement("span");
		var warnSpan = document.createElement("span");
		var errorSpan = document.createElement("span");
		var fatalSpan = document.createElement("span");

		var traceSpanStyle = traceSpan.style;
		var debugSpanStyle = debugSpan.style;
		var infoSpanStyle = infoSpan.style;
		var warnSpanStyle = warnSpan.style;
		var errorSpanStyle = errorSpan.style;
		var fatalSpanStyle = fatalSpan.style;

		traceSpanStyle.color = jsx.logging.ConsoleAppender.TRACE_COLOR;
		debugSpanStyle.color = jsx.logging.ConsoleAppender.DEBUG_COLOR;
		infoSpanStyle.color = jsx.logging.ConsoleAppender.INFO_COLOR;
		warnSpanStyle.color = jsx.logging.ConsoleAppender.WARN_COLOR;
		errorSpanStyle.color = jsx.logging.ConsoleAppender.ERROR_COLOR;
		fatalSpanStyle.color = jsx.logging.ConsoleAppender.FATAL_COLOR;

		traceSpanStyle.fontWeight = "bold";
		debugSpanStyle.fontWeight = "bold";
		infoSpanStyle.fontWeight = "bold";
		warnSpanStyle.fontWeight = "bold";
		errorSpanStyle.fontWeight = "bold";
		fatalSpanStyle.fontWeight = "bold";

		traceSpan.appendChild(document.createTextNode("trace "));
		debugSpan.appendChild(document.createTextNode("debug "));
		infoSpan.appendChild(document.createTextNode("info "));
		warnSpan.appendChild(document.createTextNode("warn "));
		errorSpan.appendChild(document.createTextNode("error "));
		fatalSpan.appendChild(document.createTextNode("fatal"));

		filters.appendChild(filterTitle);
		filters.appendChild(trace);
		filters.appendChild(traceSpan);
		filters.appendChild(debug);
		filters.appendChild(debugSpan);
		filters.appendChild(info);
		filters.appendChild(infoSpan);
		filters.appendChild(warn);
		filters.appendChild(warnSpan);
		filters.appendChild(error);
		filters.appendChild(errorSpan);
		filters.appendChild(fatal);
		filters.appendChild(fatalSpan);
//********************************************
//********************************************

//********************************************
// Display
//********************************************
		var display = document.createElement("div");
		var displayStyle = display.style;
		displayStyle.display = "inline";
		displayStyle.paddingLeft = "5px";
		displayStyle.paddingRight = "5px";

		var scrollLockChk = document.createElement("input");
		scrollLockChk.type = "checkbox";
		scrollLockChk.id = this.container.id + ".scroll_lock_chk";

		var scrollLockSpan = document.createElement("span");
		var scrollLockSpanStyle = scrollLockSpan.style;
		scrollLockSpanStyle.color = "#000000";
		scrollLockSpanStyle.fontWeight = "bold";
		scrollLockSpan.appendChild(document.createTextNode("Scroll Lock "));

		var clearLogsBtn = document.createElement("input");
		clearLogsBtn.type = "button";
		clearLogsBtn.id = this.container.id + ".clear_btn";
		clearLogsBtn.value = "Clear";

		var minBtn = document.createElement("input");
		var maxBtn = document.createElement("input");
		maxBtn.style.display = "none";
		var closeBtn = document.createElement("input");

		minBtn.type = "button";
		maxBtn.type = "button";
		closeBtn.type = "button";

		minBtn.id = this.container.id + ".min_btn";
		maxBtn.id = this.container.id + ".max_btn";
		closeBtn.id = this.container.id + ".close_btn";

		minBtn.value = "_";
		maxBtn.value = "+";
		closeBtn.value = "X";

		display.appendChild(scrollLockChk);
		display.appendChild(scrollLockSpan);
		display.appendChild(clearLogsBtn);
		display.appendChild(minBtn);
		display.appendChild(maxBtn);
		display.appendChild(closeBtn);
//********************************************
//********************************************
		// add all containers
		controls.appendChild(title);
		controls.appendChild(filters);
		controls.appendChild(display);
		this.container.appendChild(controls);


//********************************************
// iframe console
//********************************************
		var consoleContainer = document.createElement("iframe");
		consoleContainer.id = this.container.id + ".iframe_console";
		consoleContainer.name = consoleContainer.id;
		consoleContainer.frameBorder = "0";
		consoleContainer.scrolling = "auto";

		this.consoleWidth = "99%";
		consoleContainer.width = this.consoleWidth;

		this.consoleHeight = "100%";
		consoleContainer.height = this.consoleHeight;

		this.container.appendChild(consoleContainer);
		document.getElementsByTagName("body")[0].appendChild(this.container);

		// IE hack, for some reason you need to try to reference the element so it is
		// recognized in the dom
		if(!frames[consoleContainer.name].document)
		{
			try{document.getElementById(consoleContainer.id)}catch(_exception){}
		}

		this.loggingConsole = frames[consoleContainer.name];
		var consoleDoc = this.loggingConsole.document;
		consoleDoc.open();
		consoleDoc.write("<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>\n");
		consoleDoc.write("<html><head><title>JavaScript SDK Logging</title></head><body></body></html>");
		consoleDoc.close();
		consoleDoc.body.style.backgroundColor = "#ffffff";
//********************************************
//********************************************

		// these statements need to be below appending to the body
		trace.checked = "checked";
		debug.checked = "checked";
		info.checked = "checked";
		warn.checked = "checked";
		error.checked = "checked";
		fatal.checked = "checked";

//********************************************
// Events after the appending to the body
//********************************************
		new jsx.event.EventDispatcher(controls, "onmouseover", true).addListener(function(_eventMouseOver)
		{
			var _eventMouseOver = new jsx.event.Event(_eventMouseOver || $GLOBAL_OBJECT.event);
			_eventMouseOver.getObject().style.cursor = "move";
		});

		// filters events
		this.showTrace = true;
		this.showDebug = true;
		this.showInfo = true;
		this.showWarn = true;
		this.showError = true;
		this.showFatal = true;
		var doFilter = function()
		{
			me.showTrace = jsx.dom.Element.getElement(trace.id).checked;
			me.showDebug = jsx.dom.Element.getElement(debug.id).checked;
			me.showInfo = jsx.dom.Element.getElement(info.id).checked;
			me.showWarn = jsx.dom.Element.getElement(warn.id).checked;
			me.showError = jsx.dom.Element.getElement(error.id).checked;
			me.showFatal = jsx.dom.Element.getElement(fatal.id).checked;
			var divMsgs = consoleDoc.getElementsByTagName("div");
			for(var i=0;i<divMsgs.length;i++)
			{
				var divMsg = divMsgs[i];
				divMsg.style.display = "";
				if((!me.showTrace && jsx.logging.Level.TRACE.equals(jsx.logging.Level.toLevel(divMsg.className))) ||
					(!me.showDebug && jsx.logging.Level.DEBUG.equals(jsx.logging.Level.toLevel(divMsg.className))) ||
					(!me.showInfo && jsx.logging.Level.INFO.equals(jsx.logging.Level.toLevel(divMsg.className))) ||
					(!me.showWarn && jsx.logging.Level.WARN.equals(jsx.logging.Level.toLevel(divMsg.className))) ||
					(!me.showError && jsx.logging.Level.ERROR.equals(jsx.logging.Level.toLevel(divMsg.className))) ||
					(!me.showFatal && jsx.logging.Level.FATAL.equals(jsx.logging.Level.toLevel(divMsg.className))))
				{
					divMsg.style.display = "none";
				}
			}
		}
		// filter level events
		new jsx.event.EventDispatcher(trace, "onclick").addListener(function(_event)
		{
			doFilter();
		});
		new jsx.event.EventDispatcher(trace, "onmouseover", true).addListener(function(_eventMouseOver)
		{
			var _eventMouseOver = new jsx.event.Event(_eventMouseOver || $GLOBAL_OBJECT.event);
			_eventMouseOver.getObject().style.cursor = "pointer";
			_eventMouseOver.stopEvent();
		});

		new jsx.event.EventDispatcher(debug, "onclick").addListener(function(_event)
		{
			doFilter();
		});
		new jsx.event.EventDispatcher(debug, "onmouseover", true).addListener(function(_eventMouseOver)
		{
			var _eventMouseOver = new jsx.event.Event(_eventMouseOver || $GLOBAL_OBJECT.event);
			_eventMouseOver.getObject().style.cursor = "pointer";
			_eventMouseOver.stopEvent();
		});

		new jsx.event.EventDispatcher(info, "onclick").addListener(function(_event)
		{
			doFilter();
		});
		new jsx.event.EventDispatcher(info, "onmouseover", true).addListener(function(_eventMouseOver)
		{
			var _eventMouseOver = new jsx.event.Event(_eventMouseOver || $GLOBAL_OBJECT.event);
			_eventMouseOver.getObject().style.cursor = "pointer";
			_eventMouseOver.stopEvent();
		});

		new jsx.event.EventDispatcher(warn, "onclick").addListener(function(_event)
		{
			doFilter();
		});
		new jsx.event.EventDispatcher(warn, "onmouseover", true).addListener(function(_eventMouseOver)
		{
			var _eventMouseOver = new jsx.event.Event(_eventMouseOver || $GLOBAL_OBJECT.event);
			_eventMouseOver.getObject().style.cursor = "pointer";
			_eventMouseOver.stopEvent();
		});

		new jsx.event.EventDispatcher(error, "onclick").addListener(function(_event)
		{
			doFilter();
		});
		new jsx.event.EventDispatcher(error, "onmouseover", true).addListener(function(_eventMouseOver)
		{
			var _eventMouseOver = new jsx.event.Event(_eventMouseOver || $GLOBAL_OBJECT.event);
			_eventMouseOver.getObject().style.cursor = "pointer";
			_eventMouseOver.stopEvent();
		});

		new jsx.event.EventDispatcher(fatal, "onclick").addListener(function(_event)
		{
			doFilter();
		});
		new jsx.event.EventDispatcher(fatal, "onmouseover", true).addListener(function(_eventMouseOver)
		{
			var _eventMouseOver = new jsx.event.Event(_eventMouseOver || $GLOBAL_OBJECT.event);
			_eventMouseOver.getObject().style.cursor = "pointer";
			_eventMouseOver.stopEvent();
		});

		this.scrollLocked = false;
		new jsx.event.EventDispatcher(scrollLockChk, "onclick").addListener(function(_event)
		{
			me.scrollLocked = jsx.dom.Element.getElement(scrollLockChk.id).checked;
			me.scrollIndexLocked = 0;
		});
		new jsx.event.EventDispatcher(scrollLockChk, "onmouseover", true).addListener(function(_eventMouseOver)
		{
			var _eventMouseOver = new jsx.event.Event(_eventMouseOver || $GLOBAL_OBJECT.event);
			_eventMouseOver.getObject().style.cursor = "pointer";
			_eventMouseOver.stopEvent();
		});

		new jsx.event.EventDispatcher(clearLogsBtn, "onclick").addListener(function(_event)
		{
			while(consoleDoc.body.firstChild)
			{
			  consoleDoc.body.removeChild(consoleDoc.body.firstChild);
			}
		});
		new jsx.event.EventDispatcher(clearLogsBtn, "onmouseover", true).addListener(function(_eventMouseOver)
		{
			var _eventMouseOver = new jsx.event.Event(_eventMouseOver || $GLOBAL_OBJECT.event);
			_eventMouseOver.getObject().style.cursor = "pointer";
			_eventMouseOver.stopEvent();
		});

		new jsx.event.EventDispatcher(minBtn, "onclick").addListener(function(_event)
		{
// TODO, need to move container down
			consoleContainer.height = "0px";

			minBtn.style.display = "none";
			maxBtn.style.display = "";
		});
		new jsx.event.EventDispatcher(minBtn, "onmouseover", true).addListener(function(_eventMouseOver)
		{
			var _eventMouseOver = new jsx.event.Event(_eventMouseOver || $GLOBAL_OBJECT.event);
			_eventMouseOver.getObject().style.cursor = "pointer";
			_eventMouseOver.stopEvent();
		});

		new jsx.event.EventDispatcher(maxBtn, "onclick").addListener(function(_event)
		{
// TODO, need to move container up
			consoleContainer.height = me.consoleHeight;

			maxBtn.style.display = "none";
			minBtn.style.display = "";
		});
		new jsx.event.EventDispatcher(maxBtn, "onmouseover", true).addListener(function(_eventMouseOver)
		{
			var _eventMouseOver = new jsx.event.Event(_eventMouseOver || $GLOBAL_OBJECT.event);
			_eventMouseOver.getObject().style.cursor = "pointer";
			_eventMouseOver.stopEvent();
		});

		new jsx.event.EventDispatcher(closeBtn, "onclick").addListener(function(_event)
		{
			me.container.style.display = "none";
		});
		new jsx.event.EventDispatcher(closeBtn, "onmouseover", true).addListener(function(_eventMouseOver)
		{
			var _eventMouseOver = new jsx.event.Event(_eventMouseOver || $GLOBAL_OBJECT.event);
			_eventMouseOver.getObject().style.cursor = "pointer";
			_eventMouseOver.stopEvent();
		});
//********************************************
//********************************************

		this.initDraggable();
	}

	jsx.logging.ConsoleAppender.Z_INDEX = 1000;

	jsx.logging.ConsoleAppender.TRACE_COLOR	= "#5f9ea0";
	jsx.logging.ConsoleAppender.DEBUG_COLOR	= "#339900";
	jsx.logging.ConsoleAppender.INFO_COLOR	= "#3300cc";
	jsx.logging.ConsoleAppender.WARN_COLOR	= "#ffd700";
	jsx.logging.ConsoleAppender.ERROR_COLOR	= "#ff0000";
	jsx.logging.ConsoleAppender.FATAL_COLOR	= "#660066";

	jsx.logging.ConsoleAppender.prototype.mousedown = function(_event)
	{
		this.container.style.zIndex = jsx.logging.ConsoleAppender.Z_INDEX++ + "";
		this.container.style.filter = "alpha(opacity=60)";
		this.container.style.opacity = ".6";
	}

	jsx.logging.ConsoleAppender.prototype.mousemove = function(_event){}

	jsx.logging.ConsoleAppender.prototype.mouseup = function(_event)
	{
		this.container.style.filter = "";
		this.container.style.opacity = "";
	}

	jsx.logging.ConsoleAppender.prototype.getConsole = function()
	{
		return this.loggingConsole;
	}

	jsx.logging.ConsoleAppender.prototype.append = function(_logEvent)
	{
		// return if not showing the level
		if((!this.showTrace && jsx.logging.Level.TRACE.equals(_logEvent.getLevel())) ||
			(!this.showDebug && jsx.logging.Level.DEBUG.equals(_logEvent.getLevel())) ||
			(!this.showInfo && jsx.logging.Level.INFO.equals(_logEvent.getLevel())) ||
			(!this.showWarn && jsx.logging.Level.WARN.equals(_logEvent.getLevel())) ||
			(!this.showError && jsx.logging.Level.ERROR.equals(_logEvent.getLevel())) ||
			(!this.showFatal && jsx.logging.Level.FATAL.equals(_logEvent.getLevel())))
		{
			return;
		}

		// log message as string
		var layout = this.getLayout();
		var msg = new jsx.lang.StringBuffer()
						.append(layout.getHeader())
						.append(layout.format(_logEvent))
						.append(layout.getFooter());

		var msgColor = "";
		switch(_logEvent.getLevel().getNumber())
		{
			case jsx.logging.Level.TRACE_INT:
				msgColor = jsx.logging.ConsoleAppender.TRACE_COLOR;
				break;
			case jsx.logging.Level.DEBUG_INT:
				msgColor = jsx.logging.ConsoleAppender.DEBUG_COLOR;
				break;
			case jsx.logging.Level.INFO_INT:
				msgColor = jsx.logging.ConsoleAppender.INFO_COLOR;
				break;
			case jsx.logging.Level.WARN_INT:
				msgColor = jsx.logging.ConsoleAppender.WARN_COLOR;
				break;
			case jsx.logging.Level.ERROR_INT:
				msgColor = jsx.logging.ConsoleAppender.ERROR_COLOR;
				break;
			case jsx.logging.Level.FATAL_INT:
				msgColor = jsx.logging.ConsoleAppender.FATAL_COLOR;
				break;
			default:
				// nothing
		}

		var winConsole = this.getConsole();
		var consoleDoc = winConsole.document;

		var msgCont = consoleDoc.createElement("div");
		msgCont.className = _logEvent.getLevel().getName();

		var msgContStyle = msgCont.style;
		msgContStyle.height = "20px";
		msgContStyle.width = "95%";
		msgContStyle.borderBottom = "#ccc dashed 1px";
		msgContStyle.color = msgColor;
		msgContStyle.fontWeight = "bold";
		msgContStyle.fontFamily = "courier new, courier, monospace";

		msgCont.appendChild(consoleDoc.createTextNode(msg))
		consoleDoc.body.appendChild(msgCont);

		this.scrollIndex += 20;
		if(!this.scrollLocked)
		{
			winConsole.scrollTo(0, this.scrollIndex);
		}
		else
		{
			// locked scrolling
			if(this.scrollIndexLocked == 0)
			{
				this.scrollIndexLocked = this.scrollIndex;
				winConsole.scrollTo(0, this.scrollIndexLocked);
			}
		}
	}


jsx.logging.ConsoleAppender.prototype.mousemove_mixin = jsx.dom.behavior.draggable.Draggable.mousemove_mixin;
jsx.logging.ConsoleAppender.prototype.mousedown_mixin = jsx.dom.behavior.draggable.Draggable.mousedown_mixin;
jsx.logging.ConsoleAppender.prototype.mouseup_mixin = jsx.dom.behavior.draggable.Draggable.mouseup_mixin;
jsx.logging.ConsoleAppender.prototype.initDraggable = jsx.dom.behavior.draggable.Draggable.initDraggable;

jsx.logging.ConsoleAppender.PACKAGE = "jsx.logging";
jsx.logging.ConsoleAppender.CLASS = "jsx.logging.ConsoleAppender";
jsx.logging.ConsoleAppender.SUPER_CLASS = "jsx.logging.DefaultAppender";
jsx.logging.ConsoleAppender.IMPORTS = ["jsx.lang.StringBuffer","jsx.logging.DefaultAppender","jsx.logging.DefaultLayout","jsx.logging.Level","jsx.event.Event","jsx.event.EventDispatcher","jsx.dom.Element","jsx.dom.behavior.draggable.Draggable"];
jsx.logging.ConsoleAppender.INTERFACES = [];
jsx.logging.ConsoleAppender.MIXINS = ["jsx.dom.behavior.draggable.Draggable"];
jsx.logging.ConsoleAppender.getName = function(){return jsx.logging.ConsoleAppender.CLASS;}
jsx.logging.ConsoleAppender.klass = new jsx.lang.Class(jsx.logging.ConsoleAppender.getName());
jsx.logging.ConsoleAppender.prototype.getClass = function(){return jsx.logging.ConsoleAppender.klass;}
jsx.logging.ConsoleAppender.WARNINGS = [];
