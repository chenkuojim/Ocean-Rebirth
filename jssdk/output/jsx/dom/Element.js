
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class Element
	*/
	jsx.dom.Element = function(){this.initialize.apply(this, arguments);}
jsx.dom.Element.prototype = new jsx.dom.Node();
jsx.dom.Element.prototype.constructor = jsx.dom.Element;
jsx.dom.Element.superclass = jsx.dom.Node.prototype;

	/** @ignore */
	jsx.dom.Element.prototype.initialize = function(){}

	jsx.dom.Element.getElement = function(_elementId, _ownerDocument)
	{
		if(_ownerDocument) return _ownerDocument.getElementById(_elementId);

		return document.getElementById(_elementId);
	}

	jsx.dom.Element.getInnerText = function(_element)
	{
		if(typeof _element == "string") return _element;
		if(Object.isUndefined(typeof _element)) return _element;
		if(_element.innerText) return _element.innerText;

		var str = "";
		var cs = _element.childNodes;
		for (var i=0;i<cs.length;i++)
		{
			switch (cs[i].nodeType)
			{
				case jsx.dom.Node.ELEMENT_NODE:
					str += arguments.callee(cs[i]);
					break;
				case jsx.dom.Node.TEXT_NODE:
					str += cs[i].nodeValue;
					break;
			}
		}
		return str;
	}

	jsx.dom.Element.getParent = function(_element, _parentTagName, _pattern)
	{
		if(!_element) return null;

		if(_element.nodeType == jsx.dom.Node.ELEMENT_NODE && _element.tagName.toLowerCase() == _parentTagName.toLowerCase())
		{
			if(_pattern)
			{
				var _regex = new RegExp(_pattern, "");
				if(_regex.test(_element.className))
				{
					return _element;
				}
				else
				{
					return arguments.callee(_element.parentNode, _parentTagName, _pattern);
				}
			}
			else
			{
				return _element;
			}
		}

		return arguments.callee(_element.parentNode, _parentTagName, _pattern);
	}

	jsx.dom.Element.getChild = function(_element, _childTagName, _pattern)
	{
		if(!_element) return null;

		var _childElemnet = null;

		var cs = _element.childNodes;
		for (var i=0;i<cs.length;i++)
		{
			switch(cs[i].nodeType)
			{
				case jsx.dom.Node.ELEMENT_NODE:
					if(_childTagName.toLowerCase() == cs[i].nodeName.toLowerCase())
					{
						if(_pattern)
						{
							var _regex = new RegExp(_pattern, "");
							if(_regex.test(cs[i].className))
							{
								_childElemnet = cs[i];
								break;
							}
							else
							{
								_childElemnet = arguments.callee(cs[i], _childTagName);
							}
						}
						else
						{
							_childElemnet = cs[i];
							break;
						}
					}
					else
					{
						_childElemnet = arguments.callee(cs[i], _childTagName);
					}
			}
		}

		return _childElemnet;
	}

	jsx.dom.Element.getPosition = function(_element)
	{
		if(_element.getBoundingClientRect)
		{
			return {left:_element.getBoundingClientRect().left, top:_element.getBoundingClientRect().top};
		}

		var _left = 0;
		var _top = 0;

		while(_element)
		{
			_left += _element.offsetLeft;
			_top += _element.offsetTop;

			_element = _element.offsetParent;
		}

		return {left:_left, top:_top};
	}


jsx.dom.Element.PACKAGE = "jsx.dom";
jsx.dom.Element.CLASS = "jsx.dom.Element";
jsx.dom.Element.SUPER_CLASS = "jsx.dom.Node";
jsx.dom.Element.IMPORTS = ["jsx.dom.Node"];
jsx.dom.Element.INTERFACES = [];
jsx.dom.Element.MIXINS = [];
jsx.dom.Element.getName = function(){return jsx.dom.Element.CLASS;}
jsx.dom.Element.klass = new jsx.lang.Class(jsx.dom.Element.getName());
jsx.dom.Element.prototype.getClass = function(){return jsx.dom.Element.klass;}
jsx.dom.Element.WARNINGS = [];
