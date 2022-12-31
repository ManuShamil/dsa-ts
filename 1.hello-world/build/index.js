"use strict";
const removeElement = (nums, val) => {
    let i = 0;
    let n = nums.length;
    while (i < n)
        nums[i] == val ? nums.splice(i, 1) : i++;
    return nums.length;
};
let arr = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;
console.log(removeElement(arr, val));
console.log(arr);
