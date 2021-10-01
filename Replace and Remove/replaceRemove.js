// create element()

let olLi = document.createElement('li');
olLi.className = 'newClass demoClass';
olLi.id = 'newId';

// Add attribute
olLi.setAttribute('href', 'https://www.google.com');
olLi.setAttribute('Heading', 'This is a Heading');

// Add item
olLi.appendChild(document.createTextNode('C++'));
document.querySelector('ol').appendChild(olLi);
console.log(olLi);

// create li and a
let ulLi = document.createElement('li');
let a = document.createElement('a');

//  set attribute
a.setAttribute('href', 'https://www.yahoo.com');
a.setAttribute('target', '_blank');

// create text
a.appendChild(document.createTextNode('Yahoo!'));

// append a inside li
ulLi.appendChild(a);

// append li inside ul
document.querySelector('ul').appendChild(ulLi);

console.log(ulLi);
// console.log(a)

// <<<<< replace >>>>>
let newHeading = document.createElement('h1');
newHeading.appendChild(document.createTextNode('This is heading 1'));

let oldHeading = document.querySelector('.secondh2');

// <<<<<replace >>>>>
// let parentChild = document.querySelector('.container');
// parentChild.replaceChild(newHeading, oldHeading);

// another way
document.querySelector('.container').replaceChild(newHeading, oldHeading);

console.log(newHeading, oldHeading);

// <<<<< remove >>>>>

// One Way
var olItem = document.querySelectorAll('ol li');
olItem[1].remove();

// Another Way
var ol = document.querySelector('ol');
var liItem = document.querySelectorAll('li');

ol.removeChild(liItem[0]);

// Add Class

// new class name.
ol.className = 'test-class';

// did not remove classList, Only add Class name
ol.classList.add('test-class2');

// Remove the class
ol.classList.remove('test-class');

ol.setAttribute('class', 'myClass');

console.log(ol);

// attribute
let check = ol.hasAttribute('class');

console.log(check);
