jsx.tunit.textui.ResultPrinter = function(){this.initialize.apply(this, arguments);}


	/** @ignore */
	jsx.tunit.textui.ResultPrinter.prototype.initialize = function(_output)
	{
		this.output = _output;
	}

	jsx.tunit.textui.ResultPrinter.prototype.printStart = function(_test)
	{
		var _text = new jsx.lang.StringBuffer();

		_text.append("[tunit] Running ");
		_text.append(_test.getName());

		this.output(_text.toString());
	}

	jsx.tunit.textui.ResultPrinter.prototype.printEnd = function(_test, _result, _runTime)
	{
		var _text = new jsx.lang.StringBuffer();

		_text.append("[tunit] Tests run: ");
		_text.append(_result.runCount());

		_text.append(", Failures: ");
		_text.append(_result.failureCount());

		_text.append(", Errors: ");
		_text.append(_result.errorCount());

		_text.append(", Time elapsed: ");
		_text.append(_runTime);
		_text.append(" millisec");

		if(!_result.wasSuccessful())
		{
			_text.append("\n[tunit] Test ");
			_text.append(_test.getName());
			_text.append(" FAILED");

			var _errors = _result.getErrors();
			_errors.each(function(_error)
			{
				_text.append("\n\t\t");
				_text.append(_error.getTest());
				_text.append(" - ");
				_text.append(_error.getException().message);
			});
		}

		_text.append("\n");
		this.output(_text.toString());
	}

	jsx.tunit.textui.ResultPrinter.prototype.startTest = function(_test)
	{
	}

	jsx.tunit.textui.ResultPrinter.prototype.endTest = function(_test)
	{
	}

	jsx.tunit.textui.ResultPrinter.prototype.addSuccess = function(_test)
	{
	}

	jsx.tunit.textui.ResultPrinter.prototype.addFailure = function(_test, _failure)
	{
	}

	jsx.tunit.textui.ResultPrinter.prototype.addError = function(_test, _error)
	{
	}


jsx.tunit.textui.ResultPrinter.PACKAGE = "jsx.tunit.textui";
jsx.tunit.textui.ResultPrinter.CLASS = "jsx.tunit.textui.ResultPrinter";
jsx.tunit.textui.ResultPrinter.SUPER_CLASS = "";
jsx.tunit.textui.ResultPrinter.IMPORTS = ["jsx.tunit.framework.TestListener","jsx.lang.StringBuffer"];
jsx.tunit.textui.ResultPrinter.INTERFACES = ["jsx.tunit.framework.TestListener"];
jsx.tunit.textui.ResultPrinter.MIXINS = [];
jsx.tunit.textui.ResultPrinter.getName = function(){return jsx.tunit.textui.ResultPrinter.CLASS;}
jsx.tunit.textui.ResultPrinter.klass = new jsx.lang.Class(jsx.tunit.textui.ResultPrinter.getName());
jsx.tunit.textui.ResultPrinter.prototype.getClass = function(){return jsx.tunit.textui.ResultPrinter.klass;}
jsx.tunit.textui.ResultPrinter.WARNINGS = [];
