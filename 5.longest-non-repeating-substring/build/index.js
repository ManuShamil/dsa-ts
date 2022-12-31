"use strict";
// const isOutOfBounds = ( cursorPos: number, windowsSize: number, strLength: number ) => {
//     return cursorPos + windowsSize > strLength;
// }
// const findSubstrings = (str: string ) :Array<string> => {
//     const result:string[] = [];
//     let windowSize = str.length - 1;
//     for ( let winSize = windowSize; winSize > 0; winSize-- ) {
//         let cursorPos = 0
//         while ( !isOutOfBounds( cursorPos, winSize, str.length ) ) {
//             console.log( str.substr( cursorPos, winSize ) )
//             cursorPos++;
//         }
//     }
//     return result;
// }
// findSubstrings('abc')
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const isOutOfBounds = (cursorPos, windowsSize, strLength) => {
    return cursorPos + windowsSize > strLength;
};
const hasDuplicates = (str) => {
    const chars = str.split('');
    const uniqueChars = new Set(chars);
    return chars.length !== uniqueChars.size;
};
function lengthOfLongestSubstring(str) {
    let windowSize = str.length;
    for (let winSize = windowSize; winSize > 0; winSize--) {
        let cursorPos = 0;
        while (!isOutOfBounds(cursorPos, winSize, str.length)) {
            if (!hasDuplicates(str.substr(cursorPos, winSize)))
                return winSize;
            cursorPos++;
        }
    }
    return str.length;
}
//console.log( lengthOfLongestSubstring('au') )
rl.question("Enter the string: ", (str) => {
    console.log("Length: " + lengthOfLongestSubstring(str));
    rl.close();
});
