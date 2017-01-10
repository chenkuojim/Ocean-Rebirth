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

import jsx.collections.ArrayList;
import jsx.ui.table.comparators.*;
import jsx.dom.*;

class Table
{

	Table(_cacheName, _tableID, _options)
	{

		this.tableCacheName = _cacheName;
		this.tableID = _tableID;

		var table = Element.getElement(this.tableID);

		this.pageRange;
		this.columnsTypes;
		this.recordsPerPage;
		if(_options)
		{
			this.recordsPerPage = _options["recordsPerPage"];
			this.pageRange = _options["pageRange"];
			this.columnsTypes = _options["columnsTypes"];
		}

		this.totalRecordsAvailable = table.rows.length - 1;
		this.page = 1;

		if(!this.recordsPerPage)
		{
			this.recordsPerPage = this.totalRecordsAvailable
		}

		if((this.totalRecordsAvailable % this.recordsPerPage) > 0)
		{
			this.totalPagesAvailable = Number.parseInt(this.totalRecordsAvailable / this.recordsPerPage) + 1;
		}
		else
		{
			this.totalPagesAvailable = this.totalRecordsAvailable / this.recordsPerPage;
		}

		// set up column header
		var firstRow = null;
		if (table.rows && table.rows.length > 0)
		{
			firstRow = table.rows[0];
		}

		if (!firstRow) return;

		// set the column header row
		firstRow.id = this.tableID+"_row_"+0;

		var sortableColumns = this.columnsTypes;
		if(sortableColumns == null)
		{
			sortableColumns = [];
		}

		// We have a first row: assume it's for column headers, and make its contents clickable links
		for (var i=0;i<firstRow.cells.length;i++)
		{
			var cell = firstRow.cells[i];
			var sortType = sortableColumns[i];
			var txt = Element.getInnerText(cell);

			var text = txt;

			if(!sortType)
			{
				sortType = "-1";
			}

			text = '<a href="#" class="sortheader" ' +
					'onclick="'+this.tableCacheName+'.sort(this, \''+sortType+'\'); return false;">' +
					txt +
					'<span class="sortarrow"></span></a>';

			cell.innerHTML = text;
		}

		this.setRecordIDs(1, this.totalRecordsAvailable);
		this.hideRecords(1, this.totalRecordsAvailable);
		this.renderPage();
	}

	instance firstPage()
	{
		// hide previous showing records
		this.hideRecords(this.getFromRecord(), this.getToRecord());

		this.page = 1;
	}

	instance previousPage()
	{
		// hide previous showing records
		this.hideRecords(this.getFromRecord(), this.getToRecord());

		this.page -= 1;
	}

	instance nextPage()
	{
		// hide previous showing records
		this.hideRecords(this.getFromRecord(), this.getToRecord());

		this.page += 1;
	}

	instance lastPage()
	{
		// hide previous showing records
		this.hideRecords(this.getFromRecord(), this.getToRecord());

		this.page = this.totalPagesAvailable;
	}

	instance goToPage(_pageNumber)
	{
		// hide previous showing records
		this.hideRecords(this.getFromRecord(), this.getToRecord());

		this.page = Number(_pageNumber);
	}

	instance renderPage()
	{
		// sanity checks
		if (this.page <= 0)
		{
			this.page = 1;
		}
		if (this.page > this.totalPagesAvailable)
		{
			this.page = this.totalPagesAvailable;
		}

		this.showRecords(this.getFromRecord(), this.getToRecord());

		this.buildNavigation();
	}

	instance getFromRecord()
	{
		var fromRecord = (this.page - 1) * this.recordsPerPage;

		// sanity checks
		if(fromRecord <= 0)
		{
			return 1;
		}

		if(this.page > 1)
		{
			return fromRecord+1;
		}
	}

	instance getToRecord()
	{
		var toRecord = ((this.page-1) * this.recordsPerPage) + this.recordsPerPage;

		// sanity checks
		if(toRecord > this.totalRecordsAvailable)
		{
			toRecord = this.totalRecordsAvailable;
		}

		return toRecord;
	}

