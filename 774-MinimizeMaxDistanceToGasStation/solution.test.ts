import { minmaxGasDist } from './solution';

describe('774. Minimize Max Distance to Gas Station', () => {
    test('Example 1: stations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], K = 9', () => {
        const stations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const K = 9;
        const expected = 0.5;
        const result = minmaxGasDist(stations, K);
        expect(Math.abs(result - expected)).toBeLessThanOrEqual(1e-6);
    });

    test('Case with equal initial distances: stations = [1, 4, 7, 10], K = 3', () => {
        const stations = [1, 4, 7, 10];
        const K = 3;
        const expected = 1.5; // After optimal placement, distances become 1.5
        const result = minmaxGasDist(stations, K);
        expect(Math.abs(result - expected)).toBeLessThanOrEqual(1e-6);
    });

    test('Case with uneven initial distances: stations = [1, 5, 6, 10], K = 4', () => {
        const stations = [1, 5, 6, 10];
        const K = 4;
        const expected = 1; // After optimal placement
        const result = minmaxGasDist(stations, K);
        expect(Math.abs(result - expected)).toBeLessThanOrEqual(1e-6);
    });

    test('Minimum case: stations = [10, 20], K = 3', () => {
        const stations = [10, 20];
        const K = 3;
        const expected = 2.5; // Adding 3 stations between 10 and 20 gives distances of 2.5
        const result = minmaxGasDist(stations, K);
        expect(Math.abs(result - expected)).toBeLessThanOrEqual(1e-6);
    });
    
    test('Case with more stations than needed: stations = [1, 2, 3, 4, 5], K = 10', () => {
        const stations = [1, 2, 3, 4, 5];
        const K = 10;
        // With so many new stations, we can distribute them to make the max distance very small
        const expected = 0.25;
        const result = minmaxGasDist(stations, K);
        expect(Math.abs(result - expected)).toBeLessThanOrEqual(1e-6);
    });
}); 