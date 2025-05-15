/**
 * 622. Design Circular Queue
 * https://leetcode.com/problems/design-circular-queue/
 * 
 * Design your implementation of the circular queue. The circular queue is a linear data structure 
 * in which the operations are performed based on FIFO (First In First Out) principle, and the last 
 * position is connected back to the first position to make a circle. It is also called "Ring Buffer".
 * 
 * One of the benefits of the circular queue is that we can make use of the spaces in front of the queue.
 * In a normal queue, once the queue becomes full, we cannot insert the next element even if there
 * is a space in front of the queue. But using the circular queue, we can use the space to store new values.
 *
 * Implementation the MyCircularQueue class:
 * - MyCircularQueue(k) Initializes the object with the size of the queue to be k.
 * - int Front() Gets the front item from the queue. If the queue is empty, return -1.
 * - int Rear() Gets the last item from the queue. If the queue is empty, return -1.
 * - boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
 * - boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
 * - boolean isEmpty() Checks whether the circular queue is empty or not.
 * - boolean isFull() Checks whether the circular queue is full or not.
 */

export class MyCircularQueue {
    private queue: number[];
    private capacity: number;
    private headIndex: number;
    private count: number;

    constructor(k: number) {
        // Khởi tạo mảng với kích thước k
        this.queue = new Array(k);
        this.capacity = k;
        this.headIndex = 0;
        this.count = 0;
    }

    enQueue(value: number): boolean {
        // Kiểm tra xem hàng đợi đã đầy chưa
        if (this.isFull()) {
            return false;
        }
        
        // Tính toán vị trí để thêm phần tử mới
        const tailIndex = (this.headIndex + this.count) % this.capacity;
        this.queue[tailIndex] = value;
        this.count += 1;
        
        return true;
    }

    deQueue(): boolean {
        // Kiểm tra xem hàng đợi có trống không
        if (this.isEmpty()) {
            return false;
        }
        
        // Di chuyển head pointer và giảm số lượng phần tử
        this.headIndex = (this.headIndex + 1) % this.capacity;
        this.count -= 1;
        
        return true;
    }

    Front(): number {
        // Nếu hàng đợi trống, trả về -1
        if (this.isEmpty()) {
            return -1;
        }
        
        return this.queue[this.headIndex];
    }

    Rear(): number {
        // Nếu hàng đợi trống, trả về -1
        if (this.isEmpty()) {
            return -1;
        }
        
        // Tính toán vị trí phần tử cuối cùng
        const tailIndex = (this.headIndex + this.count - 1) % this.capacity;
        return this.queue[tailIndex];
    }

    isEmpty(): boolean {
        return this.count === 0;
    }

    isFull(): boolean {
        return this.count === this.capacity;
    }
}

/**
 * Ví dụ sử dụng:
 * 
 * const circularQueue = new MyCircularQueue(3);
 * circularQueue.enQueue(1);  // return true
 * circularQueue.enQueue(2);  // return true
 * circularQueue.enQueue(3);  // return true
 * circularQueue.enQueue(4);  // return false, hàng đợi đã đầy
 * circularQueue.Rear();      // return 3
 * circularQueue.isFull();    // return true
 * circularQueue.deQueue();   // return true
 * circularQueue.enQueue(4);  // return true
 * circularQueue.Rear();      // return 4
 */ 