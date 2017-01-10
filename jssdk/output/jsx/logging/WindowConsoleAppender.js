jsx.logging.WindowConsoleAppender = function(){this.initialize.apply(this, arguments);}
jsx.logging.WindowConsoleAppender.prototype = new jsx.logging.DefaultAppender();
jsx.logging.WindowConsoleAppender.prototype.constructor = jsx.logging.WindowConsoleAppender;
jsx.logging.WindowConsoleAppender.superclass = jsx.logging.DefaultAppender.prototype;


	/** @ignore */
	jsx.logging.WindowConsoleAppender.prototype.initialize = function(_name)
	{
		try
		{
			width = "800";
			height = "400";
			parms = "resizable=yes";

			// get dimensions to center the popup
			var screenWidth = screen.availWidth;
			var screenHeight = screen.availHeight;
			var leftPos = (screenWidth - width) / 2;
			var topPos  = (screenHeight - height) /2;

			var newWindow = window.open("about:blank", "_blank","width=" + width + ",height=" + height + ",top=" + topPos + ",left=" + leftPos + "," + parms);

			var newWindowDoc = newWindow.document;
			newWindowDoc.open();
			newWindowDoc.write("<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN'");
			newWindowDoc.write(" 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>\n");
			newWindowDoc.write("<html><head><title>JavaScript SDK Logging</title>");
			newWindowDoc.write("</head><body></body></html>");
			newWindowDoc.close();

			newWindow.focus();
		}
		catch(exception){}

		if(!_name)
		{
			var _name = "Default";
		}
		jsx.logging.WindowConsoleAppender.superclass.initialize.apply(this, [_name]);

		var me = this;
		this.name = _name;
		this.suffix = "logging_console";

		this.consoleWindow = newWindowDoc;

		this.container = this.consoleWindow.createElement("div");
		this.container.id = this.name +"."+ this.suffix;

		var containerStyle = this.container.style;
		containerStyle.width = "100%";
		containerStyle.height = "100%";

//********************************************
// Controls
//********************************************
		var controls = this.consoleWindow.createElement("div");
		var controlsStyle = controls.style;
		controlsStyle.backgroundColor = "#b5c9c6";
		controlsStyle.width = "100%";
		controlsStyle.height = "20px";

//********************************************
// Appender Name
//********************************************
		var title = this.consoleWindow.createElement("div");
		var titleStyle = title.style;
		titleStyle.display = "inline";
		titleStyle.color = "#000000";
		titleStyle.fontWeight = "bold";
		titleStyle.paddingLeft = "5px";
		titleStyle.paddingRight = "5px";
		title.appendChild(this.consoleWindow.createTextNode(this.name + " Console Appender"));
//********************************************
//********************************************

//********************************************
// level filters
//********************************************
		var filters = this.consoleWindow.createElement("div");
		var filtersStyle = filters.style;
		filtersStyle.display = "inline";
		filtersStyle.paddingLeft = "5px";
		filtersStyle.paddingRight = "5px";

		var filterTitle = this.consoleWindow.createElement("span");
		filterTitleStyle = filterTitle.style;
		filterTitleStyle.color = "#000000";
		filterTitleStyle.fontWeight = "bold";
		filterTitle.appendChild(this.consoleWindow.createTextNode("Filters:"));

		var trace = this.consoleWindow.createElement("input");
		var debug = this.consoleWindow.createElement("input");
		var info = this.consoleWindow.createElement("input");
		var warn = this.consoleWindow.createElement("input");
		var error = this.consoleWindow.createElement("input");
		var fatal = this.consoleWindow.createElement("input");
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

		var traceSpan = this.consoleWindow.createElement("span");
		var debugSpan = this.consoleWindow.createElement("span");
		var infoSpan = this.consoleWindow.createElement("span");
		var warnSpan = this.consoleWindow.createElement("span");
		var errorSpan = this.consoleWindow.createElement("span");
		var fatalSpan = this.consoleWindow.createElement("span");

		var traceSpanStyle = traceSpan.style;
		var debugSpanStyle = debugSpan.style;
		var infoSpanStyle = infoSpan.style;
		var warnSpanStyle = warnSpan.style;
		var errorSpanStyle = errorSpan.style;
		var fatalSpanStyle = fatalSpan.style;

		traceSpanStyle.color = jsx.logging.WindowConsoleAppender.TRACE_COLOR;
		debugSpanStyle.color = jsx.logging.WindowConsoleAppender.DEBUG_COLOR;
		infoSpanStyle.color = jsx.logging.WindowConsoleAppender.INFO_COLOR;
		warnSpanStyle.color = jsx.logging.WindowConsoleAppender.WARN_COLOR;
		errorSpanStyle.color = jsx.logging.WindowConsoleAppender.ERROR_COLOR;
		fatalSpanStyle.color = jsx.logging.WindowConsoleAppender.FATAL_COLOR;

		traceSpanStyle.fontWeight = "bold";
		debugSpanStyle.fontWeight = "bold";
		infoSpanStyle.fontWeight = "bold";
		warnSpanStyle.fontWeight = "bold";
		errorSpanStyle.fontWeight = "bold";
		fatalSpanStyle.fontWeight = "bold";

		traceSpan.appendChild(this.consoleWindow.createTextNode("trace "));
		debugSpan.appendChild(this.consoleWindow.createTextNode("debug "));
		infoSpan.appendChild(this.consoleWindow.createTextNode("info "));
		warnSpan.appendChild(this.consoleWindow.createTextNode("warn "));
		errorSpan.appendChild(this.consoleWindow.createTextNode("error "));
		fatalSpan.appendChild(this.consoleWindow.createTextNode("fatal"));

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
		var display = this.consoleWindow.createElement("div");
		var displayStyle = display.style;
		displayStyle.display = "inline";
		displayStyle.paddingLeft = "5px";
		displayStyle.paddingRight = "5px";

		var scrollLockChk = this.consoleWindow.createElement("input");
		scrollLockChk.type = "checkbox";
		scrollLockChk.id = this.container.id + ".scroll_lock_chk";

		var scrollLockSpan = this.consoleWindow.createElement("span");
		var scrollLockSpanStyle = scrollLockSpan.style;
		scrollLockSpanStyle.color = "#000000";
		scrollLockSpanStyle.fontWeight = "bold";
		scrollLockSpan.appendChild(this.consoleWindow.createTextNode("Scroll Lock "));

		var clearLogsBtn = this.consoleWindow.createElement("input");
		clearLogsBtn.type = "button";
		clearLogsBtn.id = this.container.id + ".clear_btn";
		clearLogsBtn.value = "Clear";

		display.appendChild(scrollLockChk);
		display.appendChild(scrollLockSpan);
		display.appendChild(clearLogsBtn);
//********************************************
//********************************************
		// add all containers
		controls.appendChild(title);
		controls.appendChild(filters);
		controls.appendChild(display);
		this.container.appendChild(controls);

//********************************************
// div console
//********************************************
		var consoleContainer = this.consoleWindow.createElement("div");
		consoleContainer.id = this.container.id + ".div_console";
		var consoleContainerStyle = consoleContainer.style;
		consoleContainerStyle.width = "100%";
		consoleContainerStyle.height = "100%";
		consoleContainerStyle.overflow = "auto";

		this.loggingConsole = consoleContainer;

		this.container.appendChild(consoleContainer);
//********************************************
//********************************************

		this.consoleWindow.getElementsByTagName("body")[0].appendChild(this.container);

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
		// filters events
		this.showTrace = true;
		this.showDebug = true;
		this.showInfo = true;
		this.showWarn = true;
		this.showError = true;
		this.showFatal = true;
		var doFilter = function()
		{
			me.showTrace = jsx.dom.Element.getElement(trace.id, me.consoleWindow).checked;
			me.showDebug = jsx.dom.Element.getElement(debug.id, me.consoleWindow).checked;
			me.showInfo = jsx.dom.Element.getElement(info.id, me.consoleWindow).checked;
			me.showWarn = jsx.dom.Element.getElement(warn.id, me.consoleWindow).checked;
			me.showError = jsx.dom.Element.getElement(error.id, me.consoleWindow).checked;
			me.showFatal = jsx.dom.Element.getElement(fatal.id, me.consoleWindow).checked;
			var divMsgs = me.loggingConsole.getElementsByTagName("div");
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
			me.scrollLocked = jsx.dom.Element.getElement(scrollLockChk.id, me.consoleWindow).checked;
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
			while(me.loggingConsole.firstChild)
			{
			  me.loggingConsole.removeChild(me.loggingConsole.firstChild);
			}
		});
		new jsx.event.EventDispatcher(clearLogsBtn, "onmouseover", true).addListener(function(_eventMouseOver)
		{
			var _eventMouseOver = new jsx.event.Event(_eventMouseOver || $GLOBAL_OBJECT.event);
			_eventMouseOver.getObject().style.cursor = "pointer";
			_eventMouseOver.stopEvent();
		});
