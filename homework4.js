//1.  Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced elements starting from a to b spaced by step.
function stepArr(a, b, step) {
  let arr = [];

  for (let i = a; i <= b; i += step) {
    arr.push(i);
  }

  console.log(arr);
}

stepArr(1, 5, 0.5); 
//2. Given a string and a symbol. Find the number of occurrences of the symbol in the string.

function findNumberSymbol(string, a) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === a) {
      count++;
    }
  }

  return count;
}

console.log(findNumberSymbol("dsscfd cdsftatttttttstt", "t"));

//3. Given a string. Check whether the string is palindrome or not. 

 function checkPalidrom(string) {
  let len = string.length;

  for (let i = 0; i <= string.length / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return "No";
    }
  }

  return "Yes";
}

console.log(checkPalidrom("Asddsa")); 

//4. Given an array of numbers. Find the maximum element in array.
function maxElementArr(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  
  return max;
}

console.log(maxElementArr([2, 3, 4, 5, 6, 7, 45])); 

//5. Given an array. Create the array which elements are products between two neighbours.

function neighbours(arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length - 1; i++) {
    arr1.push(arr[i] * arr[i + 1]);
  }
  return arr1;
}

console.log(neighbours([3, 7, 12, 5, 20, 0]));

//6. Given a string and symbols. Change first symbol by the second one in the string.

function replaceSymbol(str, a, b) {
  while (str.indexOf(a) !== -1) {
    str = str.replace(a, b);
  }

  return str;
}

console.log(replaceSymbol("abd sdlkjf lsdlfasdmlka", "a", "_")); 

//7. Print the following number pattern:

let a = +prompt("say number");
let result = "";
let row = "";

for (let i = 1; i <= a; i++) {
  row += i;
  result += row + "\n";
}

let pos;
for (let i = a; i >= 1; i--) {
  pos = row.lastIndexOf(i);
  row = row.slice(0, pos);
  result += row + "\n";
  
}

console.log(result);


