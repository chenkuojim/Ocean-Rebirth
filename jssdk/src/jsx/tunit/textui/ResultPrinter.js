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

package jsx.tunit.textui;

import jsx.tunit.framework.TestListener;
import jsx.lang.StringBuffer;

class ResultPrinter implements TestListener
{

	ResultPrinter(_output)
	{
		this.output = _output;
	}

	instance printStart(_test)
	{
		var _text = new StringBuffer();

		_text.append("[tunit] Running ");
		_text.append(_test.getName());

		this.output(_text.toString());
	}

	instance printEnd(_test, _result, _runTime)
	{
		var _text = new StringBuffer();

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

	instance startTest(_test)
	{
	}

	instance endTest(_test)
	{
	}

	instance addSuccess(_test)
	{
	}

	instance addFailure(_test, _failure)
	{
	}

	instance addError(_test, _error)
	{
	}

}
