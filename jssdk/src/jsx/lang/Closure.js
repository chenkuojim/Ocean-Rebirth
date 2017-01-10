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

package jsx.lang;

class Closure
{
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
	Closure(){}

	/**
	* Returns a Function. The _object parameter is appended to the _args parameter when the _block is excuted. If the
	*  Closure is bound to an event, the event is appended to the _args parameter when the _block is executed.
	* @param {Function} _block Block to execute
	* @param {Object} _object Context Object
	* @param {Array} [_args] Array of parameters to pass into the block
	* @return {Function}
	*/
	instance bind(_block, _object, _args)
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
}