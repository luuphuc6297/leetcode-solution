import { partitionLabels } from './solution'

describe('763. Partition Labels', () => {
    test('Example 1: "ababcbacadefegdehijhklij"', () => {
        expect(partitionLabels('ababcbacadefegdehijhklij')).toEqual([9, 7, 8])
    })

    test('Example 2: "eccbbbbdec"', () => {
        expect(partitionLabels('eccbbbbdec')).toEqual([10])
    })

    test('Single character string', () => {
        expect(partitionLabels('a')).toEqual([1])
    })

    test('All same characters', () => {
        expect(partitionLabels('aaaa')).toEqual([4])
    })

    test('All different characters', () => {
        expect(partitionLabels('abcdef')).toEqual([1, 1, 1, 1, 1, 1])
    })
})
