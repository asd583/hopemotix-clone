const SET = [123456789, 234567890, 345678901]; // Example SET array

// Step 1: Get the last digit of the first number in SET
const firstNumberLastDigit = SET[0].toString().slice(-1);  // Last digit of the first number

// Step 2: Get the digit before the decimal in the fifth number
const fifthNumber = SET[4].toString(); // Get the fifth number (0-indexed)
const digitBeforeDecimal = fifthNumber.charAt(4); // Fifth number's digit before the decimal

// Step 3: Combine these two digits
const result = firstNumberLastDigit + digitBeforeDecimal;

// Show the result on the website
document.getElementById('output').innerHTML = result;