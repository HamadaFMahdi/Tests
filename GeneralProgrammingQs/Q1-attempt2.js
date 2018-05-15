// Here I have implented the two theorems. Please check the readme.md

// Recursive function that will find the nth value of the Fibonacci sequence
// for small n (n < 10).
function fibonacciNthGeneratorSmall (n) {
    if (n == 0) {
        return 1;
    } else if (n == 1) {
        return 1;
    } else {
        return fibonacciNthGeneratorSmall (n-1) + fibonacciNthGeneratorSmall (n-2);
    }
}

// Recursive function that will find the nth value of the Fibonacci sequence
// for large n (n >= 10).
function fibonacciNthGeneratorLarge (n) {
    const phi = (1+Math.sqrt(5))/2;
    const firstTerm = Math.round(Math.pow(phi, n)/Math.sqrt(5));
    const secondTerm = Math.round(Math.pow(phi, n-1)/Math.sqrt(5));

    return firstTerm+secondTerm;
}

// let x = the 3n+1 term of a Fibonacci sequence 
// where n is the number of even terms we want to add up

// The sum of the evens of a Fibonacci sequence corresponds to 
// (x-1)/2

function sumOfEvenFibonacci (n) {
    if( n < 10 ) {

        const x = fibonacciNthGeneratorSmall(3*n+1);
        const sumOfEvens = (x-1)/2;

        return sumOfEvens
    } else {

        // This is what is delaying the program now
        const x = fibonacciNthGeneratorLarge(3*n+1);
        const sumOfEvens = (x-1)/2;

        return sumOfEvens
    }
}

// --------------------------------------------------------------- //

// Main:

console.log(sumOfEvenFibonacci(10));
// console.log(sumOfEvenFibonacci(15));
// console.log(sumOfEvenFibonacci(100));

