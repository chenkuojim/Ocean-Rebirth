
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class DockContainerDefault
	*/
	jsx.dom.behavior.dockable.DockContainerDefault = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.dom.behavior.dockable.DockContainerDefault.prototype.initialize = function(_container, _dir, _fix)
	{
		this.container = _container;
		this.vertical = _dir ? _dir == "vertical" : true;
		this.restrict = _fix ? _fix == "yes" : false;
	}

	jsx.dom.behavior.dockable.DockContainerDefault.prototype.mousedown = function(_event){}

	jsx.dom.behavior.dockable.DockContainerDefault.prototype.mousemove = function(_event){}

	jsx.dom.behavior.dockable.DockContainerDefault.prototype.mouseup = function(_event){}


jsx.dom.behavior.dockable.DockContainerDefault.prototype.setBoxes = jsx.dom.behavior.dockable.DockableContainer.setBoxes;
jsx.dom.behavior.dockable.DockContainerDefault.prototype.mousemove_mixin = jsx.dom.behavior.dockable.DockableContainer.mousemove_mixin;
jsx.dom.behavior.dockable.DockContainerDefault.prototype.initDockable = jsx.dom.behavior.dockable.DockableContainer.initDockable;
jsx.dom.behavior.dockable.DockContainerDefault.prototype.mousedown_mixin = jsx.dom.behavior.dockable.DockableContainer.mousedown_mixin;
jsx.dom.behavior.dockable.DockContainerDefault.prototype.mouseup_mixin = jsx.dom.behavior.dockable.DockableContainer.mouseup_mixin;
jsx.dom.behavior.dockable.DockContainerDefault.prototype.moveBox = jsx.dom.behavior.dockable.DockableContainer.moveBox;

jsx.dom.behavior.dockable.DockContainerDefault.PACKAGE = "jsx.dom.behavior.dockable";
jsx.dom.behavior.dockable.DockContainerDefault.CLASS = "jsx.dom.behavior.dockable.DockContainerDefault";
jsx.dom.behavior.dockable.DockContainerDefault.SUPER_CLASS = "";
jsx.dom.behavior.dockable.DockContainerDefault.IMPORTS = ["jsx.dom.behavior.dockable.DockableContainer"];
jsx.dom.behavior.dockable.DockContainerDefault.INTERFACES = [];
jsx.dom.behavior.dockable.DockContainerDefault.MIXINS = ["jsx.dom.behavior.dockable.DockableContainer"];
jsx.dom.behavior.dockable.DockContainerDefault.getName = function(){return jsx.dom.behavior.dockable.DockContainerDefault.CLASS;}
jsx.dom.behavior.dockable.DockContainerDefault.klass = new jsx.lang.Class(jsx.dom.behavior.dockable.DockContainerDefault.getName());
jsx.dom.behavior.dockable.DockContainerDefault.prototype.getClass = function(){return jsx.dom.behavior.dockable.DockContainerDefault.klass;}
jsx.dom.behavior.dockable.DockContainerDefault.WARNINGS = [];
