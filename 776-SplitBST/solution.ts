/**
 * 776. Split BST
 * 
 * Given the root of a binary search tree (BST) and a value target, split the tree
 * into two subtrees where one subtree has nodes that are all less than or equal to
 * target while the other subtree has all nodes that are greater than target.
 * 
 * Return an array [subtree1, subtree2] where:
 * - subtree1 is the tree with nodes that are less than or equal to target
 * - subtree2 is the tree with nodes that are greater than target
 * 
 * The subtrees should maintain the BST property, meaning for any node with value k:
 * - All nodes in its left subtree should have values less than k
 * - All nodes in its right subtree should have values greater than or equal to k
 * 
 * Time Complexity: O(h), where h is the height of the tree
 * Space Complexity: O(h), for the recursion stack
 */

// Definition for a binary tree node.
export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

/**
 * Splits a BST into two subtrees based on the target value.
 * 
 * @param root - The root of the binary search tree
 * @param target - The value to split the tree on
 * @returns An array containing two trees:
 *          [0]: Tree with nodes <= target
 *          [1]: Tree with nodes > target
 */
export function splitBST(root: TreeNode | null, target: number): Array<TreeNode | null> {
    // Base case: if root is null, both subtrees are null
    if (root === null) {
        return [null, null];
    }
    
    // If current node's value is less than or equal to target
    if (root.val <= target) {
        // Split the right subtree
        const [rightLess, rightGreater] = splitBST(root.right, target);
        
        // Current node belongs to the "less than or equal" subtree
        // Its right child should be the rightLess subtree
        root.right = rightLess;
        
        // Return the two subtrees
        return [root, rightGreater];
    } 
    // If current node's value is greater than target
    else {
        // Split the left subtree
        const [leftLess, leftGreater] = splitBST(root.left, target);
        
        // Current node belongs to the "greater than" subtree
        // Its left child should be the leftGreater subtree
        root.left = leftGreater;
        
        // Return the two subtrees
        return [leftLess, root];
    }
} 