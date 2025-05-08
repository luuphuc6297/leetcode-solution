# 776. Split BST

## Problem Description

Given the root of a binary search tree (BST) and a value `target`, split the tree into two subtrees where one subtree has nodes that are all less than or equal to `target` and the other subtree has all nodes that are greater than `target`. It's not necessarily the case that the tree contains a node with value `target`.

Additionally, the solution should preserve the structure of the original tree when possible.

Return an array of two subtrees [less_than_or_equal_subtree, greater_than_subtree].

### Example:

**Input:**
```
    4
   / \
  2   6
 / \ / \
1  3 5  7

target = 2
```

**Output:**
```
[
   2     
  / \     
 1   null  
,  
   4
  / \
 3   6
    / \
   5   7
]
```

## Complexity Analysis
- **Time Complexity**: O(h), where h is the height of the BST.
- **Space Complexity**: O(h) due to the recursion stack.

## Solution Approach

The solution uses a recursive approach to split the BST:

1. If the root is null, return [null, null].
2. If the root's value is less than or equal to the target, then we need to split the right subtree:
   - Recursively split the right subtree.
   - Connect the smaller portion of the split right subtree to the root's right.
   - Return [root, larger portion of the split right subtree].
3. If the root's value is greater than the target, then we need to split the left subtree:
   - Recursively split the left subtree.
   - Connect the larger portion of the split left subtree to the root's left.
   - Return [smaller portion of the split left subtree, root].

## Implementation

```typescript
function splitBST(root: TreeNode | null, target: number): Array<TreeNode | null> {
    // Base case: if root is null, return [null, null]
    if (!root) return [null, null];
    
    // Case 1: If the root's value is less than or equal to the target
    if (root.val <= target) {
        // Split the right subtree
        const [small, large] = splitBST(root.right, target);
        // Connect the smaller portion of the split right subtree to the root's right
        root.right = small;
        // Return [root, larger portion of the split right subtree]
        return [root, large];
    } 
    // Case 2: If the root's value is greater than the target
    else {
        // Split the left subtree
        const [small, large] = splitBST(root.left, target);
        // Connect the larger portion of the split left subtree to the root's left
        root.left = large;
        // Return [smaller portion of the split left subtree, root]
        return [small, root];
    }
}
```

## Source
[LeetCode Problem 776: Split BST](https://leetcode.com/problems/split-bst/) 