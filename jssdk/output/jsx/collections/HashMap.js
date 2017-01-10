
	/**
	* @fileOverview Implementation of the Map interface.
	* @example
	*/
	/**
	* @class HashMap
	* @constructor
	* @extends jsx.collections.AbstractMap
	*/
	jsx.collections.HashMap = function(){this.initialize.apply(this, arguments);}
jsx.collections.HashMap.prototype = new jsx.collections.AbstractMap();
jsx.collections.HashMap.prototype.constructor = jsx.collections.HashMap;
jsx.collections.HashMap.superclass = jsx.collections.AbstractMap.prototype;

	/** @ignore */
	jsx.collections.HashMap.prototype.initialize = function(_map)
	{
		this.entryItems = new jsx.collections.ArrayList();

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
	jsx.collections.HashMap.prototype.entryList = function()
	{
		return this.entryItems;
	}

	/**
	* Associates the specified value with the specified key in this map.
	* @param {Object} _key
	* @param {Object} _value
	*/
	jsx.collections.HashMap.prototype.put = function(_key, _value)
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


jsx.collections.HashMap.PACKAGE = "jsx.collections";
jsx.collections.HashMap.CLASS = "jsx.collections.HashMap";
jsx.collections.HashMap.SUPER_CLASS = "jsx.collections.AbstractMap";
jsx.collections.HashMap.IMPORTS = ["jsx.collections.ArrayList","jsx.collections.Map","jsx.collections.AbstractMap"];
jsx.collections.HashMap.INTERFACES = ["jsx.collections.Map"];
jsx.collections.HashMap.MIXINS = [];
jsx.collections.HashMap.getName = function(){return jsx.collections.HashMap.CLASS;}
jsx.collections.HashMap.klass = new jsx.lang.Class(jsx.collections.HashMap.getName());
jsx.collections.HashMap.prototype.getClass = function(){return jsx.collections.HashMap.klass;}
jsx.collections.HashMap.WARNINGS = ["jsx.collections.HashMap must implement jsx.collections.Map.entrySet","jsx.collections.HashMap must implement jsx.collections.Map.keySet"];
