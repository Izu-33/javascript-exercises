const sumAll = function(x, y) {

    if(!isValidNumber(x) || !isValidNumber(y)){
        return 'ERROR';
    }

    let numbers;
    if (x > y) {
        numbers = generateNumbers(y, x);
    } else {
        numbers = generateNumbers(x, y);
    }
    let total = numbers.reduce((acc, currentValue) => acc + currentValue,0);
    return total;
};

function generateNumbers(x, y) {
    let listOfNumbers = [];
    for (let i = x; i <= y; i++) {
        listOfNumbers.push(i);
    }
    return listOfNumbers;
}

function isValidNumber(num) {
    if (num % 1 !== 0 ||
        num < 0 ||
        typeof num !== 'number'
    ) {
        return false;
    } else {
        return true;
    }
}

// Do not edit below this line
module.exports = sumAll;
