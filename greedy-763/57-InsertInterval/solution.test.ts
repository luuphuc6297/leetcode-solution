import { insert } from './solution'

describe('57. Insert Interval', () => {
    test('Example 1: [[1,3],[6,9]], newInterval = [2,5]', () => {
        expect(insert([[1,3],[6,9]], [2,5])).toEqual([[1,5],[6,9]])
    })

    test('Example 2: [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]', () => {
        expect(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))
            .toEqual([[1,2],[3,10],[12,16]])
    })

    test('Empty intervals', () => {
        expect(insert([], [5,7])).toEqual([[5,7]])
    })

    test('New interval is contained within an existing interval', () => {
        expect(insert([[1,5]], [2,3])).toEqual([[1,5]])
    })

    test('New interval extends an existing interval', () => {
        expect(insert([[1,5]], [2,7])).toEqual([[1,7]])
    })

    test('New interval before all existing intervals', () => {
        expect(insert([[3,5],[6,7]], [1,2])).toEqual([[1,2],[3,5],[6,7]])
    })

    test('New interval after all existing intervals', () => {
        expect(insert([[1,2],[3,5]], [6,8])).toEqual([[1,2],[3,5],[6,8]])
    })

    test('New interval merges all existing intervals', () => {
        expect(insert([[1,3],[5,7],[9,11]], [2,10])).toEqual([[1,11]])
    })
}) 