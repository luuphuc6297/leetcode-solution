/**
 * 774. Minimize Max Distance to Gas Station
 * 
 * On a horizontal number line, we have gas stations at positions stations[0], stations[1], ..., stations[N-1].
 * Now, we want to add K more gas stations to minimize the maximum distance between adjacent gas stations.
 * 
 * Return the smallest possible value of the maximum distance between adjacent gas stations.
 * 
 * Example:
 * Input: stations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], K = 9
 * Output: 0.5
 * 
 * Note:
 * 1. stations.length will be an integer in range [10, 2000].
 * 2. stations[i] will be an integer in range [0, 10^8].
 * 3. K will be an integer in range [1, 10^6].
 * 4. Answers within 10^-6 of the true value will be accepted as correct.
 * 
 * Complexity:
 * - Time: O(n * log(10^8)), where n is the number of initial gas stations
 * - Space: O(1)
 */

/**
 * Uses binary search to find the minimum possible value of the maximum distance between adjacent gas stations
 * after adding K new stations.
 * 
 * @param stations Array containing positions of existing gas stations
 * @param k Number of gas stations to add
 * @returns The minimum possible maximum distance that can be achieved
 */
export function minmaxGasDist(stations: number[], k: number): number {
    // Sort the array of gas stations (problem guarantees it's already sorted)
    stations.sort((a, b) => a - b);

    // Lower and upper bounds for binary search
    // The minimum distance can be 0, the maximum is the distance between the farthest adjacent stations
    let left = 0;
    let right = stations[stations.length - 1] - stations[0];

    // Binary search with 10^-6 precision
    while (right - left > 1e-6) {
        const mid = (left + right) / 2;
        
        // Check if it's possible to achieve maximum distance of mid
        if (isPossible(stations, k, mid)) {
            right = mid; // Possible, try to find a smaller distance
        } else {
            left = mid; // Not possible, need to increase the distance
        }
    }
    
    return left;
}

/**
 * Checks if it's possible to place k new gas stations so that all distances between
 * adjacent gas stations do not exceed maxDist
 * 
 * @param stations Array of gas station positions
 * @param k Number of gas stations that can be added
 * @param maxDist Maximum distance to check
 * @returns true if possible, false otherwise
 */
function isPossible(stations: number[], k: number, maxDist: number): boolean {
    let stationsNeeded = 0;
    
    // Calculate the number of stations needed between existing stations
    for (let i = 0; i < stations.length - 1; i++) {
        const dist = stations[i + 1] - stations[i];
        
        // Number of stations needed = ceil(dist/maxDist) - 1
        // Example: if dist = 10, maxDist = 3, we need ceil(10/3) - 1 = 4 - 1 = 3 stations
        stationsNeeded += Math.ceil(dist / maxDist) - 1;
    }
    
    // If the stations needed <= k, we can achieve the maximum distance of maxDist
    return stationsNeeded <= k;
} 