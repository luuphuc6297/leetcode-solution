import { longestRepeatingSubstring } from './solution';

describe('1062. Longest Repeating Substring', () => {
    test('Example 1: No repeating substring', () => {
        expect(longestRepeatingSubstring('abcd')).toBe(0);
    });

    test('Example 2: Multiple repeating substrings of length 2', () => {
        expect(longestRepeatingSubstring('abbaba')).toBe(2);
    });

    test('Example 3: Repeating substring of length 3', () => {
        expect(longestRepeatingSubstring('aabcaabdaab')).toBe(3);
    });

    test('Empty string - should return 0', () => {
        expect(longestRepeatingSubstring('')).toBe(0);
    });

    test('String with single character - should return 0', () => {
        expect(longestRepeatingSubstring('a')).toBe(0);
    });

    test('String with all identical characters - should return length-1', () => {
        expect(longestRepeatingSubstring('aaaa')).toBe(3);
    });

    test('String with overlapping repeats', () => {
        expect(longestRepeatingSubstring('aaaaa')).toBe(4);
    });

    test('String with repeating pattern', () => {
        expect(longestRepeatingSubstring('abcabcabc')).toBe(6);
    });

    test('String with late repeating pattern', () => {
        expect(longestRepeatingSubstring('xyzxyzabc')).toBe(3);
    });
}); 