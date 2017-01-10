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

import jsx.dom.*;

class Node
{

	Node(aParent, aIndex)
	{
		this.parent = aParent;
		this.index = aIndex;

		this.opened = false;

		this.root = this.parent.root;

		this.parent.children[this.index] = this;

		this.nodeID = this.root.allNodes.length;
		this.root.allNodes[this.nodeID] = this;

		this.uniqueID = this.root.nodeID + '_' + this.nodeID;
		this.anchorID = 'i_ahref' + this.uniqueID;
		this.childrenDivID = 'c_div' + this.uniqueID;
		this.joinImgID = 'j_img' + this.uniqueID;

		this.depth = this.parent.depth + 1;

		var index = this.index + (this.depth ? 2 : 0);
		this.items = this.parent.items[index];
		if (!this.items)
		{
			return;
		}

		// caption, link and callbacks
		this.caption = this.items[0];

		this.link = null;
		this.callbackForOpen = null;
		this.callbackForClose = null;
		this.callbackForSelect = null;
		if(this.items[1])
		{
			if(this.items[1].link)
			{
				this.link = this.items[1].link;
			}
			if(this.items[1].callbackForOpen)
			{
				this.callbackForOpen = this.items[1].callbackForOpen;
			}
			if(this.items[1].callbackForClose)
			{
				this.callbackForClose = this.items[1].callbackForClose;
			}
			if(this.items[1].callbackForSelect)
			{
				this.callbackForSelect = this.items[1].callbackForSelect;
			}
		}

		this.children = [];
		for (var i=0; i<this.items.length-2; i++)
		{
			new Node(this, i);
		}
	}

	instance buildHTML()
	{
		// collection of empty or line images
		var offset = [];
		// start off w/ "this" node's parent
		var current_node = this.parent;
		for (var i=this.depth; i>0; i--)
		{
			var divClass = Node.TREE_IMAGE_EMPTY;
			if(i!=1)
			{
				divClass = current_node.isLeaf() ? Node.TREE_IMAGE_EMPTY : Node.TREE_IMAGE_VLINE;
			}

			offset[i] = '<div class="' + Node.TREE_IMAGE +' ' + divClass + '"></div>';

			// walk up the tree
			current_node = current_node.parent;
		}

		var html = '<table class="'+Node.TREE_TABLE_ITEM+'" cellspacing="0" cellpadding="0"><tr><td>';
		html = html + offset.join('');

		if(this.children.length || !this.depth)
		{
			html = html + '<div'
						+ ' id="' + this.joinImgID + '"'
						+ ' class="' + Node.TREE_IMAGE +' ' + this.getCSSClass() + '"'
						+ ' onclick="'+this.root.treeCacheName+'.treeCache.get(' + this.root.nodeID + ').toggle(' + this.nodeID + ');"'
						+ '></div>';
		}
		else
		{
			html = html + '<div class="' + Node.TREE_IMAGE +' ' + this.getCSSClass() + '"></div>';
		}

		html = html + '<a href="' + ((this.link)?this.link:'javascript:;') +'"'
					+ ' id="' + this.anchorID +'"'
					+ ' class="'+Node.TREE_NODE+' '+Node.TREE_NODE_NOT_SELECTED+'"'
					+ ' onclick="'+this.root.treeCacheName+'.treeCache.get(' + this.root.nodeID + ').selectNode(' + this.nodeID + ');"'
					+ ' onkeydown="'+this.root.treeCacheName+'.treeCache.get(' + this.root.nodeID + ').moveSelected(event);"'
					+ '>';
		html = html + this.caption;// +' {nodeID: '+this.nodeID+ ', index:'+this.index+', depth: '+this.depth+'}';
		html = html + '</a></td></tr></table>';

		if(this.children.length)
		{
			html = html + '<div id="' + this.childrenDivID + '" style="display:none"></div>';
		}

		return html;
	}

	instance executeCallBackForOpen()
	{
		this.executeCallBack(this.callbackForOpen);
	}

	instance executeCallBackForClose()
	{
		this.executeCallBack(this.callbackForClose);
	}

	instance executeCallBackForSelect()
	{
		this.executeCallBack(this.callbackForSelect);
	}

	instance executeCallBack(aCallBack)
	{
		if(aCallBack)
		{
			// arguments for the call back
			// append 'this' node to the arguments so the call back can use it
			if(aCallBack.args)
			{
				aCallBack.args[aCallBack.args.length] = this;
			}
			// see if there is an object attached to the call back
			if(aCallBack.obj)
			{
				// is there is an object, use it
				if(aCallBack.args)
				{
					aCallBack.func.apply(aCallBack.obj, aCallBack.args);
				}
				else
				{
					aCallBack.func.apply(aCallBack.obj, [this]);
				}
			}
			else
			{
				// if there isn't an object, assume that the call back is a top level function
				// are there arguments for the function
				if(aCallBack.args)
				{
					aCallBack.func.apply(null, aCallBack.args);
				}
				else
				{
					aCallBack.func(this);
				}
			}
		}
	}

