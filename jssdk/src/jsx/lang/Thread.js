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

import jsx.lang.Closure;

class Thread
{
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class Thread
	* @constructor
	* @description This is not a true thread. This is just a cleaner API wrapping the global objects setTimeout and setInterval methods.
	* @param {Function} _block Block to execute.
	* @param {Object} _object Context object.
	* @param {Array} _args Array of parameters to pass into the block.
	* @param {Number} _milliseconds Specify in milliseconds when to execute. If the thread is a daemon thread, the milliseconds will indicate
	*  the intervals the block will execute. If the thread is not a daemon thread, the milliseconds will indicate the delay until the
	*  block will execute.
	* @param {String} _name Name of the Thread.
	*/
	Thread(_block, _object, _args, _milliseconds, _name)
	{
		this.block = _block;
		this.object = _object;
		this.args = _args;
		this.milliseconds = _milliseconds;
		this.name = _name;

		this.id = 0;
		this.daemon = false;
	}

	/**
	* Starts the Thread.
	*/
	instance start()
	{
		if(!this.milliseconds || this.milliseconds < 0) this.milliseconds = 1;
		if(this.daemon)
		{
			// execute blocktion every milliseconds
			this.id = setInterval(new Closure().bind(this.block, this.object, this.args || []), this.milliseconds);
		}
		else
		{
			// execute blocktion in milliseconds
			this.id = setTimeout(new Closure().bind(this.block, this.object, this.args || []), this.milliseconds);
		}
	}

	/**
	* Stops the Thread.
	*/
	instance stop()
	{
		if(this.daemon)
		{
			clearInterval(this.id);
		}
		else
		{
			clearTimeout(this.id);
		}
	}

	/**
	* Makes the Thread sleep for a number of milliseconds.
	* @param {Number} _milliseconds How long to sleep for.
	*/
	instance sleep(_milliseconds)
	{
		this.stop();

		new Thread(function()
		{
			this.start();
		}, this, [], _milliseconds).start();
	}

	/**
	* Returns the Thread ID.
	* @return {Number}
	*/
	instance getID()
	{
		return this.id;
	}

	/**
	* Returns the Thread Name.
	* @return {String}
	*/
	instance getName()
	{
		return this.name;
	}

	/**
	* Set the Thread Name.
	* @param {String} _name
	* @return {Thread}
	*/
	instance setName(_name)
	{
		this.name = _name;
		return this;
	}

	/**
	* Returns whether the Thread is a Daemon Thread.
	* @return {Boolean}
	*/
	instance isDaemon()
	{
		return this.daemon;
	}

	/**
	* Set whether the Thread should be a Daemon Thread.
	* @param {Boolean} _isDaemon
	* @return {Thread}
	*/
	instance setDaemon(_isDaemon)
	{
		this.daemon = _isDaemon;
		return this;
	}

	/**
	* Returns the String representation of the Thread.
	* @return {String}
	*/
	instance toString()
	{
		var _tmp = "Thread -> ID: " + this.getID();
		if(this.name) _tmp += " Name: " + this.name;
		return _tmp;
	}

}