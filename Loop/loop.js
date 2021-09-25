// while
var i = 1;
while (i <= 5) {
	console.log('<p> The number is ' + i + ' </p>');
	i++;
}

// do while
var j = 1;
do {
	console.log('<p> The num is ' + j + ' </p>');
	j++;
} while (j <= 5);

// for loop
for (var k = 1; k <= 5; k++) {
	console.log('<p> The number is ' + k + ' </p>');
}

// An array with some elements
var fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Papaya'];
// Loop through all the elements in the array
for (var l = 0; l < fruits.length; l++) {
	console.log('<p> ' + fruits[l] + ' </p>');
}

// for...in Loop

// An object with some properties
var person = { name: 'Clark', surname: 'Kent', age: '36' };
// Loop through all the properties in the object
for (var prop in person) {
	console.log('<p> ' + prop + ' = ' + person[prop] + ' </p>');
}

// for...of Loop

// Iterating over array
let letters = ['a', 'b', 'c', 'd', 'e', 'f'];

for (let letter of letters) {
	console.log(letter); // a,b,c,d,e,f
}

// Iterating over string
let greet = 'Hello World!';

for (let character of greet) {
	console.log(character); // H,e,l,l,o, ,W,o,r,l,d,!
}
