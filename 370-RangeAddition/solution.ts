/**
 * 370. Range Addition
 * https://leetcode.com/problems/range-addition/
 * 
 * Assume you have an array of length n initialized with all 0's and are given k update operations.
 * Each operation is represented as a triplet: [startIndex, endIndex, inc] which increments
 * each element of subarray A[startIndex ... endIndex] (startIndex and endIndex inclusive) with inc.
 * 
 * Return the modified array after all k operations were executed.
 */

export function getModifiedArray(length: number, updates: number[][]): number[] {
  // Implement your solution here
  return [];
}

// Example test cases
const example1_length = 5;
const example1_updates = [[1, 3, 2], [2, 4, 3], [0, 2, -2]];
console.log(getModifiedArray(example1_length, example1_updates)); // Expected: [-2, 0, 3, 5, 3]

const example2_length = 3;
const example2_updates = [[0, 1, 1]];
console.log(getModifiedArray(example2_length, example2_updates)); // Expected: [1, 1, 0] 