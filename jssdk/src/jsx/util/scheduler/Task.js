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

package jsx.util.scheduler;

import jsx.lang.Thread;

class Task
{

	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class Task
	* @constructor
	* @param {Function} _block
	* @param {Object} _object
	* @param {Array} _args
	* @param {Number} _runInterval
	*/
	Task(_block, _object, _args, _runInterval)
	{
		this.block = _block;
		this.object = _object;
		this.args = _args;

		this.tickCount = Number.parseInt(_runInterval/jsx.util.scheduler.Scheduler.INTERVAL);
		this.currentTick = this.tickCount;
		this.running = false;
	}

	instance start()
	{
		this.running = true;
	}

	instance stop()
	{
		this.running = false;
	}

	instance run()
	{
		this.currentTick--;
		if (this.currentTick <= 0)
		{
			if(this.running)
			{
				new Thread(this.block, this.object, this.args).start();
			}

			// reset the this.currentTick from the original this.tickCount
			this.currentTick = this.tickCount;
		}
	}

	instance isRunning()
	{
		return this.running;
	}

}