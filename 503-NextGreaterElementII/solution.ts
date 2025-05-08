/**
 * 503. Next Greater Element II
 * https://leetcode.com/problems/next-greater-element-ii/
 *
 * Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]),
 * return the next greater number for every element in nums.
 */

export function nextGreaterElements(nums: number[]): number[] {
    const n = nums.length
    const result = new Array(n).fill(-1)
    const stack: number[] = []

    // Check twice to handle circular array
    for (let i = 0; i < n * 2; i++) {
        const num = nums[i % n]

        // When current number is greater than the number at the stack top,
        // it's the next greater element for the index at stack top
        while (stack.length > 0 && nums[stack[stack.length - 1]] < num) {
            result[stack.pop()!] = num
        }

        // Only push index to stack in the first iteration
        if (i < n) {
            stack.push(i)
        }
    }

    return result
}

// Example test cases
const example1 = [1, 2, 1]
console.log(nextGreaterElements(example1)) // Expected: [2, -1, 2]

const example2 = [1, 2, 3, 4, 3]
console.log(nextGreaterElements(example2)) // Expected: [2, 3, 4, -1, 4]
