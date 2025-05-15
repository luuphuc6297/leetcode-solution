/**
 * 134. Gas Station
 * https://leetcode.com/problems/gas-station/
 * 
 * There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
 * You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i+1)th station.
 * You begin the journey with an empty tank at one of the gas stations.
 * 
 * Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once
 * in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique.
 * 
 * Examples:
 * Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
 * Output: 3
 * Explanation:
 * Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
 * Travel to station 4. Your tank = 4 - 1 + 5 = 8
 * Travel to station 0. Your tank = 8 - 2 + 1 = 7
 * Travel to station 1. Your tank = 7 - 3 + 2 = 6
 * Travel to station 2. Your tank = 6 - 4 + 3 = 5
 * Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
 * Therefore, return 3 as the starting index.
 * 
 * Input: gas = [2,3,4], cost = [3,4,3]
 * Output: -1
 * Explanation:
 * You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
 * Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
 * Travel to station 0. Your tank = 4 - 3 + 2 = 3
 * Travel to station 1. Your tank = 3 - 3 + 3 = 3
 * You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
 * Therefore, you can't travel around the circuit once no matter where you start.
 * 
 * Constraints:
 * n == gas.length == cost.length
 * 1 <= n <= 10^5
 * 0 <= gas[i], cost[i] <= 10^4
 */

/**
 * Approach 1: Brute Force (Time Limit Exceeded for large inputs)
 * Try starting from each station and see if we can complete the circuit
 * 
 * Time Complexity: O(n²) where n is the number of gas stations
 * Space Complexity: O(1)
 */
export function canCompleteCircuitBruteForce(gas: number[], cost: number[]): number {
    const n = gas.length;
    
    // For each potential starting point
    for (let start = 0; start < n; start++) {
        let tank = 0;
        let possible = true;
        
        // Try to complete the circuit starting from this point
        for (let i = 0; i < n; i++) {
            const station = (start + i) % n;
            tank += gas[station] - cost[station];
            
            // If at any point we don't have enough gas, this starting point won't work
            if (tank < 0) {
                possible = false;
                break;
            }
        }
        
        if (possible) {
            return start;
        }
    }
    
    return -1; // No solution found
}

/**
 * Approach 2: One Pass Solution
 * If the total gas is greater than or equal to the total cost, there must be a solution.
 * We can find it by tracking the running sum and identifying where it first goes negative.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function canCompleteCircuit(gas: number[], cost: number[]): number {
    const n = gas.length;
    
    // First, check if there is a solution at all
    let totalGas = 0;
    let totalCost = 0;
    for (let i = 0; i < n; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
    }
    
    if (totalGas < totalCost) {
        return -1; // Not enough gas to complete the circuit
    }
    
    // There is a solution, now find the starting point
    let start = 0;
    let tank = 0;
    
    for (let i = 0; i < n; i++) {
        tank += gas[i] - cost[i];
        
        // If we run out of gas, we cannot start from any station up to the current one
        if (tank < 0) {
            // Start from the next station
            start = i + 1;
            tank = 0;
        }
    }
    
    return start;
}

/**
 * Alternative approach: Looking at cumulative sums
 * 
 * This approach is conceptually similar to the one pass solution but focuses on finding
 * the index where the cumulative sum of (gas[i] - cost[i]) is at its minimum.
 * The starting point is the next index after this minimum.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function canCompleteCircuitAlternative(gas: number[], cost: number[]): number {
    const n = gas.length;
    let totalSum = 0;
    let currentSum = 0;
    let minIndex = 0;
    
    for (let i = 0; i < n; i++) {
        const diff = gas[i] - cost[i];
        totalSum += diff;
        currentSum += diff;
        
        // If we find a new minimum, update minIndex
        if (currentSum < 0) {
            // Since we found a negative value, reset and start from the next index
            minIndex = i + 1;
            currentSum = 0;
        }
    }
    
    // If total gas is less than total cost, no solution
    return totalSum >= 0 ? minIndex % n : -1;
} 