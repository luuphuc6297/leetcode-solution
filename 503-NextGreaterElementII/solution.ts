/**
 * 503. Next Greater Element II
 * https://leetcode.com/problems/next-greater-element-ii/
 *
 * Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]),
 * return the next greater number for every element in nums.
 */
export function nextGreaterElementsExplain(nums: number[]): number[] {
    const n = nums.length
    const result = new Array(n).fill(-1)
    // stack: lưu các index của các phần tử trong mảng nums chưa tìm kiếm được next greater element
    const stack: number[] = []

    for (let i = 0; i < n * 2; i++) {
        /**
         * Toán tử modulo (%) giúp "quay vòng" lại mảng:
         * Khi i < n: i % n = i (truy cập các phần tử bình thường)
         * Khi i >= n: i % n dẫn đến chỉ số từ 0 đến n-1 (quay lại đầu mảng)
         * Ví dụ với mảng [1,2,3] có n = 3:
         * i = 0: nums[0 % 3] = nums[0] = 1
         * i = 1: nums[1 % 3] = nums[1] = 2
         * i = 2: nums[2 % 3] = nums[2] = 3
         * i = 3: nums[3 % 3] = nums[0] = 1 (quay lại đầu mảng)
         * i = 4: nums[4 % 3] = nums[1] = 2
         * i = 5: nums[5 % 3] = nums[2] = 3
         */
        // Khi i < n: i % n = i
        // Khi i ≥ n: i % n sẽ quay lại các chỉ số ban đầu (i=n → 0, i=n+1 → 1, v.v.)
        const num = nums[i % n]
        /**
         * 1.nums[stack[stack.length - 1]] < num: So sánh phần tử hiện tại (num) với phần tử ở đỉnh stack.
         *     stack[stack.length - 1]: Lấy chỉ số của phần tử ở đỉnh stack (phần tử cuối cùng trong mảng stack)
         *     nums[stack[stack.length - 1]]: Lấy giá trị thực của phần tử đó trong mảng ban đầu
         *     So sánh với num (giá trị của phần tử hiện tại đang xét)
         */
        // Ví dụ với mảng [1,2,3] có n = 3:
        // Giả sử stack = [0, 1, 2] (chứa các chỉ số)
        // nums[stack[stack.length - 1]] = nums[stack[2]] = nums[2] = 3

        // Khi xử lý phần tử i = 3 (lần duyệt thứ 2, quay lại đầu mảng)
        // nums[i % n] = nums[3 % 3] = nums[0] = 1

        // So sánh: nums[stack[stack.length - 1]] < nums[i % n]
        // 3 < 1? Không đúng
        // Không pop phần tử nào từ stack
        // Đẩy chỉ số 3 % 3 = 0 vào stack
        // Stack giờ là [0, 1, 2, 0]

        // Khi xử lý phần tử i = 4
        // nums[i % n] = nums[4 % 3] = nums[1] = 2

        // So sánh: nums[stack[stack.length - 1]] < nums[i % n]
        // nums[0] = 1 < 2? Đúng
        // Pop phần tử từ stack, gán result[0] = 2
        // Stack giờ là [0, 1, 2]

        // Tiếp tục so sánh: nums[stack[stack.length - 1]] < nums[i % n]
        // nums[2] = 3 < 2? Không đúng
        // Không pop thêm, đẩy 1 vào stack
        // Stack giờ là [0, 1, 2, 1]
        while (stack.length > 0 && nums[stack[stack.length - 1]] < num) {
            console.log('nums[stack[stack.length - 1]]-after:', nums[stack[stack.length - 1]])
            result[stack.pop()!] = num
            /**
             * stack.pop():
                Lấy ra và xóa phần tử ở đỉnh stack (phần tử cuối cùng trong mảng stack)
                Phần tử này là chỉ số (index) của một phần tử trong mảng gốc
                Dấu ! là cú pháp "non-null assertion" trong TypeScript, khẳng định giá trị không phải null/undefined
             */
        }
        if (i < n) {
            stack.push(i)
        }
    }

    return result
}

