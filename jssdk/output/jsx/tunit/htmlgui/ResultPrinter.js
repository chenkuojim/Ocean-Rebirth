jsx.tunit.htmlgui.ResultPrinter = function(){this.initialize.apply(this, arguments);}


	/** @ignore */
	jsx.tunit.htmlgui.ResultPrinter.prototype.initialize = function(_container)
	{
		this.runCounter = 1;

		this.container = _container;
		this.document = this.container.ownerDocument;

		this.summaryTests = this.document.createElement("div");

		this.formatException = function(_exception)
		{
			if(_exception)
			{
				var _excepContainer = this.document.createElement("span");

				var _exString = new jsx.lang.StringBuffer("Exception: ");
				if(_exception.message)
				{
					_exString.append(_exception.message);
				}
				else if(_exception.description)
				{
					_exString.append(_exception.description);
				}
				if(_exception.lineNumber)
				{
					_exString.append(" on line number ");
					_exString.append(_exception.lineNumber);
				}
				if(_exception.fileName)
				{
					_exString.append(" in file ");
					_exString.append(_exception.fileName);
				}

				_excepContainer.appendChild(this.document.createTextNode(_exString.toString()));
//TODO
/*
				if(_exception.stack)
				{
					_exString.append(" ");
					_exString.append("Stack trace:");
					_exString.append(" ");
					_exString.append(_exception.stack);
				}
*/
//				return _exString.toString();

				return _excepContainer;
			}
			return this.document.createTextNode("");
		}

	}

	jsx.tunit.htmlgui.ResultPrinter.prototype.print = function(_test, _result, _runTime)
	{
		var me = this;

		// title
		var titleContainer = this.document.createElement("h3");
		var title = this.document.createTextNode(_test.getName());
		titleContainer.appendChild(title);
		this.container.appendChild(titleContainer);

		// summary of tests
		this.container.appendChild(this.summaryTests);
		this.container.appendChild(this.document.createElement("br"));

		// summary text
        var summaryText = this.document.createTextNode(_result.runCount() + " tests ran in " + _runTime / 1000.0 + " seconds");
        this.container.appendChild(summaryText);
		this.container.appendChild(this.document.createElement("br"));

		// errors and failures
		if(!_result.wasSuccessful())
		{
			if(_result.failureCount() > 0)
			{
				this.container.appendChild(this.document.createElement("br"));
				var failureTitleContainer = this.document.createElement("div");
				var failureTitle = this.document.createTextNode("Failures");
				failureTitleContainer.appendChild(failureTitle);
				failureTitleContainer.style.fontWeight = 'bold';
				var failureContainer = this.document.createElement("div");
				_result.getFailures().each(function(_failure)
				{
					failureContainer.appendChild(this.document.createTextNode(_failure.getTest() +" - "+ _failure.getException().message));
					failureContainer.appendChild(this.document.createElement('br'));
				});
				failureContainer.style.color = 'red';
				this.container.appendChild(failureTitleContainer);
				this.container.appendChild(failureContainer);
			}

			if(_result.errorCount() > 0)
			{
				this.container.appendChild(this.document.createElement("br"));
				var errorTitleContainer = this.document.createElement("div");
				var errorTitle = this.document.createTextNode("Errors");
				errorTitleContainer.appendChild(errorTitle);
				errorTitleContainer.style.fontWeight = 'bold';
				var errorContainer = this.document.createElement("div");
				_result.getErrors().each(function(_error)
				{
					errorContainer.appendChild(this.document.createTextNode(_error.getTest() +" - "));

					errorContainer.appendChild(me.formatException(_error.getException()));

					errorContainer.appendChild(this.document.createElement('br'));
				});
				errorContainer.style.color = 'red';
				this.container.appendChild(errorTitleContainer);
				this.container.appendChild(errorContainer);
			}

			this.container.appendChild(this.document.createElement("br"));
		}

		// status bar
        var statusBar = this.document.createElement("div");
		var statusText = this.document.createTextNode(_result.wasSuccessful()?"OK!":"NOT OK!");
		statusBar.appendChild(statusText);
		statusBar.style.backgroundColor = _result.wasSuccessful()?"lightgreen":"red";
		statusBar.style.color = 'black';
		statusBar.style.fontWeight = 'bold';
		statusBar.style.textAlign = 'center';
		statusBar.style.marginTop = '1em';
        this.container.appendChild(statusBar);
	}

	jsx.tunit.htmlgui.ResultPrinter.prototype.startTest = function(_test)
	{
	}

	jsx.tunit.htmlgui.ResultPrinter.prototype.endTest = function(_test)
	{
	}

	jsx.tunit.htmlgui.ResultPrinter.prototype.addSuccess = function(_test)
	{
		this.printResult("+");
	}

	jsx.tunit.htmlgui.ResultPrinter.prototype.addFailure = function(_test, _failure)
	{
		this.printResult("F");
	}

	jsx.tunit.htmlgui.ResultPrinter.prototype.addError = function(_test, _error)
	{
		this.printResult("E");
	}

	jsx.tunit.htmlgui.ResultPrinter.prototype.printResult = function(_char)
	{
		this.summaryTests.appendChild(this.document.createTextNode(_char));
		if(this.runCounter>=100)
		{
			this.runCounter = 1;
			this.summaryTests.appendChild(this.document.createElement("br"));
		}
		else
		{
			this.runCounter++;
		}
	}


jsx.tunit.htmlgui.ResultPrinter.PACKAGE = "jsx.tunit.htmlgui";
jsx.tunit.htmlgui.ResultPrinter.CLASS = "jsx.tunit.htmlgui.ResultPrinter";
jsx.tunit.htmlgui.ResultPrinter.SUPER_CLASS = "";
jsx.tunit.htmlgui.ResultPrinter.IMPORTS = ["jsx.lang.StringBuffer","jsx.tunit.framework.TestListener"];
jsx.tunit.htmlgui.ResultPrinter.INTERFACES = ["jsx.tunit.framework.TestListener"];
jsx.tunit.htmlgui.ResultPrinter.MIXINS = [];
jsx.tunit.htmlgui.ResultPrinter.getName = function(){return jsx.tunit.htmlgui.ResultPrinter.CLASS;}
jsx.tunit.htmlgui.ResultPrinter.klass = new jsx.lang.Class(jsx.tunit.htmlgui.ResultPrinter.getName());
jsx.tunit.htmlgui.ResultPrinter.prototype.getClass = function(){return jsx.tunit.htmlgui.ResultPrinter.klass;}
jsx.tunit.htmlgui.ResultPrinter.WARNINGS = [];
