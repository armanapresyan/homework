//1. Given an array․ Compute the length of the array. (without using .length)

function lenghtArray(arr) {
  let lenght = 0;
  while (arr[lenght] !== undefined) {
    lenght++;
  }
  return lenght;
}

console.log(lenghtArray([])); 


//2. Given an array of numbers. Print the sum of the elements in array.
 
function sumArray(arr){
    let sum = 0;
    let i = 0;
   while(arr[i] !== undefined){
      sum += arr[i];
      i++
   }
   return sum;
}

console.log(sumArray([])); 
  
 

//3. Given two numbers. Print powers of 2 between that numbers. (without using  Math.pow)
 
function betweenThatNumbers(a, b) {
  let pow = 2;
  while (pow <= b ) {
    if (pow >= a) {
      console.log(pow);
    }
    pow *= 2;
  }
} 

betweenThatNumbers(); 



//4.Given a number as input, insert dashes (-) between each two even numbers.
 
function dashes(number) {
  let numberStr = String(number);
  let result = "";

  for (let i = 0; i < numberStr.length; i++) {
    let previousNumber = Number(numberStr[i]);
    let nextNumber = Number(numberStr[i + 1]);

    if (previousNumber % 2 === 0 && nextNumber % 2 === 0) {
      result += previousNumber + '-';
    }else{
      result += previousNumber;
    }
  }
  return result;
}

console.log(dashes());  

//5.Insert a n positive number. Print the n-st prime number.

function positiveNumber(number) {
  let isPrime;
  let primesFound = 0;
  let numberToCheck = 1;
  debugger;
  while (primesFound < number) {
    numberToCheck++;
    isPrime = true;

    for (let i = 2; i < numberToCheck; i++) {
      if (numberToCheck % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primesFound++;
    }
  }

  return numberToCheck;
}

console.log(positiveNumber()); 
