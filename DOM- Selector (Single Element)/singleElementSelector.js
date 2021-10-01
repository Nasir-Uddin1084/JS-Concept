//  DOM Selector (Single Element)

let val;

// getting an element

let get;
get = document.getElementById('document-title');
console.log(get);
get = document.getElementById('document-title').id;
console.log(get);
get = document.getElementById('document-title').className;
console.log(get);

// <<<<< change the css style >>>>>

let cssStyle;

cssStyle = document.getElementById('document-title').style.display = 'none';
cssStyle = document.getElementById('document-title').style.display = 'block';
cssStyle = document.getElementById('document-title').style.color = '#fff';
cssStyle = document.getElementById('document-title').style.background = 'grey';
cssStyle = document.getElementById('document-title').style.fontSize = '30px';
cssStyle = document.getElementById('document-title').style.marginTop = '30px';
cssStyle = document.getElementById('document-title').style.padding = '15px';

/*
// Call the class
let valClass = document.querySelector('.sample-class2');
valClass.style.background = '	#00FFFF';
valClass.style.padding = '15px';

let valClass1 = document.querySelector('.sample-class1');
valClass1.style.background = '#ddd';
valClass1.style.padding = '15px';
*/

/*
// <<<<< changing content >>>>>

// One Way
cssStyle = document.getElementById('document-title').textContent =
'Another Programming language';

// another Way
cssStyle = document.getElementById('document-title').innerHTML =
'<i> Another Heading </i>';

// Another Way
cssStyle = document.getElementById('document-title').innerText =
'New Programming language';


// Another way with little effect

// let cssStyle2 = document.getElementById('document-title');
// cssStyle2.style.background = 'red';
// cssStyle2.innerHTML = '<h3>ShotCut declaration</h3>'

*/

/*
// <<<<< document.querySelector >>>>>

let myStyle;

myStyle = document.querySelector('#document-title');
myStyle.style.background = 'lightGreen';
myStyle.style.color = 'blue'
myStyle.style.padding = '20px'

// call the "ol"

myStyle = document.querySelector('ol');
myStyle.style.color = '#fff';
myStyle.style.background = '#000';
myStyle.style.padding = '15px';
console.log(myStyle);
*/

/*
// call the "li" 

// call last-child of the li 
// let myLi = document.querySelector('ul li:last-child');

// call nth-child of the li 
// let myLi = document.querySelector('ul li:nth-child(2)');

let myLi = document.querySelector('#myList li:nth-child(3)');

myLi.style.color = '#fff';
myLi.style.background = 'black';
myLi.style.padding = '5px';
myLi.innerText = 'There is only One Allah to bow down our head';
console.log(myLi);

*/
