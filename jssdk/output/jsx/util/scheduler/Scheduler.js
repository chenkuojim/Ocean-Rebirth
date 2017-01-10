
	/**
	* @fileOverview
	* @example
	*/
	/**
	* @class Scheduler
	* @constructor
	*/
	jsx.util.scheduler.Scheduler = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.util.scheduler.Scheduler.prototype.initialize = function()
	{
		this.tasks = new jsx.collections.ArrayList();
		this.running = false;

		this.daemonThread = new jsx.lang.Thread(function()
		{
			this.tasks.each(function(_task)
			{
				_task.run();
			});
		}, this, [], jsx.util.scheduler.Scheduler.INTERVAL, "Scheduler Daemon Thread");
		this.daemonThread.setDaemon(true);
	}

	jsx.util.scheduler.Scheduler.INTERVAL = 50; // milliseconds

	jsx.util.scheduler.Scheduler.prototype.start = function()
	{
		if(!this.running)
		{
			this.running = true;
			this.daemonThread.start();
		}
	}

	jsx.util.scheduler.Scheduler.prototype.stop = function()
	{
		if(this.running)
		{
			this.running = false;
			this.daemonThread.stop();
		}
	}

	jsx.util.scheduler.Scheduler.prototype.pause = function(_length)
	{
		if(this.running)
		{
			this.stop();
			this.daemonThread.sleep(_length);
		}
	}

	jsx.util.scheduler.Scheduler.prototype.pauseResume = function()
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

	jsx.util.scheduler.Scheduler.prototype.getTaskByReference = function(_block)
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

	jsx.util.scheduler.Scheduler.prototype.addTask = function(_object, _block, _args, _runInterval)
	{
		var task = this.getTaskByReference(_block);
		if(!task)
		{
			this.tasks.add(new jsx.util.scheduler.Task(_block, _object, _args, _runInterval));
		}
	}

	jsx.util.scheduler.Scheduler.prototype.deleteTask = function(_block)
	{
		var task = this.getTaskByReference(_block);
		if(task)
		{
			task.stop();
			this.tasks.remove(task);
		}
	}

	jsx.util.scheduler.Scheduler.prototype.startTask = function(_block)
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

	jsx.util.scheduler.Scheduler.prototype.stopTask = function(_block)
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

	jsx.util.scheduler.Scheduler.prototype.pauseTask = function(_block, _length)
	{
		if(this.running)
		{
			var task = this.getTaskByReference(_block);
			if(task && task.running)
			{
				task.stop();
				new jsx.lang.Thread(function()
				{
					task.start();
				}, this, [], _length).start();
			}
		}
	}

	jsx.util.scheduler.Scheduler.prototype.isRunning = function()
	{
		return this.running;
	}


jsx.util.scheduler.Scheduler.PACKAGE = "jsx.util.scheduler";
jsx.util.scheduler.Scheduler.CLASS = "jsx.util.scheduler.Scheduler";
jsx.util.scheduler.Scheduler.SUPER_CLASS = "";
jsx.util.scheduler.Scheduler.IMPORTS = ["jsx.collections.ArrayList","jsx.util.scheduler.Task","jsx.lang.Thread"];
jsx.util.scheduler.Scheduler.INTERFACES = [];
jsx.util.scheduler.Scheduler.MIXINS = [];
jsx.util.scheduler.Scheduler.getName = function(){return jsx.util.scheduler.Scheduler.CLASS;}
jsx.util.scheduler.Scheduler.klass = new jsx.lang.Class(jsx.util.scheduler.Scheduler.getName());
jsx.util.scheduler.Scheduler.prototype.getClass = function(){return jsx.util.scheduler.Scheduler.klass;}
jsx.util.scheduler.Scheduler.WARNINGS = [];
