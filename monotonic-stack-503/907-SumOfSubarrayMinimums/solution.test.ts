import { sumSubarrayMins, sumSubarrayMinsOptimized } from './solution';

describe('907. Sum of Subarray Minimums', () => {
  // Test cases for both approaches
  const testCases = [
    {
      arr: [3, 1, 2, 4],
      expected: 17,
      description: 'Example 1: Simple array'
    },
    {
      arr: [11, 81, 94, 43, 3],
      expected: 444,
      description: 'Example 2: Larger values'
    },
    {
      arr: [1],
      expected: 1,
      description: 'Single element array'
    },
    {
      arr: [10, 10, 10, 10, 10],
      expected: 150,
      description: 'All same elements'
    },
    {
      arr: [1, 2, 3, 4, 5],
      expected: 35,
      description: 'Strictly increasing array'
    },
    {
      arr: [5, 4, 3, 2, 1],
      expected: 35,
      description: 'Strictly decreasing array'
    },
    {
      arr: [71, 55, 82, 55],
      expected: 593,
      description: 'Array with duplicates'
    },
    {
      arr: [1, 7, 5, 2, 4, 3, 9],
      expected: 73,
      description: 'Complex array'
    },
    {
      arr: [1, 1, 1, 1, 1, 1, 1, 10],
      expected: 92,
      description: 'Many duplicates with one different'
    }
  ];

  describe('Standard Approach', () => {
    testCases.forEach(({ arr, expected, description }) => {
      test(`${description}: ${JSON.stringify(arr)}`, () => {
        expect(sumSubarrayMins(arr)).toBe(expected);
      });
    });
  });

  describe('Optimized Approach', () => {
    testCases.forEach(({ arr, expected, description }) => {
      test(`${description}: ${JSON.stringify(arr)}`, () => {
        expect(sumSubarrayMinsOptimized(arr)).toBe(expected);
      });
    });
  });

  // Additional test for large arrays (stress test)
  test('Large array', () => {
    const largeArr = new Array(1000).fill(0).map((_, i) => (i % 100) + 1);
    const result1 = sumSubarrayMins(largeArr);
    const result2 = sumSubarrayMinsOptimized(largeArr);
    expect(result1).toBe(result2);
  });
}); 