export function nextGreaterElements(nums: number[]): number[] {
    const result: number[] = new Array(nums.length).fill(-1);
    const stack: number[] = [];
    for (let i = 0; i <nums.length*2; i++) {
        const currentElement = nums[i % nums.length];
        while (stack.length> 0) {
            const topIndex = stack[stack.length - 1];
            const topValue = nums[topIndex];
            if (topValue < currentElement) {
                result[stack.pop()!] = currentElement;
                
            } else {
                break;
            }
        }
        if (i < nums.length) {
            stack.push(i);
        }
    }
    return result;
}
// export function nextGreaterElements(nums: number[]): number[] {
//     const stack: number[] = [];
//     const result: number[] = new Array(nums.length).fill(-1);

//     for (let i = 0; i < nums.length * 2; i++) {
//         const currentElement = nums[i % nums.length]
//         while (stack.length > 0 && nums[stack[stack.length - 1]] < currentElement) {
//             result[stack.pop()!] = currentElement
//         }
//         if (i < nums.length) {
//             stack.push(i)
//         }
//     }
//     return result
// }

// export function nextGreaterElements(nums: number[]): number[] {
//     const arraySize = nums.length
//     const stack: number[] = []
//     const result = new Array(arraySize).fill(-1)

//     // for (let i = 0; i < arraySize * 2; i++) {
//     //     const currentElement = nums[i % arraySize]
//     //     while (stack.length > 0 && nums[stack[stack.length - 1]] < currentElement) {
//     //         result[stack.pop()!] = currentElement
//     //     }
//     //     if (i < arraySize) {
//     //         stack.push(i)
//     //     }
//     // }
//     // return result

//     // Duyệt qua mảng hai lần để xử lý tính chất vòng tròn
//     for (let i = 0; i < arraySize * 2; i++) {
//         // Lấy value của phần tử hiện tại trong mảng vòng tròn
//         const currentValue: number = nums[i % arraySize]

//         // Xử lý các phần tử chưa tìm được next greater element
//         while (stack.length > 0) {
//             // Index của phần tử ở đỉnh stack
//             const topIndex: number = stack[stack.length - 1]
//             // Value của phần tử ở đỉnh stack
//             const topValue: number = nums[topIndex]

//             // Nếu phần tử hiện tại lớn hơn phần tử ở đỉnh stack
//             if (topValue < currentValue) {
//                 // Pop index ra khỏi stack
//                 const indexWithoutNextGreater: number = stack.pop()!
//                 // Gán next greater element cho phần tử tương ứng
//                 result[indexWithoutNextGreater] = currentValue
//             } else {
//                 // Nếu không lớn hơn, dừng vòng lặp while
//                 breaki
//             }
//         }

//         // Chỉ thêm index vào stack trong lần duyệt đầu tiên
//         if (i < arraySize) {
//             stack.push(i)
//         }
//     }

//     return result
// }
// Example test cases
// const example1 = [1, 2, 1]
// arraySize = 3
// results = [-1, -1, -1];
// stack = [];
// // loop 1:
// i = 0;
// currentElement = nums[0 % 3] = nums[0] = 1;
// stack.length = 0;
// i < arraySize (1 < 3);
// -> stack.push(0);
// stack = [0];

// // loop 2:
// i = 1;
// currentElement = nums[1 % 3] = nums[1] = 2
// stack.length = 1;
// nums[stack[1 - 1]] = nums[stack[0]] = nums[0] = 1 < currentElement = 2;

// console.log(nextGreaterElements(example1)) // Expected: [2, -1, 2]

const example2 = [1, 2, 3, 4, 3]
console.log(nextGreaterElements(example2)) // Expected: [2, 3, 4, -1, 4]

// const example3 = [5, 4, 3, 2, 1]
// console.log(nextGreaterElements(example3)) // Expected: [-1, 5, 5, 5, 5]
