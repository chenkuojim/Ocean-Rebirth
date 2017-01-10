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

package jsx.dom.behavior.dockable;

import jsx.dom.behavior.dockable.DockableContainer;

class DockContainerDefault mixin DockableContainer
{
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class DockContainerDefault
	*/
	DockContainerDefault(_container, _dir, _fix)
	{
		this.container = _container;
		this.vertical = _dir ? _dir == "vertical" : true;
		this.restrict = _fix ? _fix == "yes" : false;
	}

	instance mousedown(_event){}

	instance mousemove(_event){}

	instance mouseup(_event){}

}