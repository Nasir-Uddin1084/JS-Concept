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
];

function createPerson(person, callback) {
	setTimeout(function () {
		persons.push(person);
		callback();
	}, 2000);
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
createPerson({ firstName: 'Rahat', lastName: 'Matubbar' }, getData);
