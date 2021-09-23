// Array.splice(position,num);
let scores = [1, 2, 3, 4, 5];
// remove first two elements from the beginning of an array
let deletedScores = scores.splice(0, 3);

console.log(scores); //  [4, 5]
console.log(deletedScores); // [1, 2, 3]

// example
const fruits = ['Apple', 'Orange', 'Mango', 'Banana'];

const removed = fruits.splice(0, 2); // remove first elements

console.log(fruits); // ['Mango', 'Banana']
console.log(removed); // ['Apple', 'Orange']

// example
const fruits4 = ['Apple', 'Orange', 'Mango', 'Banana'];
// If the deleteCount is omitted, all the elements starting from start are removed from the array
const removed4 = fruits4.splice(1);

console.log(fruits4); // ['Apple']
console.log(removed4); // ['Orange', 'Mango', 'Banana']
