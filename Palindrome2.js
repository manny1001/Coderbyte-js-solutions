function PalindromeTwo(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z]+/g, '');
    var rev = str.split('').reverse().join('');
    /* console.log(str, rev); */
    if (rev == str) {
        return "true";
    }
    else {
        return "false";
    }
}
var str = "Anne, I vote more cars race Rome-to-Vienna";
console.log(PalindromeTwo(str));