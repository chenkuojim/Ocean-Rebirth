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

package jsx.io.http;

import jsx.io.http.DefaultResponse;

class HttpResponse extends DefaultResponse
{
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class HttpResponse
	* @constructor
	*/
	HttpResponse(_transport)
	{
		this.transport = _transport;

		this.xml = this.transport.responseXML;
		this.text = this.transport.responseText;
		this.statusCode = this.transport.status;
		this.statusText = this.transport.statusText;
	}

	instance getXml()
	{
		return this.xml;
	}

	instance getText()
	{
		return this.text;
	}

	instance getStatusCode()
	{
		return this.statusCode;
	}

	instance getStatusText()
	{
		return this.statusText;
	}

	instance getAllHeaders()
	{
		return this.transport.getAllResponseHeaders();
	}

	instance getHeader(_name)
	{
		return this.transport.getResponseHeader(_name)
	}

	instance isSuccess()
	{
		return !this.statusCode || (this.statusCode >= 200 && this.statusCode < 300);
	}

}
