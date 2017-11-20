// https://www.codewars.com/kata/vowel-count

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.
// The input string will only consist of lower case letters and/or spaces.

const isVowel = c =>
    c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u'

const getCount = str =>
    !str.length
        ? 0
        : isVowel(str[0]) + getCount(str.substring(1))