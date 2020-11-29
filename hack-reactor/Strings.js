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

//Write a function called "areValidCredentials".
// Given a name and a password, "areValidCredentials", returns true if the name is longer than 3 characters, AND, the password is at least 8 characters long. Otherwise it returns false.
function areValidCredentials(name, password) {
    if(name.length > 3 && password.length >= 8){
        return true;
    }else {
        return false;
    }
}
var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true
//Write a function called "findMinLengthOfThreeWords".
// Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.
function findMinLengthOfThreeWords(word1, word2, word3) {
    if(word1.length < word2.length && word1.length < word3.length){
        return word1.length;
    }else if(word2.length < word1.length && word2.length < word3.length){
        return word2.length;
    } else{
        return word3.length;
    }
}
var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1
//Write a function called "findMaxLengthOfThreeWords".
// Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.
function findMaxLengthOfThreeWords(word1, word2, word3) {
    if(word1.length > word2.length && word1.length > word3.length){
        return word1.length;
    }else if(word2.length > word1.length && word2.length > word3.length){
        return word2.length;
    } else{
        return word3.length;
    }
}
var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3

//Write a function called "getLongestOfThreeWords".
// Given 3 words, "getLongestOfThreeWords" returns the longest of three words.
// Notes:
// If there is a tie, it should return the first word in the tie.
function getLongestOfThreeWords(word1, word2, word3) {
    var words = [word1, word2, word3];
    var largest = words[0];

    for(var i = 1; i < words.length; i++){
        if(words[i].length > largest.length){
            largest = words[i];
        }
    }
    return largest;
}

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
//Write a function called "findShortestOfThreeWords".
// Given 3 strings, "findShortestOfThreeWords" returns the shortest of the given strings.
// Notes:
// If there are ties, it should return the first word in the parameters list.
function findShortestOfThreeWords(word1, word2, word3) {
    var words = [word1, word2, word3];
    var smallest = words[0];

    for(var i = 1; i < words.length; i++){
        if(words[i].length < smallest.length){
            smallest = words[i];
        }
    }
    return smallest;
}
var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
