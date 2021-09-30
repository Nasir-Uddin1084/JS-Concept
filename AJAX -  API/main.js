// taking data by API
document.getElementById('get_data').addEventListener('click', loadJokes);
function loadJokes() {
	let number = document.getElementById('number_jokes').value;
	// console.log(number);
	// console.log("Button Click");
	let xhr = new XMLHttpRequest();
	// console.log(xhr);
	xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
	xhr.onload = function () {
		if (this.status === 200) {
			// console.log(this.responseText);
			let data = JSON.parse(this.responseText); // json object to js object
			// let joke = data.value.joke
			console.log(data);
			// document.getElementById
		}
	};
	xhr.send();
}
