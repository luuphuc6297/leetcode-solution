import { lengthOfLongestSubstring } from './solution';

describe('3. Longest Substring Without Repeating Characters', () => {
    test('Example 1: abcabcbb - should return 3', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    });

    test('Example 2: bbbbb - should return 1', () => {
        expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    });

    test('Example 3: pwwkew - should return 3', () => {
        expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
    });

    test('Empty string - should return 0', () => {
        expect(lengthOfLongestSubstring('')).toBe(0);
    });

    test('String with one character - should return 1', () => {
        expect(lengthOfLongestSubstring('a')).toBe(1);
    });

    test('All unique characters - should return length of string', () => {
        expect(lengthOfLongestSubstring('abcdefg')).toBe(7);
    });

    test('String with spaces and special characters', () => {
        expect(lengthOfLongestSubstring('ab c!d')).toBe(5);
    });

    test('Repeating at beginning of string', () => {
        expect(lengthOfLongestSubstring('aabcd')).toBe(4);
    });

    test('Repeating at end of string', () => {
        expect(lengthOfLongestSubstring('abcdd')).toBe(4);
    });

    test('Unique characters in middle', () => {
        expect(lengthOfLongestSubstring('dvdf')).toBe(3);
    });
}); 