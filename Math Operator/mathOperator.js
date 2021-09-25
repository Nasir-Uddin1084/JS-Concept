// Math Operator

const a = 12;
const b = 34;

// addition
let add = a + b; // 46
console.log(add);

// subtraction
let subs = a - b; // -22
console.log(subs);

// multiplication
let multi = a * b; // 408
console.log(multi);

// division
let div = a / b; // 0.35294117647058826
console.log(div);

// exponentiation
let expon = b ** a; // 2386420683693101000
console.log(expon);

// modulus (remainder of the division)
let mod = b % a; // 10
console.log(mod);

// Operator Precedence
let o1 = 100 + 50 * 3;
let o2 = (100 + 50) * 3;
let o3 = 100 + 50 - 3;
console.log(o1);
console.log(o2);
console.log(o3);

// Postfix Increment
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);

// Prefix Increment
let c = 3;
const d = ++c;

console.log(`c:${c}, d:${d}`);

// Postfix Decrement
let e = 3;
const f = e--;

console.log(`e:${e}, f:${f}`);
// expected output: "xx:2, yy:3"

// Prefix Decrement
let aa = 3;
const bb = --aa;

console.log(`aa:${aa}, bb:${bb}`);
// expected output: "aa:2, bb:2"

// bit shift left
let bsl = 34 << 12; // 139264
console.log(bsl);
// bit shift right
let bsr = 257 >> 4; // 16
console.log(bsr);
// unsigned bit shift
let ubs = -1 >>> 2; // 1073741823
console.log(ubs);
// bitwise or
let bto = 37 | 12; // 45
console.log(bto);
// bitwise and
let bwa = 124 & 43; // 40
console.log(bwa);
// bitwise xor
let bwx = 124 ^ 43; // 87
console.log(bwx);
// bitwise not (signed)
let bwn = ~5; // -6
console.log(bwn);

// Comparison
let m = 2;
let n = 1;

// < Less than
let lessThan = m < n;
console.log(m + ' is less than ' + n + ' : ' + lessThan);

// less Than Or Equal
let lessThanOrEqual = m <= n;
console.log(m + ' is less than or equal ' + n + ' : ' + lessThanOrEqual);

// greater Than
let greaterThan = m > n;
console.log(m + ' is greater than ' + n + ' : ' + greaterThan);

// greater Than Or Equal
let greaterThanOrEqual = m >= n;
console.log(m + ' is greater than or equal ' + n + ' : ' + greaterThanOrEqual);

// Equal
let equal = m == n;
console.log(m + ' is equal ' + n + ' : ' + equal);

// Strict equal
let strictEqual = m === n;
console.log(m + ' is strict Equal ' + n + ' : ' + strictEqual);

// 	Unequal
let unEqual = m != n;
console.log(m + ' is Unequal ' + n + ' : ' + unEqual);

// 	Strict unequal
let strictUnEqual = m === n;
console.log(m + ' is strict unequal ' + n + ' : ' + strictUnEqual);

// Assignment 1
let assing1 = (m += n);
console.log(assing1);
// Assignment 2
let assing2 = (m /= n);
console.log(assing2);
// Assignment 3
let assing3 = (m -= n);
console.log(assing3);
// Assignment 4
let assing4 = (m *= n);
console.log(assing4);
// Assignment 5
let assing5 = (m %= n);
console.log(assing5);

// Boolean
const b1 = !false; // true
console.log(b1);
const b2 = true && false; // false
console.log(b2);
const b3 = false || true; // true
console.log(b3);
const b4 = 123 === '456'; // false
console.log(b4);
const b5 = 1.23 === 123e-2; // true
console.log(b5);
