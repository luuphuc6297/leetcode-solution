# 1288. Remove Covered Intervals

## Problem Description

Given an array `intervals` of intervals where `intervals[i] = [li, ri]`, return the number of remaining intervals after removing all intervals that are covered by another interval in the list.

An interval `[a, b)` is covered by an interval `[c, d)` if and only if `c <= a` and `b <= d`.

## Examples

**Example 1:**
```
Input: intervals = [[1,4],[3,6],[2,8]]
Output: 2
Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.
```

**Example 2:**
```
Input: intervals = [[1,4],[2,3]]
Output: 1
Explanation: [2,3] is covered by [1,4].
```

**Example 3:**
```
Input: intervals = [[0,10],[5,12]]
Output: 2
Explanation: There are no intervals that are covered by another interval in the list.
```

## Constraints:
- `1 <= intervals.length <= 1000`
- `intervals[i].length == 2`
- `0 <= li <= ri <= 10^5`
- All the given intervals are unique.

## Approach

1. Sort the intervals by their starting points in ascending order
   - If two intervals have the same starting point, sort by ending point in descending order
2. Iterate through the sorted intervals
3. For each interval, check if it's covered by any previously processed interval
4. Count the intervals that are not covered

Time Complexity: O(n log n) due to sorting
Space Complexity: O(1) excluding the input/output 