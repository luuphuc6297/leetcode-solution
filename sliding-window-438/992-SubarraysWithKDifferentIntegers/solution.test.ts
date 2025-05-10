import { subarraysWithKDistinct } from './solution'

describe('992. Subarrays with K Different Integers', () => {
    test('Example 1: [1,2,1,2,3], k=2', () => {
        expect(subarraysWithKDistinct([1,2,1,2,3], 2)).toBe(7);
    })

    test('Example 2: [1,2,1,3,4], k=3', () => {
        expect(subarraysWithKDistinct([1,2,1,3,4], 3)).toBe(3);
    })

    test('Empty array', () => {
        expect(subarraysWithKDistinct([], 1)).toBe(0);
    })

    test('Single element array with k=1', () => {
        expect(subarraysWithKDistinct([5], 1)).toBe(1);
    })

    test('All same elements', () => {
        expect(subarraysWithKDistinct([1,1,1,1], 1)).toBe(10);
    })

    test('k = 0', () => {
        expect(subarraysWithKDistinct([1,2,3], 0)).toBe(0);
    })

    test('Complex test case', () => {
        expect(subarraysWithKDistinct([1,2,1,2,1,3,1,3,1], 2)).toBe(23);
    })
}) 