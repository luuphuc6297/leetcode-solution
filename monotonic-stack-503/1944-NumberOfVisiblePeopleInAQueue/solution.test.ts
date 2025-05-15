import { canSeePersonsCount, canSeePersonsCountLeftToRight, canSeePersonsCountNGE } from './solution'

describe('1944. Number of Visible People in a Queue', () => {
    // Test cases for all approaches
    const testCases = [
        {
            heights: [10, 6, 8, 5, 11, 9],
            expected: [3, 1, 2, 1, 1, 0],
            description: 'Example 1: Mixed heights',
        },
        {
            heights: [5, 1, 2, 3, 10],
            expected: [4, 1, 1, 1, 0],
            description: 'Example 2: Increasing heights at the end',
        },
        {
            heights: [1, 2, 3, 4, 5],
            expected: [1, 1, 1, 1, 0],
            description: 'Strictly increasing heights',
        },
        {
            heights: [5, 4, 3, 2, 1],
            expected: [4, 3, 2, 1, 0],
            description: 'Strictly decreasing heights',
        },
        {
            heights: [3, 1, 5, 4, 2],
            expected: [2, 1, 2, 1, 0],
            description: 'Mixed heights with a peak in the middle',
        },
        {
            heights: [4, 3, 2, 1, 5],
            expected: [4, 3, 2, 1, 0],
            description: 'Decreasing followed by a tall person',
        },
        {
            heights: [10],
            expected: [0],
            description: 'Single person in queue',
        },
        {
            heights: [1, 10],
            expected: [1, 0],
            description: 'Two people in queue',
        },
        {
            heights: [5, 5, 5, 5, 5].map((h, i) => h + i), // Make heights distinct: [5,6,7,8,9]
            expected: [1, 1, 1, 1, 0],
            description: 'Increasing heights with fixed difference',
        },
        {
            heights: [100, 50, 75, 25, 90, 60],
            expected: [4, 1, 2, 1, 1, 0],
            description: 'Complex case with various heights',
        },
    ]

    describe('Right to Left Approach', () => {
        testCases.forEach(({ heights, expected, description }) => {
            test(`${description}: ${JSON.stringify(heights)}`, () => {
                expect(canSeePersonsCount(heights)).toEqual(expected)
            })
        })
    })

    describe('Left to Right Approach', () => {
        testCases.forEach(({ heights, expected, description }) => {
            test(`${description}: ${JSON.stringify(heights)}`, () => {
                expect(canSeePersonsCountLeftToRight(heights)).toEqual(expected)
            })
        })
    })

    describe('Next Greater Element Approach', () => {
        testCases.forEach(({ heights, expected, description }) => {
            test(`${description}: ${JSON.stringify(heights)}`, () => {
                expect(canSeePersonsCountNGE(heights)).toEqual(expected)
            })
        })
    })

    // Additional test for large arrays
    test('Large array', () => {
        const size = 1000
        const heights = Array.from(new Array(size), (_, i) => size - i) // Decreasing array

        // All approaches should give the same result
        const result1 = canSeePersonsCount(heights)
        const result2 = canSeePersonsCountLeftToRight(heights)
        const result3 = canSeePersonsCountNGE(heights)

        // For a decreasing array, each person should see everyone to their right
        const expected = Array.from(new Array(size), (_, i) => size - i - 1)

        expect(result1).toEqual(expected)
        expect(result2).toEqual(expected)
        expect(result3).toEqual(expected)
    })
})
