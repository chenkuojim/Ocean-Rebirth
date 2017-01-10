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

import jsx.collections.ArrayStack;
import test.jsx.collections.CollectionTest;

class ArrayStackTest extends CollectionTest
{

   	ArrayStackTest()
   	{
	}

    instance setUp()
    {
		super.setUp();
		this.stack = new ArrayStack(this.list);
    }

    instance tearDown()
    {
		super.tearDown();
		this.stack = null;
    }

	instance testCreation()
	{
		this.assertTrue(this.stack.size() == 10);

		this.stack.each(function(_value, _index)
		{
//			console.log(_value.id)
		});
	}

	instance testEmpty()
	{
		this.assertFalse(this.stack.empty());
		this.stack.clear();
		this.assertTrue(this.stack.empty());
	}

	instance testPeek()
	{
		var object = this.stack.get(9);
		var object2 = this.stack.peek();

		this.assertTrue(object.equals(object2));
		this.assertTrue(this.stack.size() == 10);
	}

	instance testPop()
	{
		var object = this.stack.get(9);
		var object2 = this.stack.pop();

		this.assertTrue(object.equals(object2));
		this.assertTrue(this.stack.size() == 9);
	}

	instance testPush()
	{
		var object = 1;
		var object2 = 2;

		this.stack.push(object);
		this.assertTrue(this.stack.size() == 11);
		this.stack.push(object2);
		this.assertTrue(this.stack.size() == 12);

		var tmpObject2 = this.stack.pop();
		this.assertTrue(object2.equals(tmpObject2));
		this.assertTrue(this.stack.size() == 11);

		var tmpObject = this.stack.pop();
		this.assertTrue(object.equals(tmpObject));
		this.assertTrue(this.stack.size() == 10);
	}

	instance testSearch()
	{
		var index = 9;
		var object = this.stack.get(index);

		var index2 = this.stack.search(object);

		this.assertTrue(index2 == 1);
	}

}
