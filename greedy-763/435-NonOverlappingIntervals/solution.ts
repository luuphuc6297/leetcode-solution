/**
 * 435. Non-overlapping Intervals
 * https://leetcode.com/problems/non-overlapping-intervals/
 *
 * Given an array of intervals intervals where intervals[i] = [starti, endi], 
 * return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
 */

export function eraseOverlapIntervals(intervals: number[][]): number {
    if (intervals.length === 0) return 0;
    
    // Sort intervals by end time
    intervals.sort((a, b) => a[1] - b[1]);
    
    let count = 0;
    let end = intervals[0][1];
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < end) {
            // Overlapping interval, remove it
            count++;
        } else {
            // Non-overlapping interval, update end
            end = intervals[i][1];
        }
    }
    
    return count;
}

// Example test cases
const example1 = [[1,2],[2,3],[3,4],[1,3]];
console.log(eraseOverlapIntervals(example1)); // Expected: 1

const example2 = [[1,2],[1,2],[1,2]];
console.log(eraseOverlapIntervals(example2)); // Expected: 2

const example3 = [[1,2],[2,3]];
console.log(eraseOverlapIntervals(example3)); // Expected: 0 