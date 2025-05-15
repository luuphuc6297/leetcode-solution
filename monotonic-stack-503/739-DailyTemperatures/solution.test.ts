import { dailyTemperatures, dailyTemperaturesOptimized } from './solution';

describe('739. Daily Temperatures', () => {
  // Test cases for the monotonic stack approach
  describe('Monotonic Stack Solution', () => {
    test('Example 1: Mixed temperatures', () => {
      const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
      const expected = [1, 1, 4, 2, 1, 1, 0, 0];
      expect(dailyTemperatures(temperatures)).toEqual(expected);
    });

    test('Example 2: Strictly increasing temperatures', () => {
      const temperatures = [30, 40, 50, 60];
      const expected = [1, 1, 1, 0];
      expect(dailyTemperatures(temperatures)).toEqual(expected);
    });

    test('Example 3: Large jumps in temperatures', () => {
      const temperatures = [30, 60, 90];
      const expected = [1, 1, 0];
      expect(dailyTemperatures(temperatures)).toEqual(expected);
    });

    test('All same temperatures', () => {
      const temperatures = [70, 70, 70, 70];
      const expected = [0, 0, 0, 0];
      expect(dailyTemperatures(temperatures)).toEqual(expected);
    });

    test('Decreasing temperatures', () => {
      const temperatures = [90, 80, 70, 60];
      const expected = [0, 0, 0, 0];
      expect(dailyTemperatures(temperatures)).toEqual(expected);
    });

    test('Temperature peak in the middle', () => {
      const temperatures = [30, 40, 50, 40, 30];
      const expected = [1, 1, 0, 0, 0];
      expect(dailyTemperatures(temperatures)).toEqual(expected);
    });

    test('Single temperature', () => {
      const temperatures = [35];
      const expected = [0];
      expect(dailyTemperatures(temperatures)).toEqual(expected);
    });
  });

  // Test cases for the optimized solution
  describe('Optimized Solution (Traversing from Right)', () => {
    test('Example 1: Mixed temperatures', () => {
      const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
      const expected = [1, 1, 4, 2, 1, 1, 0, 0];
      expect(dailyTemperaturesOptimized(temperatures)).toEqual(expected);
    });

    test('Example 2: Strictly increasing temperatures', () => {
      const temperatures = [30, 40, 50, 60];
      const expected = [1, 1, 1, 0];
      expect(dailyTemperaturesOptimized(temperatures)).toEqual(expected);
    });

    test('Example 3: Large jumps in temperatures', () => {
      const temperatures = [30, 60, 90];
      const expected = [1, 1, 0];
      expect(dailyTemperaturesOptimized(temperatures)).toEqual(expected);
    });

    test('All same temperatures', () => {
      const temperatures = [70, 70, 70, 70];
      const expected = [0, 0, 0, 0];
      expect(dailyTemperaturesOptimized(temperatures)).toEqual(expected);
    });

    test('Decreasing temperatures', () => {
      const temperatures = [90, 80, 70, 60];
      const expected = [0, 0, 0, 0];
      expect(dailyTemperaturesOptimized(temperatures)).toEqual(expected);
    });

    test('Temperature peak in the middle', () => {
      const temperatures = [30, 40, 50, 40, 30];
      const expected = [1, 1, 0, 0, 0];
      expect(dailyTemperaturesOptimized(temperatures)).toEqual(expected);
    });

    test('Single temperature', () => {
      const temperatures = [35];
      const expected = [0];
      expect(dailyTemperaturesOptimized(temperatures)).toEqual(expected);
    });
  });
}); 