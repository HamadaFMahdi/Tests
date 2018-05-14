// I had to do some research to work out how to convert between the
// bases. I did NOT look at any code, I promise. Just the Mathematical method
// which I just applied here.

function toBase( num, base ) {
    ans = [];
    // Here we are making sure that each time we keep taking the remainder
    // until num is less than the base.
    while(num >= base) {
        remainder = num % base;
        ans.unshift(remainder);
        
        // Reassinging num so that it goes back through the loop
        num = Math.floor(num/base)
    }
    // Here we are pushing in the final remaining value of num 
    // after taking the remainder until it goes below base.
    ans.unshift(num);

    // I did not want to resort to a huge for loop with lots of if
    // statements. So since A, B, C ... Z can be represented using 
    // the ASCII Character Set 65, 66, 67, ... 90. You can force
    // 10, 11, 12 etc. to go in line with that by adding 55.

    ans.map((x , index) => {
        if(x >= 10){
            ans[index] += 55;
            ans[index] = String.fromCharCode(ans[index]);
            
        }
    })

    return ans.join("");
}


console.log(toBase(23386545454, 15));

