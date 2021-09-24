/* Copying Arrays */

let original = [true, true, undefined, false, null];

// slice (old way)
let copy1 = original.slice(0);
console.log(copy1);

// spread operator (ES6 way)
let copy2 = [...original];
console.log(copy2);

// DEEP copying
let deepArray = [['freeCodeCamp']];

// let shallowCopy = deepArray.slice(0);
// shallowCopy[0].push('is great');
// console.log(deepArray[0], shallowCopy[0]); // deepArray get effected

// solution
let deepCopy = JSON.parse(JSON.stringify(deepArray));

deepCopy[0].push('is great');
console.log(deepArray[0], deepCopy[0]);

// Differ between slice & splice
// string
let str = ['a', 'b', 'c', 'd', 'e'];

let strslice = str.slice(1, 3);
console.log(str, strslice);

let strsplice = str.splice(1, 3);
console.log(str, strsplice);

// Number
let arr = [10, 20, 30, 40, 50];

let arrslice = arr.slice(1, 3);
console.log(arr, arrslice);

let arrsplice = arr.splice(1, 3);
console.log(arr, arrsplice);
