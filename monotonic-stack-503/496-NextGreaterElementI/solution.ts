/**
 * 496. Next Greater Element I
 * https://leetcode.com/problems/next-greater-element-i/
 *
 * The next greater element of some element x in an array is the first greater element
 * that is to the right of x in the same array.
 *
 * You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
 *
 * For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j]
 * and determine the next greater element of nums2[j] in nums2. If there is no next greater element,
 * then the answer for this query is -1.
 *
 * Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.
 */

export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const nextGreater = new Map<number, number>();
    const stack: number[] = [];
    
    // Find next greater element for each element in nums2
    for (let i = 0; i < nums2.length; i++) {
        // Pop elements from stack while current element is greater
        while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
            nextGreater.set(stack.pop()!, nums2[i]);
        }
        
        // Push current element onto stack
        stack.push(nums2[i]);
    }
    
    // For remaining elements in stack, there's no next greater element
    while (stack.length > 0) {
        nextGreater.set(stack.pop()!, -1);
    }
    
    // Build the result array for nums1
    const result: number[] = [];
    for (const num of nums1) {
        result.push(nextGreater.get(num)!);
    }
    
    return result;
}

// Example test cases
const nums1a = [4, 1, 2];
const nums2a = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1a, nums2a)); // Expected: [-1, 3, -1]

const nums1b = [2, 4];
const nums2b = [1, 2, 3, 4];
console.log(nextGreaterElement(nums1b, nums2b)); // Expected: [3, -1] 