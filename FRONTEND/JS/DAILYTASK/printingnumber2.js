console.log("\n printing numbers reverse from 10 to 1");

console.log("\n ************* Using For Loop **************");
//1. for loop

for (let i = 10; i >= 1; i--) {
    if (i % 5 == 0 && i % 2 == 0) {
        console.log("The Number which are divisible by 5 and also a even numbers from 10 to 1 is " + i);
    }
    else if (i % 5 == 0) {
        console.log("The Number which are divisible by 5 from 10 to 1 is " + i);
    }
    else if (i % 2 == 0) {
        console.log("The Even Numbers which are present from 10 to 1 is " + i);
    } else {
        console.log("The Odd Numbers which are present from 10 to 1 is " + i);
    }
}

console.log("\n\n ************ while loop *************");
// 2. while loop

let j = 10;
while (j >= 1) {
    if (j % 5 == 0 && j % 2 == 0) {
        console.log("The Number which are divisible by 5 and also a even numbers from 10 to 1 is " + j);
    }
    else if (j % 5 == 0) {
        console.log("The Number which are divisible by 5 from 10 to 1 is " + j);
    }
    else if (j % 2 == 0) {
        console.log("The Even Numbers which are present from 10 to 1 is " + j);
    } else {
        console.log("The Odd Numbers which are present from 10 to 1 is " + j);
    }
    j--;
}

console.log("\n\n ************ do while loop *************");
// 3. Do While loop
let k = 10;
do {
    if (k % 5 == 0 && k % 2 == 0) {
        console.log("The Number which are divisible by 5 and also a even numbers from 10 to 1 is " + k);
    }
    else if (k % 5 == 0) {
        console.log("The Number which are divisible by 5 from 10 to 1 is " + k);
    }
    else if (k % 2 == 0) {
        console.log("The Even Numbers which are present from 10 to 1 is " + k);
    } else {
        console.log("The Odd Numbers which are present from 10 to 1 is " + k);
    }
    k--;
} while (k >= 1);