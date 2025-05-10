# 992. Subarrays with K Different Integers

## Problem Description

Given an integer array `nums` and an integer `k`, return the number of good subarrays of `nums`.

A good array is an array where the number of different integers in that array is exactly `k`.

A subarray is a contiguous part of an array.

## Examples

**Example 1:**
```
Input: nums = [1,2,1,2,3], k = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]
```

**Example 2:**
```
Input: nums = [1,2,1,3,4], k = 3
Output: 3
Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4]
```

## Constraints:
- `1 <= nums.length <= 2 * 10^4`
- `1 <= nums[i], k <= nums.length`

## Approach

This problem can be efficiently solved using the sliding window technique. However, directly counting subarrays with exactly k different integers is challenging. Instead, we can use a clever approach:

Number of subarrays with exactly k different integers = Number of subarrays with at most k different integers - Number of subarrays with at most (k-1) different integers

We implement a helper function `atMostK(nums, k)` that counts the number of subarrays with at most k different integers:

1. Use a sliding window to maintain a window with at most k different integers
2. For each right pointer position, count how many valid subarrays end at that position
3. The count is (right - left + 1), representing all subarrays ending at right and starting at or after left

**Algorithm:**
1. Define a helper function `atMostK(nums, k)` that returns the number of subarrays with at most k different integers
2. Return `atMostK(nums, k) - atMostK(nums, k-1)` for the final result

Time Complexity: O(n) where n is the length of the array
Space Complexity: O(k) for the hash map to store frequency counts 