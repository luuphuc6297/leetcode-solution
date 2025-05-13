# 1100. Find K-Length Substrings With No Repeated Characters

## Problem Description

Given a string `s` and an integer `k`, return the number of substrings in `s` of length `k` with no repeated characters.

## Examples

**Example 1:**
```
Input: s = "havefunonleetcode", k = 5
Output: 6
Explanation: There are 6 substrings of length 5 that have no repeated characters: "havefu", "avefun", "vefuno", "efunon", "funon", "letter"
Note that "leetco" is not counted because it contains the repeated character 'e'.
```

**Example 2:**
```
Input: s = "home", k = 5
Output: 0
Explanation: There are no substrings of length 5 in the given string.
```

## Constraints:
- `1 <= s.length <= 10^4`
- `1 <= k <= 26`
- `s` consists of lowercase English letters.

## Approach

This problem can be efficiently solved using the sliding window technique:

1. Use a sliding window of size `k` to check each substring
2. For each window, maintain a count of character occurrences
3. A window is valid if no character appears more than once

### Implementation Details:

1. Initialize a character frequency map for the first window of k characters
2. Check if the first window is valid (no repeats)
3. Slide the window through the string:
   - Remove the leftmost character from the frequency map
   - Add the new rightmost character to the frequency map
   - Check if the current window has no repeated characters
4. Count all valid windows found

**Optimizations:**
- Return 0 immediately if k > 26, as no substring can have more than 26 different characters (lowercase English letters)
- Return 0 if the string length is less than k

Time Complexity: O(n) where n is the length of the string
Space Complexity: O(min(k, 26)) for storing character counts in the current window 