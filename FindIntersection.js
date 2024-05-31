function FindIntersection(strArr) {
    const list1 = strArr[0].split(", ").map(Number);
    const list2 = strArr[1].split(", ").map(Number);
    let intersection = [];
    for (var i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j]) {
                intersection.push(list1[i]);
                break;
            }
        }
    }
    // If intersection list is empty, return "false"
    if (intersection.length === 0) {
        return "false";
    }

    // Join the intersection list into a comma-separated string
    return intersection.join(',');

}

var array = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
// keep this function call here
console.log(FindIntersection(array));

