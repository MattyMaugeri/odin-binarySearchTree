import { Tree } from "./BinarySearchTree.js";

// Driver script:
const array = generateRandomArray(4);

const tree = new Tree(sortArray(array));

console.log('Tree Balanced : ', tree.isBalanced(tree.root));

console.log('Level Order: ');
tree.levelOrder(element => console.log(element.data));
console.log('Pre-Order: ');
tree.preOrder(element => console.log(element.data));
console.log('In-Order: ');
tree.inOrder(element => console.log(element.data));
console.log('Post-Order: ');
tree.postOrder(element => console.log(element.data));

// UnBalance tree by adding several > 100
tree.insert(tree.root, 100);
tree.insert(tree.root, 101);
console.log('Tree Balanced after unbalancing : ', tree.isBalanced(tree.root));
prettyPrint(tree.root);

// Test rebalance function
tree.rebalance();
console.log('Tree graph after rebalance: ');
prettyPrint(tree.root);
console.log('Tree Balanced after rebalance() : ', tree.isBalanced(tree.root));


function prettyPrint(node, prefix = '', isLeft = true) {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}

function sortArray(array) {
    return array =
        [...new Set(array)]         // Remove duplicates using Set
            .sort((a, b) => a - b); // Sort the array
}

function generateRandomArray(amount) {
    const array = [];
    for (let i = 0; i < amount; i++) {
        array.push(Math.floor(Math.random() * 100));
    }

    return array;
}