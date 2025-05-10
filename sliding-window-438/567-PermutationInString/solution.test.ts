import { checkInclusion } from './solution'

describe('567. Permutation in String', () => {
    test('Example 1: s1 = "ab", s2 = "eidbaooo"', () => {
        expect(checkInclusion("ab", "eidbaooo")).toBe(true)
    })

    test('Example 2: s1 = "ab", s2 = "eidboaoo"', () => {
        expect(checkInclusion("ab", "eidboaoo")).toBe(false)
    })

    test('s1 is longer than s2', () => {
        expect(checkInclusion("hello", "ell")).toBe(false)
    })

    test('Exact match', () => {
        expect(checkInclusion("abc", "abc")).toBe(true)
    })

    test('Multiple permutations present', () => {
        expect(checkInclusion("abc", "abcbac")).toBe(true)
    })

    test('No permutation present', () => {
        expect(checkInclusion("abc", "def")).toBe(false)
    })

    test('Permutation at the beginning', () => {
        expect(checkInclusion("abc", "acbdef")).toBe(true)
    })

    test('Permutation at the end', () => {
        expect(checkInclusion("abc", "defacb")).toBe(true)
    })

    test('Case with repeated characters', () => {
        expect(checkInclusion("aab", "eidaabooo")).toBe(true)
    })
}) 