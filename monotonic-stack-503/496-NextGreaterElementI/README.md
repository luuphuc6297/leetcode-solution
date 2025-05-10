# 496. Next Greater Element I

## Problem Description

The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays `nums1` and `nums2`, where `nums1` is a subset of `nums2`.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array `ans` of length `nums1.length` such that `ans[i]` is the next greater element as described above.

## Examples

**Example 1:**
```
Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation:
For number 4 in nums1, there is no next greater element, so the answer is -1.
For number 1 in nums1, the next greater element in nums2 is 3.
For number 2 in nums1, there is no next greater element, so the answer is -1.
```

**Example 2:**
```
Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]
Explanation:
For number 2 in nums1, the next greater element in nums2 is 3.
For number 4 in nums1, there is no next greater element, so the answer is -1.
```

## Constraints:
- `1 <= nums1.length <= nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 10^4`
- All integers in `nums1` and `nums2` are unique.
- All the integers of `nums1` also appear in `nums2`.

## Approach

This problem can be efficiently solved using a monotonic stack and a hash map:

1. Use a monotonic stack to find the next greater element for each element in nums2
2. Store these next greater elements in a hash map
3. Use the hash map to build the result array for nums1

**Algorithm:**
1. Initialize a hash map to store the next greater element for each value in nums2
2. Use a monotonic stack to process nums2:
   - For each element, pop elements from the stack while the current element is greater than the top of the stack, updating the hash map
   - Push the current element onto the stack
3. Build the result array for nums1 by looking up the next greater element in the hash map

Time Complexity: O(n) where n is the length of nums2
Space Complexity: O(n) for the stack and hash map 