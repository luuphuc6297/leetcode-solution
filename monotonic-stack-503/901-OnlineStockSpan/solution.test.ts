import { StockSpanner } from './solution'

describe('901. Online Stock Span', () => {
    test('Example test case', () => {
        const stockSpanner = new StockSpanner();
        expect(stockSpanner.next(100)).toBe(1);
        expect(stockSpanner.next(80)).toBe(1);
        expect(stockSpanner.next(60)).toBe(1);
        expect(stockSpanner.next(70)).toBe(2);
        expect(stockSpanner.next(60)).toBe(1);
        expect(stockSpanner.next(75)).toBe(4);
        expect(stockSpanner.next(85)).toBe(6);
    })

    test('All increasing prices', () => {
        const stockSpanner = new StockSpanner();
        expect(stockSpanner.next(10)).toBe(1);
        expect(stockSpanner.next(20)).toBe(2);
        expect(stockSpanner.next(30)).toBe(3);
        expect(stockSpanner.next(40)).toBe(4);
    })

    test('All decreasing prices', () => {
        const stockSpanner = new StockSpanner();
        expect(stockSpanner.next(40)).toBe(1);
        expect(stockSpanner.next(30)).toBe(1);
        expect(stockSpanner.next(20)).toBe(1);
        expect(stockSpanner.next(10)).toBe(1);
    })

    test('All equal prices', () => {
        const stockSpanner = new StockSpanner();
        expect(stockSpanner.next(10)).toBe(1);
        expect(stockSpanner.next(10)).toBe(2);
        expect(stockSpanner.next(10)).toBe(3);
        expect(stockSpanner.next(10)).toBe(4);
    })
}) 