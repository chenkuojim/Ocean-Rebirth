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

import jsx.collections.ArrayList;
import jsx.util.scheduler.Task;
import jsx.lang.Thread;

class Scheduler
{

	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class Scheduler
	* @constructor
	*/
	Scheduler()
	{
		this.tasks = new ArrayList();
		this.running = false;

		this.daemonThread = new Thread(function()
		{
			this.tasks.each(function(_task)
			{
				_task.run();
			});
		}, this, [], Scheduler.INTERVAL, "Scheduler Daemon Thread");
		this.daemonThread.setDaemon(true);
	}

	Scheduler.INTERVAL = 50; // milliseconds

	instance start()
	{
		if(!this.running)
		{
			this.running = true;
			this.daemonThread.start();
		}
	}

	instance stop()
	{
		if(this.running)
		{
			this.running = false;
			this.daemonThread.stop();
		}
	}

	instance pause(_length)
	{
		if(this.running)
		{
			this.stop();
			this.daemonThread.sleep(_length);
		}
	}

	instance pauseResume()
	{
		if(this.running)
		{
			this.stop();
		}
		else
		{
			this.start();
		}
	}

	instance getTaskByReference(_block)
	{
		var task = null;
		var me = this;
		this.tasks.each(function(_task)
		{
			if(_task.block === _block)
			{
				task = _task;
				me.tasks.$break;
			}
		});
		return task;
	}

	instance addTask(_object, _block, _args, _runInterval)
	{
		var task = this.getTaskByReference(_block);
		if(!task)
		{
			this.tasks.add(new Task(_block, _object, _args, _runInterval));
		}
	}

	instance deleteTask(_block)
	{
		var task = this.getTaskByReference(_block);
		if(task)
		{
			task.stop();
			this.tasks.remove(task);
		}
	}

	instance startTask(_block)
	{
		if(this.running)
		{
			var task = this.getTaskByReference(_block);
			if(task)
			{
				task.start();
			}
		}
	}

	instance stopTask(_block)
	{
		if(this.running)
		{
			var task = this.getTaskByReference(_block);
			if(task)
			{
				task.stop();
			}
		}
	}

	instance pauseTask(_block, _length)
	{
		if(this.running)
		{
			var task = this.getTaskByReference(_block);
			if(task && task.running)
			{
				task.stop();
				new Thread(function()
				{
					task.start();
				}, this, [], _length).start();
			}
		}
	}

	instance isRunning()
	{
		return this.running;
	}

}