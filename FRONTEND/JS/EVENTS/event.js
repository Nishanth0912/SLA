
function changetext(){
    let btn = document.getElementById("btn");
    let p=document.getElementById("id")
    p.innerText = Date();
}

let btn1 =document.getElementById("btn1");
// btn1.addEventListener("click",()=>{
//     let body=document.getElementsByTagName("body")[0]
//     if (body.style.backgroundColor === "red") {
//         body.style.backgroundColor = "white";
//       } else {
//         body.style.backgroundColor = "red";
//       }
// })

let box = document.getElementById("box");

  box.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    box.style.backgroundColor = "red";
    console.log("Right-clicked!");
  });