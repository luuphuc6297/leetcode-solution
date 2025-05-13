/**
 * 131. Palindrome Partitioning
 * https://leetcode.com/problems/palindrome-partitioning/
 *
 * Given a string s, partition s such that every substring of the partition is a palindrome.
 * Return all possible palindrome partitioning of s.
 * 
 * A palindrome string is a string that reads the same backward as forward.
 */

export function partition(s: string): string[][] {
    const result: string[][] = [];
    const path: string[] = [];
    
    function isPalindrome(str: string, start: number, end: number): boolean {
        while (start < end) {
            if (str[start] !== str[end]) return false;
            start++;
            end--;
        }
        return true;
    }
    
    // DFS function to find all possible partitions
    function dfs(start: number): void {
        if (start >= s.length) {
            result.push([...path]);
            return;
        }
        
        for (let end = start; end < s.length; end++) {
            if (isPalindrome(s, start, end)) {
                path.push(s.substring(start, end + 1));
                dfs(end + 1);
                console.log('path:', path)
                path.pop();
            }
        }
    }
    
    dfs(0);
    return result;
}

// Example test cases
console.log(partition("aab")); // Expected: [["a","a","b"],["aa","b"]]
console.log(partition("a")); // Expected: [["a"]] 