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