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

import jsx.ui.tree.Node;
import jsx.event.Event;
import jsx.dom.*;

class Tree
{

	Tree(aItems, aNodeID, aElementID, aTreeCacheName)
	{
		this.items = aItems;
		this.nodeID = aNodeID;
		this.containerID = aElementID;
		this.treeCacheName = aTreeCacheName;

		this.root = this;
		this.depth = -1;

		this.selected_node = null;

		// flat cache for all nodes
		this.allNodes = [];

		// immediate children for the tree
		this.children = [];

		for(var i=0;i<this.items.length;i++)
		{
			new Node(this, i);
		}

		var html = [];
		for(var i=0;i<this.children.length;i++)
		{
			html[i] = this.children[i].buildHTML();
		}

		this.html = html.join('');
		Element.getElement(this.containerID).innerHTML = this.html;
	}

	instance __updateItems__(aNode)
	{
		if(!this.selected_node)
		{
			return;
		}

		var nodeToFind = this.selected_node;
		var found = false;
		var traverseItems = function(aItems, aDepth)
		{
			if(aItems.length > 2)
			{
				// node has childern
				if(found)
				{
					return;
				}

				for (var i=2; i<aItems.length; i++)
				{
					if(nodeToFind.caption == aItems[0] &&
						nodeToFind.depth == aDepth)
					{
						aItems[aItems.length] = aNode;
						found = true;
						break;
					}

					aDepth++;
					traverseItems(aItems[i], aDepth);
					aDepth--;
				}
			}
			else
			{
				if(found)
				{
					return;
				}

				if(nodeToFind.caption == aItems[0] &&
					nodeToFind.depth == aDepth)
				{
					aItems[aItems.length] = aNode;
					found = true;
				}
			}
		};

		// traverse down the original data to find the node to add a new node into
		var depth = 0;
		for(var i=0;i<this.items.length;i++)
		{
			traverseItems(this.items[i], depth);
		}

		return this.items;
	}

	instance toggle(aNodeID)
	{
		var node = this.allNodes[aNodeID];
		if(node.opened)
		{
			node.close();
			node.executeCallBackForClose();
		}
		else
		{
			node.open();
			node.executeCallBackForOpen();
		}
	}

	instance expandAll()
	{
		for(var i=0;i<this.allNodes.length;i++)
		{
			this.allNodes[i].open();
		}
	}

	instance collapseAll()
	{
		for(var i=0;i<this.allNodes.length;i++)
		{
			this.allNodes[i].close();
		}
	}

	instance selectNode(aNodeID)
	{
		var node = this.allNodes[aNodeID];
		node.select();
		node.executeCallBackForSelect();
	}

	instance moveSelected(aEvent)
	{
		if(aEvent.keyCode == Event.KEY_UP)
		{
			if(!this.selected_node.depth && !this.selected_node.nodeID)
			{
				return;
			}

			if(!this.selected_node.index)
			{
				this.selected_node.parent.select();
			}
			else
			{
				this.selected_node.parent.children[this.selected_node.index - 1].select();
			}
		}
		else if(aEvent.keyCode == Event.KEY_DOWN)
		{
			if(this.selected_node.isLeaf())
			{
				// if node has no children, not open, and nodeID < all nodes, select next node
				if(!this.selected_node.children.length &&
					!this.selected_node.opened &&
					(this.selected_node.nodeID < (this.root.allNodes.length-1)))
				{
					this.root.allNodes[this.selected_node.nodeID + 1].select();
					return;
				}

	/*				// scrap
				if(!this.selected_node.opened && (this.selected_node.nodeID < (this.root.allNodes.length-1)))
				{
					this.root.allNodes[this.selected_node.nodeID + 1].select();
					return;
				}

				if(!this.selected_node.children.length || !this.selected_node.opened)
				{
					return;
				}

				if(this.selected_node.children.length &&
					!this.selected_node.opened &&
					this.selected_node.depth &&
					(this.selected_node.index < (this.selected_node.parent.children.length-1)))
				{
					this.selected_node.parent.children[this.selected_node.index + 1].select();
					return;
				}
	*/
			}

			if(this.selected_node.children.length && this.selected_node.opened)
			{
				this.selected_node.children[0].select();
				return;
			}

			if(this.selected_node.index < (this.selected_node.parent.children.length-1))
			{
				this.selected_node.parent.children[this.selected_node.index + 1].select();
			}
		}
		else if(aEvent.keyCode == Event.KEY_LEFT)
		{
			if(!this.selected_node.children.length || !this.selected_node.opened)
			{
				this.selected_node.parent.select();
				return;
			}

			this.selected_node.close();
		}
		else if(aEvent.keyCode == Event.KEY_RIGHT)
		{
			if(!this.selected_node.children.length || this.selected_node.opened)
			{
				return;
			}

			this.selected_node.open();
		}
	}

}
