let fruits = ["apple","orange","banana"];
console.log(fruits);

console.log(fruits[0]);

// 1.push

fruits.push("fig");
console.log(fruits);

// - Purpose: Adds one or more elements to the end of the array. 
// - Returns: The new length of the array. 

// 2.pop

let lastfruit = fruits.pop(); // Removes the last element
console.log(lastfruit); // ['Fig']
console.log(fruits); // ['apple', 'orange', 'banana']

// - Purpose: Removes the last element from the array.
// - Returns: The removed element.  

// 3. UnShift

let firstfruit = fruits.unshift("Tomato");
console.log(firstfruit);
console.log(fruits);

// purpose : add the one or more elements in the start of the array
// returns : the new length of the array

// 4.Shift

firstfruit=fruits.shift();
console.log(firstfruit);
console.log(fruits);

// - Purpose: Removes the first element from the array. 
// - Returns: The removed element. 

// 5.IndexOf

fruits.push("banana");
let index = fruits.indexOf("banana");
console.log(index);

// 6.lastIndex

index=fruits.lastIndexOf("banana")
console.log(index);

// 7. concat

let ar1 =[1,2,3,4];
let ar2 =[5,6,7,8];
// let arr3 =ar1.concat(ar2);

let arr3 = [...ar1,...ar2]
console.log(arr3);


// 8.Includes 

let inc = fruits.includes("apple");
console.log(inc);

// 9. reverse

let rev=arr3.reverse();
console.log(rev);

// 10. joins

let join = fruits.join("-")
console.log(join);
console.log(typeof join);

// 11.slice

let slic = fruits.slice(0,3)
console.log(slic);
console.log(fruits);

// 12.splice

let spli = fruits.splice(3,1,"fig")
console.log(spli);
console.log(fruits);

// 13.arrayIsarray

let arr4 = Array.isArray(join);
let array = Array.isArray([1,2,3,4]);
console.log(array);
console.log(arr4);

// 14.flat

let nestedarray =[1,[2,[3,[4]]]];
console.log(nestedarray);
let newarr=nestedarray.flat(3);
console.log(newarr);