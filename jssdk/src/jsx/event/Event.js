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

package jsx.event;

class Event
{
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class Event
	* @constructor
	* @param {Event} _event
	*/
	Event(_event)
	{
		this.event = _event;
	}

	Event.KEY_BACKSPACE		= 8;
	Event.KEY_TAB			= 9;
	Event.KEY_RETURN		= 13;
	Event.KEY_SHIFT			= 16;
	Event.KEY_ESC			= 27;
	Event.KEY_LEFT			= 37;
	Event.KEY_UP			= 38;
	Event.KEY_RIGHT			= 39;
	Event.KEY_DOWN			= 40;
	Event.KEY_HOME			= 36;
	Event.KEY_END			= 35;
	Event.KEY_PAGEUP		= 33;
	Event.KEY_PAGEDOWN		= 34;

	instance getEvent()
	{
		return this.event;
	}

	instance getType()
	{
		return this.event.type;
	}

	instance getObject()
	{
		return this.event.target || this.event.srcElement;
	}

	instance isControlKeyDown()
	{
		return this.event.ctrlKey;
	}

	instance isLeftClick()
	{
		return (((this.event.which) && (this.event.which == 1)) ||
				((this.event.button) && (this.event.button == 1)));
	}

	instance getPointerX()
	{
		return this.event.pageX ||
				(this.event.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft));
	}

	instance getPointerY()
	{
		return this.event.pageY ||
				(this.event.clientY + (document.documentElement.scrollTop || document.body.scrollTop));
	}

	instance stopEvent()
	{
		if(this.event.stopPropagation) this.event.stopPropagation(); else this.event.cancelBubble = true;
	}

	instance stopDefault()
	{
		if(this.event.preventDefault) this.event.preventDefault(); else this.event.returnValue = false;
	}

	instance stopSelecting()
	{
		if(typeof document.onselectstart != 'undefined')
		{
			document.onselectstart = function(){return false;}
		}
	}

	instance startSelecting()
	{
		if(typeof document.onselectstart != 'undefined')
		{
			document.onselectstart = function(){return true;}
		}
	}

}