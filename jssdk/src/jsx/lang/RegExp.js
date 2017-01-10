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

class RegExp
{
	/**
	* @fileOverview
	* @example
	*/

	/**
	* Specifies if the "g" modifier is set.
	* @name global
	* @memberOf RegExp
	*/
	/** @ignore */
	##_$global$_ = "don't use me, used for reflection.";
	/**
	* Specifies if the "i" modifier is set.
	* @name ignoreCase
	* @memberOf RegExp
	*/
	/** @ignore */
	##_$ignoreCase$_ = "don't use me, used for reflection.";
	/**
	* Specifies if the "m" modifier is set.
	* @name multiline
	* @memberOf RegExp
	*/
	/** @ignore */
	##_$multiline$_= "don't use me, used for reflection.";
	/**
	* The string on which the pattern match is performed.
	* @name input
	* @memberOf RegExp
	*/
	/** @ignore */
	##_$input$_ = "don't use me, used for reflection.";
	/**
	* An integer specifying the index at which to start the next match.
	* @name lastIndex
	* @memberOf RegExp
	*/
	/** @ignore */
	##_$lastIndex$_ = "don't use me, used for reflection.";
	/**
	* The last matched characters.
	* @name lastMatch
	* @memberOf RegExp
	*/
	/** @ignore */
	##_$lastMatch$_ = "don't use me, used for reflection.";
	/**
	* The last matched parenthesized substring.
	* @name lastParen
	* @memberOf RegExp
	*/
	/** @ignore */
	##_$lastParen$_ = "don't use me, used for reflection.";
	/**
	* The substring in front of the characters most recently matched.
	* @name leftContext
	* @memberOf RegExp
	*/
	/** @ignore */
	##_$leftContext$_ = "don't use me, used for reflection.";
	/**
	* The substring after the characters most recently matched.
	* @name rightContext
	* @memberOf RegExp
	*/
	/** @ignore */
	##_$rightContext$_ = "don't use me, used for reflection.";
	/**
	* The text used for pattern matching.
	* @name source
	* @memberOf RegExp
	*/
	/** @ignore */
	##_$source$_ = "don't use me, used for reflection.";

	/**
	* Change the regular expression (what to search for).
	* @name compile
	* @param {String} _string
	* @function
	* @memberOf RegExp
	*/
	/** @ignore */
	instance _$compile$_(_string){throw "don't call me, used for reflection.";}
	/**
	* Search a string for a specified value. Returns the found value and remembers the position.
	* @name exec
	* @param {String} _string
	* @return {String}
	* @function
	* @memberOf RegExp
	*/
	/** @ignore */
	instance _$exec$_(_string){throw "don't call me, used for reflection.";}
	/**
	* Search a string for a specified value. Returns true or false.
	* @name test
	* @param {String} _string
	* @return {Boolean}
	* @function
	* @memberOf RegExp
	*/
	/** @ignore */
	instance _$test$_(_string){throw "don't call me, used for reflection.";}

	/**
	* Returns whether this object is equal to the specified _object.
	* @param {Object} _object
	* @return {Boolean}
	*/
	instance equals(_object)
	{
		if (this === _object)
		{
			return true;
		}
		if(!this.getClass().isInstance(_object))
		{
			return false;
		}

		return this == _object;
	}

}