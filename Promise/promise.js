// callback Function
// function vitore function
/*
setTimeout(function() => {
  console.log("Hello World!")
}, 3000);
*/
let persons = [
	{ firstName: 'Nasir', lastName: 'Uddin' },
	{ firstName: 'Ehsanul', lastName: 'Islam' },
	{ firstName: 'Maruf', lastName: 'Ansarullsah' },
];

function createPerson(person) {
	let prom = new Promise(function (resolve, reject) {
		persons.push(person);
		// fake error
		let err = false;
		if (!err) {
			resolve();
		} else {
			reject('Data Error! : Something wrong');
		}
	});
	return prom;
}

function getData() {
	setTimeout(function () {
		let output = '';
		persons.forEach(function (item) {
			output += `<li>${item.firstName} ${item.lastName}</li>`;
		});
		document.getElementById('output').innerHTML = output;
	}, 500);
}
createPerson({ firstName: 'Rahat', lastName: 'Matubbar' })
	.then(getData)
	.catch(function (err) {
		console.log(err);
	});
