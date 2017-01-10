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

import jsx.collections.Enumerable;

class String mixin Enumerable
{
	/**
	* @fileOverview String is one of the core classes to native JavaScript. Here, String mixes in the jsx.collections.Enumerable class
	*  which gives String a lot more functionalilty. See jsx.collections.Enumerable to see all the enumerable methods on String
	* @example
	*/

	/**
	* Returns the number of characters in a string.
	* @name length
	* @type {Number}
	*/
	/** @ignore */
	##_$length$_ = "don't use me, used for reflection.";
	/**
	* Takes the specified Unicode values and returns a string. String.fromCharCode is
	*  a class method of the String class.
	* @name String.fromCharCode
	* @param _numX  String.fromCharCode(numX,numX,...,numX) allowed.
	* @return {String}
	* @function
	*/
	/** @ignore */
	static _$fromCharCode$_(n, n, n, n){throw "don't call me, used for reflection.";}

	/**
	* Returns the character at a specified position.
	* @name charAt
	* @param {Number} _index
	* @return {String}
	* @function
	* @memberOf String
	*/
	/** @ignore */
	instance _$charAt$_(_index){throw "don't call me, used for reflection.";}
	/**
	* Returns the Unicode of the character at a specified position.
	* @name charCodeAt
	* @param {Number} _index
	* @return {Number}
	* @function
	* @memberOf String
	*/
	/** @ignore */
	instance _$charCodeAt$_(_index){throw "don't call me, used for reflection.";}
	/**
	* Joins two or more strings.
	* @name concat
	* @param {String} _string. String#concat(stringX,stringX,...,stringX) allowed.
	* @function
	* @memberOf String
	*/
	/** @ignore */
	instance _$concat$_(_string, n, n){throw "don't call me, used for reflection.";}
	/**
	* Returns the position of the first occurrence of a specified string value in a string.
	* @name indexOf
	* @param {String} _string Specifies a string value to search for.
	* @param {Number} [_start] Specifies where to start the search.
	* @return {Number} This method returns -1 if the string value to search for never occurs.
	* @function
	* @memberOf String
	*/
	/** @ignore */
	instance _$indexOf$_(_string, _start){throw "don't call me, used for reflection.";}
	/**
	* Returns the position of the last occurrence of a specified string value, searching backwards from the specified position in a string.
	* @name lastIndexOf
	* @param {String} _string Specifies a string value to search for.
	* @param {Number} [_start] Specifies where to start the search.
	* @return {Number} This method returns -1 if the string value to search for never occurs.
	* @function
	* @memberOf String
	*/
	/** @ignore */
	instance _$lastIndexOf$_(_string, _start){throw "don't call me, used for reflection.";}
	/**
	* Searches for a specified value in a string.
	* @name match
	* @param {String} _regexp Could be /'string'/ or new RegExp("string").
	* @return {String}
	* @function
	* @memberOf String
	*/
	/** @ignore */
	instance _$match$_(_regexp){throw "don't call me, used for reflection.";}
	/**
	* Replaces some characters with some other characters in a string.
	* @name replace
	* @param {String} _regexp Could be /'string'/ or new RegExp("string").
	* @param {String} _replacement
	* @function
	* @memberOf String
	*/
	/** @ignore */
	instance _$replace$_(_regexp, _replacement){throw "don't call me, used for reflection.";}
	/**
	* Searches a string for a specified value. Returns the position of the specified value in the string. If no match was found it returns -1.
	* @name search
	* @param {String} _regexp Could be /'string'/ or new RegExp("string").
	* @return {Number}
	* @function
	* @memberOf String
	*/
	/** @ignore */
	instance _$search$_(_regexp){throw "don't call me, used for reflection.";}
	/**
	* Extracts a part of a string and returns the extracted part in a new string.
	* @name slice
	* @param {Number} _start Specify where to start the selection.
	* @param {Number} _end Specify where to end the selection.
	* @return {String}
	* @function
	* @memberOf String
	*/
	/** @ignore */
	instance _$slice$_(_start, _end){throw "don't call me, used for reflection.";}
	/**
	* Splits a string into an array of strings.
	* @name split
	* @param {String} _delimiter Specifies the character, regular expression, or substring that is used to determine where to split the string.
	*  Could be /'string'/ or new RegExp("string").
	* @param {Number} [_limit] Specify how many times split should occur. Must be a numeric value.
	* @return {Array}
	* @function
	* @memberOf String
	*/
	/** @ignore */
	instance _$split$_(_delimiter, _limit){throw "don't call me, used for reflection.";}
	/**
	* Extracts a specified number of characters in a string, from a start index.
	* @name substr
	* @param {Number} _start Where to start the extraction.
	* @param {Number} [_length] How many characters to extract.
	* @return {String}
	* @function
	* @memberOf String
	*/
	/** @ignore */
	instance _$substr$_(_start, _length){throw "don't call me, used for reflection.";}
	/**
	* Extracts the characters in a string between two specified indices.
	* @name substring
	* @param {Number} _from Where to start the extraction.
	* @param {Number} [_to] Where to end the extraction.
	* @return {String}
	* @function
	* @memberOf String
	*/
	/** @ignore */
	instance _$substring$_(_from, _to){throw "don't call me, used for reflection.";}
	/**
	* Displays a string in lowercase letters.
	* @name toLowerCase
	* @function
	* @memberOf String
	*/
	/** @ignore */
	instance _$toLowerCase$_(){throw "don't call me, used for reflection.";}
	/**
	* Displays a string in uppercase letters.
	* @name toUpperCase
	* @function
	* @memberOf String
	*/
	/** @ignore */
	instance _$toUpperCase$_(){throw "don't call me, used for reflection.";}

