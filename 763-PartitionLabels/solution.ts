/**
 * 763. Partition Labels
 * https://leetcode.com/problems/partition-labels/
 *
 * You are given a string s. We want to partition the string into as many parts as possible
 * so that each letter appears in at most one part.
 *
 * Note that the partition is done so that after concatenating all the parts in order,
 * the resultant string should be s.
 *
 * Return a list of integers representing the size of these parts.
 */

export function partitionLabels(s: string): number[] {
    const lastIndex = new Array(26).fill(-1)

    for (let i = 0; i < s.length; i++) {
        lastIndex[s.charCodeAt(i) - 97] = i
    }

    const result: number[] = []
    let start = 0
    let end = 0

    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, lastIndex[s.charCodeAt(i) - 97])

        if (i === end) {
            result.push(end - start + 1)
            start = end + 1
        }
    }

    return result
}



// Example test cases
const example1 = 'ababcbacadefegdehijhklij'
console.log(partitionLabels(example1)) // Expected: [9, 7, 8]

const example2 = 'eccbbbbdec'
console.log(partitionLabels(example2)) // Expected: [10]
