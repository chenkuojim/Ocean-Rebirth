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

package jsx.logging;

import jsx.logging.Appender;
import jsx.logging.DefaultLayout;
import jsx.logging.Level;
import jsx.lang.StringBuffer;

class DefaultAppender implements Appender
{

	DefaultAppender(_name)
	{
		this.name = _name;
		this.layout = new DefaultLayout();
		this.threshold = Level.ALL;
	}

	instance doAppend(_logEvent)
	{
		if(_logEvent.getLevel().isGreaterOrEqual(this.getThreshold()))
		{
			this.append(_logEvent);
		}
	}

	instance append(_logEvent)
	{
		var layout = this.getLayout();

		var _show = $GLOBAL_OBJECT.alert || print;
		_show(new StringBuffer()
				.append(layout.getHeader())
				.append(layout.format(_logEvent))
				.append(layout.getFooter())
				.append("\n"));
	}

	instance getName()
	{
		return this.name;
	}

	instance getLayout()
	{
		return this.layout;
	}

	instance setLayout(_layout)
	{
		this.layout = _layout;
	}

	instance getThreshold()
	{
		return this.threshold;
	}

	instance setThreshold(_threshold)
	{
		this.threshold = _threshold;
	}

}

