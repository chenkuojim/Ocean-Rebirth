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

package jsx.util.session;

import jsx.collections.ArrayList;
import jsx.collections.HashMap;

class Session
{

	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class Session
	* @description API over the cookies object
	* @constructor
	* @param {String} _id
	* @param {Number} _hours
	* @param {String} _path
	* @param {String} _domain
	* @param {String} _secure
	*/
	Session(_id, _hours, _path, _domain, _secure)
	{
	// 1 character =  1 byte
	// id, cache[name]=value, host, path, times = 4096 bytes;

/*
4000 bytes for id and cookie values

---id+1 / cookies values{name+1/value+1}----
test-123123
1:asdfasdfadsf asdfasdf asdfasdf asdfasdfasd asdfasdfa asdfasdfasdf asdfasdfasd fasdfasdfasd fasdfasdf&2:asdfasdfadsf asdfasdf asdfasdf asdfasdfasd asdfasdfa asdfasdfasdf asdfasdfasd fasdfasdfasd fasdfasdf&3:asdfasdfadsf asdfasdf asdfasdf asdfasdfasd asdfasdfa asdfasdfasdf asdfasdfasd fasdfasdfasd fasdfasdf&4:asdfasdfadsf asdfasdf asdfasdf asdfasdfasd asdfasdfa asdfasdfasdf asdfasdfasd fasdfasdfasd fasdfasdf&5:asdfasdfadsf asdfasdf asdfasdf asdfasdfasd asdfasdfa asdfasdfasdf asdfasdfasd fasdfasdfasd fasdfasdf&6:asdfasdfadsf asdfasdf asdfasdf asdfasdfasd asdfasdfa asdfasdfasdf asdfasdfasd fasdfasdfasd fasdfasdf&7:asdfasdfadsf asdfasdf asdfasdf asdfasdfasd asdfasdfa asdfasdfasdf asdfasdfasd fasdfasdfasd fasdfasdf&8:asdfasdfadsf asdfasdf asdfasdf asdfasdfasd asdfasdfa asdfasdfasdf asdfasdfasd fasdfasdfasd fasdfasdf&9:asdfasdfadsf asdfasdf asdfasdf asdfasdfasd asdfasdfa asdfasdfasdf asdfasdfasd fasdfasdfasd fasdfasdf&10:asdfasdfadsf asdfasdf asdfasdf asdfasdfasd asdfasdfa asdfasdfasdf asdfasdfasd fasdfasdfasd fasdfasdf&11:asdfasdfadsf asdfasdf asdfasdf asdfasdfasd asdfasdfa asdfasdfasdf asdfasdfasd fasdfasdfasd fasdfasdf&12:asdfasdfadsf asdfasdf asdfasdf asdfasdfasd asdfasdfa asdfasdfasdf asdfasdfasd fasdfasdfasd fasdfasdf&13:asdfasdfadsf asdfasdf asdfasdf asdfasdfasd asdfasdfa asdfasdfasdf asdfasdfasd fasdfasdfasd fasdfasdf&14:asdfasdfadsf asdfasdf asdfasdf asdfasdfasd asdfasdfa asdfasdfasdf asdfasdfasd fasdfasdfasd fasdfasdf&15:asdfasdfadsf asdfasdf asdfasdf asdfasdfasd asdfasdfa asdfasdfasdf asdfasdfasd fasdfasdfasd fasdfasdf&16:asdfasdfadsf asdfasdf asdfasdf asdfasdfasd asdfasdfa asdfasdfasdf asdfasdfasd fasdfasdfasd fasdfasdf&17:asdfasdfadsf asdfasdf asdfasdf asdfasdfasd asdfasdfa asdfasdfasdf asdfasdfasd fasdfasdfasd fasdfasdf&18:asdfasdfadsf asdfasdf asdfasdf asdfasdfasd asdfasdfa asdfasdfasdf asdfasdfasd fasdfasdfasd fasdfasdf&19:asdfasdfadsf asdfasdf asdfasdf asdfasdfasd asdfasdfa asdfasdfasdf asdfasdfasd fasdfasdfasd fasdfasdf&20:asdfasdfadsf asdfasdf asdfasdf asdfasdfasd asdfasdfa asdfasdfasdf asdfasdfasd fasdfasdfasd fasdfasdf
---------

---host / path----

~~local~~/C:\projects\java\name2name\name2name-2.0\n2nWeb\WebContent\
---------

---45-----
1088
508910592
29809623
277969424
29809556
----------
*/

		this.id = _id;

		this.expiration;
		if(_hours)
		{
			this.expiration = new Date((new Date()).getTime() + _hours*3600000);
		}

		this.path = _path;
		this.domain = _domain;
		this.secure = _secure;

		this.created;
		this.lastChecked;
		this.lastModified;
		this.lastAccessed;

		// cache facade for document.cookie
		this.cache = new HashMap();

		// populate the cache with the cookies
	    var allcookies = document.cookie;

		this.resetSession = function()
		{
			var cookieval = "";

			this.cache.entrySet().each(function(_entry)
			{
				if (cookieval != "") cookieval += '&';
				cookieval += _entry.key + ':' + String(_entry.value).escapeHTML();
			});

			var cookie = this.id + '=' + cookieval;

			if (this.expiration) cookie += '; expires=' + this.expiration.toGMTString();
			if (this.path) cookie += '; path=' + this.path;
			if (this.domain) cookie += '; domain=' + this.domain;
			if (this.secure) cookie += '; secure';

			document.cookie = cookie;

			this.lastModified = new Date();
		};

		var tmpDate = new Date();
	    if (!allcookies)
	    {
			this.created = tmpDate;
		    return;
	    }
	    else
	    {
			this.lastChecked = tmpDate;
			this.lastModified = tmpDate;
			this.lastAccessed = tmpDate;
	    }

	    var start = allcookies.indexOf(this.id + '=');
		if(start > -1)
		{
			start += this.id.length + 1;

			var end = allcookies.indexOf(';', start);
			if (end == -1) end = allcookies.length;
			var cookieval = allcookies.substring(start, end);

			var ary = cookieval.split('&');
			for(var i=0; i < ary.length; i++)
			{
				ary[i] = ary[i].split(':');
			}

			for(var i=0;i<ary.length;i++)
			{
				this.cache.put(ary[i][0], String(ary[i][1]).unescapeHTML());
			}
		}
	}

	instance getAttribute(_name)
	{
		this.lastAccessed = new Date();

		return this.cache.get(_name);
	}

	instance setAttribute(_name, _value)
	{
		this.cache.put(_name, _value);

		this.resetSession();
	}

	instance removeAttribute(_name)
	{
		this.cache.remove(_name);

		this.resetSession();
	}

	instance getAttributeNames()
	{
		this.lastAccessed = new Date();

		var names = new ArrayList();

		this.cache.entrySet().each(function(_entry)
	    {
			names.add(_entry.key);
	    });

		return names;
	}

	instance invalidate()
	{
	    var cookie = this.id + '=';

	    if (this.path) cookie += '; path=' + this.path;
	    if (this.domain) cookie += '; domain=' + this.domain;

	    cookie += '; expires=Fri, 02-Jan-1970 00:00:00 GMT';

	    document.cookie = cookie;
	}

}
