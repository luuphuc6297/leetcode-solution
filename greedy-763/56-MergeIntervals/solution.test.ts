import { merge } from './solution'

describe('56. Merge Intervals', () => {
    test('Example 1: [[1,3],[2,6],[8,10],[15,18]]', () => {
        expect(merge([[1,3],[2,6],[8,10],[15,18]])).toEqual([[1,6],[8,10],[15,18]])
    })

    test('Example 2: [[1,4],[4,5]]', () => {
        expect(merge([[1,4],[4,5]])).toEqual([[1,5]])
    })

    test('Single interval', () => {
        expect(merge([[1,5]])).toEqual([[1,5]])
    })

    test('No overlap', () => {
        expect(merge([[1,2],[3,4],[5,6]])).toEqual([[1,2],[3,4],[5,6]])
    })

    test('Complete overlap', () => {
        expect(merge([[1,10],[2,5],[3,7]])).toEqual([[1,10]])
    })

    test('Empty array', () => {
        expect(merge([])).toEqual([])
    })

    test('Unsorted intervals', () => {
        expect(merge([[15,18],[8,10],[1,3],[2,6]])).toEqual([[1,6],[8,10],[15,18]])
    })
}) 