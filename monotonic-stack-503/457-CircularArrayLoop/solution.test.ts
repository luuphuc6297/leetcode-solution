import { circularArrayLoop, circularArrayLoopWithSets } from './solution';

describe('457. Circular Array Loop', () => {
  // Test cases for both approaches
  const testCases = [
    {
      nums: [2, -1, 1, 2, 2],
      expected: true,
      description: 'Example 1: Positive cycle'
    },
    {
      nums: [-1, 2],
      expected: false,
      description: 'Example 2: Cycle length less than 2'
    },
    {
      nums: [-2, 1, -1, -2, -2],
      expected: false,
      description: 'Example 3: Direction change in cycle'
    },
    {
      nums: [3, 1, 2],
      expected: true,
      description: 'Positive cycle with three elements'
    },
    {
      nums: [-1, -2, -3, -4, -5],
      expected: false,
      description: 'All negative, no cycle'
    },
    {
      nums: [1, 1, 1, 1, 1],
      expected: true,
      description: 'All elements equal, positive'
    },
    {
      nums: [-1, -1, -1, -1, -1],
      expected: true,
      description: 'All elements equal, negative'
    },
    {
      nums: [1, -1, 1, -1],
      expected: false,
      description: 'Alternating positive and negative'
    },
    {
      nums: [2, 2, -1, 2],
      expected: true,
      description: 'Positive cycle with negative element'
    },
    {
      nums: [1, 2, 3, 4, 5],
      expected: false,
      description: 'No cycle with increasing values'
    },
    {
      nums: [1],
      expected: false,
      description: 'Single element array'
    }
  ];

  describe('Fast & Slow Pointers Approach', () => {
    testCases.forEach(({ nums, expected, description }) => {
      test(`${description}: ${JSON.stringify(nums)}`, () => {
        // Create a copy of the array as the function modifies it
        const numsCopy = [...nums];
        expect(circularArrayLoop(numsCopy)).toBe(expected);
      });
    });
  });

  describe('Visited Set Approach', () => {
    testCases.forEach(({ nums, expected, description }) => {
      test(`${description}: ${JSON.stringify(nums)}`, () => {
        // Create a copy of the array as the function modifies it
        const numsCopy = [...nums];
        expect(circularArrayLoopWithSets(numsCopy)).toBe(expected);
      });
    });
  });
}); 