
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class DockableTable
	*/
	jsx.dom.behavior.dockable.DockableTable = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.dom.behavior.dockable.DockableTable.prototype.initialize = function(){}

	jsx.dom.behavior.dockable.DockableTable.initDockable = function()
	{
		var me = this;

		this.columns = new jsx.collections.ArrayList();
		this.columnBoxes = new jsx.collections.ArrayList();

		this.box = null;
		this.boxclone = null;
		this.origBoxIdx = -1;
		this.currentBoxIdx = -1;
		this.origColumnIdx = -1;
		this.currentColumnIdx = -1;

		this.container.style.position = "relative";
		this.container.style.display = "block";
		if($GLOBAL_OBJECT.opera)
		{
			this.container.style.display = "run-in";
		}

		this.setColumnsAndBoxes();

		this.columnBoxes.each(function(_column, _index)
		{
			var _colContainer = me.columns.get(_index);

			var dummy = _colContainer.appendChild(me.container.ownerDocument.createElement("span"));
			dummy.className = "dk_box dk_dummy";
			dummy.style.display = "block";
			dummy.style.width = "0";
			dummy.style.height = "0";
			dummy.style.overflow = "hidden";

			_column.add(dummy);
		});

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

	jsx.dom.behavior.dockable.DockableTable.setColumnsAndBoxes = function()
	{
		var me = this;

		var _boxes = null;
		var _elements = this.container.getElementsByTagName("*");
		for(var i=0; i<_elements.length; i++)
		{
			//if it"s column
			if(/dk_column/i.test(_elements[i].className))
			{
				_elements[i].style.position = "relative";
				_elements[i].style.display = "block";
				if($GLOBAL_OBJECT.opera)
				{
					_elements[i].style.display = "run-in";
				}

				_elements[i].style.width = _elements[i].offsetWidth + "px";
				_elements[i].style.height = _elements[i].offsetHeight + "px";

				_boxes = new jsx.collections.ArrayList();

				this.columnBoxes.add(_boxes);
				this.columns.add(_elements[i]);
			}

			//if it"s a box and not a dummy
			if(/dk_box/i.test(_elements[i].className) && !/dk_dummy/i.test(_elements[i].className))
			{
				_elements[i].style.position = "relative";
				_elements[i].style.display = "block";
				_elements[i].style.margin = "0px";
				_elements[i].style.padding = "0px";
				_elements[i].style.border = "none";

				_boxes.add(_elements[i]);

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

	jsx.dom.behavior.dockable.DockableTable.mousedown_mixin = function(_nativeEvent, _box)
	{
		this.mousedown(_nativeEvent);

		var me = this;

		var _event = new jsx.event.Event(_nativeEvent);
		var _node = _event.getObject();

		if(/dk_handle/i.test(_node.className))
		{
			this.box = _box;

			var _currentColumn = jsx.dom.Element.getParent(_node, "div", "dk_column");
			this.columns.each(function(_column, _index)
			{
				if(_currentColumn == _column)
				{
					me.currentColumnIdx = _index;
					me.origColumnIdx = _index;

					var _boxes = me.columnBoxes.get(_index)
					_boxes.each(function(_boxx, _boxIndex)
					{
						if(_boxx == _box)
						{
							me.origBoxIdx = _boxIndex;
							_boxes.$break();
						}
					});
					me.columns.$break();
				}
			});

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

	jsx.dom.behavior.dockable.DockableTable.mousemove_mixin = function(_nativeEvent)
	{
		this.mousemove(_nativeEvent);

		var _event = new jsx.event.Event(_nativeEvent);

		if(this.box)
		{
			var _positiveY = _event.getPointerY() > this.current.y ? true : false;

			this.current = { "x" : _event.getPointerX(), "y" : _event.getPointerY() };

			this.boxclone.style.left = (this.current.x - this.difference.x) + "px";
			this.boxclone.style.top = (this.current.y - this.difference.y) + "px";

			var _plus_minus_height = this.halfWidthHeight.h;
			if(!_positiveY) _plus_minus_height = _plus_minus_height * -1;

			this.moveBox(Number.parseInt(this.boxclone.style.left) + this.halfWidthHeight.w,
						this.current.y + _plus_minus_height,
						this.box);

			_event.stopDefault();
		}
	}

	jsx.dom.behavior.dockable.DockableTable.mouseup_mixin = function(_nativeEvent)
	{
		this.mouseup(_nativeEvent);

		var _event = new jsx.event.Event(_nativeEvent);

		if(this.box)
		{
			this.moveBox(_event.getPointerX(), _event.getPointerY(), this.box);

			this.container.ownerDocument.body.removeChild(this.boxclone);

			if(this.origColumnIdx != this.currentColumnIdx)
			{
				this.columnBoxes.get(this.origColumnIdx).removeAt(this.origBoxIdx);
				this.columnBoxes.get(this.currentColumnIdx).addAt(this.currentBoxIdx, this.box);
			}

			this.box.style.border = "none";
			jsx.dom.Element.getChild(this.box, "div").style.visibility = "visible";

			this.box = null;
			this.boxclone = null;
			this.origBoxIdx = -1;
			this.currentBoxIdx = -1;
			this.origColumnIdx = -1;
			this.currentColumnIdx = -1;

			_event.startSelecting();
		}
	}

	jsx.dom.behavior.dockable.DockableTable.moveBox = function(_clientX, _clientY, _box)
	{
		var me = this;

		var _clonepropsVer = { "y" : _clientY - this.difference.y, "h" : this.boxclone.offsetHeight};
		var _clone_yplush = _clonepropsVer.y + _clonepropsVer.h;

		this.columnBoxes.each(function(_column, _index)
		{
			var _colContainer = me.columns.get(_index);
			var _colPos = jsx.dom.Element.getPosition(_colContainer);

			var _insideColumn = (_clientX > _colPos.left) && (_clientX < (_colPos.left + _colContainer.offsetWidth));
			if(!_insideColumn && _index == 0) _insideColumn = (_clientX < (_colPos.left + _colContainer.offsetWidth));
			if(!_insideColumn &&  _index == (me.columnBoxes.size() - 1)) _insideColumn = (_clientX > _colPos.left);
			if(_insideColumn)
			{
				me.currentColumnIdx = _index;
				me.currentColumn = _colContainer;

				var _insideBox = false;
				_column.each(function(_boxx, _boxIndex)
				{
					var _boxPos = jsx.dom.Element.getPosition(_boxx);

					_insideBox = (_clone_yplush > _boxPos.top) && (_clonepropsVer.y < _boxPos.top);
					if(!_insideBox && _column.size() == 1) _insideBox = true;
					if(_insideBox)
					{
						if(_boxx == _box){ _column.$break(); }

						_box.style.border = "2px dashed rgb(170, 170, 170)";

						me.currentBoxIdx = _boxIndex;

						try{_colContainer.insertBefore(_box, _boxx);}catch(_exception){}

						_column.$break();
					}
				});

				me.columnBoxes.$break();
			}
		});
	}

jsx.dom.behavior.dockable.DockableTable.PACKAGE = "jsx.dom.behavior.dockable";
jsx.dom.behavior.dockable.DockableTable.CLASS = "jsx.dom.behavior.dockable.DockableTable";
jsx.dom.behavior.dockable.DockableTable.SUPER_CLASS = "";
jsx.dom.behavior.dockable.DockableTable.IMPORTS = ["jsx.dom.Element","jsx.event.Event","jsx.event.EventDispatcher","jsx.collections.ArrayList"];
jsx.dom.behavior.dockable.DockableTable.INTERFACES = [];
jsx.dom.behavior.dockable.DockableTable.MIXINS = [];
jsx.dom.behavior.dockable.DockableTable.getName = function(){return jsx.dom.behavior.dockable.DockableTable.CLASS;}
jsx.dom.behavior.dockable.DockableTable.klass = new jsx.lang.Class(jsx.dom.behavior.dockable.DockableTable.getName());
jsx.dom.behavior.dockable.DockableTable.prototype.getClass = function(){return jsx.dom.behavior.dockable.DockableTable.klass;}
jsx.dom.behavior.dockable.DockableTable.WARNINGS = [];
