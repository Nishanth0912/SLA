let str = "MALAYALAM";
let temp = str;
let palindrome = "";

for (let i = str.length - 1; i >= 0; i--) {
    palindrome += str[i];
}

if (temp === palindrome) {
    console.log("Palindrome");
} else {
    console.log("Not a palindrome");
}