// Fetch API

// console.log(window);
/*
document.getElementById('get_data').addEventListener('click', getData);

function getData() {
	fetch('http://api.icndb.com/jokes/random')
		.then(function (res) {
			return res.json();
			// console.log(res);
			// console.log(res.text());
			// console.log(res.json());
		})
		.then(function (data) {
			console.log(data);
		})
		.catch(function (err) {
			console.log(err);
		});
}
*/

// using arrow function

document.getElementById('get_data').addEventListener('click', getData);

function getData() {
  fetch('http://api.icndb.com/jokes/random')
    
		.then((res) => res.json())

		.then((data) => {	console.log(data);})

		.catch((err) => {	console.log(err);});
}

