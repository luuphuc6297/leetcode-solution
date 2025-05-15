/**
 * 457. Circular Array Loop
 * https://leetcode.com/problems/circular-array-loop/
 * 
 * You are playing with a circular array. A circular array is an array that we consider the first element 
 * to be adjacent to the last element. We can shift cyclically on the array.
 * 
 * You are given a circular array nums of positive and negative integers. A cycle in this array is valid if:
 * - The cycle's length is greater than 1.
 * - The direction of the cycle must be the same, meaning either all moving in a positive direction or all moving in a negative direction.
 * - The cycle does not contain any repeating elements except for the starting element.
 * 
 * Return true if there is a valid cycle in nums, or false otherwise.
 * 
 * Examples:
 * Input: nums = [2,-1,1,2,2]
 * Output: true
 * Explanation: There is a cycle from index 0 -> 2 -> 3 -> 0 with a length of 3.
 * 
 * Input: nums = [-1,2]
 * Output: false
 * Explanation: The sequence from index 1 -> 1 has a length of 1. This is not a valid cycle since the length is less than 2.
 * 
 * Input: nums = [-2,1,-1,-2,-2]
 * Output: false
 * Explanation: The sequence 1 -> 0 -> 4 -> 2 -> 1 has a direction change from positive to negative. This is not a valid cycle.
 * 
 * Constraints:
 * 1 <= nums.length <= 5000
 * -1000 <= nums[i] <= 1000
 * nums[i] != 0
 */

/**
 * Approach 1: Fast and Slow Pointers (Floyd's Cycle Detection Algorithm)
 * 
 * Time Complexity: O(n) where n is the length of the array
 * Space Complexity: O(1)
 */
export function circularArrayLoop(nums: number[]): boolean {
    const n = nums.length;
    
    // Helper function to get the next index
    const getNextIndex = (currentIndex: number, direction: number): number => {
        // Calculate the next index based on the value and ensure it's within the array bounds
        // Need to add n before taking modulo to handle negative values
        const nextIndex = ((currentIndex + nums[currentIndex]) % n + n) % n;
        
        // Check if the direction is maintained
        // Both current and next elements should have the same sign (direction)
        const nextDirection = nums[nextIndex] > 0 ? 1 : -1;
        if (nextDirection !== direction) {
            return -1; // Direction changed
        }
        
        // Check if it's a self-loop (cycle of length 1)
        if (nextIndex === currentIndex) {
            return -1; // Self-loop
        }
        
        return nextIndex;
    };
    
    // Check starting from each index
    for (let i = 0; i < n; i++) {
        // Skip if we've marked this element as part of a failed cycle
        if (nums[i] === 0) {
            continue;
        }
        
        // Determine the direction (positive or negative)
        const direction = nums[i] > 0 ? 1 : -1;
        
        // Initialize slow and fast pointers
        let slow = i;
        let fast = i;
        
        // Move pointers
        while (true) {
            // Move slow pointer one step
            slow = getNextIndex(slow, direction);
            if (slow === -1) {
                break; // Invalid path
            }
            
            // Move fast pointer two steps
            fast = getNextIndex(fast, direction);
            if (fast === -1) {
                break; // Invalid path
            }
            
            fast = getNextIndex(fast, direction);
            if (fast === -1) {
                break; // Invalid path
            }
            
            // If slow and fast pointers meet, we found a cycle
            if (slow === fast) {
                return true;
            }
        }
        
        // Mark elements on this path as visited by setting them to 0
        // This is an optimization to avoid rechecking paths that we already know don't lead to valid cycles
        let index = i;
        while (nums[index] * direction > 0) {
            const next = ((index + nums[index]) % n + n) % n;
            nums[index] = 0; // Mark as visited
            if (next === index) {
                break; // Self-loop
            }
            index = next;
        }
    }
    
    return false;
}

/**
 * Approach 2: Using Visited Set to Track Cycles
 * 
 * Time Complexity: O(n) where n is the length of the array
 * Space Complexity: O(n) for the visited sets
 */
export function circularArrayLoopWithSets(nums: number[]): boolean {
    const n = nums.length;
    
    // Check from each index
    for (let start = 0; start < n; start++) {
        // Skip if we've already checked this index or if it's marked as 0
        if (nums[start] === 0) {
            continue;
        }
        
        const direction = nums[start] > 0;
        let currentIndex = start;
        const visited = new Set<number>();
        
        // Follow the path and check for cycles
        while (true) {
            // Add current index to visited set
            visited.add(currentIndex);
            
            // Calculate the next index
            const nextIndex = ((currentIndex + nums[currentIndex]) % n + n) % n;
            
            // Check if direction changes
            if ((nums[nextIndex] > 0) !== direction) {
                break; // Direction changed, not a valid cycle
            }
            
            // Check if it's a self-loop
            if (nextIndex === currentIndex) {
                break; // Self-loop, not a valid cycle
            }
            
            // Check if we've seen this index before (cycle detected)
            if (visited.has(nextIndex)) {
                // We found a cycle, but need to verify it's a valid one
                return true;
            }
            
            currentIndex = nextIndex;
        }
        
        // Mark all indices in this path as visited (optimization)
        currentIndex = start;
        while (true) {
            const nextIndex = ((currentIndex + nums[currentIndex]) % n + n) % n;
            nums[currentIndex] = 0; // Mark as visited
            
            // If direction changes or it's a self-loop, break
            if ((nums[nextIndex] > 0) !== direction || nextIndex === currentIndex) {
                break;
            }
            
            currentIndex = nextIndex;
        }
    }
    
    return false;
} 