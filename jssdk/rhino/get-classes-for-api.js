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

ClassLoader.loadClass("jsx.collections.*");
ClassLoader.loadClass("jsx.collections.comparators.*");

ClassLoader.loadClass("jsx.dom.*");
ClassLoader.loadClass("jsx.dom.behavior.draggable.*");
ClassLoader.loadClass("jsx.dom.behavior.dockable.*");

ClassLoader.loadClass("jsx.event.*");

ClassLoader.loadClass("jsx.io.http.*");

ClassLoader.loadClass("jsx.lang.*");
ClassLoader.loadClass("jsx.lang.util.*");

ClassLoader.loadClass("jsx.logging.*");

ClassLoader.loadClass("jsx.tunit.framework.*");
ClassLoader.loadClass("jsx.tunit.runner.*");
ClassLoader.loadClass("jsx.tunit.htmlgui.*");
ClassLoader.loadClass("jsx.tunit.textui.*");

ClassLoader.loadClass("jsx.util.scheduler.*");
ClassLoader.loadClass("jsx.util.session.*");