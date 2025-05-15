import { trap, trapTwoPointers, trapDP } from './solution';

describe('42. Trapping Rain Water', () => {
  // Test cases for all approaches
  const testCases = [
    {
      height: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
      expected: 6,
      description: 'Example 1'
    },
    {
      height: [4, 2, 0, 3, 2, 5],
      expected: 9,
      description: 'Example 2'
    },
    {
      height: [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2],
      expected: 8,
      description: 'Complex case'
    },
    {
      height: [5, 4, 3, 2, 1],
      expected: 0,
      description: 'Decreasing heights'
    },
    {
      height: [1, 2, 3, 4, 5],
      expected: 0,
      description: 'Increasing heights'
    },
    {
      height: [1, 2, 3, 2, 1],
      expected: 0,
      description: 'Mountain shape'
    },
    {
      height: [3, 0, 3],
      expected: 3,
      description: 'Simple trap'
    },
    {
      height: [],
      expected: 0,
      description: 'Empty array'
    },
    {
      height: [5],
      expected: 0,
      description: 'Single element'
    },
    {
      height: [5, 5, 5, 5],
      expected: 0,
      description: 'Equal heights'
    }
  ];

  describe('Monotonic Stack Approach', () => {
    testCases.forEach(({ height, expected, description }) => {
      test(`${description}: ${JSON.stringify(height)}`, () => {
        expect(trap(height)).toBe(expected);
      });
    });
  });

  describe('Two Pointers Approach', () => {
    testCases.forEach(({ height, expected, description }) => {
      test(`${description}: ${JSON.stringify(height)}`, () => {
        expect(trapTwoPointers(height)).toBe(expected);
      });
    });
  });

  describe('Dynamic Programming Approach', () => {
    testCases.forEach(({ height, expected, description }) => {
      test(`${description}: ${JSON.stringify(height)}`, () => {
        expect(trapDP(height)).toBe(expected);
      });
    });
  });
}); 