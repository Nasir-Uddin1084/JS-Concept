// Array.splice(position,0,new_element_1,new_element_2,...);
let colors = ['red', 'green', 'blue'];

colors.splice(2, 0, 'purple');

console.log(colors); // ["red", "green", "purple", "blue"]

let colors2 = ['red', 'green', 'blue'];

colors2.splice(1, 0, 'yellow', 'pink');

console.log(colors2); // ["red", "yellow", "pink", "green", "purple", "blue"]

//example
const fruits1 = ['Apple', 'Orange', 'Mango', 'Banana'];

fruits1.splice(2, 0, 'Cherry');

console.log(fruits1); // ['Apple', 'Orange', 'Cherry', 'Mango', 'Banana']

