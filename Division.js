function Division(num1, num2) {
    for (var i = num1; i > 0; i--) {
        if (num1 % i == 0 && num2 % i == 0) {
            return i;
        }
    }
}

console.log(Division(16,12))