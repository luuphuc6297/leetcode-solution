import { partition } from './solution';

describe('131. Palindrome Partitioning', () => {
    test('Example 1: Partition "aab"', () => {
        const result = partition('aab');
        // Should have 2 ways to partition: [["a","a","b"],["aa","b"]]
        expect(result.length).toBe(2);
        // Sort results to check the exact elements
        const sortedResult = result.map(arr => arr.join(',')).sort();
        expect(sortedResult).toEqual(['a,a,b', 'aa,b']);
    });

    test('Example 2: Partition "a"', () => {
        const result = partition('a');
        // Should have only 1 way to partition: [["a"]]
        expect(result.length).toBe(1);
        expect(result[0].length).toBe(1);
        expect(result[0][0]).toBe('a');
    });

    test('Case with longer palindrome: "aba"', () => {
        const result = partition('aba');
        // Should have 2 ways to partition: [["a","b","a"],["aba"]]
        expect(result.length).toBe(2);
        const sortedResult = result.map(arr => arr.join(',')).sort();
        expect(sortedResult).toEqual(['a,b,a', 'aba']);
    });

    test('Complex case: "aabb"', () => {
        const result = partition('aabb');
        // Check the number of results
        expect(result.length).toBe(4);
        // Sort and check specific results
        const sortedResult = result.map(arr => arr.join(',')).sort();
        expect(sortedResult).toEqual(['a,a,b,b', 'a,a,bb', 'aa,b,b', 'aa,bb']);
    });

    test('Case with large palindrome: "racecar"', () => {
        const result = partition('racecar');
        // Check that "racecar" is one of the results
        const hasFullPalindrome = result.some(item => item.length === 1 && item[0] === 'racecar');
        expect(hasFullPalindrome).toBe(true);
    });
}); 