	instance isFirstPageAvailable()
	{
		return (this.page == 1) ? false : true;
	}

	instance isPreviousPageAvailable()
	{
		return (this.page > 1) ? true : false;
	}

	instance isNextPageAvailable()
	{
		return (this.page < this.totalPagesAvailable) ? true: false;
	}

	instance isLastPageAvailable()
	{
		return (this.page == this.totalPagesAvailable) ? false: true;
	}

	instance setRecordIDs(_from, _to)
	{
		var table = Element.getElement(this.tableID);

		for (var i=_from;i<=_to;i++)
		{
			var rowID = this.tableID+"_row_"+i;
			table.rows[i].id = rowID;
		}
	}

	instance hideRecords(_from, _to)
	{
		var table = Element.getElement(this.tableID);

		for (var i=_from;i<=_to;i++)
		{
			var rowID = this.tableID+"_row_"+i;
			Element.getElement(rowID).style.display = "none";
		}
	}

	instance showRecords(_from, _to)
	{
		var table = Element.getElement(this.tableID);

		for (var i=_from;i<=_to;i++)
		{
			var rowID = this.tableID+"_row_"+i;
			Element.getElement(rowID).style.display = "";
		}
	}

	instance buildNavigation()
	{
		me = this;

		var navText = "";

		navText += this.totalRecordsAvailable + " items found, displaying ";
		navText += this.getFromRecord() + " to " + this.getToRecord() + ". ";

		if(this.recordsPerPage != this.totalRecordsAvailable)
		{
			navText += "[";

			if(this.isFirstPageAvailable())
			{
				navText += "<a href='#' onclick=\""+this.tableCacheName+".firstPage('"+this.tableID+"');\">First</a>";
			}
			else
			{
				navText += "First";
			}

			navText += "/";

			if(this.isPreviousPageAvailable())
			{
				navText += "<a href='#' onclick=\""+this.tableCacheName+".previousPage('"+this.tableID+"');\">Prev</a>";
			}
			else
			{
				navText += "Prev";
			}

			navText += "]";


			// lists for page number range [1, 2, 3, 4 | 3, 4, 5, 6, 7, 8]
			var pages = new ArrayList();

		//	if(this.pageRange)
		//	{
		/*
				if((this.page == 1) || (this.page <= this.pageRange))
				{
					alert("(this.page == 1) || (this.page <= this.pageRange)");
				}
				else if((this.page > 1) && (this.page <= this.pageRange))
				{
					alert("(this.page > 1) && (this.page <= this.pageRange)");
				}
				else if(((this.page < this.totalPagesAvailable) && ((this.page+this.pageRange) <= this.totalPagesAvailable)) ||
							(this.page >= this.totalPagesAvailable))
				{
					alert("page < total pages and page+pageRange <= total pages  or  page >= total pages");
				}
			}
			else
			{
		*/
				for(var i=1;i<=this.totalPagesAvailable;i++)
				{
					pages.add(i);
				}
		//	}

			pages.inject(0, function(_accumulator, _pageNumber, _index)
			{
				if(me.page == _pageNumber)
				{
					navText += " "+_pageNumber;
				}
				else
				{
					navText += " <a href='#' onclick=\""+me.tableCacheName+".goToPage('"+me.tableID+"', "+_pageNumber+");\">"+_pageNumber+"</a>";
				}

				if(_index < pages.length-1)
				{
					navText += ","
				}
				else
				{
					navText += " ";
				}
			});

			navText += "[";

			if(this.isNextPageAvailable())
			{
				navText += "<a href='#' onclick=\""+this.tableCacheName+".nextPage('"+this.tableID+"');\">Next</a>";
			}
			else
			{
				navText += "Next";
			}

			navText += "/";

			if(this.isLastPageAvailable())
			{
				navText += "<a href='#' onclick=\""+this.tableCacheName+".lastPage('"+this.tableID+"');\">Last</a>";
			}
			else
			{
				navText += "Last";
			}

			navText += "]";
		}

		Element.getElement(this.tableID+"_nav").innerHTML = navText;
	}

