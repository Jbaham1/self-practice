//Write a function called "computeAreaOfARectangle".
// Given the length and width of a rectangle, "computeAreaOfARectangle" returns its area.
function computeAreaOfARectangle(length, width) {
    return length * width;
}
var output = computeAreaOfARectangle(4, 8);
console.log(output); // --> 32

//Write a function called "computePerimeterOfARectangle".
    //Given a length and a width describing a rectangle, "computePerimeterOfARectangle" returns its perimter.
function computePerimeterOfARectangle(length, width) {
    return (length *2) + (width *2);
}
var output = computePerimeterOfARectangle(5, 2);
console.log(output); // --> 14
// Write a function called "computePerimeterOfATriangle".
    // Given 3 sides describing a triangle, "computePerimeterOfATriangle" returns its perimeter.
function computePerimeterOfATriangle(side1, side2, side3) {
    return side1 + side2 + side3;
}
var output = computePerimeterOfATriangle(6, 7, 10);
console.log(output); // --> 23
// Write a function called "computeTripledAreaOfARectangle".
//     Given a length and width of a rectangle, "computeTripledAreaOfARectangle" returns the rectangle's area, multiplied by 3.
function computeTripledAreaOfARectangle(length, width) {
    // your code here
    var area = length * width
    return area * 3;
}
var output = computeTripledAreaOfARectangle(2, 4);
console.log(output); // --> 24
//Write a function called "computePerimeterOfACircle".
// Given the radius of a circle, "computePerimeterOfACircle" returns its perimeter.
function computePerimeterOfACircle(radius) {
    // your code here
    return 2 * Math.PI * radius;
}
var output = computePerimeterOfACircle(4);
console.log(output); // --> 25.132741228718345
//Write a function called "computeAreaOfACircle".
// Given the radius of a circle, "computeAreaOfACircle" returns its area.
function computeAreaOfACircle(radius) {
    // your code here
    return  Math.PI * radius**2;
}
var output = computeAreaOfACircle(4);
console.log(output); // --> 50.26548245743669
//Write a function called "computePower".
// Given a number and an exponent, "computePower" returns the given number, raised to the given exponent.
function computePower(num, exponent) {
    return num ** exponent
}
var output = computePower(2, 3);
console.log(output); // --> 8

//Write a function called "computeSquareRoot". Given a number, "computeSquareRoot" returns its square root.
function computeSquareRoot(num) {
    return Math.sqrt(num)
}
var output = computeSquareRoot(9);
console.log(output); // --> 3
//Write a function called "doubleSquareRootOf". Given a number, "doubleSquareRootOf" returns double its square root.
function doubleSquareRootOf(num) {
    var sqrt = Math.sqrt(num);
    return 2 * sqrt;
}
var output = doubleSquareRootOf(121);
console.log(output); // --> 22
