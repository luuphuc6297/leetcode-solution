/**
 * 1100. Find K-Length Substrings With No Repeated Characters
 * https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/
 *
 * Given a string s and an integer k, return the number of substrings in s of length k
 * with no repeated characters.
 */

export function numKLenSubstrNoRepeats(s: string, k: number): number {
    const n = s.length;
    
    // Edge cases
    if (n < k || k > 26) return 0; // Can't have k > 26 with no repeats (max 26 lowercase letters)
    
    let count = 0;
    
    // Use sliding window approach
    const charCount = new Map<string, number>();
    
    // Initialize first window
    for (let i = 0; i < k; i++) {
        charCount.set(s[i], (charCount.get(s[i]) || 0) + 1);
    }
    
    // If first window has no repeats, increment count
    if (isValidWindow(charCount)) {
        count++;
    }
    
    // Slide the window
    for (let i = k; i < n; i++) {
        // Remove the leftmost character
        const leftChar = s[i - k];
        charCount.set(leftChar, charCount.get(leftChar)! - 1);
        if (charCount.get(leftChar) === 0) {
            charCount.delete(leftChar);
        }
        
        // Add the new rightmost character
        const rightChar = s[i];
        charCount.set(rightChar, (charCount.get(rightChar) || 0) + 1);
        
        // Check if current window has no repeats
        if (isValidWindow(charCount)) {
            count++;
        }
    }
    
    return count;
}

// Helper function to check if a window has no repeated characters
function isValidWindow(charCount: Map<string, number>): boolean {
    // Window has no repeats if every character appears exactly once
    for (const count of charCount.values()) {
        if (count > 1) return false;
    }
    return true;
}

// Example test cases
console.log(numKLenSubstrNoRepeats("havefunonleetcode", 5)); // Expected: 6
console.log(numKLenSubstrNoRepeats("home", 5)); // Expected: 0 