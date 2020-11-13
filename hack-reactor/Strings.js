//Write a function called "getLengthOfThreeWords".
// Given 3 words, "getLengthOfThreeWords" returns the sum of their lengths.
function getLengthOfThreeWords(word1, word2, word3) {
    // your code here
    var sum = word1.length + word2.length + word3.length;
    return sum;
}
var output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14
// /Write a function called "getAllLetters".
// Given a word, "getAllLetters" returns an array containing every character in the word.
//     Notes:
// If given an empty string, it should return an empty array.
function getAllLetters(str) {
    if(str === ''){
        return [];
    }
    var result = str.split('')
    return result ;
}
var output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
//
// Write a function called "getAllWords".
//     Given a sentence, "getAllWords" returns an array containing every word in the sentence.
//     Notes:
// If given an empty string, it should return an empty array.
function getAllWords(str) {
    if(str === ''){
        return [];
    }
    var result = str.split(' ')
    return result;
}
var output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']