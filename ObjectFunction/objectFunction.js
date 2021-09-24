// Object 2 declare
let myObject = { x: 1, y: 2, z: 3 };
console.log(myObject);

// object 2
let person1 = {
	firstName: 'Nasir',
	lastName: 'Uddin',
	age: 23,
	gender: 'male',
	roll: 820074,
	location: 'Noakhali',
	address: {
		city: 'Chatkhil',
		home: 'Molikka DIgirpar',
		houseNo: 156,
		road: 1,
	},
};
let person2 = {
	firstName: 'Rahat',
	lastName: 'Matubbar',
	age: 24,
	gender: 'male',
	roll: 820073,
	location: 'Madaripur',
	address: {
		city: 'Takerhat',
		home: 'Market',
		houseNo: 15,
		road: 1,
	},
};
console.log(person1);
console.log(person2);

// Function declare
function sleep(name, time) {
	console.log(name+" is sleeping from "+time);
}
sleep("Nasir","10 pm");
sleep("Rahat", "10:30 pm");
sleep("Sajjad", "11 pm");
sleep("Ansu", "11:30 pm");  

// uses of return
function sleep0(name, time) {
	return name + ' is sleeping from ' + time;
}
console.log(sleep0('Nasir', '9 pm'));

// Square Number
const number = 4;
function square(number) {
	return number * number;
}
console.log(square(number));

// factorial
const factorial = function fac(n) {
	return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3));
