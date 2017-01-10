
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class Node
	*/
	jsx.dom.Node = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.dom.Node.prototype.initialize = function(){}

	jsx.dom.Node.ELEMENT_NODE					= 1;
	jsx.dom.Node.ATTRIBUTE_NODE					= 2;
	jsx.dom.Node.TEXT_NODE						= 3;
	jsx.dom.Node.CDATA_SECTION_NODE				= 4;
	jsx.dom.Node.ENTITY_REFERENCE_NODE			= 5;
	jsx.dom.Node.ENTITY_NODE					= 6;
	jsx.dom.Node.PROCESSING_INSTRUCTION_NODE	= 7;
	jsx.dom.Node.COMMENT_NODE					= 8;
	jsx.dom.Node.DOCUMENT_NODE					= 9;
	jsx.dom.Node.DOCUMENT_TYPE_NODE				= 10;
	jsx.dom.Node.DOCUMENT_FRAGMENT_NODE			= 11;
	jsx.dom.Node.NOTATION_NODE					= 12;


jsx.dom.Node.PACKAGE = "jsx.dom";
jsx.dom.Node.CLASS = "jsx.dom.Node";
jsx.dom.Node.SUPER_CLASS = "";
jsx.dom.Node.IMPORTS = [];
jsx.dom.Node.INTERFACES = [];
jsx.dom.Node.MIXINS = [];
jsx.dom.Node.getName = function(){return jsx.dom.Node.CLASS;}
jsx.dom.Node.klass = new jsx.lang.Class(jsx.dom.Node.getName());
jsx.dom.Node.prototype.getClass = function(){return jsx.dom.Node.klass;}
jsx.dom.Node.WARNINGS = [];
