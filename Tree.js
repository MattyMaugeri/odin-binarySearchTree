import { Node } from "./Node.js";

export class Tree {
    constructor(array) {
        this.root = this.buildTree(array);
    }


    buildTree(array, start, end) {
        // Remove duplicates and sort the array first
        array =
            [...new Set(array)]         // Remove duplicates using Set
                .sort((a, b) => a - b); // Sort the array

        start = 0;
        end = array.length - 1;
        console.log(array);
        
        console.log(start, end);

        // Termination Case:
        if (start > end) return null;

        // Find the middle index
        let mid = Math.floor((start + end) / 2);

        // Create root node at middle index
        let root = new Node(array[mid]);

        // Set the left root
        root.left = this.buildTree(array, start, mid - 1);
        root.right = this.buildTree(array, mid + 1, end);

        return root;
    }

}