let user_age =[23,25,26,60,72]

let para = document.getElementById("id")

let age = user_age.filter((e)=>{
    return e > 25;
})

para.innerText = ` the age above 25 are : ${age}`;

let names =['nishanth','naveen','kadhirvel','rashid'];

let para1 = document.getElementById("id1")

let capital = names.map(names => names.toUpperCase())

para1.innerText = `Capitalized Names : ${capital}`;

let para2 =document.getElementById("id2")

let double_age = user_age.map(e => e*2).filter(e => e>50)

para2.innerText = `Doubled Age : ${double_age}`

let para3 =document.getElementById("id3")

let products = [
  { name: "Laptop", price: 900 },
  { name: "Mouse", price: 25 },
  { name: "Monitor", price: 300 }
];

let filtered_price = products.filter(p => p.price>100).map(n => n.name)

para3.innerText= `filtered by price : ${filtered_price}`