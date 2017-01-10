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

package jsx.dom.behavior.draggable;

import jsx.dom.Element;
import jsx.event.Event;
import jsx.event.EventDispatcher;

class Draggable
{
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class Draggable
	*/
	Draggable(){}

	static initDraggable()
	{
		var me = this;

		new EventDispatcher(this.container, "onmousedown", true).addListener(function(_eventMouseDown)
		{
			me.mousedown_mixin(_eventMouseDown || $GLOBAL_OBJECT.event);

			me.mousemoveEventDispatcher = new EventDispatcher(document, "onmousemove", true);
			me.mousemoveEventDispatcher.addListener(function(_event)
			{
				me.mousemove_mixin(_event || $GLOBAL_OBJECT.event);
			});

			me.mouseupEventDispatcher = new EventDispatcher(document, "onmouseup", true);
			me.mouseupEventDispatcher.addListener(function(_event)
			{
				me.mouseup_mixin(_event || $GLOBAL_OBJECT.event);
			});

			me.mouseoutEventDispatcher = new EventDispatcher(document, "onmouseout", true);
			me.mouseoutEventDispatcher.addListener(function(_event)
			{
				var _event = (_event || $GLOBAL_OBJECT.event);

				if(!_event.target){ _event = $GLOBAL_OBJECT.event; _event.relatedTarget = _event.toElement; }

				if(!_event.relatedTarget)
				{
					me.mouseup_mixin(_event);
				}
			});
		});
	}

	static mousedown_mixin(_nativeEvent)
	{
		this.mousedown(_nativeEvent);

		var _style = this.container.style;
		if(!_style.left || !_style.top)
		{
			var _pos = Element.getPosition(this.container);
			_style.position = "absolute"
			_style.left = _pos.left + "px";
			_style.top = _pos.top + "px";

			Draggable.Z_INDEX += 1;

			_style.zIndex = Draggable.Z_INDEX;
		}

		var _event = new Event(_nativeEvent);

		this.container.diff_x = _event.getPointerX() - Number.parseInt(_style.left);
		this.container.diff_y = _event.getPointerY() - Number.parseInt(_style.top);

		_event.stopDefault();
		_event.stopSelecting();
	}

	static mousemove_mixin(_nativeEvent)
	{
		this.mousemove(_nativeEvent);

		var _event = new Event(_nativeEvent);
		this.container.style.left = (_event.getPointerX() - this.container.diff_x) + "px";
		this.container.style.top = (_event.getPointerY() - this.container.diff_y) + "px";
	}

	static mouseup_mixin(_nativeEvent)
	{
		this.mouseup(_nativeEvent);

		this.mousemoveEventDispatcher.removeListeners();
		this.mouseupEventDispatcher.removeListeners();
		this.mouseoutEventDispatcher.removeListeners();

		new Event(_nativeEvent).startSelecting();
	}

	Draggable.Z_INDEX = 1000;

}