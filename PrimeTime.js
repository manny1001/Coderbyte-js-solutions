function PrimeTime(num) {
    let count = 0;
    for (var i = 1; i <= num; i++) {
        if (count > 2) {
            return false;
        }
        else
            if (num % i === 0) {
                count++;
            }
    }
    return true
}
console.log(PrimeTime(2))


