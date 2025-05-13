/**
 * 1044. Longest Duplicate Substring
 * https://leetcode.com/problems/longest-duplicate-substring/
 *
 * Given a string s, consider all duplicated substrings: (contiguous) substrings of s that occur 2 or more times.
 * The occurrences may overlap.
 *
 * Return the longest duplicate substring. If there is no duplicate substring, return "".
 */

export function longestDupSubstring(s: string): string {
    const n = s.length;
    
    // Convert string to array of integers to make rolling hash more efficient
    const arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = s.charCodeAt(i) - 97;
    }
    
    // Binary search for the length of the longest duplicate substring
    let left = 1;
    let right = n;
    let result = "";
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const found = findDuplicateSubstring(arr, mid, s);
        
        if (found.length > 0) {
            // Found a duplicate - try to find a longer one
            result = found;
            left = mid + 1;
        } else {
            // No duplicate of this length - try a shorter length
            right = mid - 1;
        }
    }
    
    return result;
}

// Find a duplicate substring of given length
function findDuplicateSubstring(arr: number[], length: number, s: string): string {
    const n = arr.length;
    if (length === 0) return "";
    
    // Use Rabin-Karp algorithm with rolling hash
    const modulus = 2**31 - 1;
    const base = 26; // For lowercase letters
    
    // Calculate hash for the first window
    let hash = 0;
    let power = 1;
    
    for (let i = 0; i < length; i++) {
        hash = (hash * base + arr[i]) % modulus;
        if (i < length - 1) {
            power = (power * base) % modulus;
        }
    }
    
    // Store hash values and their starting positions
    const seen = new Map<number, number[]>();
    seen.set(hash, [0]);
    
    // Check each window using rolling hash
    for (let i = 1; i <= n - length; i++) {
        // Update hash: remove first character and add next character
        hash = ((hash - arr[i - 1] * power) * base + arr[i + length - 1]) % modulus;
        // Handle negative hash
        if (hash < 0) hash += modulus;
        
        // If hash is seen before, check for actual duplicates
        if (seen.has(hash)) {
            const positions = seen.get(hash)!;
            const currentSubstring = s.substring(i, i + length);
            
            for (const pos of positions) {
                const candidate = s.substring(pos, pos + length);
                if (candidate === currentSubstring) {
                    return currentSubstring;
                }
            }
            
            // Hash collision - add current position to the hash bucket
            positions.push(i);
        } else {
            seen.set(hash, [i]);
        }
    }
    
    return "";
}

// Example test cases
console.log(longestDupSubstring("banana")); // Expected: "ana"
console.log(longestDupSubstring("abcd")); // Expected: "" 