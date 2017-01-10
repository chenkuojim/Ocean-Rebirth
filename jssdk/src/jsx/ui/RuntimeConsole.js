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

package jsx.ui;

import jsx.lang.Class;
import jsx.ui.tree.Trees;

import jsx.dom.behavior.Draggable;

class RuntimeConsole mixin Draggable
{

	RuntimeConsole.DIV_ID = "runtime-console";

	RuntimeConsole()
	{
		this.runtime_trees = new Trees("rc.runtime_trees");

		var sortfunc = function(_a, _b)
		{
			var a = _a.getName();
			var b = _b.getName();
			var comp;
			if(a < b) comp = -1;
			if(a == b) comp = 0;
			if(a > b) comp = 1;
			return comp;
		}

		var rc_tree = [];

		rc_tree[0] = ['Classes', null];
		var classesRootNode = rc_tree[0];

		var packages = {};

		Class.CLASSES.sort();
		for(var i=0;i < Class.CLASSES.length;i++)
		{
			var clazz = Class.forName(Class.CLASSES[i]);
			var pakage = clazz.getPackage();
			var pakageName = pakage.getName();
			if(!pakageName) pakageName = "jsx.lang";
			if(!(pakageName in packages))
			{
				var classesRootNodeLength = classesRootNode.length;

				classesRootNode[classesRootNodeLength] = [pakageName, null];
				var pakageNode = classesRootNode[classesRootNodeLength];
				var pakageNodeLength = pakageNode.length;

				var pakageClasses = pakage.getClasses();
				pakageClasses.sort(sortfunc);
				for(var i=0;i<pakageClasses.length;i++)
				{
					var clazz = pakageClasses[i];
					var className = clazz.getName();
					if(className)
					{
						var className = className.substring((className.lastIndexOf(".")+1), className.length);
					}

					pakageNode[pakageNodeLength] = [className, null];
					var classNode = pakageNode[pakageNodeLength];
					var classNodeLength = classNode.length;

					// superclass
					var superClass = clazz.getSuperclass();
					if(superClass && !superClass.getName().equals("Object"))
					{
						classNode[classNodeLength] = ["Super Class", null];
						var classSuperClassNode = classNode[classNodeLength];
						classNodeLength++;
						var classSuperClassNodeLength = classSuperClassNode.length;
						classSuperClassNode[classSuperClassNodeLength] = [superClass.getName(), null];
					}

					// interfaces
					var classInterfaces = clazz.getInterfaces();
					classInterfaces.sort(sortfunc);
					if(classInterfaces.length > 0)
					{
						classNode[classNodeLength] = ["Interfaces", null];
						var classInterfacesNode = classNode[classNodeLength];
						classNodeLength++;
						var classInterfacesNodeLength = classInterfacesNode.length;
						for(var j=0;j<classInterfaces.length;j++)
						{
							classInterfacesNode[classInterfacesNodeLength] = [classInterfaces[j].getName(), null];
							classInterfacesNodeLength++;
						}
					}

					// mixins
					var classMixins = clazz.getMixins();
					classMixins.sort(sortfunc);
					if(classMixins.length > 0)
					{
						classNode[classNodeLength] = ["Mixins", null];
						var classMixinsNode = classNode[classNodeLength];
						classNodeLength++;
						var classMixinsNodeLength = classMixinsNode.length;
						for(var j=0;j<classMixins.length;j++)
						{
							classMixinsNode[classMixinsNodeLength] = [classMixins[j].getName(), null];
							classMixinsNodeLength++;
						}
					}

					// fields
					var classFields = clazz.getDeclaredFields();
					classFields.sort(sortfunc);
					if(classFields.length > 0)
					{
						classNode[classNodeLength] = ["Fields", null];
						var classFieldsNode = classNode[classNodeLength];
						classNodeLength++;
						var classFieldsNodeLength = classFieldsNode.length;
						for(var j=0;j<classFields.length;j++)
						{
							var msg = classFields[j].isStatic() ? " :static" : " :instance";
							classFieldsNode[classFieldsNodeLength] = [classFields[j].getName() + " " + msg, null];
							classFieldsNodeLength++;
						}
					}

					// methods
					var classMethods = clazz.getDeclaredMethods();
					classMethods.sort(sortfunc);
					if(classMethods.length > 0)
					{
						classNode[classNodeLength] = ["Methods", null];
						var classMethodsNode = classNode[classNodeLength];
						classNodeLength++;
						var classMethodsNodeLength = classMethodsNode.length;
						for(var j=0;j<classMethods.length;j++)
						{
							var msg = classMethods[j].isStatic() ? " :static" : " :instance";
							classMethodsNode[classMethodsNodeLength] = [classMethods[j].getName() + " " + msg, null];
							var methodNode = classMethodsNode[classMethodsNodeLength];

							var methodIndex = 2;
							var methodParameters = classMethods[j].getParameters();
							if(methodParameters.length)
							{
								methodNode[methodIndex++] = ["arguments", null, [methodParameters.toString(), null]];
							}

							methodNode[methodIndex] = ["body", null, ["<pre style='background:#000;color:#fff;margin:15px 10px 0px 10px'><br/>"+classMethods[j].getBody().escapeHTML()+"</pre>", null]];

							classMethodsNodeLength++;
						}
					}

					// warnings
					var warnings = clazz.getWarnings();
					if(warnings && warnings.length)
					{
						classNode[classNodeLength] = ["Warnings", null];
						var classWarningsNode = classNode[classNodeLength];
						classNodeLength++;
						var classWarningsNodeLength = classWarningsNode.length;
						for(var j=0;j<warnings.length;j++)
						{
							classWarningsNode[classWarningsNodeLength] = [warnings[j], null];
							classWarningsNodeLength++;
						}
					}

					// needs to be here
					pakageNodeLength++;
				}

				packages[pakageName] = {};
			}
		}

		this.container = document.createElement("div");
		this.container.id = RuntimeConsole.DIV_ID;

		var containerStyle = this.container.style;
		containerStyle.backgroundColor = "#cccccc";
		containerStyle.border = "1px solid #000000";
		containerStyle.position = "absolute";
		containerStyle.zIndex = "10";
		containerStyle.top = "10px";
		containerStyle.left = "10px"

		var treeElement = document.createElement("div");
		treeElement.id = "rc-trees";

		this.container.appendChild(treeElement);

		document.getElementsByTagName("body")[0].appendChild(this.container);

		this.runtime_trees.addTree(rc_tree, "rc-trees");

		this.initDraggable(this.container);
	}

	instance getContainerId()
	{
		return RuntimeConsole.DIV_ID;
	}

}
