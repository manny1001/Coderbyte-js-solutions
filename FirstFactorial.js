/* function FirstFactorial(num) {
    var ans = 1;

    for (var i = 1; i <= num; i++) {
        console.log(`${ans} *= ${i}`)
        ans *= i;
    }
    // code goes here  
    return ans;
}

// keep this function call here 
console.log(FirstFactorial(4)); */


//////////////Recursion//////////////
const Factorial = (n) => {
    if(n === 1) return 1;
    return n * Factorial(n-1);
}

// keep this function call here 
console.log(Factorial(4));
