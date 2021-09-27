// person Example 1
let person1 = {
	firstName: 'Nasir Uddin',
	lastName: 'Khan',
	age: 23,

	fullName: function () {
		return `${this.firstName} ${this.lastName} ${this.age}`;
	},
};
console.log(person1.fullName());

// person Example 2
let person2 = {
	firstName: 'Ehsanul',
	lastName: 'Islam',
	age: 25,

	fullName: function () {
		return `${this.firstName} ${this.lastName} ${this.age}`;
	},
};
console.log(person2.fullName());

// person Example 3
let person3 = {
	firstName: 'Ansarullah',
	lastName: 'Maruf',
	age: 24,

	fullName: function () {
		return `${this.firstName} ${this.lastName} ${this.age}`;
	},
};
console.log(person3.fullName());

// Bank Example 4
let bank = {
	location: 'Mirpur',
	Account: 150,
	deposite: 30000000,
	cash: 15000000,
	digital: 25000000,
	saving: 50000000,
	isOpen: true,

	TotalMoney: function () {
		return this.deposite + this.cash + this.digital + this.saving;
	},
};

console.log('TotalMoney: ' + bank.TotalMoney());

// Family Example
let family = {
	location: 'Noakhali',
	totalFamily: 6,
	member: 32,
	fathers: 4,
	mothers: 6,
	brothers: 10,
	sisters: 12,
	saving: 50000000,
	isOpen: true,

	totalFamily: function () {
		return this.fathers + this.mothers + this.brothers + this.sisters;
	},
};

console.log('Total Family Member: ' + family.totalFamily());
