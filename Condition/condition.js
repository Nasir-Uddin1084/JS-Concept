// if...else statements in JavaScript
const age = 18;

if (age >= 18) {
	console.log('Nasir is an adult.');
} else {
	console.log('Nasir is a child.');
}

const age2 = 12;

if (age2 >= 18) {
	console.log('Nasir is an adult.');
} else {
	console.log('Nasir is a child.');
}

let person1 = 'Nasir';
let person2 = 'Rahat';
let areBrothers = true;

// alternate way of &&
if ('Nasir' == person1) {
	if ('Rahat' == person2) {
		if (true == areBrothers) {
			console.log('They are brothers');
		} else {
			console.log('they are not brothers');
		}
	}
}

// multiple conditions (if...else else if statements) in JavaScript
const age3 = 18;

if (age3 < 18) {
	console.log('Nasir is under 18 years old.');
} else if (age3 >= 18 && age3 <= 21) {
	console.log('Nasir is between the ages of 18 and 21.');
} else {
	console.log('Nasir is over 21 years old.');
}

// switch statements over if...else statements
const pet = 'dog';

if (pet === 'lizard') {
	console.log('I own a lizard');
} else if (pet === 'dog') {
	console.log('I own a dog');
} else if (pet === 'cat') {
	console.log('I own a cat');
} else if (pet === 'snake') {
	console.log('I own a snake');
} else if (pet === 'parrot') {
	console.log('I own a parrot');
} else {
	console.log("I don't own a pet");
}

const pet2 = 'dog';

switch (pet2) {
	case 'lizard':
		console.log('I own a lizard');
		break;
	case 'dog':
		console.log('I own a dog');
		break;
	case 'cat':
		console.log('I own a cat');
		break;
	case 'snake':
		console.log('I own a snake');
		break;
	case 'parrot':
		console.log('I own a parrot');
		break;
	default:
		console.log("I don't own a pet");
		break;
}

// The logical AND (&&) operator and if...else statements in JavaScript
const age4 = 17;
const ownsCar = true;

if (age4 >= 16 && ownsCar) {
	console.log('Nasir is old enough to drive and has his own car.');
} else {
	console.log('Nasir does not drive.');
}

const age5 = 13;
const ownsCar2 = true;

if (age5 >= 16 && ownsCar2) {
	console.log('Nasir is old enough to drive and has his own car.');
} else {
	console.log('Nasir does not drive.');
}

// The logical OR (||) operator and if...else statements in JavaScript
const isPaying = true;
const isSale = false;

if (isPaying || isSale) {
	console.log('Nasir will go shopping.');
} else {
	console.log('Nasir will not go shopping.');
}

const isPaying2 = false;
const isSale2 = false;

if (isPaying2 || isSale2) {
	console.log('Nasir will go shopping.');
} else {
	console.log('Nasir will not go shopping.');
}

// The logical NOT (!) operator and if...else statements in JavaScript
const isPaying3 = true;
const isSale3 = false;

if (!isPaying3 || isSale3) {
	console.log('Nasir will go shopping.');
} else {
	console.log('Nasir will not go shopping.');
}
