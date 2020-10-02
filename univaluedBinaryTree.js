/**
* A binary tree is univalued if every node in the tree has the same value.
* Return true if and only if the given tree is univalued.
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
 * @return {boolean}
 */
 
var isUnivalTree = function(root) {
    var univalued = true;
    var value = root.val;
    
    var traverse = function(root) {
        if (!root) return;
        if (root.val == value) {
            traverse(root.left);
            traverse(root.right);
        }
        else {
            univalued = false;
        }
    }  
    traverse(root);
    
    return univalued;
};
