
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
	RegExp.prototype._$global$_ = "don't use me, used for reflection.";
	/**
	* Specifies if the "i" modifier is set.
	* @name ignoreCase
	* @memberOf RegExp
	*/
	/** @ignore */
	RegExp.prototype._$ignoreCase$_ = "don't use me, used for reflection.";
	/**
	* Specifies if the "m" modifier is set.
	* @name multiline
	* @memberOf RegExp
	*/
	/** @ignore */
	RegExp.prototype._$multiline$_= "don't use me, used for reflection.";
	/**
	* The string on which the pattern match is performed.
	* @name input
	* @memberOf RegExp
	*/
	/** @ignore */
	RegExp.prototype._$input$_ = "don't use me, used for reflection.";
	/**
	* An integer specifying the index at which to start the next match.
	* @name lastIndex
	* @memberOf RegExp
	*/
	/** @ignore */
	RegExp.prototype._$lastIndex$_ = "don't use me, used for reflection.";
	/**
	* The last matched characters.
	* @name lastMatch
	* @memberOf RegExp
	*/
	/** @ignore */
	RegExp.prototype._$lastMatch$_ = "don't use me, used for reflection.";
	/**
	* The last matched parenthesized substring.
	* @name lastParen
	* @memberOf RegExp
	*/
	/** @ignore */
	RegExp.prototype._$lastParen$_ = "don't use me, used for reflection.";
	/**
	* The substring in front of the characters most recently matched.
	* @name leftContext
	* @memberOf RegExp
	*/
	/** @ignore */
	RegExp.prototype._$leftContext$_ = "don't use me, used for reflection.";
	/**
	* The substring after the characters most recently matched.
	* @name rightContext
	* @memberOf RegExp
	*/
	/** @ignore */
	RegExp.prototype._$rightContext$_ = "don't use me, used for reflection.";
	/**
	* The text used for pattern matching.
	* @name source
	* @memberOf RegExp
	*/
	/** @ignore */
	RegExp.prototype._$source$_ = "don't use me, used for reflection.";

	/**
	* Change the regular expression (what to search for).
	* @name compile
	* @param {String} _string
	* @function
	* @memberOf RegExp
	*/
	/** @ignore */
	RegExp.prototype._$compile$_ = function(_string){throw "don't call me, used for reflection.";}
	/**
	* Search a string for a specified value. Returns the found value and remembers the position.
	* @name exec
	* @param {String} _string
	* @return {String}
	* @function
	* @memberOf RegExp
	*/
	/** @ignore */
	RegExp.prototype._$exec$_ = function(_string){throw "don't call me, used for reflection.";}
	/**
	* Search a string for a specified value. Returns true or false.
	* @name test
	* @param {String} _string
	* @return {Boolean}
	* @function
	* @memberOf RegExp
	*/
	/** @ignore */
	RegExp.prototype._$test$_ = function(_string){throw "don't call me, used for reflection.";}

	/**
	* Returns whether this object is equal to the specified _object.
	* @param {Object} _object
	* @return {Boolean}
	*/
	RegExp.prototype.equals = function(_object)
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


RegExp.PACKAGE = "";
RegExp.CLASS = "RegExp";
RegExp.SUPER_CLASS = "";
RegExp.IMPORTS = [];
RegExp.INTERFACES = [];
RegExp.MIXINS = [];
RegExp.getName = function(){return RegExp.CLASS;}
RegExp.klass = new jsx.lang.Class(RegExp.getName());
RegExp.prototype.getClass = function(){return RegExp.klass;}
RegExp.WARNINGS = [];
