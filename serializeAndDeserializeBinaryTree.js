/*
Given the root to a binary tree, implement serialize(root), which serializes the tree into 
a string, and deserialize(s), which deserializes the string back into the tree.
Constraints:
The number of nodes in the tree is in the range [0, 104].
-1000 <= Node.val <= 1000
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

//Preorder traversal to covert tree to array

var encode = function(root) {
    if (root) {
        this.encodedTree.push(root.val);
        encode(root.left);
        encode(root.right);
    }
    else {
        this.encodedTree.push(9999);
    }
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    this.encodedTree = []
    encode(root);
    return this.encodedTree;
};

//Reversing array to tree

var decode = function(arr) {
    var val = arr[0];
    arr.shift();
    if (val == 9999) {
        return null;
    }
    var node = new TreeNode(val);
    node.left = decode(arr);
    node.right = decode(arr);
    return node;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    return decode(data);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */