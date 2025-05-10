/**
 * 438. Find All Anagrams in a String
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 *
 * Given two strings s and p, return an array of all the start indices of p's anagrams in s.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 */

export function findAnagrams(s: string, p: string): number[] {
    if (p.length > s.length) return []

    const result: number[] = []
    const pCount = new Array(26).fill(0)
    const sCount = new Array(26).fill(0)

    for (let i = 0; i < p.length; i++) {
        pCount[p.charCodeAt(i) - 'a'.charCodeAt(0)]++
    }

    for (let i = 0; i < p.length; i++) {
        sCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
    }

    if (arraysEqual(pCount, sCount)) {
        result.push(0)
    }

    for (let i = p.length; i < s.length; i++) {
        sCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
        sCount[s.charCodeAt(i - p.length) - 'a'.charCodeAt(0)]--

        if (arraysEqual(pCount, sCount)) {
            result.push(i - p.length + 1)
        }
    }

    return result
}

function arraysEqual(arr1: number[], arr2: number[]): boolean {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false
    }
    return true
}

const s1 = 'cbaebabacd'
const p1 = 'abc'

console.log(findAnagrams(s1, p1))
