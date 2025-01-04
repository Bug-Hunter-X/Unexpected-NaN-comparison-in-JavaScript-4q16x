# Unexpected NaN Comparison in JavaScript

This repository demonstrates an uncommon JavaScript bug related to comparing NaN (Not a Number) using the strict equality operator (===).

## The Bug

JavaScript's behavior with NaN is counter-intuitive. The strict equality operator (===) returns `false` when comparing NaN to itself. This is because NaN is defined as a value that is not equal to anything, including itself.

The provided `bug.js` file contains a function that attempts to compare two values for equality using the strict equality operator. When the inputs are both NaN, the function incorrectly returns `false`.

## The Solution

The solution involves using `Number.isNaN()` to reliably check for NaN values. The `bugSolution.js` file provides a corrected version of the function that uses `Number.isNaN()` to handle NaN comparisons correctly.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js`.
3. Run the JavaScript code in a browser console or Node.js environment.
4. Observe the differences in the output for the original and corrected functions when inputting NaN values.

## License

MIT