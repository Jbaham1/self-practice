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

//Write a function called "removeNumbersLargerThan".
// Given a number and an object, "removeNumbersLargerThan" removes any properties whose values are numbers greater than the given number.

function removeNumbersLargerThan(num, obj) {
    //iterate over obj
    //if property is larger than num given
    //remove property
    for(var key in obj){
        if(obj[key] > num){
            delete obj[key];
        }
    }
}

var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }

// Write a function called "removeNumbersLessThan".
//     Given a number and an object, "removeNumbersLessThan" removes any properties whose values are numbers less than the given number.
function removeNumbersLessThan(num, obj) {
    for(var key in obj){
        if(obj[key] < num){
            delete obj[key];
        }
    }
}
var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
removeNumbersLessThan(5, obj);
console.log(obj); // --> { a: 8, c: 'montana' }

//Write a function called "removeStringValuesLongerThan".
// Given an number and an object, "removeStringValuesLongerThan" removes any properties on the given object whose values are strings longer than the given number.
function removeStringValuesLongerThan(num, obj) {
    for(var key in obj){
        if(typeof obj[key] === 'string' && obj[key].length > num){
            delete obj[key];
        }
    }
}

var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }

//Write a function called "removeEvenValues".
// Given an object, "removeEvenValues" removes any properties whose values are even numbers.
// Do this in place and return the original object, do not construct a cloned object that omits the properties.

function removeEvenValues(obj) {
    // iterate over obj
    //see if even value
    //delete even value
    for(var key in obj){
        if(obj[key] % 2 === 0){
            delete obj[key];
        }
    }
}

var obj = {
    a: 2,
    b: 3,
    c: 4
};
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }

//Write a function called "countNumberOfKeys".
// Given an object, "countNumberOfKeys" returns how many properties the given object has.
function countNumberOfKeys(obj) {
    //iterate over obj
    //count amount of properties for obj

    var count = 0
    for(var key in obj){
        count += 1
    }
    return count
}

var obj = {
    a: 1,
    b: 2,
    c: 3
};
var output = countNumberOfKeys(obj);
console.log(output); // --> 3

//Write a function called "removeOddValues".
// Given an object, "removeOddValues" removes any properties whose values are odd numbers.

function removeOddValues(obj) {
    for(var key in obj){
        if(obj[key] % 2 === 1){
            delete obj[key]
        }
    }
}

var obj = {
    a: 2,
    b: 3,
    c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }