//Write a function called "getNthElement".
// Given an array and an integer, "getNthElement" returns the element at the given integer, within the given array.
// Notes:
// If the array has a length of 0, it should return 'undefined'.
function getNthElement(array, n) {
    return array[n];
}
var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3

//Write a function called "getFirstElement".
// Given an array, "getFirstElement" returns the first element of the given array.
// Notes:
// If the given array has a length of 0, it should return undefined.
function getFirstElement(array) {
    // your code here
    return array[0];
}
var output = getFirstElement([1, 2, 3, 4, 5]);
console.log(output); // --> 1

// Write a function called "getLastElement".
//     Given an array, "getLastElement" returns the last element of the given array.
//     Notes:
// If the given array has a length of 0, it should return 'undefined'.
function getLastElement(array) {
    var length = array.length -1;
    return array[length];

}
var output = getLastElement([1, 2, 3, 4]);
console.log(output); // --> 4

// Write a function called "addToFront".
//     Given an array and an element, "addToFront" adds the given element to the front of the given array, and returns the given array.
//     Notes:
// It should be the SAME array, not a new array.
// In order to do this you should be familiar with the 'unshift' method.
function addToFront(arr, element) {
    arr.unshift(element);
    return arr;
}
var output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]
//Write a function called "addToBack".
// Given an array and an element, "addToBack" returns the given array with the given element added to the end.
// Notes:
// It should be the SAME array, not a new array.
// In order to do this you should be familiar with the 'push' method.
function addToBack(arr, element) {
    arr.push(element);
    return arr;
}
var output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]

//Given two arrays, "joinArrays" returns an array with the elements of "arr1" in order, followed by the elements in "arr2".
function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
var output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]

//Write a function called "getElementsAfter".
// Given an array and an index, "getElementsAfter" returns a new array with all the elements after (but not including) the given index.
function getElementsAfter(array, n) {
    return array.slice(n+1);
}
var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
console.log(output); // --> ['d', 'e']

//Write a function called "getElementsUpTo".
// Given an array and a index, "getElementsUpTo", returns an array with all the elements up until, but not including, the element at the given index.
function getElementsUpTo(array, n) {
    return array.slice(0, n)
}
var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3)
console.log(output); // --> ['a', 'b', 'c']
//Write a function called "getAllElementsButFirst".
// Given an array, "getAllElementsButFirst" returns an array with all the elements but the first.
function getAllElementsButFirst(array) {
    return array.slice(1)
}
var input = [1, 2, 3, 4];
var output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]

// Write a function called "getAllElementsButLast".
//     Given an array, "getAllElementsButLast" returns an array with all the elements but the last.
function getAllElementsButLast(array) {
    var lastIndex = array.length -1;
    return array.slice(0,lastIndex);
}
var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]

//Write a function called "removeFromFront".
// Given an array, "removeFromFront" returns the given array with its first element removed.
function removeFromFront(arr) {
    arr.shift()
    return arr;
}
var output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]

//Write a function called "removeFromBack".
// Given an array, "removeFromBack" returns the given array with its last element removed.
function removeFromBack(arr) {
    arr.pop();
    return arr;
}
var output = removeFromBack([1, 2, 3]);
console.log(output); // --> [1, 2]

//Write a function called "removeFromBackOfNew".
// Given an array, "removeFromBackOfNew" returns a new array containing all but the last element of the given array.
function removeFromBackOfNew(arr) {
    var result = arr.slice(0,arr.length -1)
    return result;
}
var arr = [1, 2, 3];
var output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]

//Write a function called "removeFromFrontOfNew".
// Given an array, "removeFromFrontOfNew" returns a new array containing all but the first element of the given array.
function removeFromFrontOfNew(arr) {
    var copyOfArr = arr.slice();
    copyOfArr.shift();
    return copyOfArr
}
var arr = [1, 2, 3];
var output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]

//Write a function called "countCharacter".
// Given a string input and a character, "countCharacter" returns the number of occurrences of a given character in the given string.
function countCharacter(str, char) {
    var count = 0
    for(var i = 0; i < str.length; i++){
        var currentChar = str[i];
        if(currentChar === char){
            count++;
        }
    }
    return count;
}
var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3

//Write a function called "convertDoubleSpaceToSingle".
// Given a string, "convertDoubleSpaceToSingle" returns the passed in string, with all the double spaces converted to single spaces.
//In order to do this problem, you should be familiar with "String.split", and "Array.join".

function convertDoubleSpaceToSingle(str) {
    var split = str.split('  ');

    var joinSplit = split.join(' ')
    return joinSplit;
}
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"


//Write a function called "joinThreeArrays".
// Given three arrays, "joinThreeArrays" returns an array with the elements of "arr1" in order followed by the elements in "arr2" in order followed by the elements of "arr3" in order.
//You should be familiar with the "concat" method for this problem.
function joinThreeArrays(arr1, arr2, arr3) {
    var firstTwo = arr1.concat(arr2)
    return firstTwo.concat(arr3);
}
var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]

//Write a function called "addToFrontOfNew".
// Given an array and an element, "addToFrontOfNew" returns a new array containing all the elements of the given array, with the given element added to the front.
// Important: It should be a NEW array instance, not the original array instance.
function addToFrontOfNew(arr, element) {
    var copyOfArr = arr.slice();
    copyOfArr.unshift(element);
    return copyOfArr;
}
var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]
//Write a function called "addToBackNew".
// Given an array and an element, "addToBackNew" returns a clone of the given array, with the given element added to the end.
// Important: It should be a NEW array instance, not the original array instance.
function addToBackOfNew(arr, element) {
    var newArray =  arr.slice();
    newArray.push(element);
    return newArray;
}
var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]
//Write a function called "getAllElementsButNth".
// Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.
function getAllElementsButNth(array, n) {
    array.splice(n, 1);
    return array;
}
var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
