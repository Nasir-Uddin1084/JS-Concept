/*
// DOM Selector: Multiple Elements

let list = document.getElementsByClassName('sample-class');

list[0].style.background = 'yellow';
list[0].style.padding = '20px';
list[0].textContent = 'Hello World!!';
console.log(list);

// ট্যাগ ধরে কাজ করার জন্য
let list2 = document.getElementsByTagName('li');
console.log(list2[0]);

let list3 = document.querySelector('ol').getElementsByTagName('li');

list3[5].style.background = 'red';

list3[2].innerHTML = '<b>Vue</b>';

list3[1].innerHTML = '<b>React</b>';

console.log(list3);

// NOTE: forEach এর ক্ষেত্রে  khetre getElementById আর getElementByClassName কাজ করে না। কাজ করার জন্য নিচের কোড লিখতে হয়
let lis = Array.from(list3);
lis.forEach((element, i) => {
	console.log(element, i);
});
*/

/*
document.querySelectorAll()
how to use:
id- #
class- .
tag- none
*/

// document.querySelectorAll()

let val = document.querySelectorAll('.sample-class');

val[0].style.background = '#de6262'; //#2193b0
val[1].style.background = '#753a88'; //#cc2b5e

let valLi = document.querySelectorAll('ol li');
// console.log(valLi)

// forEach()
valLi.forEach((item, i) => {
	console.log(item, i);
});

// odd even
let oddLi = document.querySelectorAll('ol li:nth-child(odd)');
oddLi.forEach((item) => {
	item.style.background = '#f45c43';
});

let evenLi = document.querySelectorAll('ol li:nth-child(even)');
evenLi.forEach((item) => {
	item.style.background = '#cc2b5e';
});

console.log(oddLi);
