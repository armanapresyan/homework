//1. For a given number calculate the sum of its digits.

let number = +prompt("say namber?");
let sum = 0;

while (number !== 0) {
  sum += number % 10;
  number = (number - (number % 10)) / 10;
}
console.log(sum);

//2. Given three sides of a triangle. Check whether the triangle is valid or not. Print “yes” if it is valid
//  and “no&quot; otherwise. (Triangle is valid if the sum of its two sides are greater than the third side).

let a = +prompt("say number?");
let b = +prompt("say number?");
let c = +prompt("say number?");

if (a < b + c && b < a + c && c < a + b) {
  console.log("Yes");
} else {
  console.log("No");
}

//3.Given a number print its digits count.

let number = +prompt("say namber?");
let q = 0;
while (number !== 0) {
  number = (number - (number % 10)) / 10;
  q++;
}
console.log(q);

//4. Count numbers of digit 9 in a number.

let number = +prompt("say number?");
let a = 0;
let q = 0;
while (number !== 0) {
  a = number % 10;
  number = (number - (number % 10)) / 10;
  if (a === 9) {
    q++;
  }
}
console.log(q);

//5.Given a positive number. Print it in reverse order.

let number = +prompt("say number?");
let a = 0;
let rev = 0;

while (number !== 0) {
  a = number % 10;
  rev = rev * 10 + a;
  number = (number - (number % 10)) / 10;
}
console.log(rev);
