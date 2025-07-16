console.log("\n\n ************ for loop *************");
// 1. for loop

let i;
for (i = 1; i <= 10; i++) {
    if (i % 5 == 0 && i % 2 == 0) {
        console.log("The Number which are divisible by 5 and also a even numbers from 1 to 10 is " + i);
    }
    else if (i % 5 == 0) {
        console.log("The Number which are divisible by 5 from 1 to 10 is " + i);
    }
    else if (i % 2 == 0) {
        console.log("The Even Numbers which are present from 1 to 10 is " + i);
    } else {
        console.log("The Odd Numbers which are present from 1 to 10 is " + i);
    }
}
console.log("\n\n ************ while loop *************");
// 2. while loop

let j = 1;
while (j <= 10) {

    if (j % 5 == 0 && j % 2 == 0) {
        console.log("The Number which are divisible by 5 and also a even numbers from 1 to 10 is " + j);
    }
    else if (j % 5 == 0) {
        console.log("The Number which are divisible by 5 from 1 to 10 is " + j);
    }
    else if (j % 2 == 0) {
        console.log("The Even Numbers which are present from 1 to 10 is " + j);
    } else {
        console.log("The Odd Numbers which are present from 1 to 10 is " + j);
    }
    j++;
}

console.log("\n\n ************ do while loop *************");
// 3. Do While loop
let k = 1;
do {
    if (k % 5 == 0 && k % 2 == 0) {
        console.log("The Number which are divisible by 5 and also a even numbers from 1 to 10 is " + k);
    }
    else if (k % 5 == 0) {
        console.log("The Number which are divisible by 5 from 10 to 1 is " + k);
    }
    else if (k % 2 == 0) {
        console.log("The Even Numbers which are present from 1 to 10 is " + k);
    } else {
        console.log("The Odd Numbers which are present from 1 to 10 is " + k);
    }
    k++;
} while (k <= 10);