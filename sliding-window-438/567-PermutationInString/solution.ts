/**
 * 567. Permutation in String
 * https://leetcode.com/problems/permutation-in-string/
 *
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
 *
 * In other words, return true if one of s1's permutations is the substring of s2.
 */

// export function checkInclusion(s1: string, s2: string): boolean {
//     if (s1.length > s2.length) return false;
    
//     const s1Count = new Array(26).fill(0);
//     const windowCount = new Array(26).fill(0);
    
//     // Fill frequency map for s1
//     for (let i = 0; i < s1.length; i++) {
//         s1Count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
//     }
    
//     // Initialize the first window
//     for (let i = 0; i < s1.length; i++) {
//         windowCount[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
//     }
    
//     // Check if the first window is a permutation
//     if (arraysEqual(s1Count, windowCount)) return true;
    
//     // Slide the window and check each position
//     for (let i = s1.length; i < s2.length; i++) {
//         // Remove the leftmost character from the window
//         windowCount[s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0)]--;
        
//         // Add the new rightmost character to the window
//         windowCount[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        
//         // Check if current window is a permutation
//         if (arraysEqual(s1Count, windowCount)) return true;
//     }
    
//     return false;
// }

// // Helper function to compare two arrays
// function arraysEqual(arr1: number[], arr2: number[]): boolean {
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) return false;
//     }
//     return true;
// }

export function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) return false;

    const s1Count = new Array(26).fill(0);
    const s2Count = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < s1.length; i++) {
        s2Count[s2.charCodeAt(i) - 97]++;
    }
    if(arrayEqual(s1Count, s2Count)) return true;

    for(let i = s1.length; i < s2.length; i++) {
        s2Count[s2.charCodeAt(i) - 97]++;
        s2Count[s2.charCodeAt(i - s1.length) - 97]--;
        if(arrayEqual(s1Count, s2Count)) return true;
    }
    return false;
}

function arrayEqual(arr1:number[], arr2:number[]): boolean {
    for(let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

// Example test cases
const s1a = "ab";
const s2a = "eidbaooo";
console.log(checkInclusion(s1a, s2a)); // Expected: true

const s1b = "ab";
const s2b = "eidboaoo";
console.log(checkInclusion(s1b, s2b)); // Expected: false 