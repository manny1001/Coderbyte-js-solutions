const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate values are ignored
mySet.add(3);
console.log(mySet.has(1)); // true
console.log(mySet.has(4)); // false
////////////////////////////////////////
mySet.delete(2);
console.log(mySet.has(2)); // false
////////////////////////////////////////
for (let item of mySet) {
    console.log(item);
}
// Output:
// 1
// 3
////////////////////////////////////////
console.log(mySet.size); // 2
////////////////////////////////////////
mySet.clear();
console.log(mySet.size); // 
////////////////////////////////////////
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const union = new Set([...setA, ...setB]);
console.log(union); // Set { 1, 2, 3, 4, 5 }
////////////////////////////////////////
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection); // Set { 3 }
////////////////////////////////////////
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log(difference); // Set { 1, 2 }
////////////////////////////////////////
//---Using Sets to Remove Duplicates from an Array---//
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
////////////////////////////////////////
//---Finding Common Elements in Arrays---//
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const set1 = new Set(array1);
const set2 = new Set(array2);
const commonElements = [...set1].filter(item => set2.has(item));
console.log(commonElements); // [4, 5]
////////////////////////////////////////
//---Converting a Set to an Array---//
const set3 = new Set(array1);
Array.from(set3)
////////////////////////////////////////


