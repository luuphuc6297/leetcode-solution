/**
 * 30. Substring with Concatenation of All Words
 * https://leetcode.com/problems/substring-with-concatenation-of-all-words/
 *
 * You are given a string s and an array of strings words of the same length.
 * Return all starting indices of substring(s) in s that is a concatenation of each word
 * in words exactly once, in any order, and without any intervening characters.
 *
 * You can return the answer in any order.
 */

export function findSubstring(s: string, words: string[]): number[] {
    if (s.length === 0 || words.length === 0) return [];
    
    const result: number[] = [];
    const wordLength = words[0].length;
    const totalWords = words.length;
    const totalLength = wordLength * totalWords;
    
    // Create a frequency map of words
    const wordFrequency = new Map<string, number>();
    for (const word of words) {
        wordFrequency.set(word, (wordFrequency.get(word) || 0) + 1);
    }
    
    // Check each possible starting position
    for (let i = 0; i <= s.length - totalLength; i++) {
        const seen = new Map<string, number>();
        let j = 0;
        
        // Try to match all words
        while (j < totalWords) {
            const position = i + j * wordLength;
            const word = s.substring(position, position + wordLength);
            
            // If the word is not in our target words or we've seen too many
            if (!wordFrequency.has(word) || (seen.get(word) || 0) >= (wordFrequency.get(word) || 0)) {
                break;
            }
            
            // Add the word to seen count
            seen.set(word, (seen.get(word) || 0) + 1);
            j++;
        }
        
        // If we matched all words, add the starting index
        if (j === totalWords) {
            result.push(i);
        }
    }
    
    return result;
}

// Example test cases
const example1 = findSubstring("barfoothefoobarman", ["foo","bar"]);
console.log(example1); // Expected: [0,9]

const example2 = findSubstring("wordgoodgoodgoodbestword", ["word","good","best","word"]);
console.log(example2); // Expected: []

const example3 = findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"]);
console.log(example3); // Expected: [6,9,12] 