let demo =document.getElementsByClassName("box");
demo[0].innerHTML ="<h1>Hii this is from dom</h1>"

document.getElementsByClassName("box")[1].innerText= "Hii";

let s=document.getElementsByClassName("box");
console.log(s[0].innerHTML);
console.log(demo[1].innerText);

let st = document.getElementsByClassName("box-1");
st[0].style.color="red";
// st[0].style.width="100%";
// st[0].style.height="100vh";
st[0].style.backgroundColor="blue";
console.log(st[0].innerHTML);


let b1 = document.getElementsByClassName("box");
console.log(b1[0].classList); 
b1[0].classList.add("boxy");
b1[0].classList.add("boxy1");
b1[0].classList.remove("boxy1")
// b1[0].classList.replace("boxy")

let b2 = document.createElement("div");
b2.innerText = `<h2>This is div</h2>`
console.log(b2.innerText);
b2.classList.add("circle");
console.log(b2.classList);

b1[0].after(b2);

let adding = document.querySelector("#id");

let sub = ["html","css","js","react"]

sub.map((e)=>{
    let li=document.createElement("li");
    li.innerText=e;
    adding.append(li)
})

let head = document.getElementsByTagName("th");
head[1].innerText = `Marks`;

// Get all <td> elements once
let td = document.getElementsByTagName("td");

// Insert marks
td[1].innerText = "99";  // Tamil
td[3].innerText = "95";  // English
td[5].innerText = "89";  // Maths
td[7].innerText = "97";  // Science
td[9].innerText = "94";  // Social

// Get values and convert to numbers
let t = Number(td[1].innerText);
let e = Number(td[3].innerText);
let m = Number(td[5].innerText);
let sn = Number(td[7].innerText);
let so = Number(td[9].innerText);

// Calculate total
let total = t + e + m + sn + so;

// Display total in td[11]
td[11].innerText = total;

let table = document.getElementsByTagName("table")[0];
let btn = document.createElement("button");
btn.classList.add("button");
btn.innerText="Average";
table.after(btn);

let avg = total / 5;

let re = [t,e,m,sn,so];

let result="pass";

btn.addEventListener("click",()=>{
 let div= document.createElement("div");
 btn.after(div)
//  div.innerText =avg;
 let p1 = document.createElement("p");
 let p2 = document.createElement("p");


for(let i=0;i<re.length;i++)
{
    if(result[i]<35){
        result="fail"
        break;
    }
}

p1.innerText= `Average : ${avg} `;
p2.innerText = `Result : ${result} `;
div.append(p1);
div.append(p2);


})








