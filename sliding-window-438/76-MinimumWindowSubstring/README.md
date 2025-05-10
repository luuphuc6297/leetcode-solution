# 76. Minimum Window Substring

## Problem Description

Given two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string `""`.

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.

## Examples

**Example 1:**
```
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
```

**Example 2:**
```
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
```

**Example 3:**
```
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
```

## Constraints:
- `m == s.length`
- `n == t.length`
- `1 <= m, n <= 10^5`
- `s` and `t` consist of uppercase and lowercase English letters.

## Approach

This problem can be efficiently solved using the sliding window technique:

1. Create a frequency map of characters in string `t`
2. Use two pointers, left and right, to create a sliding window
3. Extend the window by moving the right pointer until all characters in `t` are covered
4. Contract the window by moving the left pointer to find the minimum window
5. Keep track of the minimum window seen so far

**Algorithm:**
1. Create frequency maps for `t` and the current window
2. Move the right pointer to expand the window until all characters in `t` are covered
3. Once all characters are covered, move the left pointer to minimize the window
4. Keep track of the minimum window seen and its position
5. Return the minimum window substring

Time Complexity: O(m + n) where m and n are the lengths of strings s and t
Space Complexity: O(m + n) for the hash maps 