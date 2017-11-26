// https://www.codewars.com/kata/bit-counting/

// Write a function that takes an (unsigned) integer as input, and returns the number of bits that are equal to one in the binary representation of that number.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {
    return parseInt(n, 10).toString(2).split("").reduce((p, c) => p + Number(c), 0)
};