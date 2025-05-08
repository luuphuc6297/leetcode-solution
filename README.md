# LeetCode Solutions

This project contains solutions to LeetCode exercises using TypeScript and Node.js.

## Project Structure

Each exercise is placed in a separate directory named in the format `{problem number}-{problem name}`, for example:
- `503-NextGreaterElementII`
- `763-PartitionLabels`
- `438-FindAllAnagramsInAString`

Each exercise directory contains:
- `solution.ts`: Solution source code
- `solution.test.ts`: Test file

## Installation

```bash
# Clone the project
git clone <repository-url>

# Install dependencies
pnpm install
```

## Usage

### Running a solution

```bash
# Run solution.ts file through ts-node
pnpm exec ts-node <exercise-directory>/solution.ts

# Example:
pnpm exec ts-node 503-NextGreaterElementII/solution.ts
```

### Running tests

```bash
# Run all tests
pnpm test

# Run test for a specific exercise
pnpm exec jest 503-NextGreaterElementII
```

## Debugging

The project has been configured for debugging in VSCode.

1. Open the file you want to debug in VSCode
2. Set breakpoints at the positions you want to check
3. Press F5 or select "Run and Debug" from the sidebar
4. Choose one of two configurations:
   - "Debug Current TS File": Compile TS to JS then debug
   - "Debug with ts-node": Debug TS file directly through ts-node

## Creating a new exercise

To create a new exercise, create a directory in the format `{problem number}-{problem name}`, then create `solution.ts` and `solution.test.ts` files within that directory.

Example structure:

```
├── 503-NextGreaterElementII
│   ├── solution.ts
│   └── solution.test.ts
└── 763-PartitionLabels
    ├── solution.ts
    └── solution.test.ts
```

## LeetCode Problem Types

Besides algorithmic problems, LeetCode offers several other problem categories:

### SQL/Database Problems
- 175 - Combine Two Tables
- 176 - Second Highest Salary
- 177 - Nth Highest Salary
- 178 - Rank Scores
- 180 - Consecutive Numbers
- 181 - Employees Earning More Than Their Managers
- 182 - Duplicate Emails
- 183 - Customers Who Never Order
- 184 - Department Highest Salary
- 185 - Department Top Three Salaries
- 196 - Delete Duplicate Emails
- 197 - Rising Temperature
- 262 - Trips and Users
- 511 - Game Play Analysis I
- 550 - Game Play Analysis IV
- 586 - Customer Placing the Largest Number of Orders
- 595 - Big Countries
- 596 - Classes More Than 5 Students
- 601 - Human Traffic of Stadium
- 607 - Sales Person
- 608 - Tree Node
- 612 - Shortest Distance in a Plane
- 614 - Second Degree Follower
- 615 - Average Salary: Departments VS Company
- 1050 - Actors and Directors Who Cooperated At Least Three Times
- 1075 - Project Employees I
- 1076 - Project Employees II
- 1077 - Project Employees III
- 1084 - Sales Analysis III
- 1141 - User Activity for the Past 30 Days I
- 1148 - Article Views I
- 1407 - Top Travellers
- 1468 - Calculate Salaries
- 1479 - Sales by Day of the Week
- 1587 - Bank Account Summary II
- 1607 - Sellers With No Sales
- 1873 - Calculate Special Bonus
- 1890 - The Latest Login in 2020

### Shell Problems
- 192 - Word Frequency
- 193 - Valid Phone Numbers
- 194 - Transpose File
- 195 - Tenth Line

### Concurrency Problems
- 1114 - Print in Order
- 1115 - Print FooBar Alternately
- 1116 - Print Zero Even Odd
- 1117 - Building H2O
- 1188 - Design Bounded Blocking Queue
- 1195 - Fizz Buzz Multithreaded

