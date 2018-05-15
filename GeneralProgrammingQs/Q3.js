// // The output array must be in Ascending order

// // I will also assume that the length of the final array must 
// // always be the same as the sum of the two initial arrays
// // so [1,2,3,4] & [3,4,5] => [1,2,3,3,4,4,5] and NOT [1,2,3,4,5]

function mergeArrays (arr1, arr2) { 
    arr1.push(...arr2);
    mergedArray = arr1.sort((x,y) => x-y);

    return mergedArray
}

console.log(mergeArrays([],[]));
console.log(mergeArrays([1,4,6,9,11,45],[7,7,7,8,8,10]));
console.log(mergeArrays([11,1,9,11,45],[7,7,7,8,8,10]));