	/**
	* Returns 0123456789.
	*/
	String.DIGIT = '0123456789';
	/**
	* Returns ABCDEFGHIJKLMNOPQRSTUVWXYZ.
	*/
	String.ALPHA_UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	/**
	* Returns abcdefghijklmnopqrstuvwxyz.
	*/
	String.ALPHA_LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz';
	/**
	* Returns ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.
	*/
	String.ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	/**
	* Returns 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.
	*/
	String.ALPHA_NUMERIC = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

	/**
	* Calls encodeURI native on the global object.
	*/
	instance encodeURI(){return $GLOBAL_OBJECT.encodeURI(this);}
	/**
	* Calls encodeURIComponent native on the global object.
	*/
	instance encodeURIComponent(){return $GLOBAL_OBJECT.encodeURIComponent(this);}
	/**
	* Calls decodeURI native on the global object.
	*/
	instance decodeURI(){return $GLOBAL_OBJECT.decodeURI(this);}
	/**
	* Calls decodeURIComponent native on the global object.
	*/
	instance decodeURIComponent(){return $GLOBAL_OBJECT.decodeURIComponent(this);}
	/**
	* Calls escape native on the global object.
	*/
	instance escape(){return $GLOBAL_OBJECT.escape(this);}
	/**
	* Calls unescape native on the global object.
	*/
	instance unescape(){return $GLOBAL_OBJECT.unescape(this);}

	/**
	* Required by the jsx.collections.Enumerable mixin. Calls String#iterator(_delimiter, _block) passing a
	*  {Object}value and {Number}index to the block.
	* @param {String} _delimiter Specifies the character, regular expression, or substring that is used to determine where to split the string.
	* @param {Function} _block. Parameters passed to the _block are {Object}array[index] and the {Number}index.
	*/
	instance each(_delimiter, _block)
	{
		var me = this;
		var index = 0;
		try
		{
			this.iterator(_delimiter, function(_value)
			{
				try
				{
					_block(_value, index++);
				}
				catch(e)
				{
					if (e != Enumerable.$continue) throw e;
				}
			});
		}
		catch(e)
		{
			if (e != Enumerable.$break) throw e;
		}
	}

	/**
	* Iterates through the String array created by String#split, executing the _block and passing a value from String.array[index] as its parameter. Used by String#each(_block).
	* @param {Function} _delimiter
	* @param {Function} _block
	*/
	instance iterator(_delimiter, _block)
	{
		var _parts = this.split(_delimiter);
		for(var i=0;i<_parts.length;i++)
		{
			_block(_parts[i]);
		}
	}

	/**
	* Returns a new string without spaces on either side.
	* @return {String}
	*/
	instance trim()
	{
		return this.replace(/^\s+/, "")
					.replace(/\s+$/, "");
	}

	/**
	* Returns a new string escaping HTML reserved characters.
	* @return {String}
	*/
	instance escapeHTML()
	{
		return this.replace(/&/gm, "&amp;")
					.replace(/</gm, "&lt;")
					.replace(/>/gm, "&gt;");
					//.replace(/\"/gm, '&quot;')
					//.replace(/'/gm, "&apos;");
	}

	/**
	* Returns a new string unescaping HTML reserved characters.
	* @return {String}
	*/
	instance unescapeHTML()
	{
		return this.replace(/&amp;/gm, "&")
					.replace(/&lt;/gm, "<")
					.replace(/&gt;/gm, ">");
					//.replace(/&quot;/gm, '"')
					//.replace(/&apos;/gm, "'");
	}

	/**
	* Returns whether the string starts with the specified string paramerter.
	* @param {String} _string
	* @return {Boolean}
	*/
	instance startsWith(_string)
	{
		return this.indexOf(_string) == 0;
	}

