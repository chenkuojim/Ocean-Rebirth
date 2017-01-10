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

import jsx.lang.StringBuffer;
import jsx.collections.Enumerable;
import jsx.collections.Collection;

class AbstractCollection implements Collection mixin Enumerable
{
	/**
	* @fileOverview <code>jsx.collections.AbstractCollection</code> is an abstract class used as a base implementation for <code>jsx.collections.Collection</code> classes.
	* @example
	*/
	/**
	* @class AbstractCollection
	*/
	AbstractCollection(){}

	/**
	* Iterate over the collection of elements.
	* @param {Function} _block The function to execute for every element in the collection during iteration.
	*/
	abstract iterator(_block)

	/**
	* Add an element to the end of collection. Returns whether the element was added to the collection.
	* @param {Object} _object The element added to the collection
	* @return {Boolean}
	*/
    abstract add(_object)

	/**
	* Removes the specified object from the collection. Return whether the object was removed.
	* @param {Object} _object
	* @return {Boolean}
	*/
    abstract remove(_object)

	/**
	* Returns the size of the collection.
	* @return {Number}
	*/
    abstract size()

	/**
	* Required by the jsx.collections.Enumerable mixin. Calls <subclass>#iterator(_block) passing a {Object}value and {Number}index to the block.
	* @param {Function} _block. Parameters passed to the _block are <value>Object and <index>Number.
	*/
	instance each(_block)
	{
		var me = this;
		var index = 0;
		try
		{
			this.iterator(function(value)
			{
				try
				{
					_block(value, index++);
				}
				catch(e)
				{
					if (e != Enumerable.$continue) throw e;
				}
			});
		}
		catch(e)
		{
			if (e != Enumerable.$break) throw e;
		}
	}

	/**
	* Adds all the elements in the specified collecion to the end of the collection. Returns whether the current collection was modified.
	* @param {jsx.collections.Collection} _collection
	* @return {Boolean}
	*/
    instance addAll(_collection)
    {
    	var me = this;
    	var modified = false;
		_collection.each(function(_value)
		{
			if(me.add(_value))
			{
				modified = true;
			}
		});
    	return modified;
    }

	/**
	* Removes all elements in the collection.
	*/
	instance clear()
	{
		var me = this;
		this.each(function(_value)
		{
			me.remove(_value);
		});
	}

	/**
	* Returns whether the specified object is contained in the collection.
	* @param {Object} _object Parameter could be null. If there is a null element in the collection, true will be returned.
	* @return {Boolean}
	*/
	instance contains(_object)
	{
		var me = this;
		if(_object == null)
		{
			// check for null
			var result = false;
			this.each(function(_value)
			{
				if(_value == null)
				{
					result = true;
					me.$break();
				}
			});
			return result;
		}
		else
		{
			return this.include(_object);
		}
	}

	/**
	* Returns whether the elements in the specified collection exist in the collection.
	* @param {jsx.collections.Collection}
	* @return {Boolean}
	*/
    instance containsAll(_collection)
    {
    	var me = this;
    	var result = true;
		_collection.each(function(_value)
		{
			if(!me.contains(_value))
			{
				result = false;
				me.$break();
			}
		});
    	return result;
    }

	/**
	* Returns whether the collection is empty.
	* @return {Boolean}
	*/
	instance isEmpty()
	{
		return this.size() == 0;
	}

	/**
	* Removes all the elements in the specified collection from the current collection. Returns whether the current collection was modified.
	* @param {jsx.collections.Collection} _collection
	* @return {Boolean}
	*/
    instance removeAll(_collection)
    {
    	var me = this;
    	var modified = false;
		_collection.each(function(_value)
		{
			if(me.remove(_value))
			{
				modified = true;
			}
		});
    	return modified;
    }

	/**
	* Removes all elements in the current collection if they are not in the specified collection. Returns whether the current collection was modified.
	* @param {Object} _collection
	* @return {Boolean}
	*/
    instance retainAll(_collection)
    {
    	var me = this;
    	var modified = false;
		//TODO, not very elegant
		var tmp = [];
		this.each(function(_value)
		{
			if(!_collection.contains(_value))
			{
				tmp[tmp.length] = _value;
				modified = true;
			}
		});

		if(modified)
		{
			for(var i=0;i<tmp.length;i++)
			{
				this.remove(tmp[i]);
			}
		}

    	return modified;
    }

	/**
	* Returns a String representation of a Collection.
	* @return {Stirng}
	*/
	instance toString()
	{
		var me = this;
		var sb = new StringBuffer();
		sb.append("[");

		this.each(function(_value, _index)
		{
			sb.append(_value);
			if(_index != (me.size() -1)){sb.append(", ");}
		});

		sb.append("]")
		return sb.toString();
	}

}