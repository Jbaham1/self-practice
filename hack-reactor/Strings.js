//Write a function called "getLengthOfThreeWords".
// Given 3 words, "getLengthOfThreeWords" returns the sum of their lengths.
function getLengthOfThreeWords(word1, word2, word3) {
    // your code here
    var sum = word1.length + word2.length + word3.length;
    return sum;
}
var output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14
