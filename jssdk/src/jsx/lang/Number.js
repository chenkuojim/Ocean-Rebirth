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

class Number
{
	/**
	* @fileOverview
	* @example
	*/

	/**
	* Largest number that is less than infinity.
	* @name MAX_VALUE
	*/
	Number._$MAX_VALUE$_ = "don't use me, used for reflection.";
	/**
	* Smallest number that is greater than negative infinity.
	* @name MIN_VALUE
	*/
	Number._$MIN_VALUE$_ = "don't use me, used for reflection.";
	/**
	* Not a number.
	* @name NaN
	*/
	Number._$NaN$_ = "don't use me, used for reflection.";
	/**
	* Out of range negative number.
	* @name NEGATIVE_INFINITY
	*/
	Number._$NEGATIVE_INFINITY$_ = "don't use me, used for reflection.";
	/**
	* Out of range positive number.
	* @name POSITIVE_INFINITY
	*/
	Number._$POSITIVE_INFINITY$_ = "don't use me, used for reflection.";
	/**
	* Out of range number.
	* @name INFINITY
	*/
	Number.INFINITY = Infinity;

	/**
	* Round a Number to the specified number of decimals.
	* @name toFixed
	* @function
	* @memberOf Number
	*/
	/** @ignore */
	instance _$toFixed$_(){throw "don't call me, used for reflection.";}
	/**
	* Convert the value of the object into an exponential notation.
	* @name toExponential
	* @function
	* @memberOf Number
	*/
	/** @ignore */
	instance _$toExponential$_(){throw "don't call me, used for reflection.";}
	/**
	* Converts the value of the object into an exponential notation if it has more digits than specified.
	* @name toPrecision
	* @function
	* @memberOf Number
	*/
	/** @ignore */
	instance _$toPrecision$_(){throw "don't call me, used for reflection.";}

	/**
	* Calls parseFloat native on the global object.
	*/
	static parseFloat(_number){return $GLOBAL_OBJECT.parseFloat(_number);}
	/**
	* Calls parseInt native on the global object.
	*/
	static parseInt(_number){return $GLOBAL_OBJECT.parseInt(_number);}
	/**
	* Calls isFinite native on the global object.
	*/
	static isFinite(_number){return $GLOBAL_OBJECT.isFinite(_number);}
	/**
	* Calls isNaN native on the global object.
	*/
	static isNaN(_number){return $GLOBAL_OBJECT.isNaN(_number);}

	/**
	* Executes the block the same number of times the number represents. Parameter to the block is an number.
	* @param {Function} _block
	*/
	instance times(_block)
	{
		for(var i=0;i<this;i++)
		{
			_block(i);
		}
	}

	/**
	* Executes the block the number of times upto the other number. Parameter to the block is an number.
	* @param {Number} _other
	* @param {Function} _block
	*/
	instance upto(_other, _block)
	{
		for(var i=this;i<=_other;i++)
		{
			_block(i);
		}
	}

	/**
	* Executes the block the number of times downto the other number. Parameter to the block is an number.
	* @param {Number} _other
	* @param {Function} _block
	*/
	instance downto(_other, _block)
	{
		for(var i=this;i>=_other;i--)
		{
			_block(i);
		}
	}

	/**
	* Executes the block. Step using the other number. Parameter to the block is an number.
	* @param {Number} _other
	* @param {Function} _block
	*/
	instance towards(_other, _block)
	{
		var step = this.compare(_other);
		for (var i=this;i!==(_other-step);i -= step)
		{
			_block(i);
		}
	}

	/**
	* Returns the number incremented by 1.
	* @return {Number}
	*/
	instance succ()
	{
		return this + 1;
	}

	/**
	* Returns the number decremented by 1.
	* @return {Number}
	*/
	instance pred()
	{
		return this - 1;
	}

	/**
	* Returns the character code this number represents.
	* @return {Number}
	*/
	instance toChar()
	{
		return String.fromCharCode(this);
	}

	/**
	* Compares the number against the other number. Returns -1, 0, 1.
	* @param {Number} _other
	* @return {Number}
	*/
	instance compare(_other)
	{
		if(this < _other) return -1;
		if(this > _other) return +1;
		return 0;
	}

	/**
	* Returns a new array of numbers from the current number to the specified number.
	* @param {Number} _other Inclusive
	* @return {Array}
	*/
	instance toArray(_other)
	{
		var numbers = [];
		this.upto(_other, function(_value){numbers[numbers.length]=_value});
		return numbers;
	}

	/**
	* Returns whether this object is equal to the specified _object.
	* @param {Object} _object
	* @return {Boolean}
	*/
	instance equals(_object)
	{
		if(this === _object)
		{
			return true;
		}
		if(!this.getClass().isInstance(_object))
		{
			return false;
		}

		return this.toString().equals(_object.toString());
	}

}