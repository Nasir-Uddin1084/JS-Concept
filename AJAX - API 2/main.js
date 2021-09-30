// taking data by API
document.getElementById('get_data').addEventListener('click', loadJokes);

function loadJokes() {
	let number = document.getElementById('number_jokes').value;

	let xhr = new XMLHttpRequest();

	xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

	xhr.onprogress = function () {
		document.getElementById('output').innerHTML = '<h2>Loading......</h2>';
	};

	xhr.onload = function () {
		if (this.status === 200) {
			// console.log(this.responseText);
			let data = JSON.parse(this.responseText); // json object to js object

			let jokes = data.value;

			let output = '<ol>';

			jokes.forEach(function (item) {
				output += `<li>${item.joke}</li>`;
			});

			output += '</ol>';

			// console.log(output);
			document.getElementById('output').innerHTML = output;
		}
	};
	xhr.send();
}
