import { depthSumInverse } from './solution'

// Mock implementation of NestedInteger for testing
class NestedIntegerImpl {
    private value: number | null = null
    private list: NestedIntegerImpl[] = []

    constructor(value?: number | NestedIntegerImpl[]) {
        if (typeof value === 'number') {
            this.value = value
        } else if (Array.isArray(value)) {
            this.list = value
        }
    }

    isInteger(): boolean {
        return this.value !== null
    }

    getInteger(): number | null {
        return this.value
    }

    getList(): NestedIntegerImpl[] {
        return this.list
    }

    // Helper method to create a nested structure from an array
    static fromArray(array: any[]): NestedIntegerImpl[] {
        return array.map((item) => {
            if (typeof item === 'number') {
                return new NestedIntegerImpl(item)
            } else if (Array.isArray(item)) {
                return new NestedIntegerImpl(NestedIntegerImpl.fromArray(item))
            }
            return new NestedIntegerImpl()
        })
    }
}

describe('364. Nested List Weight Sum II', () => {
    test('Example 1: [[1,1],2,[1,1]]', () => {
        const nestedList = NestedIntegerImpl.fromArray([[1, 1], 2, [1, 1]])
        expect(depthSumInverse(nestedList)).toBe(8)
    })

    test('Example 2: [1,[4,[6]]]', () => {
        const nestedList = NestedIntegerImpl.fromArray([1, [4, [6]]])
        expect(depthSumInverse(nestedList)).toBe(17)
    })

    test('Empty list', () => {
        const nestedList: NestedIntegerImpl[] = []
        expect(depthSumInverse(nestedList)).toBe(0)
    })

    test('Only integers, no nesting', () => {
        const nestedList = NestedIntegerImpl.fromArray([1, 2, 3])
        expect(depthSumInverse(nestedList)).toBe(6)
    })

    test('Multiple levels of nesting', () => {
        const nestedList = NestedIntegerImpl.fromArray([1, [2, [3, [4]]]])
        expect(depthSumInverse(nestedList)).toBe(17) // 1*4 + 2*3 + 3*2 + 4*1 = 17
    })
})
