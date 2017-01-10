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

import jsx.collections.ArrayList;
import test.jsx.TestBase;

class CollectionTest extends TestBase
{

   	CollectionTest()
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

    	this.list = new ArrayList();
		this.list.add({name:"One",id:1,toString:function(){return "One: 1"},equals:equalsFunction,talk:talkFunction});
		this.list.add({name:"Two",id:2,toString:function(){return "Two: 2"},equals:equalsFunction,talk:talkFunction});
		this.list.add({name:"Three",id:3,toString:function(){return "Three: 3"},equals:equalsFunction,talk:talkFunction});
		this.list.add({name:"Four",id:4,toString:function(){return "Four: 4"},equals:equalsFunction,talk:talkFunction});
		this.list.add({name:"Five",id:5,toString:function(){return "Five: 5"},equals:equalsFunction,talk:talkFunction});
		this.list.add({name:"Six",id:6,toString:function(){return "Six: 6"},equals:equalsFunction,talk:talkFunction});
		this.list.add({name:"Seven",id:7,toString:function(){return "Seven: 7"},equals:equalsFunction,talk:talkFunction});
		this.list.add({name:"Eight",id:8,toString:function(){return "Eight: 8"},equals:equalsFunction,talk:talkFunction});
		this.list.add({name:"Nine",id:9,toString:function(){return "Nine: 9"},equals:equalsFunction,talk:talkFunction});
		this.list.add({name:"Ten",id:10,toString:function(){return "Ten: 10"},equals:equalsFunction,talk:talkFunction});
    }

    instance tearDown()
    {
		super.tearDown();

		this.list = null;
    }

}
