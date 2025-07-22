let rupees = [10,20,30,40];
let h=document.getElementsByTagName("h1")


rupees.forEach(value =>{
    let p1=document.createElement("p");
    p1.classList.add("p1");
    p1.innerText=value;
    document.body.append(p1)

});


rupees.forEach( (items,index) =>{
    console.log(index +":"+ items);
})

let obj={
    name:"nishanth",ph_no:9698976543
}
for(let key in obj){
    console.log(key,obj[key]);
}

for(let ob of rupees){
    
}
