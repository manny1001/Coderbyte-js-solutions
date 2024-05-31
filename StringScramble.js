function StringScramble(str1, str2) {
    const count = {};

    str2.split('').forEach((c) => {
        console.log(c);
        count[c] = count[c] ? count[c]+=1 : 1;
    })
    console.log(count)

    str1.split('').forEach((c) => {
        count[c] && count[c]--;
        console.log(count[c] , count[c]--)

    });

    return Object.keys(count).every((key) => count[key] === 0);
}
let str1 = "rkqodlw";
let str2 = "world";
console.log(StringScramble(str1, str2))