/**
 * 1087. Brace Expansion
 * 
 * The string S represents a list of words.
 * Each letter in the word has 1 or more options. If there is one option, the letter is represented normally.
 * If there are multiple options, the brackets will limit the options.
 * For example, "{a,b,c}" represents the options ["a", "b", "c"].
 * 
 * For example, "{a,b,c}d{e,f}" represents the list ["ade", "adf", "bde", "bdf", "cde", "cdf"].
 * 
 * Return all words that can be formed in this way, sorted in lexicographical order.
 * 
 * Example 1:
 * Input: "{a,b}c{d,e}f"
 * Output: ["acdf","acef","bcdf","bcef"]
 * 
 * Example 2:
 * Input: "abcd"
 * Output: ["abcd"]
 * 
 * Note:
 * 1. 1 <= S.length <= 50
 * 2. There are no nested curly brackets.
 * 3. All characters inside a pair of consecutive opening and ending curly brackets are different.
 * 
 * Complexity:
 * - Time: O(N * 2^m), where N is the total number of words that can be created and m is the number of option sets
 * - Space: O(N)
 */

/**
 * Expands the string S according to the brace expansion rule and returns all possible words
 * sorted in lexicographical order
 * 
 * @param s The string to expand
 * @returns Array of words created in lexicographical order
 */
export function expand(s: string): string[] {
    const result: string[] = [];
    
    // Recursive DFS function to create all possibilities
    function dfs(index: number, current: string): void {
        // If we've gone through the entire string, add the current word to results
        if (index === s.length) {
            result.push(current);
            return;
        }
        
        // If we encounter an opening brace, process the content inside
        if (s[index] === '{') {
            // Find the corresponding closing brace
            let end = index + 1;
            while (s[end] !== '}') {
                end++;
            }
            
            // Split the options
            const options = s.substring(index + 1, end).split(',');
            
            // Recursively process each option
            for (const option of options) {
                dfs(end + 1, current + option);
            }
        } else {
            // If it's a regular character, add it to the current string and continue
            dfs(index + 1, current + s[index]);
        }
    }
    
    // Start recursion from the first position
    dfs(0, '');
    
    // Sort the results in lexicographical order
    return result.sort();
}

/**
 * Clearer explanation:
 * 1. We use recursion to create all possible words from the input string.
 * 2. When encountering a regular character, simply add it to the current string and continue.
 * 3. When encountering an opening brace '{', identify all options inside the braces and call recursion with each option.
 * 4. When we've traversed the entire string, add the current string to the results.
 * 5. Finally, sort the results in lexicographical order before returning.
 */ 