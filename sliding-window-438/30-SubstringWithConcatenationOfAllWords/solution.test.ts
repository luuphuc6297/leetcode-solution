import { findSubstring } from './solution'

describe('30. Substring with Concatenation of All Words', () => {
    test('Example 1: barfoothefoobarman', () => {
        expect(findSubstring("barfoothefoobarman", ["foo","bar"])).toEqual([0,9]);
    })

    test('Example 2: wordgoodgoodgoodbestword', () => {
        expect(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","word"])).toEqual([]);
    })

    test('Example 3: barfoofoobarthefoobarman', () => {
        expect(findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"])).toEqual([6,9,12]);
    })

    test('Empty string', () => {
        expect(findSubstring("", ["foo","bar"])).toEqual([]);
    })

    test('Empty words array', () => {
        expect(findSubstring("barfoothefoobarman", [])).toEqual([]);
    })

    test('Single word match', () => {
        expect(findSubstring("aaa", ["a"])).toEqual([0,1,2]);
    })

    test('Repeated words', () => {
        expect(findSubstring("aaaaaa", ["aa","aa"])).toEqual([0,2]);
    })
}) 