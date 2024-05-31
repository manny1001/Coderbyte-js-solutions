/* const numbers = [1, 2, 3, 4, 5];

// Reducer function to sum the elements
const sum = numbers.reduce((accumulator, currentValue) => {
    console.log(accumulator, currentValue)
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15 */

/* const arrayOfArrays = [[1, 2], [3, 4], [5, 6]];

// Reducer function to flatten the array
const flattened = arrayOfArrays.reduce((accumulator, currentValue) => {
    console.log(accumulator, currentValue)
  return accumulator.concat(currentValue);
}, []);

console.log(flattened); // Output: [1, 2, 3, 4, 5, 6] */

const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];

// Reducer function to count occurrences
const countOccurrences = fruits.reduce((accumulator, currentValue) => {
    /* console.log(accumulator,accumulator[currentValue], currentValue) */

    if (accumulator[currentValue]) {
        accumulator[currentValue]++;
    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator;
}, {});

console.log(countOccurrences);
// Output: { apple: 2, banana: 3, orange: 2 }
