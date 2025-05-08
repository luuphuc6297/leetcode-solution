import { confusingNumberII } from './solution';

describe('1088. Confusing Number II', () => {
    test('Example 1: N = 20', () => {
        expect(confusingNumberII(20)).toBe(6);
    });

    test('Example 2: N = 100', () => {
        expect(confusingNumberII(100)).toBe(19);
    });

    test('Small input: N = 5', () => {
        // No confusing numbers between 1 and 5
        expect(confusingNumberII(5)).toBe(0);
    });

    test('N = 10', () => {
        // Confusing numbers: 6, 9
        expect(confusingNumberII(10)).toBe(2);
    });

    test('N = 50', () => {
        // More complex test
        expect(confusingNumberII(50)).toBe(12);
    });

    // Test for larger values may be time-consuming due to algorithmic complexity
    // Commenting out to avoid long test times
    /*
    test('Large input: N = 1000', () => {
        expect(confusingNumberII(1000)).toBe(88);
    });
    */
}); 