let fruits = ["apple","Jack Fruit","Chikku"];
fruits.forEach(function(fruits,index){
    console.log(index+":"+fruits);
})

let num =[1,2,3,4]
num.forEach(num =>{
    console.log(num*2);
});

let doubled = num.map(n => n*2);
console.log(doubled);

fruits.forEach((fruits,index) =>{
    console.log(index+":"+fruits);
})

let numbers = [1,2,3,4]
let doub = []
numbers.forEach((n1 =>{
   doub.push(n1*2)
}))

console.log(doub);