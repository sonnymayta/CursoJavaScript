/* Though all values are made of bits, they play different roles. Every value has a type that determines 
  its role. Some values are numbers, some values are pieces of text, some values are functions, and so on.*/

// Numbers
console.log(15); // 15
console.log(2.54); // 2.54
console.log(2.99e8); // 299000000

// Arithmetic
console.log(100 + 4 * 10); // 140
console.log((100 + 4) * 10); // 1040
console.log(314 % 100); // 14

// Special numbers
console.log(10 / 0); // Infinity
console.log(-10 / 0); // -Infinity

// String
console.log(`Down on he sea`);
console.log("Lie on the sea");
console.log('Float on the sea');
console.log("This is the first line\nAnd this is the second");
console.log("con" + "cat" + "e" + "nate");
console.log(`half of 100 is ${100 / 2}`);

//Unary operators
console.log(typeof 5.5); // number
console.log(typeof "x"); // string
// The minus operator (-) can be used both as a binary operator and as a unary operator.
console.log(- (10 - 2)); // -8

// Boolean Values
console.log(3 > 2); // true
console.log(3 < 2); // false

console.log("Aardvark" < "Zoroaster"); // true

console.log("Garnet" != "Ruby"); // true
console.log("Pearl" == "Amethyst"); // false
console.log(NaN == NaN); // false

// Logical operators
console.log(true && false); // false
console.log(true && true); // true

console.log(false || true); // true
console.log(false || false); // false

console.log(!true) // ! operador not - false

// The ternary operator
console.log(true ? 1 : 2); // 1
console.log(false ? 1 : 2); // 2

// Empty values

/* There are two special values, written null and undefined, that are used to denote 
the absence of a meaningful value. */

// Automatic type conversion

console.log(8 * null); // 0
console.log("5" - 1); // 4
console.log("5" + 1) // 51
console.log("five" * 2); // NaN
console.log(false == 0); // true

console.log(null == undefined); // true
console.log(null == 0); // false

console.log(false === 0); //false

// Short-circuiting of logical operators

console.log(null || "user"); // user
console.log("Agnes" || "user"); // Agnes

console.log(0 || 100); // 100
console.log(0 ?? 100); // 0
console.log(null ?? 100); // 100

console.log(null && "user"); // user
console.log("Agnes" && "user"); // Agnes