"use strict";
let nums1 = [];
let nums2 = [2, 3];
const findMedianSortedArrays = (nums1, nums2) => {
    let maxLength = nums1.length + nums2.length;
    let mergedArray = [];
    let concatUntil = maxLength % 2 == 0 ? Math.ceil(maxLength / 2) : Math.floor(maxLength / 2);
    let a = 0;
    let b = 0;
    while (mergedArray.length <= concatUntil) {
        if (a >= nums1.length) {
            for (let i = 0; i <= nums2.length - b; i++)
                mergedArray.push(nums2[b++]);
            break;
        }
        if (b >= nums2.length) {
            for (let i = 0; i <= nums1.length - a; i++)
                mergedArray.push(nums1[a++]);
            break;
        }
        if (nums1[a] < nums2[b])
            mergedArray.push(nums1[a++]);
        else
            mergedArray.push(nums2[b++]);
    }
    return maxLength % 2 == 0 ? (mergedArray[concatUntil] + mergedArray[concatUntil - 1]) / 2 : mergedArray[concatUntil];
};
console.log(findMedianSortedArrays(nums1, nums2));
