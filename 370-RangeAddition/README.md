# 370. Range Addition

## Problem

Assume you have an array of length n initialized with all 0's and are given k update operations.

Each operation is represented as a triplet: [startIndex, endIndex, inc] which increments each element of subarray A[startIndex ... endIndex] (startIndex and endIndex inclusive) with inc.

Return the modified array after all k operations were executed.

## Examples

**Example 1:**

```
Input: length = 5, updates = [[1, 3, 2], [2, 4, 3], [0, 2, -2]]
Output: [-2, 0, 3, 5, 3]
```

**Explanation:**
- Initially, the array is [0, 0, 0, 0, 0]
- After update [1, 3, 2]: [0, 2, 2, 2, 0]
- After update [2, 4, 3]: [0, 2, 5, 5, 3]
- After update [0, 2, -2]: [-2, 0, 3, 5, 3]

**Example 2:**

```
Input: length = 3, updates = [[0, 1, 1]]
Output: [1, 1, 0]
```

## Hints

1. You can simulate the process by performing each update, but this may not be efficient for large arrays and many updates.
2. There might be a more efficient way to solve this problem using the "range update query" or "difference array" technique. 