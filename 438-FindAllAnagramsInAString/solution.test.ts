import { findAnagrams } from './solution'

describe('438. Find All Anagrams in a String', () => {
    test('Example 1: s = "cbaebabacd", p = "abc"', () => {
        expect(findAnagrams('cbaebabacd', 'abc')).toEqual([0, 6])
    })

    test('Example 2: s = "abab", p = "ab"', () => {
        expect(findAnagrams('abab', 'ab')).toEqual([0, 1, 2])
    })

    test('Empty string', () => {
        expect(findAnagrams('', 'abc')).toEqual([])
    })

    test('Pattern longer than string', () => {
        expect(findAnagrams('ab', 'abc')).toEqual([])
    })

    test('No anagrams found', () => {
        expect(findAnagrams('hello', 'world')).toEqual([])
    })
})