	/**
	* Returns whether the string ends with the specified string paramerter.
	* @param {String} _string
	* @return {Boolean}
	*/
	instance endsWith(_string)
	{
		return this.lastIndexOf(_string) == (this.length - _string.length);
	}

	/**
	* Returns whether the string has the specified string paramerter within it's contents.
	* @param {String} _string
	* @return {Boolean}
	*/
	instance has(_char)
	{
		return this.indexOf(_char) > -1;
	}

	/**
	* Returns a new string but in reverse order from the original string.
	* @return {String}
	*/
	instance reverse()
	{
		return this.split("").reverse().join("");
	}

	/**
	* Truncates the string to the specified length. Returns a new string.
	* @param {Number} _length The length to truncate the string to.
	* @return {String}
	*/
	instance truncate(_length)
	{
		return this.slice(0, _length);
	}

	/**
	* Returns a new string capitalizing the original string.
	* @return {String}
	*/
	instance capitalize()
	{
		return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
	}

	/**
	* Returns a new string camel casing the original hyphen or snake case string. Ex. background-image or background_image -> backgroundImage.
	* @return {String}
	*/
	instance camelCase()
	{
		var _camelized = "";
		var me = this;
		var _once = false;

		if(this.indexOf("-")>-1)
		{
			this.each("-", function(_value, _index)
			{
				if(!_value) me.$continue();
				if(!_once)
				{
					_camelized += _value.charAt(0).toLowerCase() + _value.substring(1);
					_once = true;
				}
				else
				{
					_camelized += _value.charAt(0).toUpperCase() + _value.substring(1);
				}
			});
		}
		else if(this.indexOf("_")>-1)
		{
			this.each("_", function(_value, _index)
			{
				if(!_value) me.$continue();
				if(!_once)
				{
					_camelized += _value.charAt(0).toLowerCase() + _value.substring(1);
					_once = true;
				}
				else
				{
					_camelized += _value.charAt(0).toUpperCase() + _value.substring(1);
				}
			});
		}
		else
		{
			_camelized = this;
		}

		return _camelized;
	}

	/**
	* Returns a new string hyphen casing the original camel case string. Ex. backgroundImage -> background-image.
	* @return {String}
	*/
	instance hyphenCase()
	{
		var me = this;
		var _hyphenated = "";
		this.each("", function(_value, _index)
		{
			if(_index == 0 && _value.isUpperCase())
			{
				_hyphenated += _value.toLowerCase();
			}
			else if(_value.isUpperCase())
			{
				_hyphenated += "-";
				_hyphenated += _value.toLowerCase();
			}
			else
			{
				_hyphenated += _value;
			}
		});
		return _hyphenated;
	}

	/**
	* Returns a new string snake casing the original camel case string. Ex. backgroundImage -> background_image.
	* @return {String}
	*/
	instance snakeCase()
	{
		var me = this;
		var _snaked = "";
		this.each("", function(_value, _index)
		{
			if(_index == 0 && _value.isUpperCase())
			{
				_snaked += _value.toLowerCase();
			}
			else if(_value.isUpperCase())
			{
				_snaked += "_";
				_snaked += _value.toLowerCase();
			}
			else
			{
				_snaked += _value;
			}
		});
		return _snaked;
	}

	/**
	* Returns whether the string has all up cased characters.
	* @return {Boolean}
	*/
	instance isUpperCase()
	{
		var me = this;
		var _upper = true;
		this.each("", function(_value)
		{
			if(([" ", "\n",  "\t", "\r"].indexOf(_value) == -1) &&
				(_value.equals(_value.toLowerCase())))
			{
				_upper = false;
				me.$break();
			}
		});
		return _upper;
	}

	/**
	* Returns whether the string has all lower cased characters.
	* @return {Boolean}
	*/
	instance isLowerCase()
	{
		var me = this;
		var _lower = true;
		this.each("", function(_value)
		{
			if(([" ", "\n",  "\t", "\r"].indexOf(_value) == -1) &&
				(_value.equals(_value.toUpperCase())))
			{
				_lower = false;
				me.$break();
			}
		});
		return _lower;
	}

	/**
	* Returns whether the string is blank. Space, tab, new line, carriage return are consider empty.
	* @return {Boolean}
	*/
	instance isBlank()
	{
		if(this.isEmpty()) return true;

		var _blank = true;

		var me = this;
		this.each("", function(_value)
		{
			if ((!" ".equals(_value)) &&
				(!"\t".equals(_value)) &&
				(!"\n".equals(_value)) &&
				(!"\r".equals(_value)))
				{
					_blank = false;
					me.$break();
				}
		});

		return _blank;
	}

	/**
	* Returns whether the string is empty, where this.length == 0.
	* @return {Boolean}
	*/
	instance isEmpty()
	{
		return this.length == 0;
	}

}