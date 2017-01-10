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

package jsx.dom;

import jsx.dom.Node;

class Element extends Node
{
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class Element
	*/
	Element(){}

	static getElement(_elementId, _ownerDocument)
	{
		if(_ownerDocument) return _ownerDocument.getElementById(_elementId);

		return document.getElementById(_elementId);
	}

	static getInnerText(_element)
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
				case Node.ELEMENT_NODE:
					str += arguments.callee(cs[i]);
					break;
				case Node.TEXT_NODE:
					str += cs[i].nodeValue;
					break;
			}
		}
		return str;
	}

	static getParent(_element, _parentTagName, _pattern)
	{
		if(!_element) return null;

		if(_element.nodeType == Node.ELEMENT_NODE && _element.tagName.toLowerCase() == _parentTagName.toLowerCase())
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

	static getChild(_element, _childTagName, _pattern)
	{
		if(!_element) return null;

		var _childElemnet = null;

		var cs = _element.childNodes;
		for (var i=0;i<cs.length;i++)
		{
			switch(cs[i].nodeType)
			{
				case Node.ELEMENT_NODE:
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

	static getPosition(_element)
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

}