	instance sort(_link, _sortType)
	{
		var span = _link.getElementsByTagName('span')[0];
		var td = Element.getParent(_link,'td');
		var cellIndex = td.cellIndex;
		var table = Element.getParent(td,'table');

		if (table.rows.length <= 1) return;

		var arrow;
		var sortDesc = false;
		if (span.getAttribute('sortdir') == 'up')
		{
			span.setAttribute('sortdir','down');
			arrow = '&darr;';
			sortDesc = true;
		}
		else
		{
			span.setAttribute('sortdir','up');
			arrow = '&uarr;';
		}

		var sortFunc = null;

		if(_sortType == "none")
		{
			return;
		}

		// if there isn't a sort specified, choose one based off the data
		if(_sortType == "-1")
		{
			var itm = Element.getInnerText(table.rows[1].cells[cellIndex]);

			// if itm is empty, return
			if(!itm)
			{
				return;
			}

			if(itm.match(/^\d\d[\/-]\d\d[\/-]\d\d\d\d$/))
			{
				_sortType = "date";
			}
			else if(itm.match(/^\d\d[\/-]\d\d[\/-]\d\d$/))
			{
				_sortType = "date";
			}
			else if(itm.match(/^[£$E]/))
			{
				_sortType = "currency";
			}
			else if(itm.match(/^[\d\.]+$/))
			{
				_sortType = "number";
			}
			else
			{
				_sortType = "string_i";
			}
		}

		switch(_sortType)
		{
			case "string_i":
				sortFunc = new TableCellStringComparator(cellIndex, sortDesc, true).compare;
				break;
			case "date":
				sortFunc = new TableCellDateComparator(cellIndex, sortDesc).compare;
				break;
			case "currency":
				sortFunc = new TableCellCurrencyComparator(cellIndex, sortDesc).compare;
				break;
			case "number":
				sortFunc = new TableCellNumericComparator(cellIndex, sortDesc).compare;
				break;
			default:
				sortFunc = new TableCellStringComparator(cellIndex, sortDesc, false).compare;
		}

		var newRows = [];
		var sortbottomRows = []
		for (var i=1;i<table.rows.length;i++)
		{
			newRows[i-1] = table.rows[i];
		}
		newRows.sort(sortFunc);

		// We appendChild rows that already exist to the tbody, so it moves them
		// rather than creating new ones. don't do sortbottom rows
		for (var i=0;i<newRows.length;i++)
		{
			if (!newRows[i].className || (newRows[i].className && (newRows[i].className.indexOf('sortbottom') == -1)))
			{
				table.tBodies[0].appendChild(newRows[i]);
			}
			else if(newRows[i].className && (newRows[i].className.indexOf('sortbottom') > -1))
			{
				sortbottomRows[sortbottomRows.length] = newRows[i];
			}
		}

		// do sortbottom rows only
		for (var i=0;i<sortbottomRows.length;i++)
		{
			table.tBodies[0].appendChild(sortbottomRows[i]);
		}

		// Delete any other arrows that may be showing
		var tr = table.getElementsByTagName('tr')[0];
		var tds = tr.getElementsByTagName('td');
		for (var i=0;i<tds.length;i++)
		{
			var headerSPAN = tds[i].getElementsByTagName('span')[0];
			if(headerSPAN!=null)
			{
				headerSPAN.innerHTML = '';
				if (span !== headerSPAN)
				{
					headerSPAN.removeAttribute('sortdir');
				}
			}
		}
		span.innerHTML = arrow;

		this.goToPage(1);
		this.setRecordIDs(1, this.totalRecordsAvailable);
		this.hideRecords(1, this.totalRecordsAvailable);
		this.renderPage();
	}

}
