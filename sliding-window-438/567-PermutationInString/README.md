# 567. Permutation in String

## Problem Description

Given two strings `s1` and `s2`, return `true` if `s2` contains a permutation of `s1`, or `false` otherwise.

In other words, return `true` if one of `s1`'s permutations is the substring of `s2`.

## Examples

**Example 1:**
```
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
```

**Example 2:**
```
Input: s1 = "ab", s2 = "eidboaoo"
Output: false
```

## Constraints:
- `1 <= s1.length, s2.length <= 10^4`
- `s1` and `s2` consist of lowercase English letters.

## Approach

This problem can be efficiently solved using the sliding window technique combined with character frequency counting:

1. Create a frequency map of characters in s1
2. Use a sliding window of length s1.length to check each substring of s2
3. For each window, compare the character frequencies with those of s1
4. If they match, return true

**Algorithm:**
1. Create frequency arrays for both strings
2. Initialize a sliding window of size s1.length in s2
3. Move the window through s2, updating character counts
4. For each window position, check if the character frequencies match those of s1
5. If a match is found, return true; otherwise, return false after checking all windows

Time Complexity: O(n) where n is the length of s2
Space Complexity: O(1) since we're using fixed-size arrays for character frequencies (26 lowercase English letters) 