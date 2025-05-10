/**
 * 1019. Next Greater Node In Linked List
 * https://leetcode.com/problems/next-greater-node-in-linked-list/
 *
 * You are given the head of a linked list with n nodes.
 *
 * For each node in the list, find the value of the next greater node. That is, for each node,
 * find the value of the first node that is next to it and has a strictly greater value than it.
 *
 * Return an integer array answer where answer[i] is the value of the next greater node of the ith node (0-indexed).
 * If there is no next greater node for the ith node, set answer[i] = 0.
 */

// Definition for singly-linked list.
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function nextLargerNodes(head: ListNode | null): number[] {
    if (!head) return [];
    
    // Convert linked list to array
    const values: number[] = [];
    let current: ListNode | null = head;
    
    while (current) {
        values.push(current.val);
        current = current.next;
    }
    
    const result = new Array(values.length).fill(0);
    const stack: [number, number][] = []; // [index, value]
    
    for (let i = 0; i < values.length; i++) {
        // Process all values in stack that are smaller than current value
        while (stack.length > 0 && stack[stack.length - 1][1] < values[i]) {
            const [index, _] = stack.pop()!;
            result[index] = values[i];
        }
        
        stack.push([i, values[i]]);
    }
    
    return result;
}

// Example test cases
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

const example1 = createLinkedList([2,1,5]);
console.log(nextLargerNodes(example1)); // Expected: [5,5,0]

const example2 = createLinkedList([2,7,4,3,5]);
console.log(nextLargerNodes(example2)); // Expected: [7,0,5,5,0] 