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

runtime.Environment = function(){this.initialize.apply(this, arguments);};
runtime.Environment.prototype =
{
    initialize : function(_config, _location)
    {
		var _protocol	= _location["protocol"];
		var _hostname	= _location["hostName"];
		var _port		= _location["port"];
		var _pathName	= _location["pathName"].replace(/\\/g, "/");

    	var _applicationPath = (_pathName.lastIndexOf("/")==_pathName.length-1) ?
							_pathName : _pathName.substring(0, _pathName.lastIndexOf("/")) + "/";

		var _classPath = null;
		if("http:" == _protocol)
		{
			_classPath = "http://" +
							_hostname +
							(_port != 80 ? ":" + _port : "") +
							_applicationPath + _config["onlineCP"];
		}
		else
		{
			_classPath = _config["offlineCP"];
		}

		var _runtimeProperties = {};
		if (_location["search"] && _location["search"].length)
		{
			var query = _location["search"].substr(1, _location["search"].length);
			if (query.indexOf("&") > -1)
			{
				query = query.split("&");
				for(var i=0;i<query.length;i++)
				{
					var kvp = query[i].split("=");
					_runtimeProperties[(kvp[0])] = unescape(kvp[1]);
				}
			}
			else
			{
				query = query.split("=") ;
				_runtimeProperties[(query[0])] = unescape(query[1]);
			}
		}

		this.getApplicationPath = function()
		{
			return _applicationPath;
		}

		this.getClassPath = function()
		{
			return _classPath;
		}

		this.getRuntimeProperties = function()
		{
			return _runtimeProperties;
		}

	},

	getRuntimeProperty : function(_key)
	{
		var value = this.getRuntimeProperties()[_key];
		if(!value)
		{
			return null;
		}
		return value;
	}
};