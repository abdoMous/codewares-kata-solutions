// https://www.codewars.com/kata/sum-of-digits-slash-digital-root/

// n this kata, you must create a digital root function.
// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.
// Here's how it works (Ruby example given):
//
// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

const digital_root = (n) => {
    while(n>9){
        n = n.toString().split("").map(x => parseInt(x)).reduce((p,c)=>p+c,0)
    }
    return n;
}