### Design Problems
- 146 - LRU Cache
- 155 - Min Stack
- 170 - Two Sum III - Data structure design
- 208 - Implement Trie (Prefix Tree)
- 211 - Design Add and Search Words Data Structure
- 295 - Find Median from Data Stream
- 297 - Serialize and Deserialize Binary Tree
- 348 - Design Tic-Tac-Toe
- 353 - Design Snake Game
- 355 - Design Twitter
- 362 - Design Hit Counter
- 379 - Design Phone Directory
- 380 - Insert Delete GetRandom O(1)
- 381 - Insert Delete GetRandom O(1) - Duplicates allowed
- 588 - Design In-Memory File System
- 604 - Design Compressed String Iterator
- 622 - Design Circular Queue
- 631 - Design Excel Sum Formula
- 635 - Design Log Storage System
- 641 - Design Circular Deque
- 642 - Design Search Autocomplete System
- 705 - Design HashSet
- 706 - Design HashMap
- 707 - Design Linked List
- 1166 - Design File System
- 1188 - Design Bounded Blocking Queue
- 1206 - Design Skiplist
- 1244 - Design A Leaderboard
- 1381 - Design a Stack With Increment Operation
- 1396 - Design Underground System
- 1472 - Design Browser History
- 1603 - Design Parking System
- 1628 - Design an Expression Tree With Evaluate Function

## Most Common Interview Problems

Below is a collection of the most commonly asked LeetCode problems during technical interviews at top tech companies:

### Array and Hashing
- 1 - Two Sum
- 121 - Best Time to Buy and Sell Stock 
- 238 - Product of Array Except Self
- 53 - Maximum Subarray
- 217 - Contains Duplicate
- 152 - Maximum Product Subarray
- 153 - Find Minimum in Rotated Sorted Array
- 33 - Search in Rotated Sorted Array
- 15 - 3Sum
- 11 - Container With Most Water
- 169 - Majority Element
- 189 - Rotate Array
- 560 - Subarray Sum Equals K
- 88 - Merge Sorted Array

### Two Pointers
- 42 - Trapping Rain Water
- 125 - Valid Palindrome
- 167 - Two Sum II
- 42 - Trapping Rain Water
- 75 - Sort Colors
- 844 - Backspace String Compare

### Sliding Window
- 3 - Longest Substring Without Repeating Characters
- 76 - Minimum Window Substring
- 424 - Longest Repeating Character Replacement

### Stack
- 20 - Valid Parentheses
- 155 - Min Stack
- 739 - Daily Temperatures
- 84 - Largest Rectangle in Histogram

### Binary Search
- 704 - Binary Search
- 33 - Search in Rotated Sorted Array
- 153 - Find Minimum in Rotated Sorted Array
- 4 - Median of Two Sorted Arrays

### Linked List
- 206 - Reverse Linked List
- 21 - Merge Two Sorted Lists
- 2 - Add Two Numbers
- 23 - Merge k Sorted Lists
- 141 - Linked List Cycle
- 287 - Find the Duplicate Number

### Trees
- 100 - Same Tree
- 572 - Subtree of Another Tree
- 98 - Validate Binary Search Tree
- 124 - Binary Tree Maximum Path Sum
- 700 - Search in a Binary Search Tree
- 235 - Lowest Common Ancestor of a Binary Search Tree

### Heap / Priority Queue
- 215 - Kth Largest Element in an Array
- 347 - Top K Frequent Elements
- 295 - Find Median from Data Stream

### Backtracking
- 78 - Subsets
- 46 - Permutations
- 39 - Combination Sum
- 79 - Word Search
- 51 - N-Queens

### Graphs
- 200 - Number of Islands
- 133 - Clone Graph
- 127 - Word Ladder
- 417 - Pacific Atlantic Water Flow
- 130 - Surrounded Regions

### Dynamic Programming
- 70 - Climbing Stairs
- 198 - House Robber
- 322 - Coin Change
- 139 - Word Break
- 300 - Longest Increasing Subsequence
- 62 - Unique Paths
- 494 - Target Sum
- 329 - Longest Increasing Path in a Matrix

### Greedy
- 55 - Jump Game
- 45 - Jump Game II
- 678 - Valid Parenthesis String

### Interval
- 56 - Merge Intervals
- 57 - Insert Interval

### Math & Geometry
- 202 - Happy Number
- 48 - Rotate Image

### Bit Manipulation
- 338 - Counting Bits
- 190 - Reverse Bits
- 371 - Sum of Two Integers 