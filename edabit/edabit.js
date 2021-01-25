//Create a function which returns the number of true values there are in an array.
function countTrue(arr) {
    var bool = [];
    if(arr === []){
        return 0;
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === true){
            bool.push(arr[i])
        }
    }
    return bool.length;
}
//Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.
function shiftToLeft(x, y) {
    return x * Math.pow(2,y) ;
}
//Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.
function timeForMilkAndCookies(date) {
    if(date.getMonth()=== 11 && date.getDate()=== 24){
        return true;
    } else{
        return false;
    }
}
//Write a function that takes the base and height of a triangle and return its area.
function triArea(base, height) {
    return (base * height)/2
}
//Create a function that takes two numbers as arguments and return their sum.
function addition(a, b) {
    return a + b;
}
//Create a function that takes the age and return the age in days.
function calcAge(age) {
    return age * 365
}
//Create a function that takes voltage and current and returns the calculated power.
function circuitPower(voltage, current) {
    return voltage * current
}
//Create a function that takes an array containing only numbers and return the first element.
function getFirstValue(arr) {
    return arr[0]
}