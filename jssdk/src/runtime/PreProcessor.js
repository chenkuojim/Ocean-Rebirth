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

runtime.PreProcessor = function(){this.initialize.apply(this, arguments);};
runtime.PreProcessor.prototype =
{

	CORE_CLASSES : ["Array", "Boolean", "Date", "Function", "Math", "Number", "Object", "RegExp", "String"],

	// namespace
	PACKAGE_TXT : "package ",
	// dependency
	IMPORT_TXT : "import ",
	// class def
	CLASS_TXT : "class ",
	// parent def
	EXTENDS_TXT : "extends ",
	// behavior contract
	IMPLEMENTS_TXT : "implements ",
	// module functionality
	MIXINS_TXT : "mixin ",

	// parent init
	SUPER_INIT : "super(",
	// parent call
	SUPER_TXT : "super.",
	// instance method
	INSTANCE_TXT : "instance ",
	// static method
	STATIC_TXT : "static ",
	// abstract method
	ABSTRACT_TXT : "abstract ",

    initialize : function(_classTransporter)
    {
    	this.classTransporter = _classTransporter;

		// ########################################
		// ##########  FIX NAMESPACING ############
		// strings before search
		var newBeforeSearch = "new ";
		var parenAfter = "(";

		var assignBeforeSearch = "=";
		var assignSpaceBeforeSearch = "= ";
		var spaceAssignBeforeSearch = " =";
		var spaceAssignSpaceBeforeSearch = " = ";

		// strings around search
		var dotAfterSearch = ".";
		var spaceBefore = " ";
		var plusBefore = "+";
		var parenBefore = "(";
		var tabBefore = "\t";
		var newLineBefore = "\n";
		var returnBefore = "\r";
		var formFeedBefore = "\f";
		this.fixNamespacing = function(aSearched, aFind, aReplace)
		{
			var result;
			var newText = "";
			var start = 0;
			var end = 0;
			var reqexp = new RegExp(aFind, "g");
			while((result = reqexp.exec(aSearched)) != null)
			{
				end = result.index;

				newText += aSearched.substring(start, end);

				if(
					(end == 0) ||
						(
							(aSearched.substring(end-newBeforeSearch.length, end) == newBeforeSearch) &&
							(aSearched.substring((end+aFind.length), ((end+aFind.length)+parenAfter.length)) == parenAfter)

						) ||
					(aSearched.substring(end-assignBeforeSearch.length, end) == assignBeforeSearch) ||
					(aSearched.substring(end-assignSpaceBeforeSearch.length, end) == assignSpaceBeforeSearch) ||
					(aSearched.substring(end-spaceAssignBeforeSearch.length, end) == spaceAssignBeforeSearch) ||
					(aSearched.substring(end-spaceAssignSpaceBeforeSearch.length, end) == spaceAssignSpaceBeforeSearch) ||
						(
							(aSearched.substring((end+aFind.length), ((end+aFind.length)+dotAfterSearch.length)) == dotAfterSearch)
							&&
							(
								(aSearched.substring(end-spaceBefore.length, end) == spaceBefore) ||
								(aSearched.substring(end-plusBefore.length, end) == plusBefore) ||
								(aSearched.substring(end-parenBefore.length, end) == parenBefore) ||
								(aSearched.substring(end-tabBefore.length, end) == tabBefore) ||
								(aSearched.substring(end-newLineBefore.length, end) == newLineBefore) ||
								(aSearched.substring(end-returnBefore.length, end) == returnBefore) ||
								(aSearched.substring(end-formFeedBefore.length, end) == formFeedBefore)
							)
						)
					)
				{
					newText += aReplace;
				}
				else
				{
					newText += aFind;
				}

				start = reqexp.lastIndex;
			}
			newText += aSearched.substring(start, aSearched.length);

			return newText;
		}
		// ########################################
		// ########################################

		// ########################################
		// ############# FIX FUNCTIONS ##############
		this.getName = function(_srcCode, _index, _searchFor, _endIndex)
		{
			return _srcCode.substring((_index+_searchFor.length), _endIndex);
		}
		this.getFunctionArgs = function(_srcCode, _index, _searchFor, _functionName, _endIndex)
		{
			return _srcCode.substring((_index+_searchFor.length+_functionName.length+1),
							_srcCode.indexOf(")", _endIndex));
		}
		this.replaceCode = function(_srcCode, _searchFor, _searchTo, _block)
		{
			var sIndex = 0;
			var eIndex = 0;
			while(_srcCode.indexOf(_searchFor, sIndex) > -1)
			{
				var index = _srcCode.indexOf(_searchFor, sIndex);
				eIndex = _srcCode.indexOf(_searchTo, index);

				if(eIndex <= -1) break;

				var parts = _block(_srcCode, index, _searchFor, eIndex);

				_srcCode = _srcCode.replace(parts.oldCode, parts.newCode);
				sIndex = eIndex;
			}

			return _srcCode;
		}
		// ########################################
		// ########################################
    },

    preprocess : function(_jsCode, _loadedClasses)
    {
		var me = this;

		var pakage = "";
		var clazz = "";
		var fqClass = "";
		var superClass = "";
		var fqSuperClass = "";
		var imports = [];
		var mixins = [];
		var interfaces = [];

		// start of text parsing
		var startIndex = 0;
		var endIndex = 0;

		// get the package
		var packageIndex = _jsCode.indexOf(this.PACKAGE_TXT, startIndex);
		if(packageIndex > -1)
		{
			endIndex = _jsCode.indexOf(";", packageIndex);

			pakage = _jsCode.substring((packageIndex+this.PACKAGE_TXT.length), endIndex);
		}
		startIndex = endIndex;

		// get the imports and handle wildcards
		while(_jsCode.indexOf(this.IMPORT_TXT, startIndex) > -1)
		{
			var importIndex = _jsCode.indexOf(this.IMPORT_TXT, startIndex);

			endIndex = _jsCode.indexOf(";", importIndex);

			var a_import = _jsCode.substring((importIndex+this.IMPORT_TXT.length), endIndex);

			if(a_import.indexOf("*") == -1) // handle wildcard
			{
				imports[imports.length] =
					{
						fqclazz : a_import,
						clazz : a_import.substring(a_import.lastIndexOf(".")+1, a_import.length)
					};
			}
			else
			{
					var classes = this.classTransporter.getClassesInPkg(a_import);
					for(var i=0;i<classes.length;i++)
					{
						var _fqclazz = classes[i];
						var _clazz = _fqclazz.substring(_fqclazz.lastIndexOf(".")+1, _fqclazz.length);

						imports[imports.length] = {fqclazz : _fqclazz, clazz : _clazz};
					}
			}

			startIndex = endIndex;
		}

		// array of Class Names from the imports to match against the interfaces and mixins classes
		var classImports = [];
		for(var i=0;i<imports.length;i++)
		{
			classImports[classImports.length] = imports[i].clazz;
		}

		// get the class
		var classIndex = _jsCode.indexOf(this.CLASS_TXT, startIndex);
		var classDef = "";
		if(classIndex > -1)
		{
			endIndex = _jsCode.indexOf("{", classIndex);
			classDef = _jsCode.substring((classIndex+this.CLASS_TXT.length), endIndex);
		}

		startIndex = endIndex;

		// get the super, interface, and mixin classes
		var extendsIndex = classDef.indexOf(this.EXTENDS_TXT);
		var implementsIndex = classDef.indexOf(this.IMPLEMENTS_TXT);
		var mixinIndex = classDef.indexOf(this.MIXINS_TXT);
		if(extendsIndex > -1 || mixinIndex > -1 || implementsIndex > -1)
		{
			if(extendsIndex > -1)
			{
				clazz = runtime.trimString(classDef.substring(0, extendsIndex));

				var superEndIndex = classDef.length;
				if(implementsIndex > -1 || mixinIndex > -1)
				{
					superEndIndex = classDef.indexOf(" ", extendsIndex+this.EXTENDS_TXT.length);
				}

				superClass = runtime.trimString(classDef.substring((extendsIndex+this.EXTENDS_TXT.length), superEndIndex));

				for(var i=0;i<imports.length;i++)
				{
					if(imports[i].clazz == superClass)
					{
						fqSuperClass = imports[i].fqclazz;
						break;
					}
				}
			}
			if(implementsIndex > -1)
			{
				if(!clazz)
				{
					clazz = runtime.trimString(classDef.substring(0, implementsIndex));
				}

				var implementsClasses;
				if(mixinIndex > -1)
				{
					implementsClasses = runtime.trimString(classDef.substring((implementsIndex+this.IMPLEMENTS_TXT.length), mixinIndex)).split(",");
				}
				else
				{
					implementsClasses = runtime.trimString(classDef.substring((implementsIndex+this.IMPLEMENTS_TXT.length), classDef.length)).split(",");
				}

				for(var i=0;i<implementsClasses.length;i++)
				{
					var fndIndex = runtime.findIndexInArray(runtime.trimString(implementsClasses[i]), classImports);
					if(fndIndex > -1)
					{
						interfaces[interfaces.length] = imports[fndIndex].fqclazz;
					}
				}
			}
			if(mixinIndex > -1)
			{
				if(!clazz)
				{
					clazz = runtime.trimString(classDef.substring(0, mixinIndex));
				}

				var mixinClasses = runtime.trimString(classDef.substring((mixinIndex+this.MIXINS_TXT.length), classDef.length)).split(",");
				for(var i=0;i<mixinClasses.length;i++)
				{
					var fndIndex = runtime.findIndexInArray(runtime.trimString(mixinClasses[i]), classImports);
					if(fndIndex > -1)
					{
						mixins[mixins.length] = imports[fndIndex].fqclazz;
					}
				}
			}
		}
		else
		{
			clazz = runtime.trimString(classDef);
		}

		// Code Generation
		var newCode = "";

		var classCall = clazz+".prototype";

		if(runtime.findIndexInArray(clazz, this.CORE_CLASSES) == -1)
		{
			newCode += clazz+" = function(){this.initialize.apply(this, arguments);}\n";

			if(superClass)
			{
				newCode += classCall+" = new "+superClass+"();\n";
				newCode += classCall+".constructor = "+clazz+";\n";
				newCode += clazz+".superclass = "+superClass+".prototype;\n";

				var superCall = clazz+".superclass";
			}
		}

		// set fqc name
		fqClass = clazz;
		if(pakage)
		{
			fqClass = pakage+"."+clazz;
		}

		// need to remove the current class we're processing if it's in the imports. It could be in the array because of the wild card
		var newImports = [];
		for(var i=0;i<imports.length;i++)
		{
			if(fqClass != imports[i].fqclazz)
			{
				newImports[newImports.length] = imports[i];
			}
		}

		// code body
		var middleCode = _jsCode.substring(startIndex+1, (_jsCode.lastIndexOf("}")));

		var _classComments = "";

		// Replace the constructor
		// don't set up constructor if there is a new in front of the class
		var _constIndex = middleCode.indexOf(clazz+"(");
		var _testNew = middleCode.substring((_constIndex-5), _constIndex)
		var _testNew2 = middleCode.substring((_constIndex-3), _constIndex)
		if(_testNew != " new " && _testNew2 != "new")
		{
			// only time we need to do something special w/ comments
			var _classCommentsStart = middleCode.indexOf("/*");
			if(_classCommentsStart > -1 && _classCommentsStart < _constIndex)
			{
				var _classCommentsEnd = middleCode.indexOf("*/");

				// could have overview and class jsdoc tags
				var _another = middleCode.indexOf("*/", _classCommentsEnd+2);
				if(_another > 0 && _another < _constIndex)
				{
					_classCommentsEnd = _another;
				}

				_classComments = middleCode.substring(_classCommentsStart-2, _classCommentsEnd+2);

				middleCode = middleCode.substring(_classCommentsEnd+2, middleCode.length);
			}

			middleCode = middleCode.replace(clazz+"(", "/** @ignore */\n\t"+classCall+".initialize = function(");
		}

		// Function Replacing
		// #########################################
		// Replace super calls
		if(superCall)
		{
			// super call to init parent;
			middleCode = this.replaceCode(middleCode, this.SUPER_INIT, "(", function(_srcCode, _index, _searchFor, _endIndex)
						{
							var args = me.getFunctionArgs(_srcCode, _index, "super", "", _endIndex);

							var newCode = superCall+"."+"initialize"+".apply(this, ["+args+"])";
							var oldCode = _searchFor+args+")";

							return {oldCode : oldCode, newCode : newCode};
						});

			// look for other super method calls and replace ...
			// super.<method>(arg1, arg2, arg3) w/ <class>.superclass.<method>.apply(this, [arg1, arg2, arg3])
			middleCode = this.replaceCode(middleCode, this.SUPER_TXT, "(", function(_srcCode, _index, _searchFor, _endIndex)
						{
							var functionName = me.getName(_srcCode, _index, _searchFor, _endIndex);
							var args = me.getFunctionArgs(_srcCode, _index, _searchFor, functionName, _endIndex);

							var newCode = superCall+"."+functionName+".apply(this, ["+args+"])";
							var oldCode = _searchFor + functionName +"(" + args + ")";

							return {oldCode : oldCode, newCode : newCode};
						});
		}

		// look for instance(s) and replace ...
		// instance <method>(arg1, arg2, arg3) w/ <class>.prototype.<method> = function([arg1, arg2, arg3])
		middleCode = this.replaceCode(middleCode, this.INSTANCE_TXT, "(", function(_srcCode, _index, _searchFor, _endIndex)
					{
						var functionName = me.getName(_srcCode, _index, _searchFor, _endIndex);
						var args = me.getFunctionArgs(_srcCode, _index, _searchFor, functionName, _endIndex);

						var newCode = classCall+"."+functionName+" = function("+args+")";
						var oldCode = _searchFor + functionName +"(" + args + ")";

						return {oldCode : oldCode, newCode : newCode};
					});

		// look for abstract(s) and replace ...
		// abstract <method>(arg1, arg2, arg3) w/ <class>.prototype.<method> = function([arg1, arg2, arg3]){throw "method <class>.<method> is abstract";}
		middleCode = this.replaceCode(middleCode, this.ABSTRACT_TXT, "(", function(_srcCode, _index, _searchFor, _endIndex)
					{
						var functionName = me.getName(_srcCode, _index, _searchFor, _endIndex);
						var args = me.getFunctionArgs(_srcCode, _index, _searchFor, functionName, _endIndex);

						var newCode = classCall+"."+functionName+" = function("+args+"){throw '" + clazz + "." + functionName + " is abstract';}";
						var oldCode = _searchFor + functionName +"(" + args + ")";

						return {oldCode : oldCode, newCode : newCode};
					});

		// look for static(s) and replace ...
		// static <method>(arg1, arg2, arg3) w/ <class>.<method> = function([arg1, arg2, arg3])
		middleCode = this.replaceCode(middleCode, this.STATIC_TXT, "(", function(_srcCode, _index, _searchFor, _endIndex)
					{
						var functionName = me.getName(_srcCode, _index, _searchFor, _endIndex);
						var args = me.getFunctionArgs(_srcCode, _index, _searchFor, functionName, _endIndex);

						var newCode = clazz+"."+functionName+" = function("+args+")";
						var oldCode = _searchFor + functionName +"(" + args + ")";

						return {oldCode : oldCode, newCode : newCode};
					});

		// look for instance fields and replace
		// ##name w/ <class>.prototype.name
		middleCode = this.replaceCode(middleCode, "##", "=", function(_srcCode, _index, _searchFor, _endIndex)
					{
						var fieldName = me.getName(_srcCode, _index, _searchFor, _endIndex);

						var newCode = classCall+"."+fieldName;
						var oldCode = _searchFor + fieldName;

						return {oldCode : oldCode, newCode : newCode};
					});

		// append to
		newCode += middleCode;

		// ########################################
		// ########### Fix Namespacing ############
		// class
		if(pakage)
		{
			newCode = this.fixNamespacing(newCode, clazz, fqClass);
		}

		// imports
		var fqcImports = [];
		for(var i=0;i<newImports.length;i++)
		{
			newCode = this.fixNamespacing(newCode, newImports[i].clazz, newImports[i].fqclazz);

			fqcImports[fqcImports.length] = newImports[i].fqclazz;
		}
		// ########################################
		// ########################################

		// hack for keeping class comments
		if(_classComments)
		{
			newCode = _classComments +"\n\t"+ newCode;
		}

		return {
				pakage : pakage,
				clazz : clazz,
				fqClass : fqClass,
				fqSuperClass : fqSuperClass,
				imports : fqcImports,
				mixins : mixins,
				interfaces : interfaces,
				jsCode : newCode,
				nativeCode : _jsCode
			};
    }

};