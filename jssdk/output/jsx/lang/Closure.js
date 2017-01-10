
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class Closure
	* @constructor
	* @description A Closure is a function that is evaluated in an environment containing one or more bound variables.
	*  When called, the function can access these variables. In this case the _block parameter in the bind method will have
	*  access to variable in the same scope as where the closure is defined.
	*/
	jsx.lang.Closure = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.lang.Closure.prototype.initialize = function(){}

	/**
	* Returns a Function. The _object parameter is appended to the _args parameter when the _block is excuted. If the
	*  Closure is bound to an event, the event is appended to the _args parameter when the _block is executed.
	* @param {Function} _block Block to execute
	* @param {Object} _object Context Object
	* @param {Array} [_args] Array of parameters to pass into the block
	* @return {Function}
	*/
	jsx.lang.Closure.prototype.bind = function(_block, _object, _args)
	{
		var _args = _args || [];

		return function(_event) {

			_args = _args.concat([_object]);

			// both _event or global object event could be null, which means the result could be null if this closure
			// is not bound to an event
			var _event = _event || $GLOBAL_OBJECT.event;
			if(_event)
			{
				_args = _args.concat([_event]);

			}

			return _block.apply(_object, _args);
		}
	}

jsx.lang.Closure.PACKAGE = "jsx.lang";
jsx.lang.Closure.CLASS = "jsx.lang.Closure";
jsx.lang.Closure.SUPER_CLASS = "";
jsx.lang.Closure.IMPORTS = [];
jsx.lang.Closure.INTERFACES = [];
jsx.lang.Closure.MIXINS = [];
jsx.lang.Closure.getName = function(){return jsx.lang.Closure.CLASS;}
jsx.lang.Closure.klass = new jsx.lang.Class(jsx.lang.Closure.getName());
jsx.lang.Closure.prototype.getClass = function(){return jsx.lang.Closure.klass;}
jsx.lang.Closure.WARNINGS = [];
