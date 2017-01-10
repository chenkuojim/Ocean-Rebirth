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
import jsx.collections.AbstractMap;

class HashMap extends AbstractMap implements Map
{
	/**
	* @fileOverview Implementation of the Map interface.
	* @example
	*/
	/**
	* @class HashMap
	* @constructor
	* @extends jsx.collections.AbstractMap
	*/
	HashMap(_map)
	{
		this.entryItems = new ArrayList();

		var me = this;
		if(_map)
		{
			_map.each(function(_value, _key)
			{
				me.put(_key, _value);
			});
		}
	}

	/**
	* Returns a list view of the entries.
	* @return {jsx.collection.List}
	*/
	instance entryList()
	{
		return this.entryItems;
	}

	/**
	* Associates the specified value with the specified key in this map.
	* @param {Object} _key
	* @param {Object} _value
	*/
	instance put(_key, _value)
	{
		var result = null;
		if(this.containsKey(_key))
		{
			result = this.remove(_key);
		}

		this.entryItems.add({key:_key, value:_value,
							equals : function(_object)
							{
								if (this === _object)
								{
									return true;
								}
								return this.key.equals(_object.key) && this.value.equals(_object.value);
							}
							});

		return result;
	}

}