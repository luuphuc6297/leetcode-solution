/**
 * 76. Minimum Window Substring
 * https://leetcode.com/problems/minimum-window-substring/
 *
 * Given two strings s and t of lengths m and n respectively,
 * return the minimum window substring of s such that every character
 * in t (including duplicates) is included in the window.
 * If there is no such substring, return the empty string "".
 *
 * The testcases will be generated such that the answer is unique.
 */

export function minWindow(s: string, t: string): string {
    if (s.length === 0 || t.length === 0 || s.length < t.length) return "";
    
    // Create frequency map for characters in t
    const targetMap = new Map<string, number>();
    for (const char of t) {
        targetMap.set(char, (targetMap.get(char) || 0) + 1);
    }
    
    // Initialize variables
    const windowMap = new Map<string, number>();
    let required = targetMap.size;
    let formed = 0;
    let left = 0;
    let right = 0;
    let minLen = Infinity;
    let resultStart = 0;
    
    // Slide the window
    while (right < s.length) {
        // Expand the window
        const rightChar = s[right];
        windowMap.set(rightChar, (windowMap.get(rightChar) || 0) + 1);
        
        // Check if this character contributes to a desired character count
        if (targetMap.has(rightChar) && windowMap.get(rightChar) === targetMap.get(rightChar)) {
            formed++;
        }
        
        // Try to contract the window
        while (left <= right && formed === required) {
            const leftChar = s[left];
            
            // Update the result if this window is smaller
            const windowLen = right - left + 1;
            if (windowLen < minLen) {
                minLen = windowLen;
                resultStart = left;
            }
            
            // Remove the leftmost character
            windowMap.set(leftChar, windowMap.get(leftChar)! - 1);
            
            // Check if the removal breaks the required condition
            if (targetMap.has(leftChar) && windowMap.get(leftChar)! < targetMap.get(leftChar)!) {
                formed--;
            }
            
            left++;
        }
        
        right++;
    }
    
    return minLen === Infinity ? "" : s.substring(resultStart, resultStart + minLen);
}

// Example test cases
const s1 = "ADOBECODEBANC";
const t1 = "ABC";
console.log(minWindow(s1, t1)); // Expected: "BANC"

const s2 = "a";
const t2 = "a";
console.log(minWindow(s2, t2)); // Expected: "a"

const s3 = "a";
const t3 = "aa";
console.log(minWindow(s3, t3)); // Expected: ""