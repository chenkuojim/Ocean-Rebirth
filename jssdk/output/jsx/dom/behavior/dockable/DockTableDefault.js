
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class DockTableDefault
	*/
	jsx.dom.behavior.dockable.DockTableDefault = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.dom.behavior.dockable.DockTableDefault.prototype.initialize = function(_container)
	{
		this.container = _container;
	}

	jsx.dom.behavior.dockable.DockTableDefault.prototype.mousedown = function(_event){}

	jsx.dom.behavior.dockable.DockTableDefault.prototype.mousemove = function(_event){}

	jsx.dom.behavior.dockable.DockTableDefault.prototype.mouseup = function(_event){}


jsx.dom.behavior.dockable.DockTableDefault.prototype.setColumnsAndBoxes = jsx.dom.behavior.dockable.DockableTable.setColumnsAndBoxes;
jsx.dom.behavior.dockable.DockTableDefault.prototype.mousemove_mixin = jsx.dom.behavior.dockable.DockableTable.mousemove_mixin;
jsx.dom.behavior.dockable.DockTableDefault.prototype.initDockable = jsx.dom.behavior.dockable.DockableTable.initDockable;
jsx.dom.behavior.dockable.DockTableDefault.prototype.mousedown_mixin = jsx.dom.behavior.dockable.DockableTable.mousedown_mixin;
jsx.dom.behavior.dockable.DockTableDefault.prototype.mouseup_mixin = jsx.dom.behavior.dockable.DockableTable.mouseup_mixin;
jsx.dom.behavior.dockable.DockTableDefault.prototype.moveBox = jsx.dom.behavior.dockable.DockableTable.moveBox;

jsx.dom.behavior.dockable.DockTableDefault.PACKAGE = "jsx.dom.behavior.dockable";
jsx.dom.behavior.dockable.DockTableDefault.CLASS = "jsx.dom.behavior.dockable.DockTableDefault";
jsx.dom.behavior.dockable.DockTableDefault.SUPER_CLASS = "";
jsx.dom.behavior.dockable.DockTableDefault.IMPORTS = ["jsx.dom.behavior.dockable.DockableTable"];
jsx.dom.behavior.dockable.DockTableDefault.INTERFACES = [];
jsx.dom.behavior.dockable.DockTableDefault.MIXINS = ["jsx.dom.behavior.dockable.DockableTable"];
jsx.dom.behavior.dockable.DockTableDefault.getName = function(){return jsx.dom.behavior.dockable.DockTableDefault.CLASS;}
jsx.dom.behavior.dockable.DockTableDefault.klass = new jsx.lang.Class(jsx.dom.behavior.dockable.DockTableDefault.getName());
jsx.dom.behavior.dockable.DockTableDefault.prototype.getClass = function(){return jsx.dom.behavior.dockable.DockTableDefault.klass;}
jsx.dom.behavior.dockable.DockTableDefault.WARNINGS = [];
