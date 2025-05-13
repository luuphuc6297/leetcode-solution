import { longestDupSubstring } from './solution';

describe('1044. Longest Duplicate Substring', () => {
    test('Example 1: banana - should return "ana"', () => {
        expect(longestDupSubstring('banana')).toBe('ana');
    });

    test('Example 2: abcd - should return ""', () => {
        expect(longestDupSubstring('abcd')).toBe('');
    });

    test('Single character string - should return ""', () => {
        expect(longestDupSubstring('a')).toBe('');
    });

    test('String with repeating characters - should return the whole string minus one character', () => {
        expect(longestDupSubstring('aaaaa')).toBe('aaaa');
    });

    test('Overlapping duplicates', () => {
        expect(longestDupSubstring('aabcaabdaab')).toBe('aab');
    });

    test('Duplicate at beginning and end', () => {
        expect(longestDupSubstring('abcabc')).toBe('abc');
    });

    test('Multiple duplicates of same length - should return any valid duplicate', () => {
        // Both "ab" and "bc" are valid answers
        const result = longestDupSubstring('abcabc');
        expect(['abc']).toContain(result);
    });

    test('Long repeating pattern', () => {
        expect(longestDupSubstring('abcdefabcdef')).toBe('abcdef');
    });

    test('Empty string - should return ""', () => {
        expect(longestDupSubstring('')).toBe('');
    });
}); 