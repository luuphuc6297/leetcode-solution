/**
 * 1062. Longest Repeating Substring
 * https://leetcode.com/problems/longest-repeating-substring/
 *
 * Given a string s, find the length of the longest repeating substring in it.
 * A repeating substring is a substring that occurs at least twice in the string.
 * If no repeating substring exists, return 0.
 */

export function longestRepeatingSubstring(s: string): number {
    const n = s.length;
    
    let left = 1;
    let right = n;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (hasDuplicateSubstring(s, mid)) {
            left = mid + 1; // Try to find a longer repeating substring
        } else {
            right = mid - 1; // Try to find a shorter repeating substring
        }
    }
    
    // right will be the length of the longest repeating substring
    return right;
}

// Helper function to check if there's a duplicate substring of length len
function hasDuplicateSubstring(s: string, len: number): boolean {
    const n = s.length;
    const seen = new Set<string>();
    
    for (let i = 0; i <= n - len; i++) {
        const substring = s.substring(i, i + len);
        if (seen.has(substring)) {
            return true;
        }
        seen.add(substring);
    }
    
    return false;
}

// Example test cases
console.log(longestRepeatingSubstring("abcd")); // Expected: 0
console.log(longestRepeatingSubstring("abbaba")); // Expected: 2 (for "ab" or "ba")
console.log(longestRepeatingSubstring("aabcaabdaab")); // Expected: 3 (for "aab") 