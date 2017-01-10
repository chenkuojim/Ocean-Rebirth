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

package jsx.ui.tree;

import jsx.collections.ArrayList;
import jsx.ui.tree.Tree;
import jsx.dom.*;

class Trees
{

//TODO - need API for CSS
	document.write("<link rel='stylesheet' type='text/css' href='../"+$JSRE_CONFIG.srcDir+"/jsx/ui/tree/resources/tree.css' />");

	Trees(aName)
	{
		this.treeCache = new ArrayList();
		this.cacheName = aName;
	}

	instance addTree(aItems, aElementID)
	{
		this.treeCache.add(new Tree(aItems, this.treeCache.size(), aElementID, this.cacheName));
	}

	instance addNode(aTreeIndex, aNode)
	{
		this.addNodes(aTreeIndex, [aNode]);
	}

	instance addNodes(aTreeIndex, aNodes)
	{
		var tree = this.treeCache.get(aTreeIndex);

		var selectedNodeID = tree.selected_node.nodeID;
		var nodeId = tree.nodeID;
		var containerID = tree.containerID;

		// add the nodes and get the new items
		var newItems;
		for(var i=0;i<aNodes.length;i++)
		{
			newItems = tree.__updateItems__(aNodes[i]);
		}

		// find the currently open nodes
		var oldOpenNodes = [];
		for(var i=0;i<tree.allNodes.length;i++)
		{
			if(tree.allNodes[i].opened)
			{
				oldOpenNodes[oldOpenNodes.length++] =
					{
						caption: tree.allNodes[i].caption,
						depth: tree.allNodes[i].depth
					};
			}
		}

		// redraw the tree
		tree = new Tree(newItems, nodeId, containerID, this.cacheName);
		Element.getElement(containerID).innerHTML = tree.html;

		// need to replace the old tree
		this.treeCache.set(aTreeIndex, tree);

		// open up the old nodes
		for(var i=0;i<oldOpenNodes.length;i++)
		{
			for(var j=0;j<tree.allNodes.length;j++)
			{
				if(oldOpenNodes[i].caption == tree.allNodes[j].caption && oldOpenNodes[i].depth == tree.allNodes[j].depth)
				{
					tree.allNodes[j].open();
				}
			}
		}

		// select and open the old selected node
		var node = tree.allNodes[selectedNodeID];
		node.select();
		node.open();
	}

}
