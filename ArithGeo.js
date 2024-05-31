function ArithGeo(arr) {
    var isArth = true;
    var isGeo = true;
    diff = arr[1] - arr[0];
    console.log(diff);

    for (var i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== diff) {
            return "Geo";
        }
        else {
            if (arr[i] / arr[i - 1] !== diff) {
                return "Arth";
            }
        }
    }
    return -1
}


console.log(ArithGeo([2, 6, 18, 54]))