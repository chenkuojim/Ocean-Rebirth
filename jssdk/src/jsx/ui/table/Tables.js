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

package jsx.ui.table;

import jsx.collections.HashMap;
import jsx.ui.table.Table;
import jsx.dom.*;

class Tables
{

	Tables(_name)
	{
		this.tables = new HashMap();
		this.name = _name;
	}

	instance addTable(_tableID, _options)
	{
		var _table = new Table(this.name, _tableID, _options);

		this.tables.put(_tableID, _table);

		if(_options && _options["defaultSortColumn"] >= 0)
		{
			var columnAnchor = Element.getElement(_tableID).rows[0].cells[_options["defaultSortColumn"]].getElementsByTagName("a")[0];
			if(_options["defaultSortDir"])
			{
				if(_options["defaultSortDir"] == "asc")
				{
					columnAnchor.getElementsByTagName("span")[0].setAttribute('sortdir','down');
				}
				else
				{
					columnAnchor.getElementsByTagName("span")[0].setAttribute('sortdir','up');
				}
			}
			else
			{
				columnAnchor.getElementsByTagName("span")[0].setAttribute('sortdir','down');
			}
			_table.sort(columnAnchor);
		}
	}

	instance firstPage(_tableID)
	{
		var _table = this.tables.get(_tableID);
		_table.firstPage();
		_table.renderPage();
	}

	instance previousPage(_tableID)
	{
		var _table = this.tables.get(_tableID);
		if(_table.isPreviousPageAvailable())
		{
			_table.previousPage();
			_table.renderPage();
		}
	}

	instance nextPage(_tableID)
	{
		var _table = this.tables.get(_tableID);
		if(_table.isNextPageAvailable())
		{
			_table.nextPage();
			_table.renderPage();
		}
	}

	instance lastPage(_tableID)
	{
		var _table = this.tables.get(_tableID);
		_table.lastPage();
		_table.renderPage();
	}

	instance goToPage(_tableID, _pageNumber)
	{
		var _table = this.tables.get(_tableID);
		if(_pageNumber <= _table.totalPagesAvailable)
		{
			_table.goToPage(_pageNumber);
			_table.renderPage();
		}
	}

	instance sort(_link, _sortType)
	{
		var table = Element.getParent(_link, "table");

		var _table = this.tables.get(table.id);
		_table.sort(_link, _sortType);
	}

}
