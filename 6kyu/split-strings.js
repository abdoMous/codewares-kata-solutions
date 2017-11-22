// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
//     Examples:
//
// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

const solution = str =>
{
    let result =[]
    for(let i = 0; i < str.length/2; i++){
        result.push(str.substr(i*2,2))
    }

    result[result.length-1] +=
        result[result.length-1].length === 1
            ? "_"
            : "";

    return result
}