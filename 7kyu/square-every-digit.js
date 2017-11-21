// https://www.codewars.com/kata/square-every-digit

// Welcome. In this kata, you are asked to square every digit of a number.
//
// For example, if we run 9119 through the function, 811181 will come out.
//
// Note: The function accepts an integer and returns an integer

const squareDigits = num =>
    Number(num.toString().split("").map(digit => digit * digit).join(""))