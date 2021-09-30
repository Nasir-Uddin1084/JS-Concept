// Base class
class Person {
	constructor() {
		this.firstName = 'Nasir';
		this.lastName = 'Uddin';
	}

	// static function
	static fullName() {
		// class name ok
		// object name not ok
		return `This is a static function`;
	}
}

console.log(Person.fullName());