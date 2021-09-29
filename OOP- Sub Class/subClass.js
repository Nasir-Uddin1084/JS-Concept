// 1st Class

class Person {

  // Base Class

  constructor(fName, lName) {
		this.firstName = fName;
		this.lastName = lName;
	}
	greetings() {
		return `Hello, ${this.firstName} ${this.lastName}!!`;
	}
}

// 2nd Class

class Customer extends Person {

  // Sub Class

  constructor(fName, lName, phone, membership) {
		super(fName, lName);

		this.phone = phone;
		this.membership = membership;
	}
}

// Base Class Output

let person1 = new Person('Nasir', 'Uddin');
console.log(person1);
console.log(person1.greetings());

// Sub Class Output

let customer1 = new Customer('Ehsanul', 'Islam', 01707570938, true);
console.log(customer1);
console.log(customer1.greetings());
console.log(customer1.phone, customer1.membership);

let customer2 = new Customer('Ansarullah', 'Maruf', 01707570937, true);
console.log(customer2);
console.log(customer2.greetings());
console.log(customer2.phone, customer2.membership);

let customer3 = new Customer('Rahat', 'Matubbar', 01707570936, true);
console.log(customer3);
console.log(customer3.greetings());
console.log(customer3.phone, customer3.membership);
