# 364. Nested List Weight Sum II

## Problem

Given a nested list of integers, return the sum of all integers in the list weighted by their depth.

Each element is either an integer, or a list -- whose elements may also be integers or other lists.

Different from the previous question where weight is increasing from root to leaf, now the weight is defined from bottom up. i.e., the leaf level integers have weight 1, and the root level integers have the largest weight.

## Examples

**Example 1:**

```
Input: [[1,1],2,[1,1]]
Output: 8
```

**Explanation:** 
- Four 1's at depth 1, weight 1 each, 1×4 = 4
- One 2 at depth 0, weight 2, 2×2 = 4
- Total = 4 + 4 = 8

**Example 2:**

```
Input: [1,[4,[6]]]
Output: 17
```

**Explanation:**
- One 1 at depth 2, weight 1, 1×1 = 1
- One 4 at depth 1, weight 2, 4×2 = 8
- One 6 at depth 0, weight 3, 6×3 = 18
- Total = 1 + 8 + 18 = 17

## Notes

For this problem:
1. The depth of an integer is the number of lists it is inside of.
2. The weight of an integer is determined by the maximum depth minus its depth plus 1.
3. You will encounter the `NestedInteger` interface in this problem, which has methods to check if it's an integer, get the integer value, or get the list if it's a list.