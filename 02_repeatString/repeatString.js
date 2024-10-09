const repeatString = function(string, iterations) {
    let returnString = "";
    let i = 0;
    if (iterations < 0) {
        returnString = 'ERROR'
    } else {
        while ( i < iterations) {
            returnString += string;
            i++;
        }
    }   
    return returnString;
}

// Do not edit below this line
module.exports = repeatString;
