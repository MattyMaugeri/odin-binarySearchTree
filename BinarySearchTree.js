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
        // If node is null then your at a leaf 
        if (root === null) {
            return new Node(value);
        }

        // No duplicates
        if (root.data === value) return root;

        if (value < root.data) {
            root.left = this.insert(root.left, value)
        } else if (value > root.data) {
            root.right = this.insert(root.right, value);
        }

        return root;

    }

    deleteItem(root, value) {
        
    }

}

