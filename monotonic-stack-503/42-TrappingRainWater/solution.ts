/**
 * 42. Trapping Rain Water
 * https://leetcode.com/problems/trapping-rain-water/
 * 
 * Given n non-negative integers representing an elevation map where the width of each bar is 1,
 * compute how much water it can trap after raining.
 * 
 * Examples:
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * Explanation: The elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
 * In this case, 6 units of rain water are being trapped.
 * 
 * Input: height = [4,2,0,3,2,5]
 * Output: 9
 * 
 * Constraints:
 * n == height.length
 * 1 <= n <= 2 * 10^4
 * 0 <= height[i] <= 10^5
 */

/**
 * Approach 1: Using a monotonic stack
 * 
 * Time Complexity: O(n) where n is the length of the height array
 * Space Complexity: O(n) for the stack
 */
export function trap(height: number[]): number {
    const n = height.length;
    let water = 0;
    const stack: number[] = []; // Monotonic decreasing stack of indices
    
    for (let i = 0; i < n; i++) {
        // While the current height is greater than the height at the top of the stack
        while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
            const top = stack.pop()!;
            
            // If the stack is empty, no left boundary
            if (stack.length === 0) {
                break;
            }
            
            // Calculate the left boundary index
            const left = stack[stack.length - 1];
            
            // Calculate the width between the boundaries
            const width = i - left - 1;
            
            // Calculate the height of the trapped water (min of boundaries - height of the popped element)
            const boundedHeight = Math.min(height[i], height[left]) - height[top];
            
            // Add the trapped water
            water += width * boundedHeight;
        }
        
        stack.push(i);
    }
    
    return water;
}

/**
 * Approach 2: Two Pointers Technique
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function trapTwoPointers(height: number[]): number {
    const n = height.length;
    if (n <= 2) return 0;
    
    let left = 0;
    let right = n - 1;
    let leftMax = height[left];
    let rightMax = height[right];
    let water = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            // Move from left
            left++;
            leftMax = Math.max(leftMax, height[left]);
            water += leftMax - height[left];
        } else {
            // Move from right
            right--;
            rightMax = Math.max(rightMax, height[right]);
            water += rightMax - height[right];
        }
    }
    
    return water;
}

/**
 * Approach 3: Dynamic Programming
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export function trapDP(height: number[]): number {
    const n = height.length;
    if (n <= 2) return 0;
    
    // Arrays to store the maximum height to the left and right at each position
    const leftMax = new Array(n).fill(0);
    const rightMax = new Array(n).fill(0);
    
    // Fill leftMax array
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }
    
    // Fill rightMax array
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }
    
    // Calculate trapped water
    let water = 0;
    for (let i = 0; i < n; i++) {
        water += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    
    return water;
} 