
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class Draggable
	*/
	jsx.dom.behavior.draggable.Draggable = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.dom.behavior.draggable.Draggable.prototype.initialize = function(){}

	jsx.dom.behavior.draggable.Draggable.initDraggable = function()
	{
		var me = this;

		new jsx.event.EventDispatcher(this.container, "onmousedown", true).addListener(function(_eventMouseDown)
		{
			me.mousedown_mixin(_eventMouseDown || $GLOBAL_OBJECT.event);

			me.mousemoveEventDispatcher = new jsx.event.EventDispatcher(document, "onmousemove", true);
			me.mousemoveEventDispatcher.addListener(function(_event)
			{
				me.mousemove_mixin(_event || $GLOBAL_OBJECT.event);
			});

			me.mouseupEventDispatcher = new jsx.event.EventDispatcher(document, "onmouseup", true);
			me.mouseupEventDispatcher.addListener(function(_event)
			{
				me.mouseup_mixin(_event || $GLOBAL_OBJECT.event);
			});

			me.mouseoutEventDispatcher = new jsx.event.EventDispatcher(document, "onmouseout", true);
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

	jsx.dom.behavior.draggable.Draggable.mousedown_mixin = function(_nativeEvent)
	{
		this.mousedown(_nativeEvent);

		var _style = this.container.style;
		if(!_style.left || !_style.top)
		{
			var _pos = jsx.dom.Element.getPosition(this.container);
			_style.position = "absolute"
			_style.left = _pos.left + "px";
			_style.top = _pos.top + "px";

			jsx.dom.behavior.draggable.Draggable.Z_INDEX += 1;

			_style.zIndex = jsx.dom.behavior.draggable.Draggable.Z_INDEX;
		}

		var _event = new jsx.event.Event(_nativeEvent);

		this.container.diff_x = _event.getPointerX() - Number.parseInt(_style.left);
		this.container.diff_y = _event.getPointerY() - Number.parseInt(_style.top);

		_event.stopDefault();
		_event.stopSelecting();
	}

	jsx.dom.behavior.draggable.Draggable.mousemove_mixin = function(_nativeEvent)
	{
		this.mousemove(_nativeEvent);

		var _event = new jsx.event.Event(_nativeEvent);
		this.container.style.left = (_event.getPointerX() - this.container.diff_x) + "px";
		this.container.style.top = (_event.getPointerY() - this.container.diff_y) + "px";
	}

	jsx.dom.behavior.draggable.Draggable.mouseup_mixin = function(_nativeEvent)
	{
		this.mouseup(_nativeEvent);

		this.mousemoveEventDispatcher.removeListeners();
		this.mouseupEventDispatcher.removeListeners();
		this.mouseoutEventDispatcher.removeListeners();

		new jsx.event.Event(_nativeEvent).startSelecting();
	}

	jsx.dom.behavior.draggable.Draggable.Z_INDEX = 1000;


jsx.dom.behavior.draggable.Draggable.PACKAGE = "jsx.dom.behavior.draggable";
jsx.dom.behavior.draggable.Draggable.CLASS = "jsx.dom.behavior.draggable.Draggable";
jsx.dom.behavior.draggable.Draggable.SUPER_CLASS = "";
jsx.dom.behavior.draggable.Draggable.IMPORTS = ["jsx.dom.Element","jsx.event.Event","jsx.event.EventDispatcher"];
jsx.dom.behavior.draggable.Draggable.INTERFACES = [];
jsx.dom.behavior.draggable.Draggable.MIXINS = [];
jsx.dom.behavior.draggable.Draggable.getName = function(){return jsx.dom.behavior.draggable.Draggable.CLASS;}
jsx.dom.behavior.draggable.Draggable.klass = new jsx.lang.Class(jsx.dom.behavior.draggable.Draggable.getName());
jsx.dom.behavior.draggable.Draggable.prototype.getClass = function(){return jsx.dom.behavior.draggable.Draggable.klass;}
jsx.dom.behavior.draggable.Draggable.WARNINGS = [];
