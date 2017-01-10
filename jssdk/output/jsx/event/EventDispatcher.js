
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
	jsx.event.EventDispatcher = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.event.EventDispatcher.prototype.initialize = function(_object, _method, _useDomEvent)
	{
		this.object = _object;
		this.method = _method;
		this.useDomEvent = _useDomEvent;
		this.listeners = new jsx.collections.ArrayList();

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
			this.object[this.method] = jsx.event.EventDispatcher.dispatch;

			// create a property on the object|element pointing to "this" event dispatcher
			this.object[this.method+"_event"] = this;
		}

		// used to cache objects|elements
		jsx.event.EventDispatcher.cache.add([this.object, this.method]);
	}

	jsx.event.EventDispatcher.prototype.addListener = function(_listener, _capture)
	{
		if(!_listener) return;

		if(this.useDomEvent) this.object[this.eadd](this.ename, _listener, (_capture?_capture:false));

		this.listeners.add(_listener);
		return _listener;
	}

	jsx.event.EventDispatcher.prototype.removeListener = function(_listener, _capture)
	{
		if(!_listener) return;

		if(this.useDomEvent) this.object[this.ermv](this.ename, _listener, (_capture?_capture:false));

		this.listeners.remove(_listener);
		return _listener;
	}

	jsx.event.EventDispatcher.prototype.removeListeners = function()
	{
		var me = this;
		this.listeners.each(function(_function)
		{
			me.removeListener(_function, false);
			me.removeListener(_function, true);
		});
	}

	jsx.event.EventDispatcher.prototype.notify = function(_event)
	{
		var me = this;
		this.listeners.each(function(_function)
		{
			_function.apply(me.object, [_event]);
		});
	}

	// when called by the client, need to pass the _event object and set the target and type properties in the event,
	// only need to explictly create a new _event object if not using a DOM Element
	jsx.event.EventDispatcher.dispatch = function(_event)
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

	jsx.event.EventDispatcher.cache = new jsx.collections.ArrayList();

	// call this to null out the closure references
	jsx.event.EventDispatcher.clearListeners = function()
	{
		jsx.event.EventDispatcher.cache.each(function(_item)
		{
			_item[0][_item[1]] = null;
			_item[0][_item[1]+"_event"] = null;
		});

		// clear the cache list
		jsx.event.EventDispatcher.cache.clear();
	}


jsx.event.EventDispatcher.PACKAGE = "jsx.event";
jsx.event.EventDispatcher.CLASS = "jsx.event.EventDispatcher";
jsx.event.EventDispatcher.SUPER_CLASS = "";
jsx.event.EventDispatcher.IMPORTS = ["jsx.collections.ArrayList"];
jsx.event.EventDispatcher.INTERFACES = [];
jsx.event.EventDispatcher.MIXINS = [];
jsx.event.EventDispatcher.getName = function(){return jsx.event.EventDispatcher.CLASS;}
jsx.event.EventDispatcher.klass = new jsx.lang.Class(jsx.event.EventDispatcher.getName());
jsx.event.EventDispatcher.prototype.getClass = function(){return jsx.event.EventDispatcher.klass;}
jsx.event.EventDispatcher.WARNINGS = [];
