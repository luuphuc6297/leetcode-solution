import { getModifiedArray } from './solution'

describe('370. Range Addition', () => {
    test('Example 1: length = 5, updates = [[1, 3, 2], [2, 4, 3], [0, 2, -2]]', () => {
        expect(
            getModifiedArray(5, [
                [1, 3, 2],
                [2, 4, 3],
                [0, 2, -2],
            ])
        ).toEqual([-2, 0, 3, 5, 3])
    })

    test('Example 2: length = 3, updates = [[0, 1, 1]]', () => {
        expect(getModifiedArray(3, [[0, 1, 1]])).toEqual([1, 1, 0])
    })

    test('Empty updates', () => {
        expect(getModifiedArray(5, [])).toEqual([0, 0, 0, 0, 0])
    })

    test('Single element array', () => {
        expect(getModifiedArray(1, [[0, 0, 5]])).toEqual([5])
    })

    test('Multiple operations on same range', () => {
        expect(
            getModifiedArray(3, [
                [0, 0, 1],
                [0, 0, 2],
                [0, 0, 3],
            ])
        ).toEqual([6, 0, 0])
    })
})
