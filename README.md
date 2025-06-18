# Binary Search Tree

The task of this project is to build a Binary Search Tree Class with the following functions added:

- **buildTree** (array): takes an array and turns it into a balanced binary tree
- **insert** (value): inserts a node into the tree, maintaining balanced status
- **deleteItem** (value): removes a node in the tree if found, maintaining balanced status
- **levelOrder** (callback): accepts a callback function to iterate over the tree via Breadth-First Traversal (Level-Order)
- **preOrder** (callback): accepts a callback function to iterate over the tree via preOrder Depth-First Traversal
- **inOrder** (callback): accepts a callback function to iterate over the tree via inOrder Depth-First Traversal
- **postOrder** (callback): accepts a callback function to iterate over the tree via postOrder Depth-First Traversal
- **height** (value): returns the height of the node containing the given value. Height is defined as the number of edges in the longest path from that node to a leaf node
- **depth** (value): returns the depth of the node containing the given value. Depth is defined as the number of edges in the path from that node to the root node
- **isBalanced** (): checks if the tree is balanced. A binary tree is considered balanced if, for every node in the tree, the height difference between its left and right subtrees is no more than 1, and both the left and right subtrees are also balanced
- **rebalance** (value): function that rebalances an unbalanced tree
