//1. Declare 2 variables a and b, such that a > b, and define values for them. Output their
/* 
const a = +prompt("say number");
const b = +prompt("say number");
if (a > b) {
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a / b);
  console.log(a % b);
} else {
  console.log("a n mec chi b ic");
}
 */
//2. Print your name and age in the following format: “My name is ____, I am ____
/* 
let age = 20;
const name1 = "Arman";

console.log("My name is " + name1 + ",I am " + age);
  */

//3. Declare a variable with defined value. Print the last digit of the number.
/* 
let number = +prompt('say number?');
console.log(number % 10); 
 */
//4. Check whether a given number is negative. Print “yes”, if it is negative, print “no”  otherwise.
/* 
 const number = +prompt("say number?");

if (number < 0) {
  console.log("Yes");
} else {
  console.log("No");
}
  */

//5. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.
/* 
const number1 = prompt('say the first number?');
const number2 = prompt('say the second number?');

if (number1 % number2  === 0 || number2 % number1 === 0) {
  console.log("1");
}  else {
  console.log("0");
}
 */

//6. Given any number between 1 and 12. Print the name of the respective month.

/* const month = +prompt("say number");

switch (month) {
  case 1: {
    console.log("January");
    break;
  }
  case 2: {
    console.log("February");
    break;
  }
  case 3: {
    console.log("March");
    break;
  }
  case 4: {
    console.log("April");
    break;
  }
  case 5: {
    console.log("May");
    break;
  }
  case 6: {
    console.log("June");
    break;
  }
  case 7: {
    console.log("July");
    break;
  }
  case 8: {
    console.log("August");
    break;
  }
  case 9: {
    console.log("September");
    break;
  }
  case 10: {
    console.log("October");
    break;
  }
  case 11: {
    console.log("November");
    break;
  }
  case 12: {
    console.log("December");
    break;
  }
  default: {
    console.log("wrong number");
  }
} */

//7. Given three numbers. Find the maximum one.
/* 
let a = +prompt("say number ?");
let b = +prompt("say number ?");
let c = +prompt("say number ?");
let max = a;

if (b > max) {
  max = b;
}

if (c > max) {
  max = c;
}

console.log(max);
   */
