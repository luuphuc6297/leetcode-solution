import { isReflected } from './solution'

describe('356. Line Reflection', () => {
    test('Example 1: [[1, 1], [-1, 1]]', () => {
        expect(
            isReflected([
                [1, 1],
                [-1, 1],
            ])
        ).toBe(true)
    })

    test('Example 2: [[1, 1], [-1, -1]]', () => {
        expect(
            isReflected([
                [1, 1],
                [-1, -1],
            ])
        ).toBe(false)
    })

    test('Empty points array', () => {
        expect(isReflected([])).toBe(true)
    })

    test('Single point', () => {
        expect(isReflected([[0, 0]])).toBe(true)
    })

    test('Multiple points with reflection', () => {
        expect(
            isReflected([
                [1, 1],
                [2, 2],
                [3, 3],
                [4, 4],
                [2, 0],
                [3, 0],
            ])
        ).toBe(false)
    })

    test('Multiple points with reflection', () => {
        expect(
            isReflected([
                [1, 1],
                [2, 2],
                [-1, 1],
                [-2, 2],
            ])
        ).toBe(true)
    })

    test('Points on the reflection line', () => {
        expect(
            isReflected([
                [0, 1],
                [0, 2],
                [0, 3],
            ])
        ).toBe(true)
    })

    test('Duplicate points', () => {
        expect(
            isReflected([
                [1, 1],
                [1, 1],
                [-1, 1],
                [-1, 1],
            ])
        ).toBe(true)
    })
})
