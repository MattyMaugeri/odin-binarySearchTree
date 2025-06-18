import { Tree } from "./BinarySearchTree.js";

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const tree = new Tree(sortArray(array));

// console.log(tree.find(tree.root, 67));
prettyPrint(tree.root);
// tree.levelOrder(element => console.log(element.data));
// tree.preOrder(element => console.log(element.data));
// tree.inOrder(element => console.log(element.data));
// tree.postOrder(element => console.log(element.data));

// console.log('Height of Tree: ', tree.height(5));
// console.log(tree.height(3));
console.log('Depth of node: ', tree.depth(8));




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