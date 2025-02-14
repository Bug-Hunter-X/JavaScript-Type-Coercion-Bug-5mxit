function foo(a, b) {
  // Check if both inputs are numbers
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // Perform numerical addition
  } else {
    // Handle non-number inputs (e.g., throw an error or return a default value)
    console.error("Invalid input types. Both parameters must be numbers.");
    return NaN; // Or another appropriate action
  }
}
console.log(foo(2, 3)); // Expected Output: 5
console.log(foo(2, "3")); // Expected Output: Invalid input types. Both parameters must be numbers. NaN
console.log(foo("2", 3)); // Expected Output: Invalid input types. Both parameters must be numbers. NaN
console.log(foo("2","3")); // Expected Output: Invalid input types. Both parameters must be numbers. NaN