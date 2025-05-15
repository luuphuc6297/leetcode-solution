import { MyCircularQueue } from './solution';

describe('622. Design Circular Queue', () => {
  test('Các thao tác với Circular Queue', () => {
    const circularQueue = new MyCircularQueue(3);
    
    // Thêm phần tử vào hàng đợi
    expect(circularQueue.enQueue(1)).toBe(true);
    expect(circularQueue.enQueue(2)).toBe(true);
    expect(circularQueue.enQueue(3)).toBe(true);
    
    // Hàng đợi đã đầy, không thể thêm nữa
    expect(circularQueue.enQueue(4)).toBe(false);
    
    // Kiểm tra phần tử cuối và trạng thái đầy
    expect(circularQueue.Rear()).toBe(3);
    expect(circularQueue.isFull()).toBe(true);
    
    // Xóa một phần tử và thêm mới
    expect(circularQueue.deQueue()).toBe(true);
    expect(circularQueue.enQueue(4)).toBe(true);
    
    // Kiểm tra phần tử cuối mới
    expect(circularQueue.Rear()).toBe(4);
  });

  test('Lấy phần tử đầu tiên của hàng đợi', () => {
    const circularQueue = new MyCircularQueue(3);
    
    expect(circularQueue.Front()).toBe(-1); // Hàng đợi trống
    
    circularQueue.enQueue(10);
    expect(circularQueue.Front()).toBe(10);
    
    circularQueue.enQueue(20);
    expect(circularQueue.Front()).toBe(10); // Phần tử đầu tiên vẫn là 10
  });

  test('Kiểm tra trạng thái trống', () => {
    const circularQueue = new MyCircularQueue(2);
    
    expect(circularQueue.isEmpty()).toBe(true);
    
    circularQueue.enQueue(5);
    expect(circularQueue.isEmpty()).toBe(false);
    
    circularQueue.deQueue();
    expect(circularQueue.isEmpty()).toBe(true);
  });

  test('Hoạt động sau khi đầy và lấy hết', () => {
    const circularQueue = new MyCircularQueue(3);
    
    // Thêm đầy hàng đợi
    circularQueue.enQueue(1);
    circularQueue.enQueue(2);
    circularQueue.enQueue(3);
    
    // Lấy hết
    circularQueue.deQueue();
    circularQueue.deQueue();
    circularQueue.deQueue();
    
    expect(circularQueue.isEmpty()).toBe(true);
    
    // Kiểm tra có thể thêm lại không
    expect(circularQueue.enQueue(7)).toBe(true);
    expect(circularQueue.Front()).toBe(7);
    expect(circularQueue.Rear()).toBe(7);
  });
}); 