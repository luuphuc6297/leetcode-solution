/**
 * 616. Add Bold Tag in String
 * 
 * Problem: Add bold tag (<b></b>) to specified substrings in a string.
 * Overlapping or adjacent parts should be merged.
 * 
 * Example:
 * 
 * Input: s = "abcxyz123", dict = ["abc","123"]
 * Output: "<b>abc</b>xyz<b>123</b>"
 * 
 * Input: s = "aaabbcc", dict = ["aaa","aab","bc"]
 * Output: "<b>aaabbc</b>c"
 * Explanation: "aaa" is at position [0,2], "aab" is at position [1,3], "bc" is at position [4,5]
 * The ranges [0,2], [1,3], [4,5] are merged into [0,5], so the result is "<b>aaabbc</b>c".
 * 
 * Constraints:
 * - The length of s does not exceed 1000.
 * - The length of dict does not exceed 100.
 * - The length of each word in dict does not exceed 1000.
 * - Words in dict only contain lowercase letters.
 * 
 * Method: Use a boolean array to mark the positions of characters that need to be bold,
 * then iterate through the array to add <b></b> tags to the result.
 */

function addBoldTag(s: string, dict: string[]): string {
    // Create a boolean array to mark characters that need to be bold
    const bold: boolean[] = new Array(s.length).fill(false);
    
    // Mark all characters that need to be bold
    for (let i = 0; i < s.length; i++) {
        for (const word of dict) {
            // Check if the word appears at position i
            if (s.substring(i, i + word.length) === word) {
                // Mark all characters of the word as needing to be bold
                for (let j = i; j < i + word.length; j++) {
                    bold[j] = true;
                }
            }
        }
    }
    
    // Build the result string
    let result = '';
    for (let i = 0; i < s.length; i++) {
        // If the current character needs to be bold and the previous one doesn't (or it's the first character)
        if (bold[i] && (i === 0 || !bold[i - 1])) {
            result += '<b>';
        }
        
        // Add the current character to the result
        result += s[i];
        
        // If the current character needs to be bold and the next one doesn't (or it's the last character)
        if (bold[i] && (i === s.length - 1 || !bold[i + 1])) {
            result += '</b>';
        }
    }
    
    return result;
}

/**
 * More optimized method using Trie
 */
class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;

    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

function addBoldTagOptimized(s: string, dict: string[]): string {
    // Build a Trie from the dictionary
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
    
    // Array to mark characters that need to be bold
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
        // Add <b> tag when starting a bold section
        if (bold[i] && (i === 0 || !bold[i - 1])) {
            result += '<b>';
        }
        
        // Add the current character
        result += s[i];
        
        // Add </b> tag when ending a bold section
        if (bold[i] && (i === s.length - 1 || !bold[i + 1])) {
            result += '</b>';
        }
    }
    
    return result;
}

export { addBoldTag, addBoldTagOptimized }; 