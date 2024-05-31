function RunLength(str) {
    var output = '';
    while (str.length > 0) {
        var current = new RegExp(str[0] + '+');
        console.log(current);
        var length = str.match(current).toString().split('').length;
        /* console.log(str.match(current).toString()); */
        console.log(str.match(current).toString().length)
        output += length.toString() + str.match(current)[0][0];
        /* console.log(output); */
        //replace part of a string that matches ano condition
        // .replace() + .match() 
        str = str.replace(str.match(current)[0], '');
        /*   console.log(str); */
    }

    return output;
}

var str = "aabbcde";

console.log(RunLength(str))