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

package jsx.collections;

class Iterable
{
	/**
	* @fileOverview <code>jsx.collections.Iterable</code> is an Interface class. Defines the method used to iterate over the collection.
	* @example
	<pre>
		class MyIterable implements Iterable
	</pre>
	*/
	/**
	* @class Iterable
	*/
	Iterable(){}

	/**
	* Iterate over the collection of elements.
	* @param {Function} _block The function to execute for every element in the collection.
	*/
	abstract iterator(_block)

}