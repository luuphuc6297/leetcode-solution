import { removeCoveredIntervals } from './solution'

describe('1288. Remove Covered Intervals', () => {
    test('Example 1: [[1,4],[3,6],[2,8]]', () => {
        expect(removeCoveredIntervals([[1,4],[3,6],[2,8]])).toBe(2)
    })

    test('Example 2: [[1,4],[2,3]]', () => {
        expect(removeCoveredIntervals([[1,4],[2,3]])).toBe(1)
    })

    test('Example 3: [[0,10],[5,12]]', () => {
        expect(removeCoveredIntervals([[0,10],[5,12]])).toBe(2)
    })

    test('Empty array', () => {
        expect(removeCoveredIntervals([])).toBe(0)
    })

    test('Multiple covered intervals', () => {
        expect(removeCoveredIntervals([[1,10],[2,6],[3,5],[4,4]])).toBe(1)
    })
}) 