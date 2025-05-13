import { solution } from './solution';

describe('Shortest Unique Substring', () => {
    test('Example 1: BAAABAB - should return 2', () => {
        expect(solution('BAAABAB')).toBe(2);
    });

    test('Example 2: BBABAA - should return 3', () => {
        expect(solution('BBABAA')).toBe(3);
    });

    test('Example 3: AABBBB - should return 0', () => {
        expect(solution('AABBBB')).toBe(0);
    });

    test('String with only As - should return 0', () => {
        expect(solution('AAAAA')).toBe(0);
    });

    test('String with only Bs - should return 0', () => {
        expect(solution('BBBBB')).toBe(0);
    });

    test('Alternating As and Bs - should return half the length', () => {
        expect(solution('ABABABA')).toBe(3);
        expect(solution('BABABAB')).toBe(3);
    });

    test('String with single A among Bs - should return 1', () => {
        expect(solution('BBABB')).toBe(1);
    });

    test('String with single B among As - should return 1', () => {
        expect(solution('AABAA')).toBe(1);
    });

    test('Empty string - should return 0', () => {
        expect(solution('')).toBe(0);
    });
}); 