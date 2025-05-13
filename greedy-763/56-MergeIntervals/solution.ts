/**
 * 56. Merge Intervals
 * https://leetcode.com/problems/merge-intervals/
 *
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.
 */

export function merge(intervals: number[][]): number[][] {
    if (intervals.length <= 1) return intervals

    intervals.sort((a, b) => {
        return a[0] - b[0]
    })

    const result: number[][] = []
    let current = intervals[0]

    for (let i = 1; i < intervals.length; i++) {
        if (current[1] >= intervals[i][0]) {
            current[1] = Math.max(current[1], intervals[i][1])
        } else {
            result.push(current)
            current = intervals[i]
        }
    }

    result.push(current)

    return result
}

// Example test cases
const example1 = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
]
console.log(merge(example1)) // Expected: [[1,6],[8,10],[15,18]]

const example2 = [
    [1, 4],
    [4, 5],
]
console.log(merge(example2)) // Expected: [[1,5]]
