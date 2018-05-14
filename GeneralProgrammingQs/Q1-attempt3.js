var Big = require('./big.js');

// Recursive function that will find the nth value of the Fibonacci sequence
// for small values of n
function fibonacciNthGeneratorSmall (n) {
    if (n == 0) {
        return 1;
    } else if (n == 1) {
        return 1;
    } else {
        return fibonacciNthGenerator (n-1) + fibonacciNthGenerator (n-2);
    }
}

// Recursive function that will find the nth value of the Fibonacci sequence
// for larger values of n, according to the theorem.
function fibonacciNthGeneratorLarge (n) {
    five = new Big(5);
    phi = five.sqrt().plus(1).div(2);

    const firstTerm = phi.pow(n).div(five.sqrt()).round();
    const secondTerm = phi.pow(n-1).div(five.sqrt()).round();    

    z = firstTerm.plus(secondTerm);  

    return z;
}

// let x = the 3n+1 term of a Fibonacci sequence 
// where n is the number of even terms we want to add up

// The sum of the evens up to n of a Fibonacci sequence corresponds to 
// (x-1)/2

function sumOfEvenFibonacci (n) {
    if( n < 10 ) {
        const x = fibonacciNthGeneratorSmall(3*n+1);
        const sumOfEvens = (x-1)/2;

        return sumOfEvens
    } else {
        const x = fibonacciNthGeneratorLarge(3*n+1);
        const sumOfEvens = x.minus(1).div(2);

        return sumOfEvens.toString();
    }
}

// -------------------------------------------------------- //

// Main:

console.log(sumOfEvenFibonacci(100));
console.log(sumOfEvenFibonacci(15));
// console.log(sumOfEvenFibonacci(50));
