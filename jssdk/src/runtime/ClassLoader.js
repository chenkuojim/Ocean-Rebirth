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

runtime.ClassLoader = function(){this.initialize.apply(this, arguments);};
runtime.ClassLoader.prototype =
{

	OBJECT_METHODS : ["respondsTo", "equals", "_$toString$_", "getClass"],

    initialize : function(_classTransporter, _preProcessor)
    {
		var __loaded__ = [];
		this.getLoaded = function()
		{
			return __loaded__;
		}

    	this.classTransporter = _classTransporter;
    	this.preProcessor = _preProcessor;
    },

	evaluate : function(_code)
	{
		var classDef = {};
		classDef.jsCode = _code;

		// TODO - better checking for class
		if(_code.indexOf("class ")>-1)
		{
			classDef = this.preProcessor.preprocess(_code, this.getLoaded());

			// load classes, this will load Dependencies, Super, Interfaces, Mixins
			for(var i=0;i<classDef.imports.length;i++)
			{
				this.loadClass(classDef.imports[i]);
			}

			// handle mixin function pointers
			if(classDef.mixins.length)
			{
				for(var i=0;i<classDef.mixins.length;i++)
				{
					var mixin = eval(classDef.mixins[i]);
					// this will interate over class level properties
					for(var prop in mixin)
					{
						// only select class methods and only use methods defined in the class
						if((typeof mixin[prop] == "function") && (mixin.hasOwnProperty(prop)) && prop != "getName")
						{
							// create function pointers
							classDef.jsCode += "\n"+classDef.fqClass+".prototype."+prop+" = "+classDef.mixins[i]+"."+prop+";";
						}
					}
					classDef.jsCode += "\n";
				}
			}

			// code for Reflection
			if("Class" != classDef.fqClass)
			{
				classDef.jsCode += "\n"+classDef.fqClass+".PACKAGE = \""+classDef.pakage+"\";";
				classDef.jsCode += "\n"+classDef.fqClass+".CLASS = \""+classDef.fqClass+"\";";
				classDef.jsCode += "\n"+classDef.fqClass+".SUPER_CLASS = \""+classDef.fqSuperClass+"\";";
				classDef.jsCode += "\n"+classDef.fqClass+".IMPORTS = [";
				for(var i=0;i<classDef.imports.length;i++)
				{
					classDef.jsCode += "\""+classDef.imports[i]+"\"";
					if(i != (classDef.imports.length-1))
					{
						classDef.jsCode += ",";
					}
				}
				classDef.jsCode += "];";
				classDef.jsCode += "\n"+classDef.fqClass+".INTERFACES = [";
				for(var i=0;i<classDef.interfaces.length;i++)
				{
					classDef.jsCode += "\""+classDef.interfaces[i]+"\"";
					if(i != (classDef.interfaces.length-1))
					{
						classDef.jsCode += ",";
					}
				}
				classDef.jsCode += "];";
				classDef.jsCode += "\n"+classDef.fqClass+".MIXINS = [";
				for(var i=0;i<classDef.mixins.length;i++)
				{
					classDef.jsCode += "\""+classDef.mixins[i]+"\"";
					if(i != (classDef.mixins.length-1))
					{
						classDef.jsCode += ",";
					}
				}
				classDef.jsCode += "];";

				classDef.jsCode += "\n"+classDef.fqClass+".getName = function(){return "+classDef.fqClass+".CLASS;}";
				classDef.jsCode += "\n"+classDef.fqClass+".klass = new jsx.lang.Class("+classDef.fqClass+".getName());";

				// Math does not have a prototype object and shouldn't
				if("Math" != classDef.fqClass)
				{
					// create getClass
					classDef.jsCode += "\n"+classDef.fqClass+".prototype.getClass = function(){return "+classDef.fqClass+".klass;}";
				}
			}
		}

		try
		{
			// need to eval first to be able to validate interfaces
			eval(classDef.jsCode);

			// validate interfaces
			var warnings = [];
			if(classDef.interfaces && classDef.interfaces.length)
			{
				var classPrototype = eval(classDef.fqClass).prototype;
				for(var i=0;i<classDef.interfaces.length;i++)
				{
					var interfacePrototype = eval(classDef.interfaces[i]).prototype;
					for(var prop in interfacePrototype)
					{
						if(typeof interfacePrototype[prop] == "function")
						{
							if(this.OBJECT_METHODS.indexOf(prop) > -1) continue;

							var func = classPrototype[prop];

							if(!func || typeof func != "function")
							{
								warnings[warnings.length] = classDef.fqClass + " must implement " + classDef.interfaces[i]+"."+prop;
							}
						}
					}
				}
			}

			var warningsText = "\n"+classDef.fqClass+".WARNINGS = [";
			for(var i=0;i<warnings.length;i++)
			{
				warningsText += "\""+warnings[i]+"\"";
				if(i != (warnings.length-1))
				{
					warningsText += ",";
				}
			}
			warningsText += "];";
			eval(warningsText);

			// check if we need to persist the class
			if($JSRE_CONFIG.persistClasses)
			{
				classDef.jsCode += warningsText+"\n";
				this.classTransporter.persistClass(classDef.pakage, classDef.clazz, classDef.jsCode);
			}
		}
		catch(e)
		{
			runtime.show(classDef.fqClass + " has an error: " + e);
		}
	},

    loadClass : function(_class)
    {
		var loaded = this.getLoaded();
		var loading = [];

		// check what has already been loaded
		var packages = _class.split(".");
		var tmp = "";
		for(var i=0;i<packages.length;i++)
		{
			if(i > 0)
			{
				tmp += ".";
			}
			tmp += packages[i];

			// check that we didn't already add the class
			if(runtime.findIndexInArray(tmp, loaded) == -1)
			{
				loading[loading.length] = tmp;

				if(i < (packages.length-1))
				{
					// use for namespacing
					eval(tmp + " = {};");

					// check if we need to persist the class
					if($JSRE_CONFIG.persistClasses && $JSRE_CONFIG.singleFile)
					{
						if(!$JSRE_CONFIG.includeTests)
						{
							if(tmp.indexOf("test") > -1) continue;
						}
						this.classTransporter.persistClass("", "", tmp + " = {};\n");
					}
				}
			}
		}
		// if nothing to load, then return
		if (loading.length == 0)
		{
			return;
		}

		for(var i=0;i<loading.length;i++)
		{
			if(i == (loading.length-1))
			{
				// handle wildcards
				if(loading[i].indexOf("*") > -1)
				{
					var classes = this.classTransporter.getClassesInPkg(loading[i]);

					// load and add the classes to the cache
					for(var j=0;j<classes.length;j++)
					{
						// check that we didn't already add the class
						if(runtime.findIndexInArray(classes[j], loaded) == -1)
						{
							this.evaluate(this.classTransporter.transportClass(classes[j]));

							// add the single class into the cache
							loaded[loaded.length] = classes[j];
						}
					}
				}
				else
				{
					this.evaluate(this.classTransporter.transportClass(loading[i]));
				}
			}

			loaded[loaded.length] = loading[i];
		}
    }

};