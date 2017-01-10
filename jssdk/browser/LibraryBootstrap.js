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

var Environment = new runtime.Environment($JSRE_CONFIG, $JSRE_LOCATION);
var ClassTransporter = new runtime.ClassTransporter(Environment.getClassPath(), Environment.getApplicationPath());
var PreProcessor = new runtime.PreProcessor(ClassTransporter);
var ClassLoader = new runtime.ClassLoader(ClassTransporter, PreProcessor);

var Minimizer = new runtime.Minimizer();

// Load all Classes here that you want available immediately for runtime
ClassLoader.loadClass("jsx.lang.*");
ClassLoader.loadClass("jsx.event.*");
ClassLoader.loadClass("jsx.dom.*");

// this will fix memory leaks in IE
var globalObjectEventDispatcher = new jsx.event.EventDispatcher($GLOBAL_OBJECT, "onunload");
globalObjectEventDispatcher.addListener(function()
{
	jsx.event.EventDispatcher.clearListeners();
});