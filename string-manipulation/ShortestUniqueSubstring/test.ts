import {solution} from './solution'

describe('Shortest Unique Substring', () => {
    test('Example 1: abaaba - should return 2', () => {
        expect(solution('abaaba')).toBe(2);
    });

    test('Example 2: zyzyzyz - should return 5', () => {
        expect(solution('zyzyzyz')).toBe(5);
    });

    test('Example 3: aabbbabaa - should return 3', () => {
        expect(solution('aabbbabaa')).toBe(3);
    });

    test('Single character string: a - should return 1', () => {
        expect(solution('a')).toBe(1);
    });

    test('String with all unique characters: abcdef - should return 1', () => {
        expect(solution('abcdef')).toBe(1);
    });

    test('String with all identical characters: aaaaa - should return 0', () => {
        expect(solution('aaaaa')).toBe(0);
    });

    test('String with no unique substrings: abcabc - should return 0', () => {
        expect(solution('abcabc')).toBe(0);
    });

    test('String with unique substring in the middle: xyzabcxyz - should return 3', () => {
        expect(solution('xyzabcxyz')).toBe(3);
    });

    test('Empty string - should return 0', () => {
        expect(solution('')).toBe(0);
    });
}); 