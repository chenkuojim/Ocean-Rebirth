
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class Class
	* @constructor
	* @param {String} _fqClassName Fully Qualified Class Name
	*/
	jsx.lang.Class = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.lang.Class.prototype.initialize = function(_fqClassName)
	{
		jsx.lang.Class.CLASSES[ jsx.lang.Class.CLASSES.length] = _fqClassName;

		var _theClass = null;
		/** @ignore */
		this._pakage = function()
		{
			return this._getClass().PACKAGE;
		}
		/** @ignore */
		this._className = function()
		{
			return this._getClass().CLASS;
		}
		/** @ignore */
		this._superClassName = function()
		{
			return this._getClass().SUPER_CLASS;
		}
		/** @ignore */
		this._classes = function()
		{
			return this._getClass().IMPORTS;
		}
		/** @ignore */
		this._interfaces = function()
		{
			return this._getClass().INTERFACES;
		}
		/** @ignore */
		this._mixins = function()
		{
			return this._getClass().MIXINS;
		}
		/** @ignore */
		this._warnings = function()
		{
			return this._getClass().WARNINGS;
		}
		/** @ignore */
		this._getClass = function()
		{
			if(!_theClass)
			{
				_theClass = eval(_fqClassName);
			}
			return _theClass;
		}

		var isPointingToNonEnumProp = function(_prop)
		{
			return (_prop.indexOf(jsx.lang.Class.PROP_PREFIX)==0 && _prop.lastIndexOf(jsx.lang.Class.PROP_SUFFIX)==(_prop.length-2));
		}

		var cleanNonEnumProp = function(_prop)
		{
			var newProp = _prop.replace(jsx.lang.Class.PROP_PREFIX, "");
			newProp = newProp.replace(jsx.lang.Class.PROP_SUFFIX, "");
			return newProp;
		}

		var argumentsToParameters = function(_arguments)
		{
			if(!_arguments || !_arguments.length) return "";

			var paramsStr = "";
			for(var i=0;i<_arguments.length;i++)
			{
				if(_arguments[i].getClass().equals(String.klass))
				{
					paramsStr += "'" + _arguments[i] + "'";
				}
				else
				{
					paramsStr += _arguments[i];
				}

				if(i < (_arguments.length-1)){paramsStr += ", "}
			}
			return paramsStr;
		}

		/** @ignore */
		this.__toClasses__ = function(_classes)
		{
			var klasses = [];
			for(var i=0;i<_classes.length;i++)
			{
				klasses[klasses.length] = eval(_classes[i]).klass;
			}
			return klasses;
		}

		/** @ignore */
		this.__toMethod__ = function(_name, _function)
		{
			var parse = function(f){
				var func = {};
				func.name = _name;
				func.parameters = [];
				func.body = "";
				if(f)
				{
					var s = f.toString();
					var params = s.substring(s.indexOf('(')+1, s.indexOf(')'));
					if(params)
					{
						params = params.replace(/\s+/g, "").split(",");
					}
					for(var i=0;i<params.length;i++)
					{
						func.parameters[func.parameters.length] = params[i];
					}

					func.body = (s.substring(s.indexOf('{')+1, s.lastIndexOf('}'))).replace(/(^\s*)|(\s*$)/g, "");
				}
				return func;
			};

			var parsedFunc = parse(_function);

			return {
					name : parsedFunc.name,
					parameters : parsedFunc.parameters,
					body : parsedFunc.body
					};
		}

		/** @ignore */
		this.__toMethdsString__ = function(_methodAry)
		{
			_methodAry.sort(function(a, b)
			{
				if(a.getName() < b.getName()) return -1;
				if(a.getName() == b.getName()) return 0;
				if(a.getName() > b.getName()) return 1;
			});
			var methodsStr = "";
			var j = 1;
			for(var i=0;i<_methodAry.length;i++)
			{
				methodsStr += _methodAry[i].getName();
				if(i < (_methodAry.length-1)){methodsStr += ", "}
				if(j == 15){methodsStr += "\n"; j=0;}else{j++;}
			}
			return methodsStr;
		}

		/** @ignore */
		this.__toFieldsString__ = function(_fieldAry)
		{
			_fieldAry.sort(function(a, b)
			{
				if(a.getName() < b.getName()) return -1;
				if(a.getName() == b.getName()) return 0;
				if(a.getName() > b.getName()) return 1;
			});
			var fieldsStr = "";
			var j = 1;
			for(var i=0;i<_fieldAry.length;i++)
			{
				fieldsStr += _fieldAry[i].getName();
				if(i < (_fieldAry.length-1)){fieldsStr += ", "}
				if(j == 15){fieldsStr += "\n"; j=0;}else{j++;}
			}
			return fieldsStr;
		}

		/** @ignore */
		this.__getMethods__ = function(declared)
		{
			var me = this;
			var __getMeth__ = function(_prop, _container, isstatic)
			{
				var meth = {};
				meth._$_ = isstatic;
				//meth.methodToParse = _container[_prop];
				if(isPointingToNonEnumProp(_prop))
				{
					var nativeProp = cleanNonEnumProp(_prop);
					meth.prop = nativeProp;
					if(me._className() != "Math")
					{
						meth.method = eval(me._className()+".prototype")[meth.prop];
					}
					else
					{
						meth.method = eval(me._className())[meth.prop];
					}
				}
				else
				{
					meth.prop = _prop;
					meth.method = _container[meth.prop];
				}
				return meth;
			}

			var clazz = eval(this._className());
			var arry = [];

			var cprototype = clazz.prototype;
			for(prop in cprototype)
			{
				if(typeof cprototype[prop] == "function" && jsx.lang.Class.PROTOTYPE_PROPS.indexOf(prop) == -1)
				{
					if(declared)
					{
						if(prop == "getClass"){continue;}
						if(!cprototype.hasOwnProperty(prop)){continue;}
					}
					arry[arry.length] = __getMeth__(prop, cprototype, false);
				}
			}

			for(prop in clazz)
			{
				if(typeof clazz[prop] == "function" && jsx.lang.Class.OBJECT_METHODS.indexOf(prop) == -1)
				{
					arry[arry.length] = __getMeth__(prop, clazz, true);
				}
			}

			var methods = []
			for(var i=0;i<arry.length;i++)
			{
				methods[methods.length] = {
										__meth__ : arry[i].method,
										__cmethod__ : this.__toMethod__(arry[i].prop, arry[i].method),
										__static__ : arry[i]._$_,
										getDeclaringClass : function(){return me;},
										getName : function(){return this.__cmethod__.name;},
										isStatic : function(){return this.__static__},
										getParameters : function(){return this.__cmethod__.parameters;},
										getBody : function(){return this.__cmethod__.body;},
										invoke : function(_obj, _params)
										{
											if(!_obj)
											{
												return eval(me._className()+"."+this.getName()+"("+argumentsToParameters(_params)+")");
											}
											if(!_params) _params = [];
											return this.__meth__.apply(_obj, _params);
										}
									};
			}
			return methods;
		}

		/** @ignore */
		this.__getFields__ = function(declared)
		{
			var me = this;
			var __getField__ = function(_prop, _container, isstatic)
			{
				var field = {};
				field._$_ = isstatic;
				if(isPointingToNonEnumProp(_prop))
				{
					var nativeProp = cleanNonEnumProp(_prop);
					field.prop = nativeProp;
				}
				else
				{
					field.prop = _prop;
				}
				return field;
			}

			var clazz = eval(this._className());
			var arry = [];

			var cprototype = clazz.prototype;
			for(prop in cprototype)
			{
				if(typeof cprototype[prop] != "function")
				{
					if(declared)
					{
						if(!cprototype.hasOwnProperty(prop)){continue;}
					}
					arry[arry.length] = __getField__(prop, cprototype, false);
				}
			}

			for(prop in clazz)
			{
				if(typeof clazz[prop] != "function" && jsx.lang.Class.CLASS_PROPS.indexOf(prop) == -1)
				{
					arry[arry.length] = __getField__(prop, clazz, true);
				}
			}

			var fields = []
			for(var i=0;i<arry.length;i++)
			{
				fields[fields.length] = {
										__name__ : arry[i].prop,
										__static__ : arry[i]._$_,
										getDeclaringClass : function(){return me;},
										getName : function(){return this.__name__;},
										isStatic : function(){return this.__static__},
										getValue : function(_obj)
										{
											if(!_obj)
											{
												return eval(me._className()+"."+this.getName());
											}
											return _obj[this.getName()];
										}
									};
			}
			return fields;
		}

		/** @ignore */
		this.__newInstance__ = function(args)
		{
			if(jsx.lang.Class.CORE_CLASSES.indexOf(this._className())==-1)
			{
				var newObject = eval("new "+this._className()+"()");
				newObject.initialize.apply(newObject, args);
				return newObject;
			}

			return eval("new "+this._className()+"("+argumentsToParameters(args)+")");
		}
	}

	/** @ignore */
	jsx.lang.Class.CLASS_PROPS = ["prototype", "PACKAGE", "CLASS", "SUPER_CLASS", "IMPORTS", "INTERFACES", "MIXINS", "WARNINGS"];
	/** @ignore */
	jsx.lang.Class.PROTOTYPE_PROPS = ["constructor", "initialize"];
	/** @ignore */
	jsx.lang.Class.CORE_CLASSES = ["Array", "Boolean", "Date", "Function", "Math", "Number", "Object", "RegExp", "String"];
	/** @ignore */
	jsx.lang.Class.OBJECT_METHODS = ["respondsTo", "equals", "_$toString$_", "getClass"];

	/** @ignore */
	jsx.lang.Class.CLASSES = [];

	/** @ignore */
	jsx.lang.Class.PROP_PREFIX = "_$";
	/** @ignore */
	jsx.lang.Class.PROP_SUFFIX = "$_";

	/**
	* Returns the Class object of the _fqclassName parameter.
	* @return {jsx.lang.Class}
	*/
	jsx.lang.Class.forName = function(_fqclassName)
	{
		return eval(_fqclassName).klass;
	}

	/**
	* Returns the string name for the class.
	* @return {String}
	*/
	jsx.lang.Class.prototype.getName = function()
	{
		return this._className();
	}

	/**
	* Returns the super class of this class.
	* @return {jsx.lang.Class}
	*/
	jsx.lang.Class.prototype.getSuperclass = function()
	{
		if(!this._superClassName())
		{
			return Object.klass;
		}
		else
		{
			return eval(this._superClassName()).klass;
		}
	}

	/**
	* Returns an array of Field objects.
	* @return {Array}
	*/
	jsx.lang.Class.prototype.getFields = function()
	{
		return this.__getFields__(false);
	}

	/**
	* Returns a Field object for this class.
	* @example
	The Field object has the following methods.

	//From any jsx.lang.Class object (String.klass or "test".getClass()) you can get the Field object.
	<code>var _field = String.klass.getField("length");</code>

	//Returns the name of the jsx.lang.Class that the Field belongs to.
	<code>_field.getDeclaringClass();</code>

	//Returns the name of the field.
	<code>_field.getName();</code>

	//Returns whether the field is STATIC.
	<code>_field.isStatic();</code>

	//Returns the value of the field. If a parameter object is passed, this method will return the value for the Instance.
	//If no paramerter object is passed, this method will return the value for the class.
	<code>_field.getValue(_object);</code>
	* @param {String} _name
	* @return {Object}
	*/
	jsx.lang.Class.prototype.getField = function(_name)
	{
		var _fields = this.getFields();
		for(var i=0;i<_fields.length;i++)
		{
			if(_fields[i].getName() == _name)
			{
				return _fields[i];
			}
		}
	}

	/**
	* Returns a string of all the fields.
	* @return {String}
	*/
	jsx.lang.Class.prototype.showFields = function()
	{
		return this.__toFieldsString__(this.getFields());
	}

	/**
	* Returns an array of Field objects only declared in this class.
	* @return {Array}
	*/
	jsx.lang.Class.prototype.getDeclaredFields = function()
	{
		return this.__getFields__(true);
	}

	/**
	* Returns a Field object only declared in this class.
	* @param {String} _name
	* @return {Object} See getField(_name) for object details.
	*/
	jsx.lang.Class.prototype.getDeclaredField = function(_name)
	{
		var _fields = this.getDeclaredFields();
		for(var i=0;i<_fields.length;i++)
		{
			if(_fields[i].getName() == _name)
			{
				return _fields[i];
			}
		}
	}

	/**
	* Returns a string of all the fields only declared in this class.
	* @return {String}
	*/
	jsx.lang.Class.prototype.showDeclaredFields = function()
	{
		return this.__toFieldsString__(this.getDeclaredFields());
	}

	/**
	* Returns an array of Method objects.
	* @return {Array}
	*/
	jsx.lang.Class.prototype.getMethods = function()
	{
		return this.__getMethods__(false);
	}

	/**
	* Returns a Method object for this class.
	* @example
	The Method object has the following methods.

	//From any jsx.lang.Class object (String.klass or "test".getClass()) you can get the Method object.
	<code>var _method = String.klass.getMethod("match");</code>

	//Returns the name of the jsx.lang.Class that the Method belongs to.
	<code>_method.getDeclaringClass();</code>

	//Returns the name of the method.
	<code>_method.getName();</code>

	//Returns whether the method is STATIC.
	<code>_method.isStatic();</code>

	//Returns an array of parameters for the method.
	<code>_method.getParameters();</code>

	//Returns the code body of the method.
	<code>_method.getBody();</code>

	//Invokes the method. Return object based on the method definition.
	//The _obj parameter is the context object and the _params(Array) parameter is passed to the method.
	//If _obj is null the method is invoked as a class level method.
	<code>_method.invoke(_obj, _params);</code>
	* @param {String} _name
	* @return {Object}
	*/
	jsx.lang.Class.prototype.getMethod = function(_name)
	{
		var _methods = this.getMethods();
		for(var i=0;i<_methods.length;i++)
		{
			if(_methods[i].getName() == _name)
			{
				return _methods[i];
			}
		}
	}

	/**
	* Returns a string of all the methods.
	* @return {String}
	*/
	jsx.lang.Class.prototype.showMethods = function()
	{
		return this.__toMethdsString__(this.getMethods());
	}

	/**
	* Returns an array of Method objects only declared in this class.
	* @return {Array}
	*/
	jsx.lang.Class.prototype.getDeclaredMethods = function()
	{
		return this.__getMethods__(true);
	}

	/**
	* Returns a Method object only declared in this class.
	* @param {String} _name
	* @return {Object} See getMethod(_name) for object details.
	*/
	jsx.lang.Class.prototype.getDeclaredMethod = function(_name)
	{
		var _methods = this.getDeclaredMethods();
		for(var i=0;i<_methods.length;i++)
		{
			if(_methods[i].getName() == _name)
			{
				return _methods[i];
			}
		}
	}

	/**
	* Returns a string of all the methods only declared in this class.
	* @return {String}
	*/
	jsx.lang.Class.prototype.showDeclaredMethods = function()
	{
		return this.__toMethdsString__(this.getDeclaredMethods());
	}

	/**
	* Returns a Constructor object for this class.
	* @example
	The Constructor object has the following methods.

	//From any jsx.lang.Class object (String.klass or "test".getClass()) you can get the Constructor object.
	var _constructor = String.klass.getConstructor();

	//Returns a jsx.lang.Class object.
	_constructor.getDeclaringClass();

	//Returns a array of parameters for the constructor.
	_constructor.getParameters();

	//Returns the code body of the constructor.
	_constructor.getBody();

	//Returns a new Instance of this class. Pass any number of parameters.
	_constructor.newInstance();
	* @return {Object}
	*/
	jsx.lang.Class.prototype.getConstructor = function()
	{
		var me = this;
		var cmethod = this.__toMethod__("initialize", eval(this._className()).prototype.initialize);
		return {
				getDeclaringClass : function(){return me;},
				getParameters : function(){return cmethod.parameters;},
				getBody : function(){return cmethod.body;},
				newInstance : function()
				{
					return me.__newInstance__(arguments);
				}
			};
	}

	/**
	* Returns a Package object for this class.
	* @example
	The Package object has the following methods.

	//From any jsx.lang.Class object (String.klass or "test".getClass()) you can get the Package object.
	var _package = String.klass.getPackage();

	//Returns the name of the package.
	_package.getName();

	//Returns an array of jsx.lang.Class objects that exist in the package.
	_package.getClasses();
	* @return {Object}
	*/
	jsx.lang.Class.prototype.getPackage = function()
	{
		var me = this;
		return {
			getName : function(){ return me._pakage();},
			getClasses : function()
			{
				var pakageClasses = [];
				var pkg = this.getName();
				if(pkg && pkg != "jsx.lang")
				{
					var pakageObj = eval(pkg);
					for(prop in pakageObj)
					{
						if("klass" in pakageObj[prop])
						{
							pakageClasses[pakageClasses.length] = pakageObj[prop].klass;
						}
					}
				}
				else
				{
					//get all the Global Objects, they don't have a namespace
					for(var i=0;i < jsx.lang.Class.CORE_CLASSES.length;i++)
					{
						pakageClasses[pakageClasses.length] = eval(jsx.lang.Class.CORE_CLASSES[i]).klass;
					}
					// get all classes in jsx.lang namespace
					var pakageObj = eval("jsx.lang");
					for(prop in pakageObj)
					{
						if("klass" in pakageObj[prop])
						{
							pakageClasses[pakageClasses.length] = pakageObj[prop].klass;
						}
					}
				}
				return pakageClasses;
			}
		};
	}

	/**
	* Returns a new Instance of the class
	* @param parameters Pass any number of parameters. This methods uses the arguments implicit object.
	* @return {Object}
	*/
	jsx.lang.Class.prototype.newInstance = function()
	{
		return this.__newInstance__(arguments);
	}

	/**
	* Returns an array of the classes this class has for its imports.
	* @return {Array[jsx.lang.Class]}
	*/
	jsx.lang.Class.prototype.getClasses = function()
	{
		return this.__toClasses__(this._classes());
	}

	/**
	* Returns an array of the classes this class is implementating.
	* @return {Array[jsx.lang.Class]}
	*/
	jsx.lang.Class.prototype.getInterfaces = function()
	{
		return this.__toClasses__(this._interfaces());
	}

	/**
	* Returns an array of the classes this class is mixing in.
	* @return {Array[jsx.lang.Class]}
	*/
	jsx.lang.Class.prototype.getMixins = function()
	{
		return this.__toClasses__(this._mixins());
	}

	/**
	* Returns whether this class is the child of the _object parameter class.
	* @param {Object} _object
	* @return {Boolean}
	*/
	jsx.lang.Class.prototype.isChildOf = function(_object)
	{
		return _object.getClass().getName() == this._superClassName();
	}

	/**
	* Returns whether this class is the parent of the _object parameter class.
	* @param {Object} _object
	* @return {Boolean}
	*/
	jsx.lang.Class.prototype.isSuperOf = function(_object)
	{
		return _object.getClass().getSuperclass().getName() == this._className();
	}

	/**
	* Returns whether the _object parameter is of this class type.
	* @param {Object} _object
	* @return {Boolean}
	*/
	jsx.lang.Class.prototype.isInstance = function(_object)
	{
		var name = _object.getClass().getName();

		if(this._className() == name || this._superClassName() == name || (this._interfaces().indexOf(name)>-1) || (this._mixins().indexOf(name)>-1))
		{
			return true;
		}

		return false;
	}

	/**
	* Returns whether this class is implementing the _class parameter.
	* @param {jsx.lang.Class} _object
	* @return {Boolean}
	*/
	jsx.lang.Class.prototype.isImplementing = function(_class)
	{
		var name = _class.getName();

		return (this._interfaces().indexOf(name)>-1);
	}

	/**
	* Returns whether this class is mixing in the _class parameter.
	* @param {jsx.lang.Class} _object
	* @return {Boolean}
	*/
	jsx.lang.Class.prototype.isMixingIn = function(_class)
	{
		var name = _class.getName();

		return (this._mixins().indexOf(name)>-1);
	}

	/**
	* Returns the warnings for this class.
	* @return {String}
	*/
	jsx.lang.Class.prototype.getWarnings = function()
	{
		return this._warnings();
	}

	/**
	* Returns the name of this class.
	* @return {String}
	*/
	jsx.lang.Class.prototype.toString = function()
	{
		return this._className();
	}

	/**
	* Returns whether this object is equal to the specified _object.
	* @param {Object} _object
	* @return {Boolean}
	*/
	jsx.lang.Class.prototype.equals = function(_object)
	{
		if (this === _object)
		{
			return true;
		}

		if(!_object._className()){return false;}

		return this._className() == _object._className();
	}


jsx.lang.Class.PACKAGE = "jsx.lang";
jsx.lang.Class.CLASS = "jsx.lang.Class";
jsx.lang.Class.SUPER_CLASS = "";
jsx.lang.Class.IMPORTS = [];
jsx.lang.Class.INTERFACES = [];
jsx.lang.Class.MIXINS = [];
jsx.lang.Class.getName = function(){return jsx.lang.Class.CLASS;}
jsx.lang.Class.klass = new jsx.lang.Class(jsx.lang.Class.getName());
jsx.lang.Class.prototype.getClass = function(){return jsx.lang.Class.klass;}
jsx.lang.Class.WARNINGS = [];
