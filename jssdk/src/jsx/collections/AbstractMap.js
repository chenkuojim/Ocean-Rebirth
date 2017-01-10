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
import jsx.collections.Map;
import jsx.collections.Enumerable;
import jsx.lang.StringBuffer;

class AbstractMap implements Map mixin Enumerable
{
	/**
	* @fileOverview <code>jsx.collections.AbstractMap</code> is an abstract class used as a base implementation for <code>jsx.collections.Map</code> classes.
	* @example
	*/
	/**
	* @class AbstractMap
	*/
	AbstractMap(){}

	/**
	* Returns a list view of the mappings contained in this map.
	* @return {jsx.collection.List}
	*/
	abstract entryList()

	/**
	* Associates the specified value with the specified key in this map. Returns previous value associated with specified key,
	*  or null  if there was no mapping for key.
	* @param {Object} _key
	* @param {Object} _value
	* @return {Object}
	*/
	abstract put(_key, _value)

	/**
	* Required by the jsx.collections.Enumerable mixin. Calls AbstractMap#iterator(_block) passing a {Object}value and {Object}key to the block.
	* @param {Function} _block. Parameters passed to the _block are <value>Object, <key>Object.
	*/
	instance each(_block)
	{
		var me = this;
		try
		{
			this.iterator(function(_entry)
			{
				try
				{
					_block(_entry.value, _entry.key);
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
	* Iterate over the map of entries.
	* @param {Function} _block The function to execute for every key-value mapping in the map.
	*/
	instance iterator(_block)
	{
		var _entries = this.entryList();
		for(var i=0;i<this.size();i++)
		{
			_block(_entries.get(i));
		}
	}

	/**
	* Removes and returns the mapping for this key from this map if it is present.
	* @param {Object} _key
	* @return {Object}
	*/
	instance remove(_key)
	{
		var _index = this.keys().indexOf(_key);
		if(_index <= -1)
		{
			return null;
		}

		var _value = this.get(_key);

		this.entryList().removeAt(_index);

		return _value;
	}

	/**
	* Copies all of the mappings from the specified map to this map.
	* @param {jsx.collections.Map} _map
	*/
	instance putAll(_map)
	{
		var me = this;
		_map.entryList().each(function(_entry)
		{
			me.put(_entry.key, _entry.value);
		});
	}

	/**
	* Removes all mappings from this map.
	*/
	instance clear()
	{
		this.entryList().clear();
	}

	/**
	* Returns the value to which this map maps the specified key.
	* @param {Object} _key
	* @return {Object}
	*/
	instance get(_key)
	{
		var me = this;
		var result = null;
		this.entryList().each(function(_entry)
		{
			if(_key == null)
			{
				if(_entry.key == null)
				{
					result = _entry.value;
					me.$break;
				}
			}
			else
			{
				if(_entry.key != null && _entry.key.equals(_key))
				{
					result = _entry.value;
					me.$break;
				}
			}
		});
		return result;
	}

	/**
	* Returns a List view of the keys contained in this map.
	* @return {jsx.collections.List}
	*/
	instance keys()
	{
		var list = new ArrayList();
		var items = this.entryList().pluck("key");
		for(var i=0;i<items.length;i++)
		{
			list.add(items[i]);
		}
		return list;
	}

	/**
	* Returns a List view of the values contained in this map.
	* @return {jsx.collections.List}
	*/
	instance values()
	{
		var list = new ArrayList();
		var items = this.entryList().pluck("value");
		for(var i=0;i<items.length;i++)
		{
			list.add(items[i]);
		}
		return list;
	}

	/**
	* Returns true if this map contains a mapping for the specified key.
	* @param {Object} _key
	* @return {Boolean]
	*/
	instance containsKey(_key)
	{
		return this.keys().contains(_key);
	}

	/**
	* Returns true if this map maps one or more keys to this value.
	* @param {Object} _value
	* @return {Boolean]
	*/
	instance containsValue(_value)
	{
		return this.values().contains(_value);
	}

	/**
	* Returns true if this map contains no key-value mappings.
	* @return {Boolean}
	*/
	instance isEmpty()
	{
		return this.size() == 0;
	}

	/**
	* Returns the number of key-value mappings in this map.
	* @return {Number}
	*/
	instance size()
	{
		return this.entryList().size();
	}

	/**
	* Returns a String representation of a Map.
	* @return {Stirng}
	*/
	instance toString()
	{
		var me = this;
		var sb = new StringBuffer();
		sb.append("{");

		var index = 0;
		this.each(function(_value, _key)
		{
			if(_key != null)
			{
				sb.append(_key.toString());
			}
			else
			{
				sb.append("null");
			}

			sb.append(" = ");

			if(_value != null)
			{
				sb.append(_value.toString());
			}
			else
			{
				sb.append("null");
			}

			if(index != (me.size() -1)){sb.append(", ");}
			index++;
		});

		sb.append("}")
		return sb.toString();
	}

	/**
	* Returns whether this Map is equal to the Map List.
	* @param {Object} _object
	* @return {Boolean}
	*/
	instance equals(_object)
	{
		var me = this;

		if (this === _object)
		{
			return true;
		}
		if(!this.getClass().isInstance(_object))
		{
			return false;
		}

		// compare lengths
		if(this.size() != _object.size()){ return false; }

		var result = true;
		this.entryList().each(function(_entry)
		{
			var _key = _entry.key;
			var _value = _entry.value;

			if(_value == null)
			{
				if(!(_object.get(_key) == null && t.containsKey(_key)))
				{
					result = false;
					me.$break();
				}
			}
			else
			{
				if(!_value.equals(_object.get(_key)))
				{
					result = false;
					me.$break();
				}
			}
		});

		return result;
	}

}