/**
 * 739. Daily Temperatures
 * https://leetcode.com/problems/daily-temperatures/
 * 
 * Cho một mảng temperatures đại diện cho nhiệt độ hàng ngày, hãy trả về một mảng answer sao cho answer[i] 
 * là số ngày bạn phải đợi sau ngày i để có nhiệt độ cao hơn.
 * Nếu không có ngày nào trong tương lai có nhiệt độ cao hơn, hãy đặt answer[i] = 0.
 * 
 * Given an array of integers temperatures representing daily temperatures, return an array answer such that
 * answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.
 * If there is no future day for which this is possible, keep answer[i] = 0.
 * 
 * Ví dụ / Examples:
 * Input: temperatures = [73,74,75,71,69,72,76,73]
 * Output: [1,1,4,2,1,1,0,0]
 * 
 * Input: temperatures = [30,40,50,60]
 * Output: [1,1,1,0]
 * 
 * Input: temperatures = [30,60,90]
 * Output: [1,1,0]
 * 
 * Ràng buộc / Constraints:
 * - 1 <= temperatures.length <= 10^5
 * - 30 <= temperatures[i] <= 100
 * 
 * Độ phức tạp thời gian / Time Complexity: O(n), where n is the length of temperatures
 * Độ phức tạp không gian / Space Complexity: O(n)
 */

/**
 * Phương pháp: Sử dụng Monotonic Stack (Ngăn xếp đơn điệu)
 * 
 * Approach: Using Monotonic Stack
 * 
 * 1. Initialize an answer array filled with 0s with the same length as temperatures
 * 2. Initialize an empty stack to store indices of temperatures that haven't found a warmer day
 * 3. Iterate through each day i:
 *    a. While the stack is not empty and the current temperature is greater than the temperature at the index at the top of the stack:
 *       - Pop the index from the stack
 *       - Calculate the distance (number of days to wait) and store it in the answer array
 *    b. Push the current index onto the stack
 * 4. Return the answer array
 */

export function dailyTemperatures(temperatures: number[]): number[] {
    const n = temperatures.length;
    const answer = new Array(n).fill(0);
    const stack: number[] = []; // Stack to store indices
    
    for (let i = 0; i < n; i++) {
        // While stack is not empty and current temperature is greater than temperature at the top stack index
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop()!;
            answer[prevIndex] = i - prevIndex; // Number of days to wait
        }
        
        // Push current index onto the stack
        stack.push(i);
    }
    
    return answer;
}

/**
 * Ví dụ minh họa / Example walkthrough:
 * 
 * temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
 * 
 * i = 0, temperatures[0] = 73
 *   - stack = [0]
 * 
 * i = 1, temperatures[1] = 74
 *   - 74 > 73, pop 0 from stack, answer[0] = 1 - 0 = 1
 *   - stack = [1]
 * 
 * i = 2, temperatures[2] = 75
 *   - 75 > 74, pop 1 from stack, answer[1] = 2 - 1 = 1
 *   - stack = [2]
 * 
 * i = 3, temperatures[3] = 71
 *   - 71 < 75, add 3 to stack
 *   - stack = [2, 3]
 * 
 * i = 4, temperatures[4] = 69
 *   - 69 < 71, add 4 to stack
 *   - stack = [2, 3, 4]
 * 
 * i = 5, temperatures[5] = 72
 *   - 72 > 69, pop 4 from stack, answer[4] = 5 - 4 = 1
 *   - 72 > 71, pop 3 from stack, answer[3] = 5 - 3 = 2
 *   - 72 < 75, add 5 to stack
 *   - stack = [2, 5]
 * 
 * i = 6, temperatures[6] = 76
 *   - 76 > 72, pop 5 from stack, answer[5] = 6 - 5 = 1
 *   - 76 > 75, pop 2 from stack, answer[2] = 6 - 2 = 4
 *   - stack = [6]
 * 
 * i = 7, temperatures[7] = 73
 *   - 73 < 76, add 7 to stack
 *   - stack = [6, 7]
 * 
 * End of loop:
 *   - answer = [1, 1, 4, 2, 1, 1, 0, 0]
 */

/**
 * Giải pháp thay thế: Duyệt ngược từ cuối mảng
 * Alternative approach: Traverse from the end of the array
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1) (not counting the result array)
 */
export function dailyTemperaturesOptimized(temperatures: number[]): number[] {
    const n = temperatures.length;
    const answer = new Array(n).fill(0);
    
    // Traverse backwards from the end of the array
    for (let i = n - 2; i >= 0; i--) {
        let j = i + 1;
        
        // If current temperature is less than the next day's temperature
        if (temperatures[i] < temperatures[j]) {
            answer[i] = 1;
        } else {
            // Otherwise, find the next day with a higher temperature
            while (j < n && temperatures[i] >= temperatures[j]) {
                // If no warmer day is found, stop
                if (answer[j] === 0) {
                    j = n; // Exit the loop
                    break;
                }
                // Jump to the next day with a warmer temperature than day j
                j += answer[j];
            }
            
            // If a warmer day is found
            if (j < n) {
                answer[i] = j - i;
            }
        }
    }
    
    return answer;
} 