// String declare
let str = 'Welcome to My WEB PAGE. ';
let str1 = 'Hello My name is Nasir.';
let str3 = 'match this match is a match';

// charAt
console.log(str.charAt(5));

// charCodeAt
console.log(str.charCodeAt(6));
console.log(str.charCodeAt(12));

// concat
console.log(str.concat(str1));

// endsWith
console.log(str.endsWith('PAGE.'));
console.log(str1.endsWith('PAGE.'));

// startsWith
console.log(str.startsWith('Nasir'));
console.log(str1.startsWith(' Hello'));

// includes
console.log(str.includes('Hello'));
console.log(str1.includes('llo'));

// fromCharCode
console.log(String.fromCharCode(109));

// indexOf
console.log(str.indexOf('P'));
console.log(str1.indexOf('n'));

// match
console.log(str3.match(/match/g));
console.log(str1.match(/m/g));
console.log(str.match(/m/g));
console.log(str1.match(/match/g));

// repeat
console.log(str1.repeat(2));

// search
console.log(str1.search('Nasir'));
console.log(str.search('to'));

// upperCase
console.log(str.toLocaleUpperCase());
console.log(str1.toLocaleUpperCase());

// lowerCase
console.log(str.toLocaleLowerCase());
console.log(str1.toLocaleLowerCase());

// remove unwanted space
let s = '     Do you see the space?       ';
console.log(s);
console.log(s.trim());

// slice
console.log(str.slice(3, 7));
console.log(str1.slice(11, 16));

// split
console.log(str1.split()); // string become whole array
console.log(str1.split(''));
console.log(str1.split(' ')); // string become divided array
console.log(str1.split('a'));

// replace
console.log(str1.replace(/Nasir/g, 'Sajjad'));
