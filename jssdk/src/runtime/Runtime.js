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

// global object if one is not already set
if(!this.$GLOBAL_OBJECT){$GLOBAL_OBJECT = this;}

// these are defaults
this.$OFFLINE_CP		= "../src/";
this.$ONLINE_CP			= "../src/";
this.$SRC_DIR			= "src";
this.$OUTPUT_DIR		= "output";
this.$PERSIST_CLASSES	= false;
this.$SINGLE_FILE		= false;
this.$MINIMIZE			= false;
this.$INCLUDE_TESTS		= false;

if(!$GLOBAL_OBJECT.location)
{
	$GLOBAL_OBJECT.location = {};
	$GLOBAL_OBJECT.location.protocol	= "";
	$GLOBAL_OBJECT.location.hostname	= "";
	$GLOBAL_OBJECT.location.port		= "";
	$GLOBAL_OBJECT.location.pathname	= "";
	$GLOBAL_OBJECT.location.search		= "";
}
this.$PROTOCOL			= $GLOBAL_OBJECT.location.protocol;
this.$HOST_NAME			= $GLOBAL_OBJECT.location.hostname;
this.$PORT				= $GLOBAL_OBJECT.location.port;
this.$PATH_NAME			= $GLOBAL_OBJECT.location.pathname;
this.$SEARCH			= $GLOBAL_OBJECT.location.search;

// see if objects and values have not been already set, then use defaults
if(!this.$JSRE_CONFIG){$JSRE_CONFIG = {};}
if(!this.$JSRE_LOCATION){$JSRE_LOCATION = {};}

if(!$JSRE_CONFIG["offlineCP"])		$JSRE_CONFIG["offlineCP"]		= this.$OFFLINE_CP;
if(!$JSRE_CONFIG["onlineCP"])		$JSRE_CONFIG["onlineCP"]		= this.$ONLINE_CP;
if(!$JSRE_CONFIG["srcDir"])			$JSRE_CONFIG["srcDir"]			= this.$SRC_DIR;
if(!$JSRE_CONFIG["outputDir"])		$JSRE_CONFIG["outputDir"]		= this.$OUTPUT_DIR;
if(!$JSRE_CONFIG["persistClasses"])	$JSRE_CONFIG["persistClasses"]	= this.$PERSIST_CLASSES;
if(!$JSRE_CONFIG["singleFile"])		$JSRE_CONFIG["singleFile"]		= this.$SINGLE_FILE;
if(!$JSRE_CONFIG["minimize"])		$JSRE_CONFIG["minimize"]		= this.$MINIMIZE;
if(!$JSRE_CONFIG["includeTests"])	$JSRE_CONFIG["includeTests"]	= this.$INCLUDE_TESTS;

if(!$JSRE_LOCATION["pathName"])		$JSRE_LOCATION["pathName"]		= this.$PATH_NAME;
if(!$JSRE_LOCATION["protocol"])		$JSRE_LOCATION["protocol"]		= this.$PROTOCOL;
if(!$JSRE_LOCATION["hostName"])		$JSRE_LOCATION["hostName"]		= this.$HOST_NAME;
if(!$JSRE_LOCATION["port"])			$JSRE_LOCATION["port"]			= this.$PORT;
if(!$JSRE_LOCATION["search"])		$JSRE_LOCATION["search"]		= this.$SEARCH;

// namespace object for Runtime Util Methods
runtime = {};
runtime.trimString = function(_str)
{
	return _str.replace(/^\s+/, '').replace(/\s+$/, '');
}
runtime.findIndexInArray = function(_object, _array)
{
	for(var i=0;i<_array.length;i++)
		if(_array[i] == _object) return i;
	return -1;
}
runtime.show = function(_value)
{
	if($GLOBAL_OBJECT.alert){$GLOBAL_OBJECT.alert(_value);}
	else if(print){print(_value);}
}