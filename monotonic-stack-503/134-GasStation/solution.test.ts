import { canCompleteCircuit, canCompleteCircuitBruteForce, canCompleteCircuitAlternative } from './solution';

describe('134. Gas Station', () => {
  // Test cases for all approaches
  const testCases = [
    {
      gas: [1, 2, 3, 4, 5],
      cost: [3, 4, 5, 1, 2],
      expected: 3,
      description: 'Example 1: Regular solution'
    },
    {
      gas: [2, 3, 4],
      cost: [3, 4, 3],
      expected: -1,
      description: 'Example 2: No possible solution'
    },
    {
      gas: [5, 1, 2, 3, 4],
      cost: [4, 4, 1, 5, 1],
      expected: 4,
      description: 'Solution at the last index'
    },
    {
      gas: [5, 8, 2, 8],
      cost: [6, 5, 6, 6],
      expected: 3,
      description: 'Solution with just enough gas'
    },
    {
      gas: [1, 2],
      cost: [2, 1],
      expected: 1,
      description: 'Two stations with solution at index 1'
    },
    {
      gas: [3],
      cost: [3],
      expected: 0,
      description: 'Single station with exactly enough gas'
    },
    {
      gas: [2],
      cost: [3],
      expected: -1,
      description: 'Single station with not enough gas'
    },
    {
      gas: [4, 5, 3, 1, 4],
      cost: [5, 4, 3, 4, 2],
      expected: -1,
      description: 'Not enough total gas'
    },
    {
      gas: [1, 2, 3, 4, 5, 5, 70],
      cost: [2, 3, 4, 3, 9, 6, 2],
      expected: 6,
      description: 'Large difference at the end'
    }
  ];

  describe('Brute Force Approach', () => {
    testCases.forEach(({ gas, cost, expected, description }) => {
      test(`${description}: gas=${JSON.stringify(gas)}, cost=${JSON.stringify(cost)}`, () => {
        expect(canCompleteCircuitBruteForce(gas, cost)).toBe(expected);
      });
    });
  });

  describe('Optimal One Pass Solution', () => {
    testCases.forEach(({ gas, cost, expected, description }) => {
      test(`${description}: gas=${JSON.stringify(gas)}, cost=${JSON.stringify(cost)}`, () => {
        expect(canCompleteCircuit(gas, cost)).toBe(expected);
      });
    });
  });

  describe('Alternative Cumulative Sum Approach', () => {
    testCases.forEach(({ gas, cost, expected, description }) => {
      test(`${description}: gas=${JSON.stringify(gas)}, cost=${JSON.stringify(cost)}`, () => {
        expect(canCompleteCircuitAlternative(gas, cost)).toBe(expected);
      });
    });
  });

  // Additional test for large arrays (stress test for O(n) solutions)
  test('Large array', () => {
    const size = 1000;
    const gas = new Array(size).fill(0).map((_, i) => (i % 10) + 1);
    const cost = new Array(size).fill(0).map((_, i) => (i % 9) + 1);
    
    // Both O(n) approaches should give the same result
    const result1 = canCompleteCircuit(gas, cost);
    const result2 = canCompleteCircuitAlternative(gas, cost);
    expect(result1).toBe(result2);
    
    // Verify that brute force also gives the same result for small inputs
    const smallGas = gas.slice(0, 20);
    const smallCost = cost.slice(0, 20);
    const smallResult1 = canCompleteCircuit(smallGas, smallCost);
    const smallResult2 = canCompleteCircuitBruteForce(smallGas, smallCost);
    expect(smallResult1).toBe(smallResult2);
  });
}); 