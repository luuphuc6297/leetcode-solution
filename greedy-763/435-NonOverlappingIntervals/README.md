# 435. Non-overlapping Intervals

## Problem Description

Given an array of intervals `intervals` where `intervals[i] = [starti, endi]`, return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

## Examples

**Example 1:**
```
Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
```

**Example 2:**
```
Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
```

**Example 3:**
```
Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
```

## Constraints:
- `1 <= intervals.length <= 10^5`
- `intervals[i].length == 2`
- `-5 * 10^4 <= starti < endi <= 5 * 10^4`

## Approach

This is a classic interval scheduling problem. The key insight is to sort intervals by end time and greedily select intervals that don't overlap.

1. Sort intervals by end time
2. Keep track of the end time of the last selected interval
3. For each interval, if it doesn't overlap with the last selected one, select it and update the end time
4. Otherwise, increment the removal count

Time Complexity: O(n log n) due to sorting
Space Complexity: O(1) for the sort-in-place approach 