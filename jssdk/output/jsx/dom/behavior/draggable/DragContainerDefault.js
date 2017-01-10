
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class DragContainerDefault
	*/
	jsx.dom.behavior.draggable.DragContainerDefault = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.dom.behavior.draggable.DragContainerDefault.prototype.initialize = function(_container)
	{
		this.container = _container;
	}

	jsx.dom.behavior.draggable.DragContainerDefault.prototype.mousedown = function(_event){}

	jsx.dom.behavior.draggable.DragContainerDefault.prototype.mousemove = function(_event){}

	jsx.dom.behavior.draggable.DragContainerDefault.prototype.mouseup = function(_event){}


jsx.dom.behavior.draggable.DragContainerDefault.prototype.mousemove_mixin = jsx.dom.behavior.draggable.Draggable.mousemove_mixin;
jsx.dom.behavior.draggable.DragContainerDefault.prototype.mousedown_mixin = jsx.dom.behavior.draggable.Draggable.mousedown_mixin;
jsx.dom.behavior.draggable.DragContainerDefault.prototype.mouseup_mixin = jsx.dom.behavior.draggable.Draggable.mouseup_mixin;
jsx.dom.behavior.draggable.DragContainerDefault.prototype.initDraggable = jsx.dom.behavior.draggable.Draggable.initDraggable;

jsx.dom.behavior.draggable.DragContainerDefault.PACKAGE = "jsx.dom.behavior.draggable";
jsx.dom.behavior.draggable.DragContainerDefault.CLASS = "jsx.dom.behavior.draggable.DragContainerDefault";
jsx.dom.behavior.draggable.DragContainerDefault.SUPER_CLASS = "";
jsx.dom.behavior.draggable.DragContainerDefault.IMPORTS = ["jsx.dom.behavior.draggable.Draggable"];
jsx.dom.behavior.draggable.DragContainerDefault.INTERFACES = [];
jsx.dom.behavior.draggable.DragContainerDefault.MIXINS = ["jsx.dom.behavior.draggable.Draggable"];
jsx.dom.behavior.draggable.DragContainerDefault.getName = function(){return jsx.dom.behavior.draggable.DragContainerDefault.CLASS;}
jsx.dom.behavior.draggable.DragContainerDefault.klass = new jsx.lang.Class(jsx.dom.behavior.draggable.DragContainerDefault.getName());
jsx.dom.behavior.draggable.DragContainerDefault.prototype.getClass = function(){return jsx.dom.behavior.draggable.DragContainerDefault.klass;}
jsx.dom.behavior.draggable.DragContainerDefault.WARNINGS = [];
