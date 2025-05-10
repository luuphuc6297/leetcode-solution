/**
 * 556. Next Greater Element III
 * https://leetcode.com/problems/next-greater-element-iii/
 *
 * Given a positive integer n, find the smallest integer which has exactly the same digits 
 * existing in the integer n and is greater in value than n. If no such positive integer exists, 
 * return -1.
 * 
 * Note that the returned integer should fit in 32-bit integer, if there is a valid answer but 
 * it does not fit in 32-bit integer, return -1.
 */

export function nextGreaterElement(n: number): number {
    // Chuyển số thành mảng các chữ số để dễ xử lý
    const digits: string[] = n.toString().split('');
    const length = digits.length;
    
    // Bắt đầu từ phải sang trái, tìm chữ số đầu tiên nhỏ hơn chữ số bên phải
    let i = length - 2;
    while (i >= 0 && digits[i] >= digits[i + 1]) {
        i--;
    }
    
    // Nếu không tìm thấy, không có số lớn hơn với cùng các chữ số
    if (i < 0) return -1;
    
    // Tìm chữ số nhỏ nhất bên phải của i mà lớn hơn digits[i]
    let j = length - 1;
    while (digits[j] <= digits[i]) {
        j--;
    }
    
    // Hoán đổi hai chữ số
    [digits[i], digits[j]] = [digits[j], digits[i]];
    
    // Đảo ngược phần từ i+1 đến cuối để có số nhỏ nhất có thể
    const reversedSuffix = digits.slice(i + 1).reverse();
    digits.splice(i + 1, length - i - 1, ...reversedSuffix);
    
    // Chuyển mảng chữ số thành số
    const result = parseInt(digits.join(''));
    
    // Kiểm tra xem kết quả có vượt quá giới hạn của số nguyên 32-bit hay không
    return result > 2147483647 ? -1 : result;
}

// Ví dụ kiểm thử
console.log(nextGreaterElement(12)); // Expected: 21
console.log(nextGreaterElement(21)); // Expected: -1
console.log(nextGreaterElement(12443322)); // Expected: 13222344 