# 131. Palindrome Partitioning

## Problem Description

Given a string `s`, partition the string into some number of substrings such that each substring is a palindrome. Return all possible palindrome partitioning of `s`.

A palindrome string is a string that reads the same backward as forward.

## Examples

**Example 1:**
```
Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
```

**Example 2:**
```
Input: s = "a"
Output: [["a"]]
```

## Constraints:
- `1 <= s.length <= 16`
- `s` contains only lowercase English letters.

## Approach

This problem can be efficiently solved using the Backtracking technique:

1. Use Depth-First Search (DFS) to find all possible ways to partition the string
2. From each position in the string, consider the next possible substring if it's a palindrome
3. If a substring is a palindrome, add it to the current result and continue finding the next substrings
4. Use backtracking to explore all possibilities

**Algorithm:**
1. Create a function to check if a string is a palindrome
2. Use DFS starting from the first position of the string
3. For each position, try all possible substrings that can start from that position
4. If the substring is a palindrome, add it to the current path and continue searching from the next position
5. If we've reached the end of the string, add the current path to the result list

Time Complexity: O(N * 2^N) where N is the length of the string
Space Complexity: O(N) for recursion and O(2^N) for results 