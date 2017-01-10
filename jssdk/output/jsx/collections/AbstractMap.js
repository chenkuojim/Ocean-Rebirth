
	/**
	* @fileOverview <code>jsx.collections.AbstractMap</code> is an abstract class used as a base implementation for <code>jsx.collections.Map</code> classes.
	* @example
	*/
	/**
	* @class AbstractMap
	*/
	jsx.collections.AbstractMap = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.collections.AbstractMap.prototype.initialize = function(){}

	/**
	* Returns a list view of the mappings contained in this map.
	* @return {jsx.collection.List}
	*/
	jsx.collections.AbstractMap.prototype.entryList = function(){throw 'AbstractMap.entryList is abstract';}

	/**
	* Associates the specified value with the specified key in this map. Returns previous value associated with specified key,
	*  or null  if there was no mapping for key.
	* @param {Object} _key
	* @param {Object} _value
	* @return {Object}
	*/
	jsx.collections.AbstractMap.prototype.put = function(_key, _value){throw 'AbstractMap.put is abstract';}

	/**
	* Required by the jsx.collections.Enumerable mixin. Calls AbstractMap#iterator(_block) passing a {Object}value and {Object}key to the block.
	* @param {Function} _block. Parameters passed to the _block are <value>Object, <key>Object.
	*/
	jsx.collections.AbstractMap.prototype.each = function(_block)
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
					if (e != jsx.collections.Enumerable.$continue) throw e;
				}
			});
		}
		catch(e)
		{
			if (e != jsx.collections.Enumerable.$break) throw e;
		}
	}

	/**
	* Iterate over the map of entries.
	* @param {Function} _block The function to execute for every key-value mapping in the map.
	*/
	jsx.collections.AbstractMap.prototype.iterator = function(_block)
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
	jsx.collections.AbstractMap.prototype.remove = function(_key)
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
	jsx.collections.AbstractMap.prototype.putAll = function(_map)
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
	jsx.collections.AbstractMap.prototype.clear = function()
	{
		this.entryList().clear();
	}

	/**
	* Returns the value to which this map maps the specified key.
	* @param {Object} _key
	* @return {Object}
	*/
	jsx.collections.AbstractMap.prototype.get = function(_key)
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
	jsx.collections.AbstractMap.prototype.keys = function()
	{
		var list = new jsx.collections.ArrayList();
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
	jsx.collections.AbstractMap.prototype.values = function()
	{
		var list = new jsx.collections.ArrayList();
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
	jsx.collections.AbstractMap.prototype.containsKey = function(_key)
	{
		return this.keys().contains(_key);
	}

	/**
	* Returns true if this map maps one or more keys to this value.
	* @param {Object} _value
	* @return {Boolean]
	*/
	jsx.collections.AbstractMap.prototype.containsValue = function(_value)
	{
		return this.values().contains(_value);
	}

	/**
	* Returns true if this map contains no key-value mappings.
	* @return {Boolean}
	*/
	jsx.collections.AbstractMap.prototype.isEmpty = function()
	{
		return this.size() == 0;
	}

	/**
	* Returns the number of key-value mappings in this map.
	* @return {Number}
	*/
	jsx.collections.AbstractMap.prototype.size = function()
	{
		return this.entryList().size();
	}

	/**
	* Returns a String representation of a jsx.collections.Map.
	* @return {Stirng}
	*/
	jsx.collections.AbstractMap.prototype.toString = function()
	{
		var me = this;
		var sb = new jsx.lang.StringBuffer();
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
	jsx.collections.AbstractMap.prototype.equals = function(_object)
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


jsx.collections.AbstractMap.prototype.invoke = jsx.collections.Enumerable.invoke;
jsx.collections.AbstractMap.prototype.map = jsx.collections.Enumerable.map;
jsx.collections.AbstractMap.prototype.detect = jsx.collections.Enumerable.detect;
jsx.collections.AbstractMap.prototype.echo = jsx.collections.Enumerable.echo;
jsx.collections.AbstractMap.prototype.zip = jsx.collections.Enumerable.zip;
jsx.collections.AbstractMap.prototype.max = jsx.collections.Enumerable.max;
jsx.collections.AbstractMap.prototype.toArray = jsx.collections.Enumerable.toArray;
jsx.collections.AbstractMap.prototype.min = jsx.collections.Enumerable.min;
jsx.collections.AbstractMap.prototype.convertToArray = jsx.collections.Enumerable.convertToArray;
jsx.collections.AbstractMap.prototype.$break = jsx.collections.Enumerable.$break;
jsx.collections.AbstractMap.prototype.sortBy = jsx.collections.Enumerable.sortBy;
jsx.collections.AbstractMap.prototype.select = jsx.collections.Enumerable.select;
jsx.collections.AbstractMap.prototype.inject = jsx.collections.Enumerable.inject;
jsx.collections.AbstractMap.prototype.find = jsx.collections.Enumerable.find;
jsx.collections.AbstractMap.prototype.collect = jsx.collections.Enumerable.collect;
jsx.collections.AbstractMap.prototype.any = jsx.collections.Enumerable.any;
jsx.collections.AbstractMap.prototype.entries = jsx.collections.Enumerable.entries;
jsx.collections.AbstractMap.prototype.findAll = jsx.collections.Enumerable.findAll;
jsx.collections.AbstractMap.prototype.grep = jsx.collections.Enumerable.grep;
jsx.collections.AbstractMap.prototype.pluck = jsx.collections.Enumerable.pluck;
jsx.collections.AbstractMap.prototype.$continue = jsx.collections.Enumerable.$continue;
jsx.collections.AbstractMap.prototype.partition = jsx.collections.Enumerable.partition;
jsx.collections.AbstractMap.prototype.reject = jsx.collections.Enumerable.reject;
jsx.collections.AbstractMap.prototype.all = jsx.collections.Enumerable.all;
jsx.collections.AbstractMap.prototype.member = jsx.collections.Enumerable.member;
jsx.collections.AbstractMap.prototype.include = jsx.collections.Enumerable.include;

jsx.collections.AbstractMap.PACKAGE = "jsx.collections";
jsx.collections.AbstractMap.CLASS = "jsx.collections.AbstractMap";
jsx.collections.AbstractMap.SUPER_CLASS = "";
jsx.collections.AbstractMap.IMPORTS = ["jsx.collections.ArrayList","jsx.collections.Map","jsx.collections.Enumerable","jsx.lang.StringBuffer"];
jsx.collections.AbstractMap.INTERFACES = ["jsx.collections.Map"];
jsx.collections.AbstractMap.MIXINS = ["jsx.collections.Enumerable"];
jsx.collections.AbstractMap.getName = function(){return jsx.collections.AbstractMap.CLASS;}
jsx.collections.AbstractMap.klass = new jsx.lang.Class(jsx.collections.AbstractMap.getName());
jsx.collections.AbstractMap.prototype.getClass = function(){return jsx.collections.AbstractMap.klass;}
jsx.collections.AbstractMap.WARNINGS = ["jsx.collections.AbstractMap must implement jsx.collections.Map.entrySet","jsx.collections.AbstractMap must implement jsx.collections.Map.keySet"];
