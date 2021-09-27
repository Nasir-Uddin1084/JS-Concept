// function declared in normal way
function func1(nasir) {
	console.log(nasir);
}
func1('This is function1');

// function expression: anonymous function
let func2 = function (nasir) {
	console.log(nasir);
};
func2('This is function2');

// function declared with arrow sign
let funcArrow = (nasir) => {
	console.log(nasir);
};
funcArrow('This is an arrow function1');

// use only one parameter
let funcArrow2 = (nasir) => {
	console.log(nasir);
};
funcArrow2('This is an arrow function2');
