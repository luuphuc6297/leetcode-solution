# 901. Online Stock Span

## Problem Description

Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.

The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backward) for which the stock price was less than or equal to today's price.

For example, if the price of a stock over the next 7 days were `[100,80,60,70,60,75,85]`, then the stock spans would be `[1,1,1,2,1,4,6]`.

Implement the `StockSpanner` class:

- `StockSpanner()` Initializes the object of the class.
- `int next(int price)` Returns the span of the stock's price given that today's price is `price`.

## Examples

**Example 1:**
```
Input
["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
[[], [100], [80], [60], [70], [60], [75], [85]]
Output
[null, 1, 1, 1, 2, 1, 4, 6]

Explanation
StockSpanner stockSpanner = new StockSpanner();
stockSpanner.next(100); // return 1
stockSpanner.next(80);  // return 1
stockSpanner.next(60);  // return 1
stockSpanner.next(70);  // return 2
stockSpanner.next(60);  // return 1
stockSpanner.next(75);  // return 4
stockSpanner.next(85);  // return 6
```

## Constraints:
- `1 <= price <= 10^5`
- At most `10^4` calls will be made to `next`.

## Approach

This problem can be solved efficiently using a monotonic stack:

1. Maintain a stack that stores pairs of `[price, span]` where:
   - `price` is the stock price
   - `span` is the span of that price
2. When a new price comes in:
   - Pop all prices from the stack that are less than or equal to the current price
   - Calculate the current span as 1 plus the sum of spans for all popped prices
   - Push the current price and its span onto the stack
   - Return the span

Time Complexity:
- Constructor: O(1)
- next(): Amortized O(1) - Each element is pushed and popped at most once

Space Complexity: O(n) where n is the number of prices processed 