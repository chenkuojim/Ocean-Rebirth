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

package test.jsx.lang;

import jsx.collections.ArrayList;
import jsx.collections.HashMap;
import jsx.lang.util.EqualsBuilder;
import jsx.lang.util.ToStringBuilder;

class MyObjectTest
{

    MyObjectTest.NAME = "MYOBJECTTEST";

    MyObjectTest(_value)
    {
    	this.name = _value;
    	this.prop1 = "One";
    	this.prop2 = "Two";
    	this.prop3 = "Three";

		this.list = new ArrayList();
		this.list.add("one");
		this.list.add("two");

		this.map = new HashMap();
		this.map.put("one", "one");
		this.map.put("two", "two");
    }

	instance equals(_object)
	{
		return new EqualsBuilder()
					.append(this.name, _object.name)
					.append(this.prop1, _object.prop1)
					.append(this.prop2, _object.prop2)
					.append(this.prop3, _object.prop3)
					.append(this.list, _object.list)
					.append(this.map, _object.map)
					.getEquals();
	}

	instance toString()
	{
		return new ToStringBuilder(this.getClass().getName())
					.append(this.name, "name")
					.append(this.prop1, "prop1")
					.append(this.prop2, "prop2")
					.append(this.prop3, "prop3")
					.append(this.list, "list")
					.append(this.map, "map")
					.getString();
	}

}
