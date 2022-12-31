"use strict";
function maximumWealth(accounts) {
    let max = 0;
    accounts.forEach(val => {
        let sum = val.reduce((el0, el1) => el0 + el1);
        if (sum > max)
            max = sum;
    });
    return max;
}
;
console.log(maximumWealth([
    [51, 1],
    [51, 24]
]));
const myColor = { value: 'red' }; // works
const myIncorrectColor = { value: 100 }; // throws error
