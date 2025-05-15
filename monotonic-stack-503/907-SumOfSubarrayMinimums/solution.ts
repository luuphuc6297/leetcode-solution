/**
 * 907. Sum of Subarray Minimums
 * https://leetcode.com/problems/sum-of-subarray-minimums/
 * 
 * Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr.
 * Since the answer may be large, return the answer modulo 10^9 + 7.
 * 
 * Examples:
 * Input: arr = [3,1,2,4]
 * Output: 17
 * Explanation: 
 * Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4].
 * Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
 * Sum is 17.
 * 
 * Input: arr = [11,81,94,43,3]
 * Output: 444
 * 
 * Constraints:
 * 1 <= arr.length <= 3 * 10^4
 * 1 <= arr[i] <= 3 * 10^4
 */

/**
 * Approach: Using Monotonic Stack
 * 
 * For each element, we want to find the contribution of this element as the minimum in all possible subarrays.
 * To do this, we need to find:
 * 1. The nearest smaller element to the left (or -1 if no such element exists)
 * 2. The nearest smaller element to the right (or arr.length if no such element exists)
 * 
 * For element at index i, it will be the minimum for subarrays starting at indexes [left_boundary + 1, i]
 * and ending at indexes [i, right_boundary - 1].
 * 
 * The number of such subarrays is (i - left_boundary) * (right_boundary - i).
 * 
 * Time Complexity: O(n) where n is the length of the array
 * Space Complexity: O(n) for the stacks
 */
export function sumSubarrayMins(arr: number[]): number {
    const MOD = 1e9 + 7;
    const n = arr.length;
    
    // Find the nearest smaller element to the left
    const leftBoundary = new Array(n).fill(-1);
    const leftStack: number[] = [];
    
    for (let i = 0; i < n; i++) {
        // Maintain a monotonic increasing stack
        while (leftStack.length > 0 && arr[leftStack[leftStack.length - 1]] >= arr[i]) {
            leftStack.pop();
        }
        
        if (leftStack.length > 0) {
            leftBoundary[i] = leftStack[leftStack.length - 1];
        }
        
        leftStack.push(i);
    }
    
    // Find the nearest smaller element to the right
    const rightBoundary = new Array(n).fill(n);
    const rightStack: number[] = [];
    
    for (let i = n - 1; i >= 0; i--) {
        // For duplicate elements, we want the rightmost occurrence to be the boundary
        // So we use strict inequality here (>)
        while (rightStack.length > 0 && arr[rightStack[rightStack.length - 1]] > arr[i]) {
            rightStack.pop();
        }
        
        if (rightStack.length > 0) {
            rightBoundary[i] = rightStack[rightStack.length - 1];
        }
        
        rightStack.push(i);
    }
    
    // Calculate the contribution of each element to the result
    let result = 0;
    
    for (let i = 0; i < n; i++) {
        // Calculate the number of subarrays where arr[i] is the minimum
        const left = i - leftBoundary[i];
        const right = rightBoundary[i] - i;
        
        // Add the contribution of this element to the sum
        // (arr[i] * number of subarrays where it is the minimum)
        result = (result + (arr[i] * left * right) % MOD) % MOD;
    }
    
    return result;
}

/**
 * Optimized Approach: Single Pass with Stack
 * 
 * We can compute the result in a single pass by maintaining a monotonic stack.
 * For each element, we calculate its contribution as it's being popped from the stack.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export function sumSubarrayMinsOptimized(arr: number[]): number {
    const MOD = 1e9 + 7;
    const n = arr.length;
    const stack: number[] = [];
    let result = 0;
    
    // Iterate through the array with a virtual extra element at the end (smaller than any element)
    for (let i = 0; i <= n; i++) {
        // When we reach the end or find a smaller element, we calculate contributions
        // for elements that are being popped from the stack
        while (stack.length > 0 && (i === n || arr[stack[stack.length - 1]] >= arr[i])) {
            const mid = stack.pop()!;
            const left = stack.length === 0 ? -1 : stack[stack.length - 1];
            const right = i;
            
            // Calculate the contribution of arr[mid] to the result
            const count = (mid - left) * (right - mid);
            result = (result + (arr[mid] * count) % MOD) % MOD;
        }
        
        stack.push(i);
    }
    
    return result;
} 