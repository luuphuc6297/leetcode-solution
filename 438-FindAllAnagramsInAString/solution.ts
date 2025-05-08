/**
 * 438. Find All Anagrams in a String
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 *
 * Given two strings s and p, return an array of all the start indices of p's anagrams in s.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 */

export function findAnagrams(s: string, p: string): number[] {
    // Nếu chuỗi p dài hơn chuỗi s, không thể có anagram nào
    if (p.length > s.length) return [];
    
    const result: number[] = [];
    const pCount = new Array(26).fill(0); // Mảng đếm tần suất của p
    const sCount = new Array(26).fill(0); // Mảng đếm tần suất của cửa sổ trong s
    
    // Điền mảng tần suất cho chuỗi p
    for (let i = 0; i < p.length; i++) {
        pCount[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    
    // Điền mảng tần suất cho cửa sổ đầu tiên trong s
    for (let i = 0; i < p.length; i++) {
        sCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    
    // So sánh mảng tần suất ban đầu
    if (arraysEqual(pCount, sCount)) {
        result.push(0);
    }
    
    // Trượt cửa sổ qua chuỗi s
    for (let i = p.length; i < s.length; i++) {
        // Thêm ký tự mới vào cửa sổ
        sCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        
        // Loại bỏ ký tự cũ ra khỏi cửa sổ
        sCount[s.charCodeAt(i - p.length) - 'a'.charCodeAt(0)]--;
        
        // Kiểm tra nếu mảng tần suất giống nhau
        if (arraysEqual(pCount, sCount)) {
            result.push(i - p.length + 1);
        }
    }
    
    return result;
}

// Hàm hỗ trợ so sánh hai mảng
function arraysEqual(arr1: number[], arr2: number[]): boolean {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

// Example test cases
const example1_s = 'cbaebabacd',
    example1_p = 'abc'
console.log(findAnagrams(example1_s, example1_p)) // Expected: [0, 6]

const example2_s = 'abab',
    example2_p = 'ab'
console.log(findAnagrams(example2_s, example2_p)) // Expected: [0, 1, 2]

// Tối ưu hóa: Sử dụng một biến đếm thay vì so sánh toàn bộ mảng
export function findAnagramsOptimized(s: string, p: string): number[] {
    if (p.length > s.length) return [];
    
    const result: number[] = [];
    const pCount = new Array(26).fill(0);
    const sCount = new Array(26).fill(0);
    
    // Đếm số ký tự duy nhất trong chuỗi p
    let uniqueChars = 0;
    for (let i = 0; i < p.length; i++) {
        const idx = p.charCodeAt(i) - 'a'.charCodeAt(0);
        if (pCount[idx] === 0) uniqueChars++;
        pCount[idx]++;
    }
    
    let matches = 0; // Số lượng ký tự có tần suất trùng khớp
    
    // Khởi tạo cửa sổ đầu tiên
    for (let i = 0; i < p.length; i++) {
        const idx = s.charCodeAt(i) - 'a'.charCodeAt(0);
        sCount[idx]++;
        
        // Nếu tần suất trùng khớp chính xác, tăng matches
        if (pCount[idx] === sCount[idx]) {
            matches++;
        }
    }
    
    // Nếu số lượng matches bằng số lượng ký tự duy nhất trong p
    if (matches === uniqueChars) {
        result.push(0);
    }
    
    // Trượt cửa sổ
    for (let i = p.length; i < s.length; i++) {
        // Thêm ký tự mới
        const addIdx = s.charCodeAt(i) - 'a'.charCodeAt(0);
        sCount[addIdx]++;
        
        // Cập nhật matches khi thêm ký tự mới
        if (pCount[addIdx] === sCount[addIdx]) {
            matches++;
        } else if (pCount[addIdx] + 1 === sCount[addIdx] && pCount[addIdx] > 0) {
            // Nếu trước đó đã trùng khớp nhưng bây giờ không
            matches--;
        }
        
        // Loại bỏ ký tự cũ
        const removeIdx = s.charCodeAt(i - p.length) - 'a'.charCodeAt(0);
        sCount[removeIdx]--;
        
        // Cập nhật matches khi loại bỏ ký tự cũ
        if (pCount[removeIdx] === sCount[removeIdx]) {
            matches++;
        } else if (pCount[removeIdx] - 1 === sCount[removeIdx] && pCount[removeIdx] > 0) {
            // Nếu trước đó đã trùng khớp nhưng bây giờ không
            matches--;
        }
        
        // Kiểm tra nếu tất cả ký tự đều trùng khớp
        if (matches === uniqueChars) {
            result.push(i - p.length + 1);
        }
    }
    
    return result;
}
