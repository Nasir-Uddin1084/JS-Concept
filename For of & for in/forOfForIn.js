// for of & for in
let person = {
	name: 'Nasir',
	age: 23,
	height: 5.3,
	married: false,
};

// for in: support string/ array/ object
for (let i in person) {
	// it work with index
	console.log(i + ': ' + person[i]);
}

// for of: support string/ array
let arr = ['nasir', 'rahat', 'sajjad', 'maruf'];

for (let f of arr) {
	// it work with elements
	console.log('frnd: ' + f);
}
