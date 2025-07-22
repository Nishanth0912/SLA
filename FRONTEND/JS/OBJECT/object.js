let person ={
    name:"Ram",
    age:"27",
    isStudent:true
};
console.log(person);
console.log(person.name);
console.log(person.age);
person.city="New York";
console.log(person);
console.log(person.city);
console.log(person.isStudent);

// for printing the whole obj

for (let key in person) {
   console.log(key+":"+person[key]);
}

// function inside obj

let user ={
    name : "Nishanth",
    greet: function(){  
        console.log("Hi i'm "+ this.name);
    }
};
user.greet()
// console.log(user.name);


// Array of Objects

let flowers = [
    {name:"Rose",type:"Flowering",color:"red"},
    {name:"Fern",type:"Non-flowering",color:"green"}
];
``
flowers.forEach(flower =>{
    console.log(`${flower.name} is a ${flower.type} plant is usually ${flower.color}`);
})
