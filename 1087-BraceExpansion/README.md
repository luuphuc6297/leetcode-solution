# 1087. Brace Expansion

## Problem Description

The input string represents a list of words with options enclosed in curly braces `{}`. Each brace contains a comma-separated list of options.

The task is to generate all possible strings from the input string and return them in lexicographical order.

### Examples:

**Example 1:**
```
Input: "{a,b}c{d,e}f"
Output: ["acdf","acef","bcdf","bcef"]
```

**Example 2:**
```
Input: "abcd"
Output: ["abcd"]
```

### Constraints:
- The length of the input string will be between 1 and 50.
- Characters in braces will be lowercase Latin letters with no special characters.
- Each option list will have at least one character.
- All characters in an option list will be unique.
- The input doesn't contain whitespace.

## Complexity Analysis
- **Time**: O(N * 2^m), where N is the length of the input string and m is the number of braces.
- **Space**: O(N), memory used to store the result.

## Solution Approach
This problem can be solved using a Depth-First Search (DFS) approach to generate all possible strings:

1. Parse the input string and distinguish between regular characters and options in braces.
2. Use DFS algorithm to build all possible strings by choosing one option from each brace.
3. Sort the results in lexicographical order.

## Source Code

```typescript
function expand(s: string): string[] {
    const result: string[] = [];
    dfs(s, 0, "", result);
    result.sort();
    return result;
}

function dfs(s: string, index: number, current: string, result: string[]): void {
    if (index === s.length) {
        result.push(current);
        return;
    }
    
    if (s[index] === '{') {
        let options: string[] = [];
        let endIndex = index + 1;
        
        while (s[endIndex] !== '}') {
            endIndex++;
        }
        
        // Extract options from braces
        options = s.substring(index + 1, endIndex).split(',');
        
        for (const option of options) {
            dfs(s, endIndex + 1, current + option, result);
        }
    } else {
        dfs(s, index + 1, current + s[index], result);
    }
}
```

## Source
[LeetCode Problem 1087: Brace Expansion](https://leetcode.com/problems/brace-expansion/) 