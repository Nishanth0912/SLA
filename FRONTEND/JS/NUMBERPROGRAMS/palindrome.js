// let str ="123";
// let temp =str;
// let con ="";

// for(let i=str.length-1;i>=0;i--){
//     con+=str[i];
// }
// if (temp==con) {
//     console.log("Palindrome");
// }else{
//     console.log("Not a Palindrome");
// }

let str ='MALAYALAM'
let res=str.split("").reverse().join("")
console.log(res);
if (str===res) {
    console.log(`palindrome`);
}else{
    console.log(`not a palindrome`);
}