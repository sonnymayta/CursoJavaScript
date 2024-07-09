// Expressions and statements
// A fragment of code that produces a value is called an expression.

// Binding
// To catch and hold values, JavaScript privides a thing called a binding, or variable.

// The special word (keyword) let indicates that this sentence is going to define a binding.
let ten = 10;
console.log(ten * ten); // 100

// When a binding points at a value, that does not mean it is tied to that value forever.
let mood = "light";
console.log(mood); // light
mood = "dark";
console.log(mood); // dark

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt); // 105

let one = 1, two = 2;
console.log(one + two); // 3

// The words var and const can also be used to create bindings, in a similar fashion to let.
var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name); // Hello Ayda

// Binding names
// Words with a special meaning, such as let, are keywords, and may not be used as binding names.

// The enviroment
// The collection of bindings and their values that exist at a given time is called the environment.

/* 
  Functions
  - A lot of the values provided in the default environment have the type function. A function is a 
    piece of program wrapped in a value. Such values can be applied in order to run the wrapped program. 
    Executing a function is called invoking, calling, or applying it.
  - The values between the parentheses are given to the program inside the function. In the example, 
    the prompt function uses the string that we give it as the text to show in the dialog
    box. Values given to functions are called arguments.
  
  The console.log function
  - Most JavaScript systems (including all modern web browsers and Node.js) provide a console.log function 
  - that writes out its arguments to some text output device.

  Retrun values
  - Showing a dialog box or writing text to the screen is a side effect. Many functions are useful because 
  of the side effects they produce.
*/

console.log(Math.max(2, 4)); // 4

// When a function produces a value, it is said to return that value.
console.log(Math.min(2, 4) + 100); // 102

/* 
  Control flow
  - When your program contains more than one statement, the statements are executed as though they were 
  a story, from top to bottom.

  Condicional execution
  - Not all programs are straight roads. We may, for example, want to create a branching road where 
  the program takes the proper branch based on the situation at hand. This is called conditional execution.
*/

let five = 5;
if (five > 3) {
  console.log(true);
}

if (1 + 1 == 2) console.log("It's true");

let age = 18;
if (age >= 18) {
  console.log("You are of legal age");
}
else {
  console.log("You aren't of legal age");
}

if (age < 18) {
  console.log("You are too young");
}
else if (age > 18 && age < 60) {
  console.log("You are an adult");
}
else {
  console.log("You are an older person")
}

/* 
  While an Do loops
  - What we need is a way to run a piece of code multiple times. This form of control flow is called a loop.
  - Looping control flow allows us to go back to some point in the program where we were before and repeat 
  it with our current program
  state.
*/

let number = 0;
while (number < 10) {
  console.log(number);
  number++;
}

let result = 1;
let counter = 0;
while (counter < 10) {
result = result * 2;
counter = counter + 1;
}
console.log(result);

/*
  - A do loop is a control structure similar to a while loop. It differs only on one point: a do loop 
  always executes its body at least once, and it starts testing whether it should stop only after that 
  first execution.
*/

let control = false;
do {
  console.log("Welcome");
  control = true
} while (!control)

/*
  Identing code
  - The role of this indentation inside blocks is to make the structure of the code stand out to human readers.
  - The important thing is that each new block adds the same amount of space.
*/

if (false != true) {
  console.log("That makes sense.");
  if (1 < 2) {
    console.log("No surprise there.");
  }
}

/*
  For loops
  - Many loops follow the pattern shown in the while examples. First a “counter” binding is created to 
  track the progress of the loop. Then comes a while loop, usually with a test expression that checks 
  whether the counter has reached its end value. At the end of the loop body, the counter is updated to 
  track progress.
*/

for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}

/* 
  Breaking out of a loop
  - Having the looping condition produce false is not the only way a loop can finish. The break statement
  has the effect of immediately jumping out of the enclosing loop.
  - The continue statement is used to skip the current iteration of the loop and proceed with the next iteration. 
*/

for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
   console.log(current);
    break;
  }
}

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

/*
  Updating bindings succinctly
  - Especially when looping, a program often needs to “update” a binding to hold a value based on that 
  binding’s previous value.
    counter = counter + 1;
  JavaScript provides a shortcut for this:
    counter += 1;
  - Similar shortcuts work for many other operators, such as result *= 2 to double result or counter -= 1 
  to count downward.
  - For counter += 1 and counter -= 1, there are even shorter equivalents: counter++ and counter--.
*/

// Dispatching on a value with switch

let weather = "sunny";
switch (weather) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
    break;
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}

/* 
  Capitalization
  Binding names may not contain spaces, yet it is often helpful to use multiple words to clearly 
  describe what the binding represents. These are pretty much your choices for writing a binding 
  name with several words in it:
    fuzzylittleturtle
    fuzzy_little_turtle
    FuzzyLittleTurtle
    fuzzyLittleTurtle*
*/