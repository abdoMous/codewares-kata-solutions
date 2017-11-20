// https://www.codewars.com/kata/get-the-middle-character/

var getMiddle = s =>
    s.length % 2 === 0
    ? s[s.length/2]+s[s.length/2+1]
    : s[Math.round(2.5)-1]

var i = getMiddle("testr");
i

var j = Math.round(0.5);
j