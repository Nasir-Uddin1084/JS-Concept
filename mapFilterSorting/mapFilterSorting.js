// map ()
let foods = ['biryani', 'nehari', 'milk'];
let newFoods = foods.map((element, x, y) => {
	return `I love ${element} ${x} ${y}`;
});
console.log(newFoods);

// map ()
let arr = [3, 6, 9, 12];
let arrSqr = arr.map((x) => {
	return x ** 2;
});
console.log(arrSqr);

// filter ()
let arr2 = [11, 420, 45, 69, 96, 40, 7, 77];
let arrFilter = arr2.filter((x) => {
	return x < 50;
});
console.log(arrFilter);
console.log(arrFilter.sort());

// sort
let arr3 = [10, 40, 50, 20, 90, 30];

console.log(arr3.sort());

// number sorting
let compArr = (x, y) => {
	// if <0 ..... a comes first
	// if 0 ..... nothing will be changed
	// if >0 ..... b comes first
	return x - y;
};
console.log(arr.sort(compArr));
