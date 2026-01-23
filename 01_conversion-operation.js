// ****************************************************************
// Conversion Operation Module
// This module handles various data conversion operations.
// **********************************************************************

// Function to convert a string to a number
function stringToNumber(str) {
    let num = Number(str); 
    if (isNaN(num)) {
        throw new Error(`Cannot convert "${str}" to a number.`);
    }   
    return num;
}   

// Function to convert a number to a string
function numberToString(num) {
    return num.toString();
}   
// Function to convert a string to a boolean
function stringToBoolean(str) {
    if (str.toLowerCase() === 'true') { 
        return true;
    } else if (str.toLowerCase() === 'false') {
        return false;
    }   

    throw new Error(`Cannot convert "${str}" to a boolean.`);
}   