	instance getCSSClass()
	{
		var imgNumber = 0;

		if(!this.depth)
		{
			imgNumber += 8;
		}

		if(this.children.length)
		{
			imgNumber += 4;

			if(this.opened)
			{
				imgNumber += 2;
			}
		}

		if(this.depth && this.isLeaf())
		{
			imgNumber += 1;
		}

		switch(imgNumber)
		{
			case 0: return Node.TREE_IMAGE_JOIN;
			case 1: return Node.TREE_IMAGE_JOIN_BOTTOM;
			case 4: return Node.TREE_IMAGE_PLUS;
			case 5: return Node.TREE_IMAGE_PLUS_BOTTOM;
			case 6: return Node.TREE_IMAGE_MINUS;
			case 7: return Node.TREE_IMAGE_MINUS_BOTTOM;
			case 8: return Node.TREE_IMAGE_PLUS_ROOT;
			case 12: return Node.TREE_IMAGE_PLUS_ROOT;
			case 14: return Node.TREE_IMAGE_MINUS_ROOT;
			default: return '';
		}
	}

	instance open()
	{
		var divTag = Element.getElement(this.childrenDivID);
		if(!divTag)
		{
			return;
		}

		if (!divTag.innerHTML)
		{
			var html = [];
			for(var i=0;i<this.children.length;i++)
			{
				html[i] = this.children[i].buildHTML();
			}

			divTag.innerHTML = html.join('');
		}

		divTag.style.display = "";

		this.opened = true;

		// swap join images
		var jimg = Element.getElement(this.joinImgID);
		if(jimg)
		{
			jimg.className = Node.TREE_IMAGE+' '+this.getCSSClass();
		}
	}

	instance close()
	{
		var divTag = Element.getElement(this.childrenDivID);
		if(!divTag)
		{
			return;
		}

		divTag.style.display = "none";

		this.opened = false;

		// swap join images
		var jimg = Element.getElement(this.joinImgID);
		if(jimg)
		{
			jimg.className = Node.TREE_IMAGE+' '+this.getCSSClass();
		}
	}

	instance select()
	{
		// this will open up the parent and up the hierarchy

		// holds parent nodes
		var nodes = [];
		// walk up the hierarchy to get all parents
		var current_node = this.parent;
		for (var i=current_node.depth; i>-1; i--)
		{
			if(!current_node.opened)
			{
				nodes[nodes.length++] = current_node;
			}
			else
			{
				break;
			}

			current_node = current_node.parent;
		}

		// need to start w/ highest parent
		nodes.reverse();
		for(var i=0;i<nodes.length;i++)
		{
			nodes[i].open();
		}

		// swap selected nodes
		var oldItem = this.root.selected_node;
		this.root.selected_node = this;

		if(oldItem)
		{
			Element.getElement(oldItem.anchorID).className = Node.TREE_NODE+' '+Node.TREE_NODE_NOT_SELECTED;
		}

		Element.getElement(this.anchorID).className = Node.TREE_NODE+' '+Node.TREE_NODE_SELECTED;
	}

	instance isLeaf()
	{
		return this.index == this.parent.children.length - 1;
	}

	Node.TREE_TABLE_ITEM			= 'tree-table-item';

	Node.TREE_NODE					= 'tree-node';
	Node.TREE_NODE_NOT_SELECTED		= 'tree-node-not-selected';
	Node.TREE_NODE_SELECTED			= 'tree-node-selected';

	Node.TREE_IMAGE					= 'tree-image';
	Node.TREE_IMAGE_EMPTY			= 'tree-image-empty';
	Node.TREE_IMAGE_VLINE			= 'tree-image-line';
	Node.TREE_IMAGE_JOIN			= 'tree-image-join';
	Node.TREE_IMAGE_JOIN_BOTTOM		= 'tree-image-joinbottom';
	Node.TREE_IMAGE_PLUS			= 'tree-image-plus';
	Node.TREE_IMAGE_PLUS_BOTTOM		= 'tree-image-plusbottom';
	Node.TREE_IMAGE_MINUS			= 'tree-image-minus';
	Node.TREE_IMAGE_MINUS_BOTTOM	= 'tree-image-minusbottom';
	Node.TREE_IMAGE_PLUS_ROOT		= 'tree-image-plusroot';
	Node.TREE_IMAGE_MINUS_ROOT		= 'tree-image-minusroot';

}
