// https://www.codewars.com/kata/highest-and-lowest

//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

const highAndLow = numbers =>
    numbers.split(" ")
        .map(text => Number(text))
        .reduce((prev, curr) =>
        [
            prev[0] === null ? prev[0] = curr : (prev[0] <= curr ? curr : prev[0]),
            prev[1] === null ? prev[1] = curr : (prev[1] >= curr ? curr : prev[1])
        ]
        ,[null, null])
        .join(" ")