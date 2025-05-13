/**
 * Shortest Unique Substring
 * 
 * Given a string S of length N consisting only of letters 'A' and/or 'B'. Our goal is to
 * obtain a string in the format "A...AB...B" (all letters 'A' occur before all letters 'B') by
 * deleting some letters from S. In particular, strings consisting only of letters 'A' or only of
 * letters 'B' fit this format.
 * 
 * The function should return the minimum number of letters that need to be deleted
 * from S in order to obtain a string in the above format.
 */

export function solution(S: string): number {
    const n = S.length;
    
    // If the string is empty, no deletions needed
    if (n === 0) return 0;
    
    // Count all 'B's in the string
    let totalB = 0;
    for (let i = 0; i < n; i++) {
        if (S[i] === 'B') totalB++;
    }
    
    // If the string contains only 'A's or only 'B's, no deletions needed
    if (totalB === 0 || totalB === n) return 0;
    
    let minDeletions = n; // Initialize with worst case (delete all characters)
    let bCount = 0; // Count of 'B's encountered so far
    
    // Try each position as a potential dividing point between 'A's and 'B's
    for (let i = 0; i <= n; i++) {
        // At position i:
        // - Delete all 'B's before position i (= bCount)
        // - Delete all 'A's after position i (= n - i - (totalB - bCount))
        const deletions = bCount + (n - i - (totalB - bCount));
        minDeletions = Math.min(minDeletions, deletions);
        
        // Update 'B' count for the next position
        if (i < n && S[i] === 'B') {
            bCount++;
        }
    }
    
    return minDeletions;
}

// Example test cases
console.log(solution("BAAABAB")); // Expected: 2
console.log(solution("BBABAA")); // Expected: 3
console.log(solution("AABBBB")); // Expected: 0 