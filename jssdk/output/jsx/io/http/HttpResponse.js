
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class HttpResponse
	* @constructor
	*/
	jsx.io.http.HttpResponse = function(){this.initialize.apply(this, arguments);}
jsx.io.http.HttpResponse.prototype = new jsx.io.http.DefaultResponse();
jsx.io.http.HttpResponse.prototype.constructor = jsx.io.http.HttpResponse;
jsx.io.http.HttpResponse.superclass = jsx.io.http.DefaultResponse.prototype;

	/** @ignore */
	jsx.io.http.HttpResponse.prototype.initialize = function(_transport)
	{
		this.transport = _transport;

		this.xml = this.transport.responseXML;
		this.text = this.transport.responseText;
		this.statusCode = this.transport.status;
		this.statusText = this.transport.statusText;
	}

	jsx.io.http.HttpResponse.prototype.getXml = function()
	{
		return this.xml;
	}

	jsx.io.http.HttpResponse.prototype.getText = function()
	{
		return this.text;
	}

	jsx.io.http.HttpResponse.prototype.getStatusCode = function()
	{
		return this.statusCode;
	}

	jsx.io.http.HttpResponse.prototype.getStatusText = function()
	{
		return this.statusText;
	}

	jsx.io.http.HttpResponse.prototype.getAllHeaders = function()
	{
		return this.transport.getAllResponseHeaders();
	}

	jsx.io.http.HttpResponse.prototype.getHeader = function(_name)
	{
		return this.transport.getResponseHeader(_name)
	}

	jsx.io.http.HttpResponse.prototype.isSuccess = function()
	{
		return !this.statusCode || (this.statusCode >= 200 && this.statusCode < 300);
	}


jsx.io.http.HttpResponse.PACKAGE = "jsx.io.http";
jsx.io.http.HttpResponse.CLASS = "jsx.io.http.HttpResponse";
jsx.io.http.HttpResponse.SUPER_CLASS = "jsx.io.http.DefaultResponse";
jsx.io.http.HttpResponse.IMPORTS = ["jsx.io.http.DefaultResponse"];
jsx.io.http.HttpResponse.INTERFACES = [];
jsx.io.http.HttpResponse.MIXINS = [];
jsx.io.http.HttpResponse.getName = function(){return jsx.io.http.HttpResponse.CLASS;}
jsx.io.http.HttpResponse.klass = new jsx.lang.Class(jsx.io.http.HttpResponse.getName());
jsx.io.http.HttpResponse.prototype.getClass = function(){return jsx.io.http.HttpResponse.klass;}
jsx.io.http.HttpResponse.WARNINGS = [];
