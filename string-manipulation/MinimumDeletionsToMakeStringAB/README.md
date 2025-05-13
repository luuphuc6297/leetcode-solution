# MinimumDeletionsToMakeStringAB

## Problem Description

We are given a string S of length N consisting only of letters 'A' and/or 'B'. Our goal is to obtain a string in the format "A...AB...B" (all letters 'A' occur before all letters 'B') by deleting some letters from S. In particular, strings consisting only of letters 'A' or only of letters 'B' fit this format.

Write a function that returns the minimum number of letters that need to be deleted from S in order to obtain a string in the above format.

## Examples

**Example 1:**
```
Input: S = "BAAABAB"
Output: 2
Explanation: We can obtain "AAABB" by deleting the first occurrence of 'B' and the last occurrence of 'A'.
```

**Example 2:**
```
Input: S = "BBABAA"
Output: 3
Explanation: We can delete all occurrences of 'A' or all occurrences of 'B'.
```

**Example 3:**
```
Input: S = "AABBBB"
Output: 0
Explanation: We do not have to delete any letters, because the given string is already in the expected format.
```

## Constraints:
- N is an integer within the range [1...100,000]
- String S is made only of the characters 'A' and/or 'B'

## Approach

The problem can be solved using a greedy approach:

1. Count the total number of 'B's in the string
2. For each possible dividing point i (from 0 to n):
   - Consider all 'B's before position i need to be deleted
   - Consider all 'A's after position i need to be deleted
   - Calculate the total deletions needed for this division point
3. Return the minimum number of deletions found

Time Complexity: O(n) where n is the length of the string
Space Complexity: O(1) 