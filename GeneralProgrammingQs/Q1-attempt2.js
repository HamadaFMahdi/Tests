// Recursive function that will find the nth value of the Fibonacci sequence
function fibonacciNthGenerator (n) {
    if (n == 0) {
        return 1;
    } else if (n == 1) {
        return 1;
    } else {
        return fibonacciNthGenerator (n-1) + fibonacciNthGenerator (n-2);
    }
}


// let x = the 3n+1 term of a Fibonacci sequence 
// where n is the number of even terms we want to add up

// The sum of the evens of a Fibonacci sequence corresponds to 
// (x-1)/2

function sumOfEvenFibonacci (n) {
    // This is what is delaying the program now
    const x = fibonacciNthGenerator(3*n+1);
    const sumOfEvens = (x-1)/2;

    return sumOfEvens
    
}

// -------------------------------------------------------- //

// Main:

console.log(sumOfEvenFibonacci(2));
console.log(sumOfEvenFibonacci(10));
// sumOfEvenFibonacci(15);
// sumOfEvenFibonacci(50);
