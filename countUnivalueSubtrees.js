/**
* A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.
* Given the root to a binary tree, count the number of unival subtrees.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {int}
 */

var countUniversalSubtree = function(root) {
    var count = 0;
    
    var traverse = function(root) {
        if (!root) return;
        traverse(root.left);
        traverse(root.right);
        if (!root.left && !root.right) count++; //count leaf node
        else if (
            (
                (root.left && 
                root.left.val == root.val && 
                !root.left.left && 
                !root.left.right ) || !root.left    // left child is a leaf node with same value as parent or null
            ) 
            &&
            (
                (root.right && 
                root.right.val == root.val &&
                !root.right.left && 
                !root.right.right ) || !root.right // right child is a leaf node with same value as parent or null
            )
        ) {
            root.left = null;
            root.right = null;
            count++;
        }
    }  
    traverse(root);
    
    return count;
};
