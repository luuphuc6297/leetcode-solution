# 3. Longest Substring Without Repeating Characters

## Problem Description

Given a string `s`, find the length of the longest substring without repeating characters.

## Examples

**Example 1:**
```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

**Example 2:**
```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

**Example 3:**
```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

## Constraints:
- `0 <= s.length <= 5 * 10^4`
- `s` consists of English letters, digits, symbols and spaces.

## Approach

This problem can be efficiently solved using the sliding window technique:

1. Maintain a sliding window that contains characters without repeats
2. Use a hash map to store the most recent position of each character
3. When encountering a character that's already in the window, shrink the window from the left to exclude the previous occurrence
4. Track the maximum window size throughout the process

### Implementation Details:

1. Initialize a hash map to store the last seen position of each character
2. Use two pointers: `start` (left edge of window) and `end` (right edge of window)
3. For each character at position `end`:
   - If the character has been seen before and is within the current window, move the `start` pointer to exclude the previous occurrence
   - Update the character's last seen position
   - Update the maximum length if the current window is larger

Time Complexity: O(n) where n is the length of the string
Space Complexity: O(min(m, n)) where m is the size of the character set (at most 26 for lowercase English letters) 