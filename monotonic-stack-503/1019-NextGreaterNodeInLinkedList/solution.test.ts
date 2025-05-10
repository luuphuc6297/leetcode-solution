import { ListNode, nextLargerNodes } from './solution'

// Helper function to create a linked list from an array
function createLinkedList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;
    
    const head = new ListNode(arr[0]);
    let current = head;
    
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    
    return head;
}

describe('1019. Next Greater Node In Linked List', () => {
    test('Example 1: [2,1,5]', () => {
        const head = createLinkedList([2,1,5]);
        expect(nextLargerNodes(head)).toEqual([5,5,0]);
    })

    test('Example 2: [2,7,4,3,5]', () => {
        const head = createLinkedList([2,7,4,3,5]);
        expect(nextLargerNodes(head)).toEqual([7,0,5,5,0]);
    })

    test('Empty linked list', () => {
        expect(nextLargerNodes(null)).toEqual([]);
    })

    test('Single node', () => {
        const head = createLinkedList([5]);
        expect(nextLargerNodes(head)).toEqual([0]);
    })

    test('Decreasing values', () => {
        const head = createLinkedList([5,4,3,2,1]);
        expect(nextLargerNodes(head)).toEqual([0,0,0,0,0]);
    })

    test('Increasing values', () => {
        const head = createLinkedList([1,2,3,4,5]);
        expect(nextLargerNodes(head)).toEqual([2,3,4,5,0]);
    })
}) 