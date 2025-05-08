/**
 * 364. Nested List Weight Sum II
 * https://leetcode.com/problems/nested-list-weight-sum-ii/
 *
 * Given a nested list of integers, return the sum of all integers in the list
 * weighted by their depth.
 *
 * Each element is either an integer, or a list -- whose elements may also be
 * integers or other lists.
 *
 * Different from the previous question where weight is increasing from root to leaf,
 * now the weight is defined from bottom up. i.e., the leaf level integers have weight 1,
 * and the root level integers have the largest weight.
 */

// This is the interface that allows for creating nested lists.
// You should not implement it, or speculate about its implementation
interface NestedInteger {
    // If this NestedInteger holds a single integer, return true, otherwise return false.
    isInteger(): boolean

    // If this NestedInteger holds a single integer, return it, otherwise return null.
    getInteger(): number | null

    // If this NestedInteger holds a list of NestedInteger, return them, otherwise return an empty list.
    getList(): NestedInteger[]
}

export function depthSumInverse(nestedList: NestedInteger[]): number {
    // Implement your solution here
    return 0
}

// Note: Since the NestedInteger interface is defined by LeetCode,
// we cannot directly test this code in a standalone environment.
// For testing, you would submit this solution on LeetCode directly.

// Example 1: [[1,1],2,[1,1]] would return 8
// (four 1's with weight 1, one 2 with weight 2)

// Example 2: [1,[4,[6]]] would return 17
// (one 1 with weight 3, one 4 with weight 2, and one 6 with weight 1)
