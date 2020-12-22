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