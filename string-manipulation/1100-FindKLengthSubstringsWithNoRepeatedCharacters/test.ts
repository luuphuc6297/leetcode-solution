import { numKLenSubstrNoRepeats } from './solution';

describe('1100. Find K-Length Substrings With No Repeated Characters', () => {
    test('Example 1: havefunonleetcode with k=5 - should return 6', () => {
        expect(numKLenSubstrNoRepeats('havefunonleetcode', 5)).toBe(6);
    });

    test('Example 2: home with k=5 - should return 0', () => {
        expect(numKLenSubstrNoRepeats('home', 5)).toBe(0);
    });

    test('String length equal to k with no repeats - should return 1', () => {
        expect(numKLenSubstrNoRepeats('abcde', 5)).toBe(1);
    });

    test('String length equal to k with repeats - should return 0', () => {
        expect(numKLenSubstrNoRepeats('aabcd', 5)).toBe(0);
    });

    test('k greater than 26 - should return 0', () => {
        const longString = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
        expect(numKLenSubstrNoRepeats(longString, 27)).toBe(0);
    });

    test('All repeated characters - should return 0', () => {
        expect(numKLenSubstrNoRepeats('aaaaa', 3)).toBe(0);
    });

    test('k=1 for a string with all unique characters', () => {
        expect(numKLenSubstrNoRepeats('abcde', 1)).toBe(5);
    });

    test('k=1 for a string with repeated characters', () => {
        expect(numKLenSubstrNoRepeats('abcabc', 1)).toBe(3);
    });

    test('Empty string - should return 0', () => {
        expect(numKLenSubstrNoRepeats('', 3)).toBe(0);
    });
}); 