//********************************************
//********************************************
	}

	jsx.logging.WindowConsoleAppender.TRACE_COLOR	= "#5f9ea0";
	jsx.logging.WindowConsoleAppender.DEBUG_COLOR	= "#339900";
	jsx.logging.WindowConsoleAppender.INFO_COLOR	= "#3300cc";
	jsx.logging.WindowConsoleAppender.WARN_COLOR	= "#ffd700";
	jsx.logging.WindowConsoleAppender.ERROR_COLOR	= "#ff0000";
	jsx.logging.WindowConsoleAppender.FATAL_COLOR	= "#660066";

	jsx.logging.WindowConsoleAppender.prototype.append = function(_logEvent)
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
				msgColor = jsx.logging.WindowConsoleAppender.TRACE_COLOR;
				break;
			case jsx.logging.Level.DEBUG_INT:
				msgColor = jsx.logging.WindowConsoleAppender.DEBUG_COLOR;
				break;
			case jsx.logging.Level.INFO_INT:
				msgColor = jsx.logging.WindowConsoleAppender.INFO_COLOR;
				break;
			case jsx.logging.Level.WARN_INT:
				msgColor = jsx.logging.WindowConsoleAppender.WARN_COLOR;
				break;
			case jsx.logging.Level.ERROR_INT:
				msgColor = jsx.logging.WindowConsoleAppender.ERROR_COLOR;
				break;
			case jsx.logging.Level.FATAL_INT:
				msgColor = jsx.logging.WindowConsoleAppender.FATAL_COLOR;
				break;
			default:
				// nothing
		}

		var msgCont = this.consoleWindow.createElement("div");
		msgCont.className = _logEvent.getLevel().getName();

		var msgContStyle = msgCont.style;
		msgContStyle.height = "20px";
		msgContStyle.width = "95%";
		msgContStyle.borderBottom = "#ccc dashed 1px";
		msgContStyle.color = msgColor;
		msgContStyle.fontWeight = "bold";
		msgContStyle.fontFamily = "courier new, courier, monospace";
		msgContStyle.fontSize = "10px";

		msgCont.appendChild(this.consoleWindow.createTextNode(msg));

		this.loggingConsole.appendChild(msgCont);

		msgCont.focus();
	}


jsx.logging.WindowConsoleAppender.PACKAGE = "jsx.logging";
jsx.logging.WindowConsoleAppender.CLASS = "jsx.logging.WindowConsoleAppender";
jsx.logging.WindowConsoleAppender.SUPER_CLASS = "jsx.logging.DefaultAppender";
jsx.logging.WindowConsoleAppender.IMPORTS = ["jsx.lang.StringBuffer","jsx.logging.DefaultAppender","jsx.logging.DefaultLayout","jsx.logging.Level","jsx.event.Event","jsx.event.EventDispatcher","jsx.dom.Element"];
jsx.logging.WindowConsoleAppender.INTERFACES = [];
jsx.logging.WindowConsoleAppender.MIXINS = [];
jsx.logging.WindowConsoleAppender.getName = function(){return jsx.logging.WindowConsoleAppender.CLASS;}
jsx.logging.WindowConsoleAppender.klass = new jsx.lang.Class(jsx.logging.WindowConsoleAppender.getName());
jsx.logging.WindowConsoleAppender.prototype.getClass = function(){return jsx.logging.WindowConsoleAppender.klass;}
jsx.logging.WindowConsoleAppender.WARNINGS = [];
