import { eraseOverlapIntervals } from './solution'

describe('435. Non-overlapping Intervals', () => {
    test('Example 1: [[1,2],[2,3],[3,4],[1,3]]', () => {
        expect(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])).toBe(1)
    })

    test('Example 2: [[1,2],[1,2],[1,2]]', () => {
        expect(eraseOverlapIntervals([[1,2],[1,2],[1,2]])).toBe(2)
    })

    test('Example 3: [[1,2],[2,3]]', () => {
        expect(eraseOverlapIntervals([[1,2],[2,3]])).toBe(0)
    })

    test('Empty array', () => {
        expect(eraseOverlapIntervals([])).toBe(0)
    })

    test('Complex overlapping intervals', () => {
        expect(eraseOverlapIntervals([[1,100],[11,22],[1,11],[2,12]])).toBe(2)
    })
}) 