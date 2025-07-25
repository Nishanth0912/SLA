let a =18;
console.log(a);
let clear=setTimeout(()=>{
    console.log("rashid");
},2000);

clearTimeout(clear);

let set=setInterval(() => {
    console.log("kohli");
}, 500);

console.log("virat");

clearInterval(set)