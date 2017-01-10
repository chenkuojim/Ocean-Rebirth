
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
	jsx.util.scheduler.Task = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.util.scheduler.Task.prototype.initialize = function(_block, _object, _args, _runInterval)
	{
		this.block = _block;
		this.object = _object;
		this.args = _args;

		this.tickCount = Number.parseInt(_runInterval/jsx.util.scheduler.Scheduler.INTERVAL);
		this.currentTick = this.tickCount;
		this.running = false;
	}

	jsx.util.scheduler.Task.prototype.start = function()
	{
		this.running = true;
	}

	jsx.util.scheduler.Task.prototype.stop = function()
	{
		this.running = false;
	}

	jsx.util.scheduler.Task.prototype.run = function()
	{
		this.currentTick--;
		if (this.currentTick <= 0)
		{
			if(this.running)
			{
				new jsx.lang.Thread(this.block, this.object, this.args).start();
			}

			// reset the this.currentTick from the original this.tickCount
			this.currentTick = this.tickCount;
		}
	}

	jsx.util.scheduler.Task.prototype.isRunning = function()
	{
		return this.running;
	}


jsx.util.scheduler.Task.PACKAGE = "jsx.util.scheduler";
jsx.util.scheduler.Task.CLASS = "jsx.util.scheduler.Task";
jsx.util.scheduler.Task.SUPER_CLASS = "";
jsx.util.scheduler.Task.IMPORTS = ["jsx.lang.Thread"];
jsx.util.scheduler.Task.INTERFACES = [];
jsx.util.scheduler.Task.MIXINS = [];
jsx.util.scheduler.Task.getName = function(){return jsx.util.scheduler.Task.CLASS;}
jsx.util.scheduler.Task.klass = new jsx.lang.Class(jsx.util.scheduler.Task.getName());
jsx.util.scheduler.Task.prototype.getClass = function(){return jsx.util.scheduler.Task.klass;}
jsx.util.scheduler.Task.WARNINGS = [];
