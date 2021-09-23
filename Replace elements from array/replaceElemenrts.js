// Array.splice(position to delete,items to delete,new_element);
let languages = ['C', 'C++', 'Java', 'JavaScript'];

languages.splice(1, 1, 'Python');

console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// Array.splice(position to delete,items to delete,new_element_1,new_element_2,new_element_3,...);
languages.splice(2, 1, 'C#', 'Swift', 'Go');

console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

//example
const fruits2 = ['Apple', 'Orange', 'Mango', 'Banana'];

const replace = fruits2.splice(1, 2, 'Cherry', 'Watermelon');

console.log(fruits2); // ['Apple', 'Cherry', 'Watermelon', 'Banana']
console.log(replace); // ['Orange', 'Mango']

