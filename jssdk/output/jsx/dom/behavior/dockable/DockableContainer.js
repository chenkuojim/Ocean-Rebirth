
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class Dockable
	*/
	jsx.dom.behavior.dockable.DockableContainer = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.dom.behavior.dockable.DockableContainer.prototype.initialize = function(){}

	jsx.dom.behavior.dockable.DockableContainer.initDockable = function()
	{
		var me = this;

		this.boxes = new jsx.collections.ArrayList();

		this.box = null;
		this.boxclone = null;

		this.container.style.position = "relative";
		this.container.style.display = "block";
		if($GLOBAL_OBJECT.opera)
		{
			this.container.style.display = "run-in";
		}

		this.setBoxes();

		var dummy = this.container.appendChild(this.container.ownerDocument.createElement("span"));
		dummy.className = "dk_box dk_dummy";
		dummy.style.display = "block";
		dummy.style.width = "0";
		dummy.style.height = "0";
		dummy.style.overflow = "hidden";

		this.boxes.add(dummy);

		new jsx.event.EventDispatcher(this.container.ownerDocument, "onmouseout", true).addListener(function(_event)
		{
			var _event = (_event || $GLOBAL_OBJECT.event);

			if(!_event.target){ _event = $GLOBAL_OBJECT.event; _event.relatedTarget = _event.toElement; }

			if(!_event.relatedTarget)
			{
				me.mouseup_mixin(_event);
			}
		});

		new jsx.event.EventDispatcher(this.container.ownerDocument, "onmousemove", true).addListener(function(_event)
		{
			me.mousemove_mixin(_event || $GLOBAL_OBJECT.event);
		});

		new jsx.event.EventDispatcher(this.container.ownerDocument, "onmouseup", true).addListener(function(_event)
		{
			me.mouseup_mixin(_event || $GLOBAL_OBJECT.event);
		});
	}

	jsx.dom.behavior.dockable.DockableContainer.setBoxes = function()
	{
		var me = this;

		var _elements = this.container.getElementsByTagName("*");
		for(var i=0; i<_elements.length; i++)
		{
			//if it's a docking box and not a dummy
			if(/dk_box/i.test(_elements[i].className) && !/dk_dummy/i.test(_elements[i].className))
			{
				_elements[i].style.position = "relative";
				_elements[i].style.display = "block";
				_elements[i].style.margin = "0px";
				_elements[i].style.padding = "0px";
				_elements[i].style.border = "none";

				this.boxes.add(_elements[i]);

				new jsx.event.EventDispatcher(_elements[i], "onmousedown", true).addListener(function(_event)
				{
					var _event = new jsx.event.Event(_event || $GLOBAL_OBJECT.event);

					me.mousedown_mixin(_event.getEvent(), jsx.dom.Element.getParent(_event.getObject(), "div", "dk_box"));
				});
			}

			//if it's a handle
			if(/dk_handle/i.test(_elements[i].className))
			{
				_elements[i].style.position = "relative";
				_elements[i].style.display = "block";

				new jsx.event.EventDispatcher(_elements[i], "onmouseover", true).addListener(function(_event)
				{
					var _event = new jsx.event.Event(_event || $GLOBAL_OBJECT.event);
					_event.getObject().style.cursor = "move";
				});
			}
		}
	}

	jsx.dom.behavior.dockable.DockableContainer.mousedown_mixin = function(_nativeEvent, _box)
	{
		this.mousedown(_nativeEvent);

		var _event = new jsx.event.Event(_nativeEvent);
		var _node = _event.getObject();

		if(/dk_handle/i.test(_node.className))
		{
			this.box = _box;

			var _boxPos = jsx.dom.Element.getPosition(this.box);

			var _initial = { "x" : _event.getPointerX(), "y" : _event.getPointerY() };
			var _position = { "x" : _boxPos.left, "y" : _boxPos.top };

			this.current = { "x" : 0, "y" : 0 };
			this.difference = { "x" : (_initial.x - _position.x), "y" : (_initial.y - _position.y) };

			this.widthHeight = { "w" : this.box.offsetWidth, "h" : this.box.offsetHeight}
			this.halfWidthHeight = { "w" : this.widthHeight.w / 2, "h" : this.widthHeight.h / 2}

			this.boxclone = this.container.ownerDocument.body.appendChild(this.box.cloneNode(true));
			this.boxclone.className += " dk_clone";
			this.boxclone.style.position = "absolute";
			this.boxclone.style.visibility = "visible";
			this.boxclone.style.zIndex = 3000;
			this.boxclone.style.cursor = "move";
			this.boxclone.style.filter = "alpha(opacity=50)";
			this.boxclone.style.opacity = ".5";
			this.boxclone.style.left = _position.x + "px";
			this.boxclone.style.top = _position.y + "px";
			this.boxclone.style.width = this.box.offsetWidth + "px";
			this.boxclone.style.height = this.box.offsetHeight + "px";

			jsx.dom.Element.getChild(this.box, "div").style.visibility = "hidden";

			_event.stopDefault();
			_event.stopSelecting();
		}
	}

	jsx.dom.behavior.dockable.DockableContainer.mousemove_mixin = function(_nativeEvent)
	{
		this.mousemove(_nativeEvent);

		var _event = new jsx.event.Event(_nativeEvent);

		if(this.box)
		{
			var _positive = this.vertical ? (_event.getPointerY() > this.current.y ? true : false) : (_event.getPointerX() > this.current.x ? true : false);

			this.current = { "x" : _event.getPointerX(), "y" : _event.getPointerY() };

			if(!this.restrict || !this.vertical)
			{
				this.boxclone.style.left = (this.current.x - this.difference.x) + "px";
			}
			if(!this.restrict || this.vertical)
			{
				this.boxclone.style.top = (this.current.y - this.difference.y) + "px";
			}

			var _plus_minus_width = this.halfWidthHeight.w;
			var _plus_minus_height = this.halfWidthHeight.h;
			if(!_positive)
			{
				_plus_minus_width = _plus_minus_width * -1;
				_plus_minus_height = _plus_minus_height * -1;
			}

			this.moveBox(this.current.x + _plus_minus_width,
						this.current.y + _plus_minus_height,
						this.box);

			_event.stopDefault();
		}
	}

	jsx.dom.behavior.dockable.DockableContainer.mouseup_mixin = function(_nativeEvent)
	{
		this.mouseup(_nativeEvent);

		var _event = new jsx.event.Event(_nativeEvent);

		if(this.box)
		{
			this.moveBox(_event.getPointerX(), _event.getPointerY(), this.box);

			this.container.ownerDocument.body.removeChild(this.boxclone);

			jsx.dom.Element.getChild(this.box, "div").style.visibility = "visible";

			this.box = null;
			this.boxclone = null;

			_event.startSelecting();
		}
	}

	jsx.dom.behavior.dockable.DockableContainer.moveBox = function(_clientX, _clientY, _box)
	{
		var me = this;

		var cloneprops = {
			"xy" : this.vertical ? _clientY - this.difference.y : _clientX - this.difference.x,
			"wh" : this.vertical ? this.boxclone.offsetHeight : this.boxclone.offsetWidth
			};
		var _clone_xypluswh = cloneprops.xy + cloneprops.wh;

		this.boxes.each(function(_boxx, _index)
		{
			var _boxPos = jsx.dom.Element.getPosition(_boxx);

			var boxprops = {
				"xy" : me.vertical ? _boxPos.top : _boxPos.left,
				"wh" : me.vertical ? _boxx.offsetHeight : _boxx.offsetWidth
				};

			var inside = (_clone_xypluswh > boxprops.xy) && (cloneprops.xy < boxprops.xy)
			if(inside)
			{
				if(_boxx == _box){ me.boxes.$break(); }

				me.container.insertBefore(_box, _boxx);

				me.boxes.$break();
			}
		});
	}


jsx.dom.behavior.dockable.DockableContainer.PACKAGE = "jsx.dom.behavior.dockable";
jsx.dom.behavior.dockable.DockableContainer.CLASS = "jsx.dom.behavior.dockable.DockableContainer";
jsx.dom.behavior.dockable.DockableContainer.SUPER_CLASS = "";
jsx.dom.behavior.dockable.DockableContainer.IMPORTS = ["jsx.dom.Element","jsx.event.Event","jsx.event.EventDispatcher","jsx.collections.ArrayList"];
jsx.dom.behavior.dockable.DockableContainer.INTERFACES = [];
jsx.dom.behavior.dockable.DockableContainer.MIXINS = [];
jsx.dom.behavior.dockable.DockableContainer.getName = function(){return jsx.dom.behavior.dockable.DockableContainer.CLASS;}
jsx.dom.behavior.dockable.DockableContainer.klass = new jsx.lang.Class(jsx.dom.behavior.dockable.DockableContainer.getName());
jsx.dom.behavior.dockable.DockableContainer.prototype.getClass = function(){return jsx.dom.behavior.dockable.DockableContainer.klass;}
jsx.dom.behavior.dockable.DockableContainer.WARNINGS = [];
