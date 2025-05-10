/**
 * 901. Online Stock Span
 * https://leetcode.com/problems/online-stock-span/
 *
 * Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.
 *
 * The span of the stock's price today is defined as the maximum number of consecutive days 
 * (starting from today and going backward) for which the stock price was less than or equal to today's price.
 *
 * For example, if the price of a stock over the next 7 days were [100,80,60,70,60,75,85], 
 * then the stock spans would be [1,1,1,2,1,4,6].
 *
 * Implement the StockSpanner class:
 * - StockSpanner() Initializes the object of the class.
 * - int next(int price) Returns the span of the stock's price given that today's price is price.
 */

export class StockSpanner {
    private prices: number[];
    private spans: number[];

    constructor() {
        this.prices = [];
        this.spans = [];
    }

    next(price: number): number {
        let span = 1;
        let i = this.prices.length - 1;
        
        // Look back to find prices less than or equal to current price
        while (i >= 0 && this.prices[i] <= price) {
            span += this.spans[i];
            i -= this.spans[i];
        }
        
        this.prices.push(price);
        this.spans.push(span);
        
        return span;
    }
}

// Example test case
const stockSpanner = new StockSpanner();
console.log(stockSpanner.next(100)); // Expected: 1
console.log(stockSpanner.next(80));  // Expected: 1
console.log(stockSpanner.next(60));  // Expected: 1
console.log(stockSpanner.next(70));  // Expected: 2
console.log(stockSpanner.next(60));  // Expected: 1
console.log(stockSpanner.next(75));  // Expected: 4
console.log(stockSpanner.next(85));  // Expected: 6 