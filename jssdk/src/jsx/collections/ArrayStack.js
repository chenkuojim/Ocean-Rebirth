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

package jsx.collections;

import jsx.collections.ArrayList;

class ArrayStack extends ArrayList
{
	/**
	* @fileOverview An implementation of the Stack api that is based on an jsx.collections.ArrayList,
	* @example
	*/
	/**
	* @class ArrayStack
	* @constructor
	* @extends jsx.collections.ArrayList
	*/
	ArrayStack(_collection)
	{
		super(_collection);
	}

	/**
	* Return true if this stack is currently empty..
	* @return {Boolean}
	*/
	instance empty()
	{
		return this.isEmpty();
	}

	/**
	* Returns the top item off of this stack without removing it.
	* @return {Object}
	*/
	instance peek()
	{
		var size = this.size();
		if(size == 0)
		{
			return null;
		}

		return this.get(size - 1);
	}

	/**
	* Pops the top item off of this stack and return it.
	* @return {Object}
	*/
	instance pop()
	{
		var size = this.size();
		var object = this.peek();

		this.removeAt(size - 1);

		return object;
	}

	/**
	* Pushes a new item onto the top of this stack.
	* @param {Object}
	*/
	instance push(_object)
	{
		this.add(_object);
	}

	/**
	* Returns the one-based position of the distance from the top that the specified object exists on this stack, where the top-most element is considered to be at distance 1.
	* @param {Object} _object
	* @return {Number}
	*/
	instance search(_object)
	{
		var index = this.lastIndexOf(_object);
		if(index > -1)
		{
			return this.size() - index;
		}
		return -1;
	}

}