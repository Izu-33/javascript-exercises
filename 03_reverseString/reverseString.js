const reverseString = function(str) {
    charArray = [...str];
    let reversedArray = charArray.reverse();
    let reversedString = reversedArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;