// converting Number to String 1 way
let num = 1;
let numCon = String(num);
console.log(num);
console.log(numCon);
// length of data
console.log(num.length);
console.log(numCon.length);
// Type of Data
console.log(typeof num);
console.log(typeof numCon);

// converting Number to String 2 way
let num1 = 10;
let num1Con = num1.toString();
console.log(num1Con);
console.log(typeof num1Con);
console.log(num1Con.length);

// converting Array to String  1 way
str1 = String([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
console.log(str1);
console.log(typeof str1);

// converting Array to String  2 way
let str2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
str3 = String(str2);
console.log(str2);
console.log(str3);
console.log(typeof str3);

// converting Array String to Number 1 way
strCon = Number(['9', '8', '7', '6', '5', '4', '3', '2', '1', '0']);
console.log(strCon);
console.log(typeof strCon);

// converting Array String to Number 2 way
let str4 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let str4Con = Number(str4);
console.log(str4Con);
console.log(typeof str4Con);

// converting boolean data type to String 1 way
let boolean = false;
let booleanCon = boolean.toString();
console.log(booleanCon);
console.log(typeof booleanCon);

// converting boolean data type to String 2 way
let boolean1 = true;
let boolean1Con = String(boolean1);
console.log(boolean1Con);
console.log(typeof boolean1Con);

// converting boolean data type to Number
// True
let bool = false;
console.log(bool);
console.log(Number(bool));
// False
let bool1 = true;
console.log(bool1);
console.log(Number(bool1));

// converting Date to String 1 way
let todayDate = new Date();
console.log(todayDate);
// converting Date to String 2 way
console.log(todayDate.toString());
// converting Date to String 3 way
let dateNow = String(new Date());
console.log(dateNow);
