import { nextGreaterElement } from './solution'

describe('496. Next Greater Element I', () => {
    test('Example 1: nums1 = [4,1,2], nums2 = [1,3,4,2]', () => {
        expect(nextGreaterElement([4,1,2], [1,3,4,2])).toEqual([-1,3,-1])
    })

    test('Example 2: nums1 = [2,4], nums2 = [1,2,3,4]', () => {
        expect(nextGreaterElement([2,4], [1,2,3,4])).toEqual([3,-1])
    })

    test('All elements have next greater element', () => {
        expect(nextGreaterElement([1,2,3], [1,2,3,4])).toEqual([2,3,4])
    })

    test('No element has next greater element', () => {
        expect(nextGreaterElement([3,2,1], [3,2,1])).toEqual([-1,-1,-1])
    })

    test('Single element', () => {
        expect(nextGreaterElement([5], [5])).toEqual([-1])
    })

    test('Nums1 is identical to nums2', () => {
        expect(nextGreaterElement([1,2,3,4], [1,2,3,4])).toEqual([2,3,4,-1])
    })

    test('Scattered elements', () => {
        expect(nextGreaterElement([2,1,3], [5,6,3,1,2,4])).toEqual([4,2,4])
    })
}) 