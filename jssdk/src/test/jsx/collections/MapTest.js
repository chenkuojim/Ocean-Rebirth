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

package test.jsx.collections;

import jsx.collections.HashMap;
import test.jsx.TestBase;

class MapTest extends TestBase
{

   	MapTest()
   	{
	}

    instance setUp()
    {
    	super.setUp();

		var equalsFunction = function(_object)
		{
			if(this === _object)
			{
				return true;
			}
			if(!this.getClass().isInstance(_object))
			{
				return false;
			}

			return this.name.equals(_object.name);
		}

		var talkFunction = function(_word)
		{
			return _word +" "+this.name;
		}

    	this.map = new HashMap();
		this.map.put("One", {name:"One",id:1,toString:function(){return "One: 1"},equals:equalsFunction,talk:talkFunction});
		this.map.put("Two", {name:"Two",id:2,toString:function(){return "Two: 2"},equals:equalsFunction,talk:talkFunction});
		this.map.put("Three", {name:"Three",id:3,toString:function(){return "Three: 3"},equals:equalsFunction,talk:talkFunction});
		this.map.put("Four", {name:"Four",id:4,toString:function(){return "Four: 4"},equals:equalsFunction,talk:talkFunction});
		this.map.put("Five", {name:"Five",id:5,toString:function(){return "Five: 5"},equals:equalsFunction,talk:talkFunction});
		this.map.put("Six", {name:"Six",id:6,toString:function(){return "Six: 6"},equals:equalsFunction,talk:talkFunction});
		this.map.put("Seven", {name:"Seven",id:7,toString:function(){return "Seven: 7"},equals:equalsFunction,talk:talkFunction});
		this.map.put("Eight", {name:"Eight",id:8,toString:function(){return "Eight: 8"},equals:equalsFunction,talk:talkFunction});
		this.map.put("Nine", {name:"Nine",id:9,toString:function(){return "Nine: 9"},equals:equalsFunction,talk:talkFunction});
		this.map.put("Ten", {name:"Ten",id:10,toString:function(){return "Ten: 10"},equals:equalsFunction,talk:talkFunction});
    }

    instance tearDown()
    {
		super.tearDown();

		this.map = null;
    }

}
