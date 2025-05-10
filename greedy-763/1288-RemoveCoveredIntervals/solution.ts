/**
 * 1288. Remove Covered Intervals
 * https://leetcode.com/problems/remove-covered-intervals/
 *
 * Given an array intervals of intervals where intervals[i] = [li, ri],
 * return the number of remaining intervals after removing all intervals that are covered by another interval in the list.
 *
 * An interval [a, b) is covered by another interval [c, d) if and only if c <= a and b <= d.
 */

export function removeCoveredIntervals(intervals: number[][]): number {
    // Sort by starting point ascending and then by ending point descending
    intervals.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
    
    let count = 0;
    let end = 0;
    
    for (const interval of intervals) {
        // If current interval is not covered
        if (interval[1] > end) {
            count++;
            end = interval[1];
        }
    }
    
    return count;
}

// Example test cases
const example1 = [[1,4],[3,6],[2,8]];
console.log(removeCoveredIntervals(example1)); // Expected: 2

const example2 = [[1,4],[2,3]];
console.log(removeCoveredIntervals(example2)); // Expected: 1

const example3 = [[0,10],[5,12]];
console.log(removeCoveredIntervals(example3)); // Expected: 2 