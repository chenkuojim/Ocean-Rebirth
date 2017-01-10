
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
	jsx.lang.Thread = function(){this.initialize.apply(this, arguments);}

	/** @ignore */
	jsx.lang.Thread.prototype.initialize = function(_block, _object, _args, _milliseconds, _name)
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
	* Starts the jsx.lang.Thread.
	*/
	jsx.lang.Thread.prototype.start = function()
	{
		if(!this.milliseconds || this.milliseconds < 0) this.milliseconds = 1;
		if(this.daemon)
		{
			// execute blocktion every milliseconds
			this.id = setInterval(new jsx.lang.Closure().bind(this.block, this.object, this.args || []), this.milliseconds);
		}
		else
		{
			// execute blocktion in milliseconds
			this.id = setTimeout(new jsx.lang.Closure().bind(this.block, this.object, this.args || []), this.milliseconds);
		}
	}

	/**
	* Stops the jsx.lang.Thread.
	*/
	jsx.lang.Thread.prototype.stop = function()
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
	jsx.lang.Thread.prototype.sleep = function(_milliseconds)
	{
		this.stop();

		new jsx.lang.Thread(function()
		{
			this.start();
		}, this, [], _milliseconds).start();
	}

	/**
	* Returns the Thread ID.
	* @return {Number}
	*/
	jsx.lang.Thread.prototype.getID = function()
	{
		return this.id;
	}

	/**
	* Returns the Thread Name.
	* @return {String}
	*/
	jsx.lang.Thread.prototype.getName = function()
	{
		return this.name;
	}

	/**
	* Set the Thread Name.
	* @param {String} _name
	* @return {Thread}
	*/
	jsx.lang.Thread.prototype.setName = function(_name)
	{
		this.name = _name;
		return this;
	}

	/**
	* Returns whether the Thread is a Daemon jsx.lang.Thread.
	* @return {Boolean}
	*/
	jsx.lang.Thread.prototype.isDaemon = function()
	{
		return this.daemon;
	}

	/**
	* Set whether the Thread should be a Daemon jsx.lang.Thread.
	* @param {Boolean} _isDaemon
	* @return {Thread}
	*/
	jsx.lang.Thread.prototype.setDaemon = function(_isDaemon)
	{
		this.daemon = _isDaemon;
		return this;
	}

	/**
	* Returns the String representation of the jsx.lang.Thread.
	* @return {String}
	*/
	jsx.lang.Thread.prototype.toString = function()
	{
		var _tmp = "Thread -> ID: " + this.getID();
		if(this.name) _tmp += " Name: " + this.name;
		return _tmp;
	}


jsx.lang.Thread.PACKAGE = "jsx.lang";
jsx.lang.Thread.CLASS = "jsx.lang.Thread";
jsx.lang.Thread.SUPER_CLASS = "";
jsx.lang.Thread.IMPORTS = ["jsx.lang.Closure"];
jsx.lang.Thread.INTERFACES = [];
jsx.lang.Thread.MIXINS = [];
jsx.lang.Thread.getName = function(){return jsx.lang.Thread.CLASS;}
jsx.lang.Thread.klass = new jsx.lang.Class(jsx.lang.Thread.getName());
jsx.lang.Thread.prototype.getClass = function(){return jsx.lang.Thread.klass;}
jsx.lang.Thread.WARNINGS = [];
