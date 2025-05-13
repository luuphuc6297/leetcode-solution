/**
 * Shortest Unique Substring
 *
 * Write a function that, given a string S of length N, returns the length of the
 * shortest unique substring of S, that is, the length of the shortest word which occurs in
 * exactly once.
 */

export function solution(S: string): number {
    const N: number = S.length
    let left = 1
    let right = N

    let result = N

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (hasUniqueSubstring(S, mid)) {
            result = Math.min(result, mid)
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return result
}

function hasUniqueSubstring(s: string, len: number): boolean {
    const N = s.length
    const seen = new Set<string>()
    const repeated = new Set<string>()

    for (let i = 0; i <= N - len; i++) {
        const substr = s.slice(i, i + len)
        if (repeated.has(substr)) {
            continue
        }
        if (seen.has(substr)) {
            seen.delete(substr)
            repeated.add(substr)
        } else {
            seen.add(substr)
        }
    }

    return seen.size > 0
}
// Example test cases
console.log(solution('abaaba')) // Expected: 2 (for "aa")
console.log(solution('zyzyzyz')) // Expected: 5 (for "zyzyz")
console.log(solution('aabbbabaa')) // Expected: 3
