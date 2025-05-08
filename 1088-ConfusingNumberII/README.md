# 1088. Confusing Number II

## Problem Description

A confusing number is a number that when rotated 180 degrees becomes a different number from the original.

We can rotate digits 0, 1, 6, 8, 9 to become 0, 1, 9, 8, 6 respectively.
Digits 2, 3, 4, 5, 7 cannot be rotated.

The task of this problem is to count the number of confusing numbers from 1 to N.

### Examples

**Example 1:**
```
Input: N = 20
Output: 6
Explanation: The confusing numbers are 6, 9, 10, 16, 18, 19.
```

**Example 2:**
```
Input: N = 100
Output: 19
```

### Constraints
- 1 <= N <= 10^9

## Complexity Analysis
- **Time**: O(5^D), where D is the number of digits in N
- **Space**: O(D), where D is the number of digits in N

## Solution Approach

This problem can be solved using a DFS algorithm combined with backtracking:

1. Only use digits 0, 1, 6, 8, 9 to create new numbers (since only these digits can be rotated).
2. Create numbers from left to right, ensuring that the number doesn't exceed N.
3. For each number created, check if it's a confusing number by rotating it 180 degrees and comparing with the original number.

## Source Code

```typescript
function confusingNumberII(N: number): number {
    // Digit rotation mapping
    const rotationMap: { [key: string]: string } = {
        '0': '0',
        '1': '1',
        '6': '9',
        '8': '8',
        '9': '6'
    };
    
    // Valid digits that can be used to create confusing numbers
    const validDigits = ['0', '1', '6', '8', '9'];
    
    let count = 0;
    
    // Check if a number is confusing
    function isConfusing(num: string): boolean {
        let rotated = '';
        for (let i = num.length - 1; i >= 0; i--) {
            rotated += rotationMap[num[i]];
        }
        return rotated !== num;
    }
    
    // Use DFS to generate all possible numbers
    function dfs(current: string, limit: string): void {
        if (current !== '' && parseInt(current) <= parseInt(limit)) {
            // Check if current number is confusing
            if (isConfusing(current)) {
                count++;
            }
        }
        
        // Try adding each valid digit to the current number
        for (const digit of validDigits) {
            // Avoid numbers starting with 0
            if (current === '' && digit === '0') {
                continue;
            }
            
            const next = current + digit;
            
            // Check if the new number exceeds the limit N
            if (next.length > limit.length || 
                (next.length === limit.length && next > limit)) {
                continue;
            }
            
            dfs(next, limit);
        }
    }
    
    dfs('', N.toString());
    return count;
}
```

## Source
[LeetCode Problem 1088: Confusing Number II](https://leetcode.com/problems/confusing-number-ii/) 