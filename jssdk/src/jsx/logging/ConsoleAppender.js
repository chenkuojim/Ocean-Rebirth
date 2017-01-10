/*
 * JavaScript Software Development Kit - what JavaScript should be and can be - js-sdk.sourceforge.net
 * Copyright (C) 2006-2007 Mathew Sheets
 *
 * == BEGIN LICENSE ==
 *
 * Licensed under the terms of any of the following licenses at your
 * choice:
 *
 *  - GNU Lesser General Public License Version 2.1 or later (the "LGPL")
 *    http://www.gnu.org/licenses/lgpl.html
 *
 * == END LICENSE ==
 */

package jsx.logging;

import jsx.lang.StringBuffer;
import jsx.logging.DefaultAppender;
import jsx.logging.DefaultLayout;
import jsx.logging.Level;

import jsx.event.*;

import jsx.dom.Element;
import jsx.dom.behavior.draggable.Draggable;

class ConsoleAppender extends DefaultAppender mixin Draggable
{

	ConsoleAppender(_name)
	{
		if(!_name)
		{
			var _name = "Default";
		}
		super(_name);

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
		containerStyle.zIndex = ConsoleAppender.Z_INDEX++ + "";

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

		traceSpanStyle.color = ConsoleAppender.TRACE_COLOR;
		debugSpanStyle.color = ConsoleAppender.DEBUG_COLOR;
		infoSpanStyle.color = ConsoleAppender.INFO_COLOR;
		warnSpanStyle.color = ConsoleAppender.WARN_COLOR;
		errorSpanStyle.color = ConsoleAppender.ERROR_COLOR;
		fatalSpanStyle.color = ConsoleAppender.FATAL_COLOR;

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
		new EventDispatcher(controls, "onmouseover", true).addListener(function(_eventMouseOver)
		{
			var _eventMouseOver = new Event(_eventMouseOver || $GLOBAL_OBJECT.event);
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
			me.showTrace = Element.getElement(trace.id).checked;
			me.showDebug = Element.getElement(debug.id).checked;
			me.showInfo = Element.getElement(info.id).checked;
			me.showWarn = Element.getElement(warn.id).checked;
			me.showError = Element.getElement(error.id).checked;
			me.showFatal = Element.getElement(fatal.id).checked;
			var divMsgs = consoleDoc.getElementsByTagName("div");
			for(var i=0;i<divMsgs.length;i++)
			{
				var divMsg = divMsgs[i];
				divMsg.style.display = "";
				if((!me.showTrace && Level.TRACE.equals(Level.toLevel(divMsg.className))) ||
					(!me.showDebug && Level.DEBUG.equals(Level.toLevel(divMsg.className))) ||
					(!me.showInfo && Level.INFO.equals(Level.toLevel(divMsg.className))) ||
					(!me.showWarn && Level.WARN.equals(Level.toLevel(divMsg.className))) ||
					(!me.showError && Level.ERROR.equals(Level.toLevel(divMsg.className))) ||
					(!me.showFatal && Level.FATAL.equals(Level.toLevel(divMsg.className))))
				{
					divMsg.style.display = "none";
				}
			}
		}
		// filter level events
		new EventDispatcher(trace, "onclick").addListener(function(_event)
		{
			doFilter();
		});
		new EventDispatcher(trace, "onmouseover", true).addListener(function(_eventMouseOver)
		{
			var _eventMouseOver = new Event(_eventMouseOver || $GLOBAL_OBJECT.event);
			_eventMouseOver.getObject().style.cursor = "pointer";
			_eventMouseOver.stopEvent();
		});

		new EventDispatcher(debug, "onclick").addListener(function(_event)
		{
			doFilter();
		});
		new EventDispatcher(debug, "onmouseover", true).addListener(function(_eventMouseOver)
		{
			var _eventMouseOver = new Event(_eventMouseOver || $GLOBAL_OBJECT.event);
			_eventMouseOver.getObject().style.cursor = "pointer";
			_eventMouseOver.stopEvent();
		});

		new EventDispatcher(info, "onclick").addListener(function(_event)
		{
			doFilter();
		});
		new EventDispatcher(info, "onmouseover", true).addListener(function(_eventMouseOver)
		{
			var _eventMouseOver = new Event(_eventMouseOver || $GLOBAL_OBJECT.event);
			_eventMouseOver.getObject().style.cursor = "pointer";
			_eventMouseOver.stopEvent();
		});

		new EventDispatcher(warn, "onclick").addListener(function(_event)
		{
			doFilter();
		});
		new EventDispatcher(warn, "onmouseover", true).addListener(function(_eventMouseOver)
		{
			var _eventMouseOver = new Event(_eventMouseOver || $GLOBAL_OBJECT.event);
			_eventMouseOver.getObject().style.cursor = "pointer";
			_eventMouseOver.stopEvent();
		});

		new EventDispatcher(error, "onclick").addListener(function(_event)
		{
			doFilter();
		});
		new EventDispatcher(error, "onmouseover", true).addListener(function(_eventMouseOver)
		{
			var _eventMouseOver = new Event(_eventMouseOver || $GLOBAL_OBJECT.event);
			_eventMouseOver.getObject().style.cursor = "pointer";
			_eventMouseOver.stopEvent();
		});

		new EventDispatcher(fatal, "onclick").addListener(function(_event)
		{
			doFilter();
		});
		new EventDispatcher(fatal, "onmouseover", true).addListener(function(_eventMouseOver)
		{
			var _eventMouseOver = new Event(_eventMouseOver || $GLOBAL_OBJECT.event);
			_eventMouseOver.getObject().style.cursor = "pointer";
			_eventMouseOver.stopEvent();
		});

		this.scrollLocked = false;
		new EventDispatcher(scrollLockChk, "onclick").addListener(function(_event)
		{
			me.scrollLocked = Element.getElement(scrollLockChk.id).checked;
			me.scrollIndexLocked = 0;
		});
		new EventDispatcher(scrollLockChk, "onmouseover", true).addListener(function(_eventMouseOver)
		{
			var _eventMouseOver = new Event(_eventMouseOver || $GLOBAL_OBJECT.event);
			_eventMouseOver.getObject().style.cursor = "pointer";
			_eventMouseOver.stopEvent();
		});

		new EventDispatcher(clearLogsBtn, "onclick").addListener(function(_event)
		{
			while(consoleDoc.body.firstChild)
			{
			  consoleDoc.body.removeChild(consoleDoc.body.firstChild);
			}
		});
		new EventDispatcher(clearLogsBtn, "onmouseover", true).addListener(function(_eventMouseOver)
		{
			var _eventMouseOver = new Event(_eventMouseOver || $GLOBAL_OBJECT.event);
			_eventMouseOver.getObject().style.cursor = "pointer";
			_eventMouseOver.stopEvent();
		});

		new EventDispatcher(minBtn, "onclick").addListener(function(_event)
		{
// TODO, need to move container down
			consoleContainer.height = "0px";

			minBtn.style.display = "none";
			maxBtn.style.display = "";
		});
		new EventDispatcher(minBtn, "onmouseover", true).addListener(function(_eventMouseOver)
		{
			var _eventMouseOver = new Event(_eventMouseOver || $GLOBAL_OBJECT.event);
			_eventMouseOver.getObject().style.cursor = "pointer";
			_eventMouseOver.stopEvent();
		});

		new EventDispatcher(maxBtn, "onclick").addListener(function(_event)
		{
// TODO, need to move container up
			consoleContainer.height = me.consoleHeight;

			maxBtn.style.display = "none";
			minBtn.style.display = "";
		});
		new EventDispatcher(maxBtn, "onmouseover", true).addListener(function(_eventMouseOver)
		{
			var _eventMouseOver = new Event(_eventMouseOver || $GLOBAL_OBJECT.event);
			_eventMouseOver.getObject().style.cursor = "pointer";
			_eventMouseOver.stopEvent();
		});

		new EventDispatcher(closeBtn, "onclick").addListener(function(_event)
		{
			me.container.style.display = "none";
		});
		new EventDispatcher(closeBtn, "onmouseover", true).addListener(function(_eventMouseOver)
		{
			var _eventMouseOver = new Event(_eventMouseOver || $GLOBAL_OBJECT.event);
			_eventMouseOver.getObject().style.cursor = "pointer";
			_eventMouseOver.stopEvent();
		});
//********************************************
//********************************************

		this.initDraggable();
	}

	ConsoleAppender.Z_INDEX = 1000;

	ConsoleAppender.TRACE_COLOR	= "#5f9ea0";
	ConsoleAppender.DEBUG_COLOR	= "#339900";
	ConsoleAppender.INFO_COLOR	= "#3300cc";
	ConsoleAppender.WARN_COLOR	= "#ffd700";
	ConsoleAppender.ERROR_COLOR	= "#ff0000";
	ConsoleAppender.FATAL_COLOR	= "#660066";

	instance mousedown(_event)
	{
		this.container.style.zIndex = ConsoleAppender.Z_INDEX++ + "";
		this.container.style.filter = "alpha(opacity=60)";
		this.container.style.opacity = ".6";
	}

	instance mousemove(_event){}

	instance mouseup(_event)
	{
		this.container.style.filter = "";
		this.container.style.opacity = "";
	}

	instance getConsole()
	{
		return this.loggingConsole;
	}

	instance append(_logEvent)
	{
		// return if not showing the level
		if((!this.showTrace && Level.TRACE.equals(_logEvent.getLevel())) ||
			(!this.showDebug && Level.DEBUG.equals(_logEvent.getLevel())) ||
			(!this.showInfo && Level.INFO.equals(_logEvent.getLevel())) ||
			(!this.showWarn && Level.WARN.equals(_logEvent.getLevel())) ||
			(!this.showError && Level.ERROR.equals(_logEvent.getLevel())) ||
			(!this.showFatal && Level.FATAL.equals(_logEvent.getLevel())))
		{
			return;
		}

		// log message as string
		var layout = this.getLayout();
		var msg = new StringBuffer()
						.append(layout.getHeader())
						.append(layout.format(_logEvent))
						.append(layout.getFooter());

		var msgColor = "";
		switch(_logEvent.getLevel().getNumber())
		{
			case Level.TRACE_INT:
				msgColor = ConsoleAppender.TRACE_COLOR;
				break;
			case Level.DEBUG_INT:
				msgColor = ConsoleAppender.DEBUG_COLOR;
				break;
			case Level.INFO_INT:
				msgColor = ConsoleAppender.INFO_COLOR;
				break;
			case Level.WARN_INT:
				msgColor = ConsoleAppender.WARN_COLOR;
				break;
			case Level.ERROR_INT:
				msgColor = ConsoleAppender.ERROR_COLOR;
				break;
			case Level.FATAL_INT:
				msgColor = ConsoleAppender.FATAL_COLOR;
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

}