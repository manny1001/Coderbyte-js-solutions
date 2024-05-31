//The challenge given to me: "Using the JavaScript language, 
//have the function ArrayAdditionI(arr) take the array of numbers stored in arr and 
//return the string true if any combination of numbers in the array can be added up to 
//equal the largest number in the array, otherwise return the string false. 
//For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23.



function ArrayAdittion(array) {
    //sort arry
    let sortedArray = array.sort((a, b) => { return a - b });
    //pop highest number
    let highestValue = sortedArray.pop();
    RecursiveCheck(sortedArray, highestValue)

    function RecursiveCheck(array, highestValue) {
        // the base case when array empty.
        if (array.length === 0) {
            return highestValue === 0;
        }
        var firstNum = array[0];
        // for every recursion take away one number(the first one in this case).
        array = array.slice(1);
        // first check if numbers sum up to largest num if not, check if removing numbers adds up to largest num.
        return RecursiveCheck(array, highestValue) || RecursiveCheck(array, highestValue - firstNum);
    }
    return RecursiveCheck(array, highestValue);
}
var array = [4, 6, 23, 10, 1, 3];
console.log(ArrayAdittion(array))