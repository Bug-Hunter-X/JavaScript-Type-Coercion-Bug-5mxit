# JavaScript Type Coercion Bug
This repository demonstrates a common JavaScript bug caused by type coercion.  The `foo` function is intended to add two numbers, but unexpected behavior occurs when one of the inputs is a string. This highlights the importance of type checking in JavaScript.
## Bug Description
The `bug.js` file contains a function that adds two numbers.  When passed a number and a string, JavaScript performs string concatenation instead of numerical addition, leading to an incorrect result.
## Solution
The `bugSolution.js` file presents a corrected version of the function. It explicitly checks the type of inputs and handles them appropriately to prevent unexpected type coercion.