import { addBoldTag, addBoldTagOptimized } from './solution';

describe('616. Add Bold Tag in String', () => {
    const testCases = [
        {
            s: "abcxyz123",
            dict: ["abc", "123"],
            expected: "<b>abc</b>xyz<b>123</b>"
        },
        {
            s: "aaabbcc",
            dict: ["aaa", "aab", "bc"],
            expected: "<b>aaabbc</b>c"
        },
        {
            s: "aaabbcc",
            dict: ["a", "b", "c"],
            expected: "<b>aaabbcc</b>"
        },
        {
            s: "abcdef",
            dict: ["ab", "cd", "ef"],
            expected: "<b>abcdef</b>"
        },
        {
            s: "abcdef",
            dict: ["abc", "def"],
            expected: "<b>abc</b><b>def</b>"
        },
        {
            s: "abcxyzabc",
            dict: ["abc"],
            expected: "<b>abc</b>xyz<b>abc</b>"
        },
        {
            s: "zzzzz",
            dict: ["zz", "zzz"],
            expected: "<b>zzzzz</b>"
        },
        {
            s: "hello world",
            dict: ["world"],
            expected: "hello <b>world</b>"
        },
        {
            s: "hello",
            dict: ["z"],
            expected: "hello"
        },
        {
            s: "",
            dict: ["a", "b"],
            expected: ""
        }
    ];

    describe('Basic Solution', () => {
        testCases.forEach(({ s, dict, expected }, index) => {
            test(`Test case ${index + 1}: s="${s}", dict=${JSON.stringify(dict)}`, () => {
                expect(addBoldTag(s, dict)).toBe(expected);
            });
        });
    });

    describe('Optimized Solution (Trie)', () => {
        testCases.forEach(({ s, dict, expected }, index) => {
            test(`Test case ${index + 1}: s="${s}", dict=${JSON.stringify(dict)}`, () => {
                expect(addBoldTagOptimized(s, dict)).toBe(expected);
            });
        });
    });
}); 