import { nextGreaterElements } from './solution'

describe('503. Next Greater Element II', () => {
    test('Example 1: [1, 2, 1]', () => {
        expect(nextGreaterElements([1, 2, 1])).toEqual([2, -1, 2])
    })

    test('Example 2: [1, 2, 3, 4, 3]', () => {
        expect(nextGreaterElements([1, 2, 3, 4, 3])).toEqual([2, 3, 4, -1, 4])
    })

    test('All same numbers', () => {
        expect(nextGreaterElements([5, 5, 5, 5])).toEqual([-1, -1, -1, -1])
    })

    test('Empty array', () => {
        expect(nextGreaterElements([])).toEqual([])
    })

    test('Single element array', () => {
        expect(nextGreaterElements([7])).toEqual([-1])
    })
})
