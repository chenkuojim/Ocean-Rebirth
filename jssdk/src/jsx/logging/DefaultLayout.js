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

import jsx.logging.Layout;

class DefaultLayout implements Layout
{

	DefaultLayout(){}

	instance format(_logEvent)
	{
		return _logEvent.getMessage().toString();
	}

	instance getContentType()
	{
		return "text/plain";
	}

	instance getHeader()
	{
		return "";
	}

	instance getFooter()
	{
		return "";
	}

}
