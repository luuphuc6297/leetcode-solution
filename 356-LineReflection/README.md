# 356. Line Reflection

## Problem

Given n points on a 2D plane, find if there is such a line parallel to the y-axis that reflects the given points symmetrically.

In other words, answer whether or not if there exists a line that after reflecting all points over the given line, the original points' set is the same as the reflected ones.

Note that there can be repeated points.

## Examples

**Example 1:**

```
Input: [[1,1],[-1,1]]
Output: true
```

**Explanation:** We can choose the line x = 0.

**Example 2:**

```
Input: [[1,1],[-1,-1]]
Output: false
```

**Explanation:** No line can be chosen to reflect the points.

## Notes

1. All points have integer coordinates.
2. You need to consider all points, including duplicate points.
3. The line of reflection must be parallel to the y-axis.
4. A point reflects across a line if the line is the perpendicular bisector of the line segment connecting the point and its reflection.

## Hints

1. Find the minimum and maximum x-coordinates of all points.
2. The line of reflection must have an x-coordinate that is the average of these two values.
3. Check if each point has a corresponding reflection point across this line. 