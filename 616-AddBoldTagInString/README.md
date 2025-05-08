# 616. Add Bold Tag in String

## Problem Description

This problem requires adding bold tags (`<b></b>`) to specified substrings in a given string. If two substrings overlap or are adjacent, they should be merged into a single bold tag.

### Examples:

**Example 1:**
```
Input: s = "abcxyz123", dict = ["abc","123"]
Output: "<b>abc</b>xyz<b>123</b>"
```

**Example 2:**
```
Input: s = "aaabbcc", dict = ["aaa","aab","bc"]
Output: "<b>aaabbc</b>c"
```

**Explanation:**
- "aaa" appears at position [0,2]
- "aab" appears at position [1,3]
- "bc" appears at position [4,5]
- Ranges [0,2], [1,3], [4,5] are merged into [0,5], so the result is "<b>aaabbc</b>c".

### Constraints:
- The length of s will not exceed 1000.
- The length of dict will not exceed 100.
- The length of each word in dict will not exceed 1000.
- Words in dict contain only lowercase letters.

## Complexity Analysis

### Method 1: Position Marking
- **Time**: O(n * m * k), where n is the length of s, m is the number of words in dict, and k is the average length of words in dict.
- **Space**: O(n) for the marking array.

### Method 2: Using Trie
- **Time**: O(n * l + m * k), where n is the length of s, m is the number of words in dict, k is the average length of words in dict, and l is the average length of words found starting from position i.
- **Space**: O(m * k) for the Trie and O(n) for the marking array.

## Solution Approach

### Method 1: Marking positions of characters to be bolded

Step 1: Create a boolean array with the same length as the input string to mark characters that need to be bolded.

Step 2: For each position i in string s, check if any word in the dictionary appears starting from position i. If so, mark all characters of that word as needing to be bolded.

Step 3: Iterate through the boolean array to add `<b>` and `</b>` tags to the result string at appropriate positions:
- Add `<b>` when encountering a character that needs to be bolded and the previous character doesn't need to be bolded (or it's the first character).
- Add `</b>` when encountering a character that needs to be bolded and the next character doesn't need to be bolded (or it's the last character).

```typescript
function addBoldTag(s: string, dict: string[]): string {
    // Create a boolean array to mark characters that need to be bolded
    const bold: boolean[] = new Array(s.length).fill(false);
    
    // Mark all characters that need to be bolded
    for (let i = 0; i < s.length; i++) {
        for (const word of dict) {
            if (s.substring(i, i + word.length) === word) {
                for (let j = i; j < i + word.length; j++) {
                    bold[j] = true;
                }
            }
        }
    }
    
    // Build the result string
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (bold[i] && (i === 0 || !bold[i - 1])) {
            result += '<b>';
        }
        
        result += s[i];
        
        if (bold[i] && (i === s.length - 1 || !bold[i + 1])) {
            result += '</b>';
        }
    }
    
    return result;
}
```

### Method 2: Using Trie to optimize word search

Step 1: Build a Trie from the dictionary to optimize the process of finding words.

Step 2: For each position i in string s, use the Trie to find all words starting from position i. Mark all characters of found words as needing to be bolded.

Step 3: Iterate through the boolean array to add `<b>` and `</b>` tags to the result string at appropriate positions, similar to Method 1.

```typescript
class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;

    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

function addBoldTagOptimized(s: string, dict: string[]): string {
    // Build Trie from dictionary
    const root = new TrieNode();
    for (const word of dict) {
        let node = root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char)!;
        }
        node.isEndOfWord = true;
    }
    
    // Array to mark characters that need to be bolded
    const bold: boolean[] = new Array(s.length).fill(false);
    
    // Find all words in s and mark them
    for (let i = 0; i < s.length; i++) {
        let node = root;
        for (let j = i; j < s.length; j++) {
            const char = s[j];
            if (!node.children.has(char)) break;
            
            node = node.children.get(char)!;
            if (node.isEndOfWord) {
                // Mark all characters from i to j
                for (let k = i; k <= j; k++) {
                    bold[k] = true;
                }
            }
        }
    }
    
    // Build the result string
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (bold[i] && (i === 0 || !bold[i - 1])) {
            result += '<b>';
        }
        
        result += s[i];
        
        if (bold[i] && (i === s.length - 1 || !bold[i + 1])) {
            result += '</b>';
        }
    }
    
    return result;
}
```

## Source
[LeetCode Problem 616: Add Bold Tag in String](https://leetcode.com/problems/add-bold-tag-in-string/) 