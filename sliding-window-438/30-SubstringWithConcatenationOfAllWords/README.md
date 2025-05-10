# 30. Substring with Concatenation of All Words

## Problem Description

You are given a string `s` and an array of strings `words` of the same length. Return all starting indices of substring(s) in `s` that is a concatenation of each word in `words` exactly once, in any order, and without any intervening characters.

You can return the answer in any order.

## Examples

**Example 1:**
```
Input: s = "barfoothefoobarman", words = ["foo","bar"]
Output: [0,9]
Explanation:
Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
The output order does not matter, returning [9,0] is fine too.
```

**Example 2:**
```
Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
Output: []
```

**Example 3:**
```
Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
Output: [6,9,12]
```

## Constraints:
- `1 <= s.length <= 10^4`
- `1 <= words.length <= 5000`
- `1 <= words[i].length <= 30`
- `s` and `words[i]` consist of lowercase English letters.

## Approach

Since all words have the same length, we can use a sliding window approach combined with a hash map to efficiently solve this problem:

1. Create a frequency map of all words in the `words` array
2. Iterate through possible starting positions in the string
3. For each position, check if a valid concatenation of all words exists starting at that position
4. Use a hash map to keep track of seen words and their counts during the check

**Algorithm:**
1. Calculate the length of each word and the total length of all words combined
2. For each position i from 0 to (s.length - totalLength):
   a. Create a hash map to count words seen so far
   b. Try to match each word in the sliding window
   c. If all words can be matched exactly once, add the starting index to the result

Time Complexity: O(N * M * L) where:
- N is the length of the string
- M is the number of words
- L is the length of each word

Space Complexity: O(M) for the hash maps 