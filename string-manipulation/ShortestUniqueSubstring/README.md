# Shortest Unique Substring

## Problem Description

Write a function `solution` that, given a string S of length N, returns the length of the shortest unique substring of S, that is, the length of the shortest word which occurs in exactly once.

## Examples

**Example 1:**
```
Input: S = "abaaba"
Output: 2
Explanation: The shortest unique substring of S is "aa".
```

**Example 2:**
```
Input: S = "zyzyzyz" 
Output: 5
Explanation: The shortest unique substring of S is "zyzyz". Note that there are shorter words, like "zyz", occurrences of which overlap, but they still count as multiple occurrences.
```

**Example 3:**
```
Input: S = "aabbbabaa"
Output: 3
Explanation: All substrings of size 2 occurs in S at least twice.
```

## Constraints:
- N is an integer within the range [1...200]
- String S is made only of lowercase letters (a-z)

## Approach

The problem can be solved by checking substrings of increasing length until we find one that occurs exactly once:

1. Start with substrings of length 1
2. For each length, generate all possible substrings and count their occurrences
3. After generating all substrings of a given length, check if any appear exactly once
4. Return the length of the first unique substring found
5. If no unique substrings exist, return 0

Time Complexity: O(n³) where n is the length of the string - O(n²) substrings, each taking O(n) to check
Space Complexity: O(n²) for storing all possible substrings and their counts 