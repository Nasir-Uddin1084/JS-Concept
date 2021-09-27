// Basic
console.log('<<<<< array-Iteration Basic >>>>>');

let x = ['x', 'y', 'z'];
x.forEach((u, v, w) => {
	console.log(u, v, w);
});
// array-Iteration 1 way
console.log('<<<<< array-Iteration 1st way >>>>>');

let food = ['biryani', 'teheri', 'mugor-polao'];
food.forEach(function (element, index, fullArray) {
	console.log(element, index, fullArray);
});

// array-Iteration 2 way
console.log('<<<<< array-Iteration 2nd way >>>>>');

let food2 = ['burhani', 'lacchi', 'drinks'];
food2.forEach((element, index, fullArray) => {
	console.log(element, index, fullArray);
});

// array-Iteration 3 way
console.log('<<<<< array-Iteration 3rd way >>>>>');

let food3 = ['pinni', 'doi', 'faluda'];
let arrayFun = function (element, index, fullArray) {
	console.log(element, index, fullArray);
};

food3.forEach(arrayFun);
