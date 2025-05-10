/**
 * 992. Subarrays with K Different Integers
 * https://leetcode.com/problems/subarrays-with-k-different-integers/
 *
 * Given an integer array nums and an integer k, return the number of good subarrays of nums.
 *
 * A good array is an array where the number of different integers in that array is exactly k.
 *
 * A subarray is a contiguous part of an array.
 */

export function subarraysWithKDistinct(nums: number[], k: number): number {
    // Helper function that counts subarrays with at most K distinct integers
    const atMostK = (nums: number[], k: number): number => {
        const count = new Map<number, number>();
        let result = 0;
        let left = 0;
        
        for (let right = 0; right < nums.length; right++) {
            // Add the new element to our window
            count.set(nums[right], (count.get(nums[right]) || 0) + 1);
            
            // Shrink the window until we have at most k distinct integers
            while (count.size > k) {
                const leftVal = nums[left];
                count.set(leftVal, count.get(leftVal)! - 1);
                
                if (count.get(leftVal) === 0) {
                    count.delete(leftVal);
                }
                
                left++;
            }
            
            // Add the count of valid subarrays that end at 'right'
            result += right - left + 1;
        }
        
        return result;
    };
    
    // The number of subarrays with exactly K distinct integers
    // = (subarrays with at most K distinct) - (subarrays with at most K-1 distinct)
    return atMostK(nums, k) - atMostK(nums, k - 1);
}

// Example test cases
const example1 = [1,2,1,2,3];
const k1 = 2;
console.log(subarraysWithKDistinct(example1, k1)); // Expected: 7

const example2 = [1,2,1,3,4];
const k2 = 3;
console.log(subarraysWithKDistinct(example2, k2)); // Expected: 3 