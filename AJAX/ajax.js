// Assynchronous programing and xml
// get data without loading the page

// declared Assynchronous
// Asyn = test1();

// test2();


// new way
document.getElementById('get_data').addEventListener('click', loadData);

function loadData() {
  // create a XHR object (xml HTTP Request)
	let xhr = new XMLHttpRequest();
  
	// HTTP status
	// 200: OK
	// 403: Forbidden
	// 404: NOt Found
  
	xhr.open('GET', 'data.txt', true);
	xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText)
			// text in page
			document.getElementById(
        'output'
        ).innerHTML = `<h3>${this.responseText}</h3>`;
      }
    };
    xhr.send();
    console.log(xhr);
  }

// old way
/*document.getElementById('get_data').addEventListener('click', loadData);

function loadData() {
	// create a XHR object (xml HTTP Request)
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'data.txt', true);

	xhr.onreadystatechange = function () {
		if (this.status === 200 && this.readyState === 4) {
			// readyState values
			// 0: request not initialized
			// 1: server connection established
			// 2: request received
			// 3: processing request
			// 4: request finished are response is ready
      // console.log(this.responseText);
      // text in page
      document.getElementById(
				'output'
			).innerHTML = `<h2>${this.responseText}</h2>`;
		}
	};
	xhr.send();
	console.log(xhr);
}
*/
			// 3: processing request
/*
document.getElementById('get_data').addEventListener('click', loadData);

function loadData() {
	// create a XHR object (xml HTTP Request)
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'data.txt', true);

	xhr.onprogress = function () {
		console.log(this.readyState);
	};
	xhr.send();
	console.log(xhr);
}
*/
