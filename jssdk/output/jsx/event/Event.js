
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class Event
	* @constructor
	* @param {Event} _event
	*/
	jsx.event.Event = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.event.Event.prototype.initialize = function(_event)
	{
		this.event = _event;
	}

	jsx.event.Event.KEY_BACKSPACE		= 8;
	jsx.event.Event.KEY_TAB			= 9;
	jsx.event.Event.KEY_RETURN		= 13;
	jsx.event.Event.KEY_SHIFT			= 16;
	jsx.event.Event.KEY_ESC			= 27;
	jsx.event.Event.KEY_LEFT			= 37;
	jsx.event.Event.KEY_UP			= 38;
	jsx.event.Event.KEY_RIGHT			= 39;
	jsx.event.Event.KEY_DOWN			= 40;
	jsx.event.Event.KEY_HOME			= 36;
	jsx.event.Event.KEY_END			= 35;
	jsx.event.Event.KEY_PAGEUP		= 33;
	jsx.event.Event.KEY_PAGEDOWN		= 34;

	jsx.event.Event.prototype.getEvent = function()
	{
		return this.event;
	}

	jsx.event.Event.prototype.getType = function()
	{
		return this.event.type;
	}

	jsx.event.Event.prototype.getObject = function()
	{
		return this.event.target || this.event.srcElement;
	}

	jsx.event.Event.prototype.isControlKeyDown = function()
	{
		return this.event.ctrlKey;
	}

	jsx.event.Event.prototype.isLeftClick = function()
	{
		return (((this.event.which) && (this.event.which == 1)) ||
				((this.event.button) && (this.event.button == 1)));
	}

	jsx.event.Event.prototype.getPointerX = function()
	{
		return this.event.pageX ||
				(this.event.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft));
	}

	jsx.event.Event.prototype.getPointerY = function()
	{
		return this.event.pageY ||
				(this.event.clientY + (document.documentElement.scrollTop || document.body.scrollTop));
	}

	jsx.event.Event.prototype.stopEvent = function()
	{
		if(this.event.stopPropagation) this.event.stopPropagation(); else this.event.cancelBubble = true;
	}

	jsx.event.Event.prototype.stopDefault = function()
	{
		if(this.event.preventDefault) this.event.preventDefault(); else this.event.returnValue = false;
	}

	jsx.event.Event.prototype.stopSelecting = function()
	{
		if(typeof document.onselectstart != 'undefined')
		{
			document.onselectstart = function(){return false;}
		}
	}

	jsx.event.Event.prototype.startSelecting = function()
	{
		if(typeof document.onselectstart != 'undefined')
		{
			document.onselectstart = function(){return true;}
		}
	}


jsx.event.Event.PACKAGE = "jsx.event";
jsx.event.Event.CLASS = "jsx.event.Event";
jsx.event.Event.SUPER_CLASS = "";
jsx.event.Event.IMPORTS = [];
jsx.event.Event.INTERFACES = [];
jsx.event.Event.MIXINS = [];
jsx.event.Event.getName = function(){return jsx.event.Event.CLASS;}
jsx.event.Event.klass = new jsx.lang.Class(jsx.event.Event.getName());
jsx.event.Event.prototype.getClass = function(){return jsx.event.Event.klass;}
jsx.event.Event.WARNINGS = [];
