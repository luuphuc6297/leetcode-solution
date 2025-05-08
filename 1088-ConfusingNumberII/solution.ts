/**
 * 1088. Confusing Number II
 * 
 * A confusing number is a number that when rotated 180 degrees becomes a different number.
 * We can rotate digits 0, 1, 6, 8, 9, producing 0, 1, 9, 8, 6 respectively.
 * We cannot rotate digits 2, 3, 4, 5, 7.
 * 
 * The task is to find the number of confusing numbers in the range from 1 to N.
 * 
 * Example:
 * 
 * Input: N = 20
 * Output: 6
 * Confusing numbers are: 6, 9, 10, 16, 18, 19
 * 
 * Input: N = 100
 * Output: 19
 * 
 * Constraints:
 * - 1 <= N <= 10^9
 * 
 * Complexity:
 * - Time: O(5^D), where D is the number of digits of N
 * - Space: O(D), where D is the number of digits of N
 * 
 * Method: DFS with backtracking to generate all possible numbers, checking each if it's a confusing number
 */

function confusingNumberII(N: number): number {
    // Mapping for digits when rotated 180 degrees
    const rotationMap: { [key: string]: string } = {
        '0': '0',
        '1': '1',
        '6': '9',
        '8': '8',
        '9': '6'
    };
    
    // Valid digits that can be used to form confusing numbers
    const validDigits = ['0', '1', '6', '8', '9'];
    
    let count = 0;
    
    // Function to check if a number is confusing
    function isConfusing(num: string): boolean {
        let rotated = '';
        for (let i = num.length - 1; i >= 0; i--) {
            rotated += rotationMap[num[i]];
        }
        return rotated !== num;
    }
    
    // Use DFS to generate all possible numbers
    function dfs(current: string, limit: string): void {
        if (current !== '' && parseInt(current) <= parseInt(limit)) {
            // Check if the current number is confusing
            if (isConfusing(current)) {
                count++;
            }
        }
        
        // Try adding each valid digit to the current number
        for (const digit of validDigits) {
            // Avoid numbers starting with 0
            if (current === '' && digit === '0') {
                continue;
            }
            
            const next = current + digit;
            
            // Check if the new number exceeds the limit N
            if (next.length > limit.length || (next.length === limit.length && next > limit)) {
                continue;
            }
            
            dfs(next, limit);
        }
    }
    
    dfs('', N.toString());
    return count;
}

export { confusingNumberII }; 