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

import jsx.collections.List;
import jsx.collections.Map;
import jsx.collections.Enumerable;
import jsx.collections.AbstractCollection;
import jsx.collections.AbstractList;
import jsx.collections.AbstractMap;
import jsx.collections.ArrayList;
import jsx.collections.HashMap;
import test.jsx.TestBase;
import test.jsx.lang.MyObjectTest;

class ClassTest extends TestBase
{

   	ClassTest()
   	{
	}

    instance setUp()
    {
    	super.setUp();
		this.clazz = ArrayList.klass;
	}

    instance tearDown()
    {
		super.tearDown();
		this.clazz = null;
    }

	instance testGetName()
	{
		this.assertTrue(this.clazz.getName().equals(ArrayList.klass.getName()));
	}

	instance testGetSuperclass()
	{
		this.assertTrue(this.clazz.getSuperclass().equals(AbstractList.klass));
	}

	instance testGetFields()
	{
		var _object = new MyObjectTest();
		var fields = _object.getClass().getFields();

		this.assertTrue(fields.length == 2);
	}

	instance testGetField()
	{
		var _clazz = Math.klass;
		var fieldName = "PI";
		var field = _clazz.getField(fieldName);

		this.assertTrue(field.getName().equals(fieldName));
	}

	instance testGetDeclaredFields()
	{
		var _object = new MyObjectTest();
		var fields = _object.getClass().getDeclaredFields();

		this.assertTrue(fields.length == 2);
	}

	instance testGetDeclaredField()
	{
		var _object = [1];
		var fieldName = "length";
		var field = _object.getClass().getDeclaredField(fieldName);

		this.assertTrue(field != null);
	}

	instance testGetMethods()
	{
		var methods = this.clazz.getMethods();

		this.assertTrue(methods.length > 0)
	}

	instance testGetMethod()
	{
		var method = this.clazz.getMethod("isEmpty");

		this.assertTrue(method != null);

		this.assertTrue(method.invoke(new ArrayList(), []));
	}

	instance testGetDeclaredMethods()
	{
		var methods = this.clazz.getDeclaredMethods();

		this.assertTrue(methods.length == 9)
	}

	instance testGetDeclaredMethod()
	{
		var method = this.clazz.getMethod("add");

		this.assertTrue(method != null);

		this.assertTrue(method.invoke(new ArrayList(), [1]));
	}

	instance testConstructor()
	{
		var constr = this.clazz.getConstructor();

		var one = constr.newInstance();

		this.assertTrue(one != null);
		this.assertTrue(one.add(1));
		this.assertTrue(one.size() == 1);

		var two = constr.newInstance(one);
		this.assertTrue(two != null);
		this.assertTrue(two.size() == 1);

		this.assertTrue(one.size() == two.size());
	}

	instance testGetPackage()
	{
		var pakage = this.clazz.getPackage();

		this.assertTrue(pakage.getName().equals("jsx.collections"));

		var classes = pakage.getClasses();

		this.assertTrue(classes.length > 0);

/*
		//classes = Object.klass.getPackage().getClasses();
		for(var i=0;i<classes.length;i++)
		{
			console.log(classes[i].getName());
		}
*/
	}

	instance testNewInstance()
	{
		var one = this.clazz.newInstance();

		this.assertTrue(one != null);
		this.assertTrue(one.add(1));
		this.assertTrue(one.size() == 1);

		var two = this.clazz.newInstance(one);
		this.assertTrue(two != null);
		this.assertTrue(two.size() == 1);

		this.assertTrue(one.size() == two.size());
	}

	instance testGetClasses()
	{
		var classes = this.clazz.getClasses();

		this.assertTrue(classes.length == 2);
		this.assertTrue(classes[0].getName().equals("jsx.collections.AbstractList"));
	}

	instance testGetInterfaces()
	{
		var superClass = this.clazz.getSuperclass();
		var interfaces = superClass.getInterfaces();
		this.assertTrue(interfaces.length == 1);
		this.assertTrue(interfaces[0].getName().equals("jsx.collections.List"));
	}

	instance testMixin()
	{
		var superClass = this.clazz.getSuperclass(); // returns AbstractList
		var superSuperClass = superClass.getSuperclass(); // returns AbstractCollection
		var mixins = superSuperClass.getMixins();
		this.assertTrue(mixins.length == 1);
		this.assertTrue(mixins[0].getName().equals("jsx.collections.Enumerable"));
	}

	instance testIsChildOf()
	{
		this.assertTrue(this.clazz.isChildOf(new AbstractList()));
		this.assertFalse(this.clazz.isChildOf(new ArrayList()));
		this.assertFalse(this.clazz.isChildOf(new HashMap()));
	}

	instance testIsSuperOf()
	{
		this.assertTrue(AbstractList.klass.isSuperOf(new ArrayList()));
		this.assertFalse(this.clazz.isSuperOf(new AbstractList()));
		this.assertFalse(this.clazz.isSuperOf(new HashMap()));
	}

	instance testIsInstance()
	{
		this.assertTrue(ArrayList.klass.isInstance(new ArrayList()));
		this.assertTrue(ArrayList.klass.isInstance(new AbstractList()));
		this.assertFalse(ArrayList.klass.isInstance(new HashMap()));
	}

	instance testIsImplementing()
	{
		this.assertTrue(AbstractList.klass.isImplementing(List.klass));
		this.assertTrue(AbstractMap.klass.isImplementing(Map.klass));
		this.assertFalse(AbstractMap.klass.isImplementing(List.klass));
	}

	instance testIsMixingIn()
	{
		this.assertTrue(AbstractCollection.klass.isMixingIn(Enumerable.klass));
		this.assertTrue(AbstractMap.klass.isMixingIn(Enumerable.klass));
		this.assertFalse(AbstractList.klass.isMixingIn(Enumerable.klass));
	}

	instance testEquals()
	{
		this.assertTrue(this.clazz.equals(this.clazz));
		this.assertTrue(this.clazz.equals(ArrayList.klass));
		this.assertFalse(this.clazz.equals(AbstractList.klass));
		this.assertFalse(this.clazz.equals(HashMap.klass));
	}

	instance testRespondsTo()
	{
		this.assertTrue(this.clazz.newInstance().respondsTo("add"));
	}

}