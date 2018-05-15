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

// The even terms in the fibonacci sequence are 2, 8, 34, etc.
// These appear at positions n = 2, 5, 8, etc. 
// This represents the nth term 3n-1

// This function will generate an array of the even nth terms positions
// (not that actual values) from the Fibonacci sequence that we need
function threeNPlusOneGenerator (num) {
    const sequence = [];

    let i = 2;
    while (sequence.length<num){
        sequence.push(i);
        i+=3
    }

    return sequence;
}


// num is the number of even Fibonacci's that we want to sum
function sumOfEvenFibonacci (num) {
    
    arr = threeNPlusOneGenerator(num);

    // We will find the corresponding fibonacci term for each
    // n here
    evenFibonacciSequence = arr.map( n => fibonacciNthGenerator(n));

    // Then we will add them up
    sumOfEvens = evenFibonacciSequence.reduce( (x,y) => x+y);

    return sumOfEvens
}


// -------------------------------------------------------- //

// Main:

console.log(sumOfEvenFibonacci(10));
// console.log(sumOfEvenFibonacci(15));
// console.log(sumOfEvenFibonacci(100));
