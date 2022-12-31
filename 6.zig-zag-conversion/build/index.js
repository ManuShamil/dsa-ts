"use strict";
const calculateNumArrays = (strLength, numRows) => {
    let resultLen = 0;
    while (strLength > 0) {
        strLength -= numRows;
        resultLen++;
        if (strLength > 0) {
            strLength--;
            resultLen++;
        }
    }
    return resultLen;
};
const fillArrays = (s, numArrays) => {
    let strArray = s.split(``).map(val => val.charCodeAt(0));
    console.log(strArray);
};
function convert(s, numRows) {
    let arrayLength = calculateNumArrays(s.length, numRows);
    let numArrays = new Array();
    for (let i = 0; i < arrayLength; i++) {
        let newArr = new Array(numRows).fill(0);
        numArrays.push(newArr);
    }
    for (let i = 1; i < arrayLength; i += 2) {
        //numArrays[i][ Math.floor(numRows/2) + 1 ] 
    }
    return '';
}
console.log(calculateNumArrays(9, 3));
console.log(fillArrays(`hello`, []));
