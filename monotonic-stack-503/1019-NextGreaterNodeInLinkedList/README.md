# 1019. Next Greater Node In Linked List

## Problem Description

You are given the `head` of a linked list with `n` nodes.

For each node in the list, find the value of the next greater node. That is, for each node, find the value of the first node that is next to it and has a strictly greater value than it.

Return an integer array `answer` where `answer[i]` is the value of the next greater node of the `i`th node (0-indexed). If there is no next greater node for the `i`th node, set `answer[i] = 0`.

## Examples

**Example 1:**
```
Input: head = [2,1,5]
Output: [5,5,0]
```

**Example 2:**
```
Input: head = [2,7,4,3,5]
Output: [7,0,5,5,0]
```

## Constraints:
- The number of nodes in the list is `n`.
- `1 <= n <= 10^4`
- `1 <= Node.val <= 10^9`

## Approach

This problem can be efficiently solved using a monotonic stack:

1. Convert the linked list to an array (for easier processing)
2. Use a monotonic stack to find the next greater element for each position
3. The stack will store indices of elements that haven't found their next greater element yet

**Algorithm:**
1. Initialize an array `result` of length n with all 0s
2. Initialize an empty stack to store indices
3. Iterate through the array from left to right:
   a. While the stack is not empty and the current value is greater than the value at the index at the top of the stack, pop the index from the stack and set the result at that index to the current value
   b. Push the current index to the stack
4. Return the result array

Time Complexity: O(n) where n is the number of nodes in the linked list
Space Complexity: O(n) for the result array and the stack 