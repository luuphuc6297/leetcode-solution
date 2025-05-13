# 1062. Longest Repeating Substring

## Problem Description

Given a string `s`, find the length of the longest repeating substring in it. A repeating substring is a substring that occurs at least twice in the string and may overlap.

If no repeating substring exists, return 0.

## Examples

**Example 1:**
```
Input: s = "abcd"
Output: 0
Explanation: There is no repeating substring.
```

**Example 2:**
```
Input: s = "abbaba"
Output: 2
Explanation: The longest repeating substrings are "ab" and "ba", each of which occurs twice.
```

**Example 3:**
```
Input: s = "aabcaabdaab"
Output: 3
Explanation: The longest repeating substring is "aab", which occurs 3 times.
```

## Constraints:
- `1 <= s.length <= 2000`
- `s` consists of lowercase English letters.

## Approach

This problem can be efficiently solved using binary search and hash set:

### Binary Search Approach:

1. Use binary search to find the length of the longest repeating substring
2. For each possible length, check if there's a repeating substring of that length
3. If found, try to find a longer repeating substring
4. If not found, try a shorter length

### Implementation Details:

1. Define a helper function `hasDuplicateSubstring(s, len)` that checks if there's any substring of length `len` that appears at least twice in `s`:
   - Use a hash set to store seen substrings
   - For each possible starting position, check if that substring has been seen before

2. Binary search between length 1 and n (string length) to find the maximum length of a repeating substring

Time Complexity: O(n²) - where n is the length of the string.
- Binary search takes O(log n)
- For each binary search step, checking for duplicate substrings takes O(n²) in the worst case

Space Complexity: O(n²) for storing all potential substrings in the hash set 