//Write a function called "addFullNameProperty".
// Given an object that has a "firstName" property and a "lastName" property, "addFullNameProperty" sets a "fullName" property on the input object, whose value is a string with the first name and last name separated by a space.

function addFullNameProperty(obj) {
    var firstName = obj['firstName'];
    var lastName = obj['lastName'];

    if (firstName && lastName) {
        obj['fullName'] = firstName + ' ' + lastName;
    }

    return obj;
}
var person = {
    firstName: firstName,
    lastName: lastName,
    age: ageNow
};
addFullNameProperty(person);
alert(person.fullName)
console.log(person.fullName);

//Write a function called "isPersonOldEnoughToDrive".
// Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrive" returns whether the given person is old enough to drive.
// Notes:
// The legal driving age in the United States is 16.
function isPersonOldEnoughToDrive(person) {

    if(person.age >= 16){
        return true;
    } else {
        return false;
    }
}
var obj = {
    age: 16
};
var output = isPersonOldEnoughToDrive(obj);
console.log(output); // --> true

// Write a function called "isPersonOldEnoughToVote".
//     Given a "person" object, that contains an "age" property, "isPersonOldEnoughToVote" returns whether the given person is old enough to vote.
//     Notes:
// The legal voting age in the United States is 18.
function isPersonOldEnoughToVote(person) {

    if(person.age >= 18){
        return true;
    } else{
        return false;
    }
}
var obj = {
    age: 19
};
var output = isPersonOldEnoughToVote(obj);
console.log(output); // --> true

//Write a function called "addArrayProperty".
//
// Given an object, a key, and an array, "addArrayProperty" sets a new property on the object at the given key, with its value set to the given array.
function addArrayProperty(obj, key, arr) {
    obj[key] = arr
}
var myObj = {};
var myArray = [1, 3];
addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty); // --> [1, 3]