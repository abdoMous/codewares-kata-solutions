// https://www.codewars.com/kata/find-the-odd-int/

const findOdd = A => A.filter(x => (A.filter(y => x === y).length % 2 === 1))[0]