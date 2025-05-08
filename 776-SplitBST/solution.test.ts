import { TreeNode, splitBST } from './solution';

/**
 * Helper function to convert an array representation of a BST to a TreeNode structure
 * where null represents empty nodes
 */
function arrayToBST(arr: (number | null)[], index = 0): TreeNode | null {
    if (index >= arr.length || arr[index] === null) {
        return null;
    }

    const node = new TreeNode(arr[index] as number);
    node.left = arrayToBST(arr, 2 * index + 1);
    node.right = arrayToBST(arr, 2 * index + 2);
    
    return node;
}

/**
 * Helper function to convert a TreeNode to an array for easier comparison
 */
function treeToArray(root: TreeNode | null): (number | null)[] {
    if (!root) return [];
    
    const result: (number | null)[] = [];
    const queue: (TreeNode | null)[] = [root];
    
    while (queue.length > 0) {
        const node = queue.shift()!;
        
        if (node === null) {
            result.push(null);
        } else {
            result.push(node.val);
            
            // Only add children to queue if they exist or if there are non-null nodes after them
            if (node.left !== null || node.right !== null) {
                queue.push(node.left);
                queue.push(node.right);
            }
        }
    }
    
    // Remove trailing nulls
    while (result.length > 0 && result[result.length - 1] === null) {
        result.pop();
    }
    
    return result;
}

/**
 * Helper function to check if a tree is a valid BST
 */
function isValidBST(root: TreeNode | null, min = -Infinity, max = Infinity): boolean {
    if (!root) return true;
    
    if (root.val <= min || root.val >= max) {
        return false;
    }
    
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
}

describe('776. Split BST', () => {
    test('Example 1: Split [4,2,6,1,3,5,7] with target = 2', () => {
        const root = arrayToBST([4, 2, 6, 1, 3, 5, 7]);
        const target = 2;
        
        const result = splitBST(root, target);
        
        // Expected result:
        // First tree: [2,1]
        // Second tree: [4,3,6,null,null,5,7]
        
        expect(treeToArray(result[0])).toEqual([2, 1]);
        expect(treeToArray(result[1])).toEqual([4, 3, 6, null, null, 5, 7]);
        
        // Verify that both trees are valid BSTs
        expect(isValidBST(result[0])).toBe(true);
        expect(isValidBST(result[1])).toBe(true);
    });
    
    test('Split with node value equal to target', () => {
        const root = arrayToBST([4, 2, 6, 1, 3, 5, 7]);
        const target = 4;
        
        const result = splitBST(root, target);
        
        // First tree should have all nodes <= 4
        // Second tree should have all nodes > 4
        expect(treeToArray(result[0])).toEqual([4, 2, null, 1, 3]);
        expect(treeToArray(result[1])).toEqual([6, 5, 7]);
        
        expect(isValidBST(result[0])).toBe(true);
        expect(isValidBST(result[1])).toBe(true);
    });
    
    test('Split with target less than all values', () => {
        const root = arrayToBST([4, 2, 6, 1, 3, 5, 7]);
        const target = 0;
        
        const result = splitBST(root, target);
        
        // First tree should be null
        // Second tree should be the entire original tree
        expect(result[0]).toBeNull();
        expect(treeToArray(result[1])).toEqual([4, 2, 6, 1, 3, 5, 7]);
        
        expect(isValidBST(result[1])).toBe(true);
    });
    
    test('Split with target greater than all values', () => {
        const root = arrayToBST([4, 2, 6, 1, 3, 5, 7]);
        const target = 10;
        
        const result = splitBST(root, target);
        
        // First tree should be the entire original tree
        // Second tree should be null
        expect(treeToArray(result[0])).toEqual([4, 2, 6, 1, 3, 5, 7]);
        expect(result[1]).toBeNull();
        
        expect(isValidBST(result[0])).toBe(true);
    });
    
    test('Null tree edge case', () => {
        const result = splitBST(null, 5);
        
        expect(result[0]).toBeNull();
        expect(result[1]).toBeNull();
    });
    
    test('Single node tree equal to target', () => {
        const root = new TreeNode(5);
        const result = splitBST(root, 5);
        
        expect(treeToArray(result[0])).toEqual([5]);
        expect(result[1]).toBeNull();
        
        expect(isValidBST(result[0])).toBe(true);
    });
    
    test('Single node tree less than target', () => {
        const root = new TreeNode(3);
        const result = splitBST(root, 5);
        
        expect(treeToArray(result[0])).toEqual([3]);
        expect(result[1]).toBeNull();
        
        expect(isValidBST(result[0])).toBe(true);
    });
    
    test('Single node tree greater than target', () => {
        const root = new TreeNode(7);
        const result = splitBST(root, 5);
        
        expect(result[0]).toBeNull();
        expect(treeToArray(result[1])).toEqual([7]);
        
        expect(isValidBST(result[1])).toBe(true);
    });
}); 