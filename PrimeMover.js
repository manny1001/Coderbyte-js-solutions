function PrimeMover(num) {
    primes = [];
    for (var i = 1; primes.length <= num; i++) {
        if (isPrime(i)) {
            primes.push(i)
        }
    }
    console.log(primes)
    return primes[primes.length - 1];
}

function isPrime(number) {
    for (var j = 2; j < number; j++) {
        if (number % j == 0) {
            return false;
        }
    }
    return true;
}
console.log(PrimeMover(17))