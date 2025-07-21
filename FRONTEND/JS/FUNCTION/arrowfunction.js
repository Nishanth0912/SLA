console.log("**********Normal Fucntion************"); 
console.log("1. Normal Function without parameter");
// 1. Traditional Function
function sla1(){
    console.log("Welcome to SLA");
}
sla1();

function even1(a){
   if(a%2==0){
    console.log("even");
   }
   else{
    console.log("odd");
   }
}

even1(2);


console.log("**********Arrow Fucntion************"); 

console.log(" => Big Arrow");

console.log(" -> small Arrow");

// 2. Arrow Function without parameter
console.log("2. Arrow Function without parameter");
const sla =() =>{
   console.log("Welcome to SLA");
}
sla(); // function call




// 2. Arrow Function with parameter
console.log("2. Arrow Function with parameter");
 
let add =(a,b) => a+b;
console.log(add(1,17));

let even =(a) => {

    if (a%2==0) {
   
    console.log("even");
}
else{
    console.log("Not a Even");
}
}
even(4);

// another method

let even2 = (a) => a%2==0?even:odd;
console.log(even2(18));

// 2. Arrow Function with three parameter
console.log("2. Arrow Function with three parameter");
let a = (ab,bc,ca) => ab+bc+ca
console.log(a(1,2,3));

let another = (x,y) =>  x+y+50

console.log(another(10,20));

