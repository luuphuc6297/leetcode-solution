/**
 * 1944. Number of Visible People in a Queue
 * https://leetcode.com/problems/number-of-visible-people-in-a-queue/
 * 
 * There are n people standing in a queue, and they numbered from 0 to n - 1 in left to right order.
 * You are given an array heights of distinct integers where heights[i] represents the height of the ith person.
 * 
 * A person can see another person to their right in the queue if everybody in between is shorter than both of them.
 * More formally, the ith person can see the jth person if i < j and min(heights[i], heights[j]) > max(heights[i+1], heights[i+2], ..., heights[j-1]).
 * 
 * Return an array answer of length n where answer[i] is the number of people the ith person can see to their right in the queue.
 * 
 * Examples:
 * Input: heights = [10,6,8,5,11,9]
 * Output: [3,1,2,1,1,0]
 * Explanation:
 * Person 0 can see person 1, 2, and 4.
 * Person 1 can see person 2.
 * Person 2 can see person 3 and 4.
 * Person 3 can see person 4.
 * Person 4 can see person 5.
 * Person 5 can see no one since nobody is to the right of them.
 * 
 * Input: heights = [5,1,2,3,10]
 * Output: [4,1,1,1,0]
 * 
 * Constraints:
 * n == heights.length
 * 1 <= n <= 10^5
 * 1 <= heights[i] <= 10^5
 * All the values of heights are unique.
 */

/**
 * Approach 1: Using Monotonic Stack (from right to left)
 * 
 * We use a monotonic decreasing stack to keep track of taller people to the right.
 * For each person, we pop all shorter people from the stack since they won't be visible to anyone
 * to the left of the current person (the current person blocks them).
 * 
 * Time Complexity: O(n) where n is the number of people
 * Space Complexity: O(n) for the stack
 */
export function canSeePersonsCount(heights: number[]): number[] {
    const n = heights.length;
    const result = new Array(n).fill(0);
    const stack: number[] = []; // Stack to store indices of people
    
    // Process from right to left
    for (let i = n - 1; i >= 0; i--) {
        // Count how many people the current person can see
        let count = 0;
        
        // Pop all shorter people from the stack, as the current person can see them
        while (stack.length > 0 && heights[i] > heights[stack[stack.length - 1]]) {
            stack.pop();
            count++;
        }
        
        // If there's still someone in the stack, the current person can see them too
        // (this is the first taller or equal height person to the right)
        if (stack.length > 0) {
            count++;
        }
        
        result[i] = count;
        
        // Push the current person to the stack
        stack.push(i);
    }
    
    return result;
}

/**
 * Approach 2: Using Monotonic Stack (from left to right)
 * 
 * We traverse from left to right, maintaining a monotonic decreasing stack of people.
 * For each person, we pop shorter or equal height people from the stack and increment their count.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export function canSeePersonsCountLeftToRight(heights: number[]): number[] {
    const n = heights.length;
    const result = new Array(n).fill(0);
    const stack: number[] = []; // Stack to store indices of people
    
    // Process from left to right
    for (let i = 0; i < n; i++) {
        // For each person already in the stack, if they're shorter than the current person,
        // they can see the current person, and we should pop them from the stack
        while (stack.length > 0 && heights[stack[stack.length - 1]] < heights[i]) {
            result[stack.pop()!]++;
        }
        
        // For the remaining people in the stack, if they're taller than the current person,
        // they can see the current person
        if (stack.length > 0) {
            result[stack[stack.length - 1]]++;
        }
        
        // Push the current person onto the stack
        stack.push(i);
    }
    
    return result;
}

/**
 * Approach 3: Next Greater Element Pattern
 * 
 * This is a classic "next greater element" problem with a slight twist.
 * We keep track of both the next greater element and count visible people.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export function canSeePersonsCountNGE(heights: number[]): number[] {
    const n = heights.length;
    const result = new Array(n).fill(0);
    const stack: number[] = []; // Monotonic decreasing stack of indices
    
    for (let i = 0; i < n; i++) {
        // While the current person is taller than the people in the stack
        while (stack.length > 0 && heights[stack[stack.length - 1]] <= heights[i]) {
            // The person at the top of the stack can see the current person
            result[stack.pop()!]++;
        }
        
        // If there's someone left in the stack, they can see the current person
        if (stack.length > 0) {
            result[stack[stack.length - 1]]++;
        }
        
        // Add the current person to the stack
        stack.push(i);
    }
    
    return result;
} 