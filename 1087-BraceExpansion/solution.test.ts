import { expand } from './solution';

describe('1087. Brace Expansion', () => {
    test('Example 1: "{a,b}c{d,e}f"', () => {
        const input = "{a,b}c{d,e}f";
        const expected = ["acdf", "acef", "bcdf", "bcef"];
        expect(expand(input)).toEqual(expected);
    });

    test('Example 2: "abcd"', () => {
        const input = "abcd";
        const expected = ["abcd"];
        expect(expand(input)).toEqual(expected);
    });

    test('Case with multiple options: "{a,b,c}d{e,f}"', () => {
        const input = "{a,b,c}d{e,f}";
        const expected = ["ade", "adf", "bde", "bdf", "cde", "cdf"];
        expect(expand(input)).toEqual(expected);
    });

    test('Case with single character options: "{a,b}{c,d}"', () => {
        const input = "{a,b}{c,d}";
        const expected = ["ac", "ad", "bc", "bd"];
        expect(expand(input)).toEqual(expected);
    });

    test('Case with multiple braces and static characters: "a{b,c}d{e,f}g"', () => {
        const input = "a{b,c}d{e,f}g";
        const expected = ["abdeg", "abdfg", "acdeg", "acdfg"];
        expect(expand(input)).toEqual(expected);
    });

    test('Lexicographical order test: "{z,a,b}cd"', () => {
        const input = "{z,a,b}cd";
        const expected = ["acd", "bcd", "zcd"]; // Sorted lexicographically
        expect(expand(input)).toEqual(expected);
    });

    test('Empty options case: "{}"', () => {
        const input = "{}";
        const expected = [""];
        expect(expand(input)).toEqual(expected);
    });
}); 