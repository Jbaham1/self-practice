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
//Write a function called "countWords".
// Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string.
// Notes:
// If given an empty string, it should return an empty object.
function countWords(str) {
    if(str === ''){
        return {};
    }
    var result = {};
    var words = str.split(' ');
    for(var i = 0; i < words.length; i++){
        if(result[words[i]] === undefined){
            result[words[i]] = 1;
        } else {
            result[words[i]]+=1;
        }

    }
    return result;
}
var output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}

//Write a function called "extend".
// Given two objects, "extend" adds properties from the 2nd object to the 1st object.
// Notes:
// Add any keys that are not in the 1st object.
// If the 1st object already has a given key, ignore it (do not overwrite the property value).
// Do not modify the 2nd object at all.
function extend(obj1, obj2) {
    // your code here
    for(var keyFromObj2 in obj2){
        if(obj1[keyFromObj2] === undefined){
            obj1[keyFromObj2] = obj2[keyFromObj2];
        }
    }
}

var obj1 = {
    a: 1,
    b: 2
};
var obj2 = {
    b: 4,
    c: 3
};

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}

// Write a function called "removeArrayValues".
//     Given an object, "removeArrayValues" removes any properties whose values are arrays.
function removeArrayValues(obj) {
    // iterate over obj
    //check if value is array
    // remove current value if array
    for(var key in obj){
        if(Array.isArray(obj[key])){
            delete obj[key];
        }
    }
}
var obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }

//Write a function called "removeNumberValues".
// Given an object, "removeNumberValues" removes any properties whose values are numbers.
function removeNumberValues(obj) {
    for(var key in obj){
        if(typeof obj[key] === 'number'){
            delete obj[key];
        }
    }
}
var obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }

// Write a function called "removeStringValues".
//     Given an object, "removeStringValues" removes any properties on the given object whose values are strings.
function removeStringValues(obj) {
    for(var key in obj){
        if(typeof obj[key] === 'string'){
            delete obj[key];
        }
    }
}
var obj = {
    name: 'Sam',
    age: 20
}
removeStringValues(obj);
console.log(obj); // { age: 20 }