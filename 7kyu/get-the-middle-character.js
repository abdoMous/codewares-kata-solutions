// https://www.codewars.com/kata/get-the-middle-character/

var getMiddle = s =>
    s.length % 2 === 0
    ? s[s.length/2]+s[s.length/2+1]
    : s[Math.round(2.5)-1]