/**
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * Given a string s, find the length of the longest substring without repeating characters.
 */

export function lengthOfLongestSubstring(s: string): number {
    // Edge case: empty string
    if (s.length === 0) return 0;
    
    const n = s.length;
    let maxLength = 0;
    
    // Map to store the last position of each character
    const lastPosition = new Map<string, number>();
    
    // Start position of current window
    let start = 0;
    
    for (let end = 0; end < n; end++) {
        const char = s[end];
        
        // If the current character has been seen and is within the current window
        if (lastPosition.has(char) && lastPosition.get(char)! >= start) {
            // Move the window's start pointer to one position after the last occurrence
            start = lastPosition.get(char)! + 1;
        }
        
        // Update the last position of the current character
        lastPosition.set(char, end);
        
        // Update the maximum length
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
}

// Example test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3 (for "abc")
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1 (for "b")
console.log(lengthOfLongestSubstring("pwwkew")); // Expected: 3 (for "wke") 