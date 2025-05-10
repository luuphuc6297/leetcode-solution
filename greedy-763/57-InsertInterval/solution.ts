/**
 * 57. Insert Interval
 * https://leetcode.com/problems/insert-interval/
 *
 * You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi]
 * represent the start and the end of the ith interval and intervals is sorted in ascending order by starti.
 * You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
 *
 * Insert newInterval into intervals such that intervals is still sorted in ascending order by starti
 * and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
 *
 * Return intervals after the insertion.
 */

export function insert(intervals: number[][], newInterval: number[]): number[][] {
    const result: number[][] = [];
    let i = 0;
    const n = intervals.length;
    
    // Add all intervals that come before newInterval
    while (i < n && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }
    
    // Merge overlapping intervals
    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    
    // Add the merged interval
    result.push(newInterval);
    
    // Add all intervals that come after newInterval
    while (i < n) {
        result.push(intervals[i]);
        i++;
    }
    
    return result;
}

// Example test cases
const intervals1 = [[1,3],[6,9]];
const newInterval1 = [2,5];
console.log(insert(intervals1, newInterval1)); // Expected: [[1,5],[6,9]]

const intervals2 = [[1,2],[3,5],[6,7],[8,10],[12,16]];
const newInterval2 = [4,8];
console.log(insert(intervals2, newInterval2)); // Expected: [[1,2],[3,10],[12,16]] 