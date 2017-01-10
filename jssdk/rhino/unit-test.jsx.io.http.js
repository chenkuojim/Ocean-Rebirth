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

load("bootstrap.js");

ClassLoader.loadClass("jsx.tunit.framework.*");
ClassLoader.loadClass("jsx.tunit.runner.*");
ClassLoader.loadClass("jsx.tunit.textui.*");

ClassLoader.loadClass("test.jsx.io.http.*");
new jsx.tunit.textui.TestRunner(print).runSuite(test.jsx.io.http.HttpTests.klass);
