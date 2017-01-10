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

runtime.ClassTransporter = function(){this.initialize.apply(this, arguments);};
runtime.ClassTransporter.prototype =
{

	SINGLE_FILE_OUTPUT : "jsre.js",
	ERROR_MSG : "Exception while attempting to save\n\n",

    initialize : function(_classPath, _applicationPath)
    {
    	this.classPath = _classPath;
    	this.applicationPath = _applicationPath;
    },

	transportClass : function(_class)
	{
		var classFile = this.classPath + _class.replace(/\./g, "/") + ".js";

		try
		{
			var request = null;
			try{request = new XMLHttpRequest();}catch(e){}
			if(!request){try{request = new ActiveXObject("Msxml2.XMLHTTP");}catch(e){}}
			if(!request){try{request = new ActiveXObject("Microsoft.XMLHTTP");}catch(e){}}
			if(request)
			{
				request.open("get", classFile, false);
				request.send(null);
				return request.responseText;
			}
			if(!request && readFile)
			{
				var text = readFile(classFile);
				if(!text){throw "";}
				return text;
			}

			return false;
		}
		catch(e)
		{
			runtime.show("ClassNotFound: "+_class);
		}
	},

	getClassesInPkg : function(_package)
	{
		var pkg = _package.replace("*", "");
		var classes = this.transportClass(pkg + "__package__");

		var fqcClasses = [];

		var classesAry = classes.split("\n");
		if(classesAry)
		{
			for(var i=0;i<classesAry.length;i++)
			{
				if(classesAry[i])
				{
					fqcClasses[fqcClasses.length] = pkg + runtime.trimString(classesAry[i]);
				}
			}
		}

		return fqcClasses;
	},

	persistClass : function(_package, _class, _code)
	{
		// check if we need to skip test classes
		if(!$JSRE_CONFIG.includeTests)
		{
			if((_package.indexOf("test") > -1) && (_class.indexOf("Test") > -1)) return;
		}

		var _code = _code;

		// check if we need to minimize the code
		if($JSRE_CONFIG.minimize)
		{
			_code = Minimizer.minimize(_code);
		}

		if(!_package)
		{
			_package = "jsx.lang";
		}
		var fqclass = _package + "." + _class;
		var fixedFQClass = fqclass.replace(/\./g, "/") + ".js";

		var relativePath = (this.classPath).replace($JSRE_CONFIG.srcDir, $JSRE_CONFIG.outputDir);
		if($JSRE_CONFIG.singleFile)
		{
			relativePath = relativePath + this.SINGLE_FILE_OUTPUT;
		}
		else
		{
			relativePath = relativePath + fixedFQClass;
		}

		var absolutePath = (this.applicationPath + relativePath).replace(new RegExp("/","g"),"\\").substr(1);

		var createDirs = function(_absolute, _block)
		{
			var _outputStartIndex = _absolute.indexOf($JSRE_CONFIG.outputDir)+$JSRE_CONFIG.outputDir.length;
			var _outputStart = _absolute.substring(0, _outputStartIndex);
			var _dirs = _absolute.substring(_outputStartIndex+1, _absolute.length).split("\\");

			var _goto = _dirs.length - 1;
			var _currDir = "";
			for(var i=0;i<_goto;i++)
			{
				_currDir += "\\" + _dirs[i];
				var _fullPath = _outputStart + _currDir;
				_block(_fullPath);
			}
		}

		var mozillaIO = function(_absolute, _jsCode)
		{
			try
			{
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
				var file = Components.classes["@mozilla.org/file/local;1"]
							.createInstance(Components.interfaces.nsILocalFile);
				var out = Components.classes["@mozilla.org/network/file-output-stream;1"]
							.createInstance(Components.interfaces.nsIFileOutputStream);

				file.initWithPath(_absolute);
				if (!file.exists())
				{
					file.create(0, 0664);
				}

				var _openOptions;
				if(!$JSRE_CONFIG.singleFile)
				{
					// init for writing, truncate
					_openOptions = 0x02 | 0x20;
				}
				else
				{
					// init for writing, appending
					_openOptions = 0x02 | 0x10 | 0x40;
				}

				out.init(file, _openOptions, 00004, null);
				out.write(_jsCode, _jsCode.length);
				out.flush();
				out.close();

				return true;
			}
			catch(e)
			{
				runtime.show(this.ERROR_MSG + e);
				return false;
			}
		}

		var ieIO = function(_absolute, _jsCode)
		{
			try
			{
				var fso = new ActiveXObject("Scripting.FileSystemObject");

				createDirs(_absolute, function(_fullPath)
				{
					try{fso.GetFolder(_fullPath);}
					catch(e){fso.CreateFolder(_fullPath);}
				});

				var _openOptions;
				if(!$JSRE_CONFIG.singleFile)
				{
					_openOptions = 2;
				}
				else
				{
					_openOptions = 8;
				}

				var file = fso.OpenTextFile(_absolute, _openOptions, true, -1);
				file.Write(_jsCode);
				file.Close();

				return true;
			}
			catch(e)
			{
				runtime.show(this.ERROR_MSG + e.toString());
				return false;
			}
		}

		var rhinoIO = function(_absolute, _jsCode)
		{
			try
			{
				createDirs(_absolute, function(_fullPath)
				{
					var _file = new java.io.File(_fullPath);
					if(!_file.exists())
					{
						_file.mkdir();
					}
				});

				var file = new java.io.File(_absolute);
				file.createNewFile();

				var _out = new java.io.BufferedWriter(new java.io.FileWriter(_absolute, $JSRE_CONFIG.singleFile));
				_out.write(_jsCode);
				_out.close();

				return true;
			}
			catch(e)
			{
				runtime.show(this.ERROR_MSG + e.toString());
				return false;
			}
		}

		var loadScript = function(_file)
		{
			if(!$JSRE_CONFIG.singleFile)
			{
				document.write("<script src='"+_file+"' type='text/javascript' language='javascript'></script>");
			}
		}

		try
		{
			if($GLOBAL_OBJECT.Components)
			{
				mozillaIO(absolutePath, _code);
				loadScript(relativePath);
			}
			else if($GLOBAL_OBJECT.ActiveXObject)
			{
				ieIO(absolutePath, _code);
				loadScript(relativePath);
			}
			else
			{
				rhinoIO(absolutePath, _code);
				if(!$JSRE_CONFIG.singleFile)
				{
					readFile(relativePath);
				}
			}
		}
		catch(e)
		{
			runtime.show(e)
		}
	}

};