var firstName = prompt("What is your first name?")
alert("Lets get started " + name);
confirm("Mind if I ask you a few questions?")
alert("Based off the information you give me I can give you random facts! Isn't that cool?")
var ageNow = prompt("How old are you?")
var num1 = Number(prompt("Can you give me your first number?"));
var num2 = Number(prompt("Can you give me your second number?"))
var numSum = num1+num2;
var specialWord = prompt("What is your favorite word?");
var dislikedWord = prompt("What word do you dislike?")
//Hack Reactor code challenges

// Write a function called "isOldEnoughToDrink". Given a number, in this case an age, "isOldEnoughToDrink" returns
// whether a person of this given age is old enough to legally drink in the United States. Notes:
// The legal drinking age in the United States is 21.
function isOldEnoughToDrink(age) {
    if (age>=21){
        return "You are old enough to drink. Lets go out on Saturday. :)";
    }
    else return "You are not old enough to drink. :( Maybe we can try again in " + (21 - ageNow) + " more year(s).";
}
var output = isOldEnoughToDrink(ageNow);
alert(output);
console.log(output);

// Write a function called "isOldEnoughToVote". Given a number, in this case an age, 'isOldEnoughToVote' returns whether
// a person of this given age is old enough to legally vote in the United States. Notes:
//The legal voting age in the United States is 18.
function isOldEnoughToVote(age) {
    if(ageNow >= 18){
        return "You are old enough to vote! Make your voice heard!";
    } else{
        return "You are not old enough to vote. :( Maybe you can try in " + (18 - ageNow) + " more year(s).";
    }
}

var output = isOldEnoughToVote(ageNow);
alert(output);
console.log(output);

// Write a function called "isOldEnoughToDrinkAndDrive". Given a number, in this case an age, "isOldEnoughToDrinkAndDrive"
// returns whether a person of this given age is old enough to legally drink and drive in the United States. Notes:
// The legal drinking age in the United States is 21.
// It is always illegal to drink and drive in the United States.

function isOldEnoughToDrinkAndDrive(age) {
    var legalToDrinkAndDrive = false
    if (age >= 21 && legalToDrinkAndDrive === false) {
        return "Although you are old enough to drink...It is NEVER legal to drink and drive!!";
    }
}
var output = isOldEnoughToDrinkAndDrive(ageNow);
alert(output);
console.log(output);

//Write a function called "getFullName". Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space.
function getFullName(firstName, lastName) {
    var fullName = firstName + " " + lastName + "!"
    return fullName;
}

var output = getFullName(firstName, prompt(firstName + " What is your last name?"));
alert(output);
console.log(output);

//Write a function called "checkAge". Given a person's name and age, "checkAge" returns one of two messages: "Go home, {insert_name_here}!", if they are younger than 21. "Welcome, {insert_name_here}!", if they are 21 or older. Naturally, replace "{insert_name_here}" with the given name. :)
function checkAge(name, age) {
    // your code here
    if(age >= 21){
        return "Since you are legally able to drink, Welcome to the party, " + name + '!';
    } else {
        return "Since you are not legally able to drink, we can't invite you to the party, " + name + '!' ;
    }
}
var output = checkAge(name, ageNow);
alert(output);
console.log(output);

//Write a function called "areBothOdd".
//
// Given 2 numbers, "areBothOdd" returns whether or not both of the given numbers are odd.
function areBothOdd(x, y) {
    // your code here
    if(x % 2 === 1 && y % 2 === 1){
        return "Both of your numbers are odd.";
    }else{
        return "Both of your numbers are not odd.";
    }
}
var output = areBothOdd(num1, num2);
alert(output);
console.log(output);

//Write a function called "isEitherEven".
    //Given two numbers, "isEitherEven" returns whether or not either one of the given numbers is even.
function isEitherEven(x, y) {
    // your code here
    if(x % 2 === 0 || y % 2 === 0){
        return "At least one of your numbers are even.";
    }else{
        return "None of your numbers are even";
    }
}
var output = isEitherEven(num1, num2);
alert(output);
console.log(output);

// Write a function called "isOddLength".
//     Given a word, "isOddLength" returns whether the length of the given word is odd.
function isOddLength(word) {
    // your code here
    if(word.length % 2 === 1){
        return "The length of your favorite word is odd.";
    } else {
        return "The length of you favorite word is not odd.";
    }
}
var output = isOddLength(specialWord);
alert(output);
console.log(output);

//Write a function called "isEvenLength".
// Given a word, "isEvenLength" returns whether the length of the word is even.
function isEvenLength(word) {
    // your code here
    if(word.length % 2 === 0){
        return "The length of your favorite word is even.";
    } else {
        return "The length of your favorite word is not even.";
    }
}
var output = isEvenLength(specialWord);
alert(output);
console.log(output);

// Write a function called "isEvenAndGreaterThanTen".
//     Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and greater than 10.
function isEvenAndGreaterThanTen(num) {
    // your code here
    if(num % 2 === 0 && num > 10){
        return "The sum of both of your numbers is, both, even and greater than 10";
    }else {
        return "The sum of both of your numbers is not, both, even and greater than 10"
    }
}
var output = isEvenAndGreaterThanTen(parseFloat(numSum));
alert(output);
console.log(output);

// Write a function called "average".
//     Given two numbers, "average" returns their average.
function average(x, y){
    var sum = parseFloat(x + y)
    var average1 = sum / 2
    return "The average of both of your numbers is " + average1;
}
var output = average(num1, num2);
alert(output);
console.log(output);

// Write a function called "computeAreaOfATriangle".
//     Given the base and height of a triangle, "computeAreaOfATriangle" returns its area.
function computeAreaOfATriangle(base, height) {
    // your code here
    return "If your number was the base and height of a triangle, the area would be " + base * height / 2;
}
var output = computeAreaOfATriangle(num1, num2);
alert(output);
console.log(output);

// Write a function called "cube".
//     Given a number, "cube" returns the cube of that number.
function cube(num) {
    // your code here
    return "The sum of your numbers cubed is " + num ** 3;
}
var output = cube(numSum);
alert(output);
console.log(output);

// Write a function called "square".
//     Given a number, "square" should return the square of the given number.
function square(num) {
    // your code here
    return "The sum of your numbers squared is " + num ** 2;
}
var output = square(numSum);
alert(output);
console.log(output);

// Write a function called "computeAverageLengthOfWords".
//     Given two words, "computeAverageLengthOfWords" returns the average of their lengths.
function computeAverageLengthOfWords(word1, word2){
    // your code here
    var sum = word1.length + word2.length;
    var average = sum / 2;
    return "The average length of both of your  words is " + average;
}

var output = computeAverageLengthOfWords(specialWord, dislikedWord);
alert(output);
console.log(output);