class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class Tree {
    constructor(array) {
        this.root = this.buildTree(array, 0, array.length - 1);
    }

    buildTree(array, start, end) {
        // Termination Case
        if (start > end) return null;

        // Find the middle index
        let mid = Math.floor((start + end) / 2);

        // Create root node at middle index
        let root = new Node(array[mid]);

        // // Set the left root
        root.left = this.buildTree(array, start, mid - 1);
        root.right = this.buildTree(array, mid + 1, end);

        return root;
    }

    insert(root, value) {
        // Base Case: If the current node is null then it is a leaf position, so return a new Node there 
        if (root === null) return new Node(value);

        // Ensures no duplicates
        if (root.data === value) return root;

        // If the value is less than the value in the current Node, then continue searching left, otherwise search right
        if (value < root.data) {
            root.left = this.insert(root.left, value)
        } else if (value > root.data) {
            root.right = this.insert(root.right, value);
        }

        return root;

    }

    deleteItem(root, value) {
        // Base Case:
        if (root === null) return root;

        // Search if the value is in the left or right subtree
        if (value < root.data) {
            root.left = this.deleteItem(root.left, value);
        } else if (value > root.data) {
            root.right = this.deleteItem(root.right, value);
        } else {
            // If the current nodes value matches the value, then remove it given 3 scenarios:

            // 1. If current node has no left children, return the right
            if (root.left === null) return root.right;

            // 2. If current node has no right children, return the left
            if (root.right === null) return root.left;

            // 3. Node has two children
            let successor = getSuccessor(root);
            // Replace current nodes value with successors value
            root.data = successor.data;
            // Remove the duplicate successor value at the leaf position
            root.right = this.deleteItem(root.right, successor.data)

        }

        return root;

    }

    find(root, value) {
        // Base Case:
        if (root === null) return null;

        // If value is less than current nodes value, search left otherwise search right
        if (value < root.data) {
            return root.left = this.find(root.left, value);
        } else if (value > root.data) {
            return root.right = this.find(root.right, value);
        } else {
            if (value === root.data) return root;
        }

    }

    levelOrder(callback) {

        if (typeof callback !== 'function') {
            throw new Error('A callback function is required!');
        }
        // Create the queue using an array and with methods push() & shift()
        let queue = [];

        // Add the root node to the queue which holds references to its children
        queue.push(this.root);

        // While queue is not empty
        while (queue.length > 0) {
            // Remove the first node from the queue
            const node = queue.shift();

            // Do something with the code depending on callbackFn
            callback(node);

            // If the node has a left child, add it to the queue
            if (node.left) queue.push(node.left);

            // Otherwise if the node has a right child, add it to the queue
            if (node.right) queue.push(node.right);
        }

    }

    preOrder(callback) {
        function helperRecursiveFunction(root) {
            // Base Case:
            if (root === null) return;

            // Process current node
            callback(root);

            // Recursively traverse left subtree
            helperRecursiveFunction(root.left);

            // Recursively traverse right subtree
            helperRecursiveFunction(root.right);
        }

        if (typeof callback !== 'function') {
            throw new Error('A callback function is required!');
        }

        // Begin recursion with root
        helperRecursiveFunction(this.root);
    }

    inOrder(callback) {
        function helperRecursiveFunction(root) {
            if (root === null) return;

            helperRecursiveFunction(root.left);
            callback(root);
            helperRecursiveFunction(root.right);
        }

        if (typeof callback !== 'function') {
            throw new Error('A callback function is required!');
        }

        helperRecursiveFunction(this.root);

    }

    postOrder(callback) {
        function helperRecursiveFunction(root) {
            if (root === null) return;

            helperRecursiveFunction(root.left);
            helperRecursiveFunction(root.right);
            callback(root);
        }

        if (typeof callback !== 'function') {
            throw new Error('A callback function is required!');
        }

        helperRecursiveFunction(this.root);
    }



}

function getSuccessor(node) {
    node = node.right;
    while (node.left !== null && node.right !== null) {
        node = node.left;
    }

    return node;
}