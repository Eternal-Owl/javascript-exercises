const sumAll = function(a,b) {
    // variables for maths
    let value1;
    let value2;
    
    console.log(`input: ${a},${b}`);

    //Logic to assign variables + error handling
    if (a < 0 || b < 0){
        sum = "ERROR";
    } else if (!Number.isInteger(a) || !Number.isInteger(b)) {
        sum = "ERROR";
    }

    else if (a < b) {
        value1 = a;
        value2 = b;
        sum = ((value2 - value1 + 1) * (value1 + value2))/2;
        console.log(sum);
    } else if ( a > b) {
        value1 = b;
        value2 = a;
        sum = ((value2 - value1 + 1) * (value1 + value2))/2;
        console.log(sum);
    }

    console.log(`Values: ${value1},${value2}`);
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
