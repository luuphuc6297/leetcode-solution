import { minWindow } from './solution'

describe('76. Minimum Window Substring', () => {
    test('Example 1: s = "ADOBECODEBANC", t = "ABC"', () => {
        expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC")
    })

    test('Example 2: s = "a", t = "a"', () => {
        expect(minWindow("a", "a")).toBe("a")
    })

    test('Example 3: s = "a", t = "aa"', () => {
        expect(minWindow("a", "aa")).toBe("")
    })

    test('No window exists', () => {
        expect(minWindow("xyz", "abc")).toBe("")
    })

    test('Window is the entire string', () => {
        expect(minWindow("abc", "abc")).toBe("abc")
    })

    test('Multiple valid windows with same length', () => {
        // Note: Problem statement says the answer is unique
        expect(minWindow("aabc", "abc")).toBe("abc")
    })

    test('Target string has duplicates', () => {
        expect(minWindow("adobecodebancbbcaa", "abca")).toBe("bca")
    })

    test('Empty source string', () => {
        expect(minWindow("", "a")).toBe("")
    })

    test('Empty target string', () => {
        expect(minWindow("abc", "")).toBe("")
    })
}) 