class Person {
	constructor(fName, lName, age, married) {
		this.firstName = fName;
		this.lastName = lName;
		this.age = age;
		this.married = married;
	}
	fullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}
let person1 = new Person('Ehsanul', 'Sajjad', 25, false);
let person2 = new Person('Ansarullah', 'Maruf', 26, false);
let person3 = new Person('Rahat', 'Matubbar', 24, false);
let person4 = new Person('Nasir', 'Uddin', 23, false);

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person1.fullName());
console.log(person2.fullName());
console.log(person3.fullName());
console.log(person4.fullName());
