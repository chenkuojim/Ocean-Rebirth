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

import test.jsx.TestBase;

class StringTest extends TestBase
{

   	StringTest()
   	{
	}

    instance setUp()
    {
    	super.setUp();
    	this.str = "This is a test";
    }

    instance tearDown()
    {
		super.tearDown();
		this.str = null;
    }

	instance testEach()
	{
		var me = this;
		var part1, part2, part3, part4;
		this.str.each(" ", function(_value, _index)
		{
			switch(_index)
			{
				case 0:
					part1 = _value;
					break;
				case 1:
					part2 = _value;
					break;
				case 2:
					part3 = _value;
					break;
				case 3:
					part4 = _value;
					break;
				default:
					me.fail("could not handle index: " + _index + " with value: " + _value);
			}
		});

		this.assertTrue("This".equals(part1));
		this.assertTrue("is".equals(part2));
		this.assertTrue("a".equals(part3));
		this.assertTrue("test".equals(part4));
	}

	instance testTrim()
	{
		this.str = "    space    ";
		this.assertTrue("space".equals(this.str.trim()));
	}

	instance testEscapeHTML()
	{
		this.str = "this is < that and > that so & you and take \" and take \'";
		this.assertTrue(this.str.indexOf("&") > -1);
		this.assertTrue(this.str.indexOf("<") > -1);
		this.assertTrue(this.str.indexOf(">") > -1);
//		this.assertTrue(this.str.indexOf('"') > -1);
//		this.assertTrue(this.str.indexOf("'") > -1);

		this.str = this.str.escapeHTML();
		this.assertTrue(this.str.indexOf("& ") == -1);
		this.assertTrue(this.str.indexOf("<") == -1);
		this.assertTrue(this.str.indexOf(">") == -1);
//		this.assertTrue(this.str.indexOf('"') == -1);
//		this.assertTrue(this.str.indexOf("'") == -1);
	}

	instance testUnescapeHTML()
	{
		this.str = "this is &lt; that and &gt; that so &amp; you and take &quot; and take &apos;";
		this.assertTrue(this.str.indexOf("& ") == -1);
		this.assertTrue(this.str.indexOf("<") == -1);
		this.assertTrue(this.str.indexOf(">") == -1);
//		this.assertTrue(this.str.indexOf('"') == -1);
//		this.assertTrue(this.str.indexOf("'") == -1);

		this.str = this.str.unescapeHTML();
		this.assertTrue(this.str.indexOf("&") > -1);
		this.assertTrue(this.str.indexOf("<") > -1);
		this.assertTrue(this.str.indexOf(">") > -1);
//		this.assertTrue(this.str.indexOf('"') > -1);
//		this.assertTrue(this.str.indexOf("'") > -1);
	}

	instance testStartsWith()
	{
		this.assertTrue(this.str.startsWith("This i"));
		this.assertFalse(this.str.startsWith(" test"));
	}

	instance testEndsWith()
	{
		this.assertTrue(this.str.endsWith(" test"));
		this.assertFalse(this.str.endsWith("This i"));
	}

	instance testReverse()
	{
		this.assertTrue("tset a si sihT".equals(this.str.reverse()));
	}

	instance testTruncate()
	{
		this.assertTrue("This ".equals(this.str.truncate(5)));
	}

	instance testCapitalize()
	{
		this.assertTrue(this.str.equals("this is a test".capitalize()));
	}

	instance testCamelCase()
	{
		this.assertTrue("backgroundImage".equals("background-image".camelCase()));
		this.assertTrue("backgroundImage".equals("-background-image".camelCase()));
		this.assertTrue("backgroundImage".equals("background-image-".camelCase()));
		this.assertTrue("backgroundImage".equals("-background-image-".camelCase()));

		this.assertTrue("backgroundImage".equals("background_image".camelCase()));
		this.assertTrue("backgroundImage".equals("_background_image".camelCase()));
		this.assertTrue("backgroundImage".equals("background_image_".camelCase()));
		this.assertTrue("backgroundImage".equals("_background_image_".camelCase()));
	}

	instance testHyphenCase()
	{
		this.assertTrue("background-image".equals("backgroundImage".hyphenCase()));
	}

	instance testSnakeCase()
	{
		this.assertTrue("background_image".equals("backgroundImage".snakeCase()));
	}

	instance testIsUpperCase()
	{
		this.assertTrue("THIS IS A TEST".isUpperCase());
		this.assertFalse(this.str.isUpperCase());

		this.assertTrue("A".isUpperCase());
		this.assertFalse("a".isUpperCase());
	}

	instance testIsLowerCase()
	{
		this.assertTrue("this is a test".isLowerCase());
		this.assertFalse(this.str.isLowerCase());

		this.assertFalse("A".isLowerCase());
		this.assertTrue("a".isLowerCase());
	}

	instance testIsBlank()
	{
		this.assertTrue("".isBlank());
		this.assertTrue(" ".isBlank());
		this.assertTrue("      ".isBlank());
		this.assertTrue("\n".isBlank());
		this.assertTrue("\t".isBlank());
		this.assertTrue("\r".isBlank());
		this.assertFalse("    a    ".isBlank());
	}

}
