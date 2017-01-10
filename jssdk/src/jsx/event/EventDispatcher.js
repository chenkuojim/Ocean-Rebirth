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

import jsx.collections.ArrayList;

class EventDispatcher
{
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class EventDispatcher
	* @constructor
	* @param {Object} _object
	* @param {Function} _method
	* @param {Boolean} _useDomEvent
	*/
	EventDispatcher(_object, _method, _useDomEvent)
	{
		this.object = _object;
		this.method = _method;
		this.useDomEvent = _useDomEvent;
		this.listeners = new ArrayList();

		if(this.useDomEvent)
		{
			if(this.method.indexOf("on") == -1)
			{
				this.method = "on"+this.method;
			}
		}

		// if the object already has something set for the event, add it to the listeners
		var _listener = this.object[this.method];
		if(_listener)
		{
			this.addListener(_listener);
		}

		if(this.useDomEvent)
		{
			this.eadd = this.object.addEventListener ? "addEventListener" : "attachEvent";
			this.ermv = this.object.removeEventListener ? "removeEventListener" : "detachEvent";
			this.ename = this.method;
			if(this.object.addEventListener) this.ename = this.method.replace("on", "");
		}
		else
		{
			// set the event method to reference the event dispatcher dispatch method
			this.object[this.method] = EventDispatcher.dispatch;

			// create a property on the object|element pointing to "this" event dispatcher
			this.object[this.method+"_event"] = this;
		}

		// used to cache objects|elements
		EventDispatcher.cache.add([this.object, this.method]);
	}

	instance addListener(_listener, _capture)
	{
		if(!_listener) return;

		if(this.useDomEvent) this.object[this.eadd](this.ename, _listener, (_capture?_capture:false));

		this.listeners.add(_listener);
		return _listener;
	}

	instance removeListener(_listener, _capture)
	{
		if(!_listener) return;

		if(this.useDomEvent) this.object[this.ermv](this.ename, _listener, (_capture?_capture:false));

		this.listeners.remove(_listener);
		return _listener;
	}

	instance removeListeners()
	{
		var me = this;
		this.listeners.each(function(_function)
		{
			me.removeListener(_function, false);
			me.removeListener(_function, true);
		});
	}

	instance notify(_event)
	{
		var me = this;
		this.listeners.each(function(_function)
		{
			_function.apply(me.object, [_event]);
		});
	}

	// when called by the client, need to pass the _event object and set the target and type properties in the event,
	// only need to explictly create a new _event object if not using a DOM Element
	static dispatch(_event)
	{
		// the event object could be passed in, if not use the global object event
		var _event = _event || $GLOBAL_OBJECT.event;

		// source object of the event
		var _source = _event.target || _event.srcElement;

		// event type, really the method
		var _type = "on"+_event.type+"_event";

		if(_source && _source[_type]) _source[_type].notify(_event);
		else if($GLOBAL_OBJECT[_type]) $GLOBAL_OBJECT[_type].notify(_event);
		else if(_event.currentTarget && _event.currentTarget[_type]) _event.currentTarget[_type].notify(_event);
	}

	EventDispatcher.cache = new ArrayList();

	// call this to null out the closure references
	static clearListeners()
	{
		EventDispatcher.cache.each(function(_item)
		{
			_item[0][_item[1]] = null;
			_item[0][_item[1]+"_event"] = null;
		});

		// clear the cache list
		EventDispatcher.cache.clear();
	}

}