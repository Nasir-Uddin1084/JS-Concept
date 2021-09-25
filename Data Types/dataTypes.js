// Number data type
const num10 = 123; // Literal declaration
console.log(num10);
const num20 = Number(123); // Using the Number constructor
console.log(num20);
const num30 = Number.parseInt('123.45'); // Conversion to integer
console.log(num30);
const num40 = Number.parseFloat('1.23e2'); // Conversion to float
console.log(num40);
const num50 = +'123'; // unary conversion to number
console.log(num50);
const bigInt = 1234567890123456789012345678901234567890n; // BigInt data type
console.log(bigInt); // the "n" at the end means it's a BigInt

// toExponential
let num1 = 5.56789;
let num = num1.toExponential();
console.log(num);

// toFIxed
let num4 = 5.56789;
let n5 = num4.toFixed(2);
console.log(n5);

// toLocalString
let num6 = new Number(1000000).toLocaleString('fi-FI');
console.log(num6);

// toPrecision
var num7 = 13.3714;
var n8 = num7.toPrecision(2);
console.log(n8);

// toString
var num9 = 15;
var n10 = num9.toString();
console.log(n10);

// valueOf
var num11 = 15.25;
var n12 = num11.valueOf();
console.log(n12);

// String data type
const s = ''; // The value is "", the typeof is "string"
const s1 = 'this is a string'; // double quotes
const s2 = 'this is also a string'; // single quotes
const s3 = `this is, once more, a string`; // backticks
const s4 = ` a
b
c`; // multiline strings

const tmp = 1 + 2;
const s5 = ` 1 + ${1 + 1} = ${tmp} `; // embedded expressions and variables
s5 === ' 1 + 2 = 3 '; // true
const s6 = 'string1' + ' ' + 'string2'; // "string1 string2"
console.log(s);
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log('tmp: ' + tmp);
console.log(s5);
console.log(s6);

// Object data type
let obj = { firstName: 'John', lastName: 'Doe' };
console.log(obj);

let contact = {
	firstName: 'Nasir',
	lastName: 'Uddin',
	email: 'nasir.ussin@example.com',
	phone: '(880)-17075-70938',
	address: {
		building: '156/6',
		street: 'North 1st street',
		city: 'Dhaka',
		state: 'Dhaka',
		country: 'Bangladesh',
	},
};
console.log(contact);

//  Array data type
const cars = ['Saab', 'Volvo', 'BMW'];
console.log('Array : ' + cars);

// boolean data type
let aA = 0;
console.log(Boolean(aA));
let bB = 1;
console.log(Boolean(bB));

// null data type
let age = null;
console.log(age);

// undefined data type
let age2;
console.log(age2);

// The symbol data type

let sy1 = Symbol();
console.log(sy1);
