// I decided to take a different approach
// instead of a general program for the sum of any amount of 
// even numbers. I will only focus on getting the firs 100.

var Big = require('./big.js');

// According to the theorem we need the 3n+1th term.
const nthValueForTheorem = (3*100)+1;

function fibonacci301stTerm () {
    five = new Big(5);
    phi = five.sqrt().plus(1).div(2);

    const firstTerm = phi.pow(nthValueForTheorem).div(five.sqrt()).round();
    const secondTerm = phi.pow(nthValueForTheorem-1).div(five.sqrt()).round();    

    z = firstTerm.plus(secondTerm);  

    return z;
}

// let x = the 3n+1 term of a Fibonacci sequence 
// where n is the number of even terms we want to add up

// The sum of the evens up to n of a Fibonacci sequence corresponds to 
// (x-1)/2

function sumOfHundredEvenFibonacci () {
       
    const x = fibonacci301stTerm();
    const sum = x.minus(1).div(2);

    return sum.toString();
    
}

// -------------------------------------------------------- //

// Main:

console.log(sumOfHundredEvenFibonacci());
