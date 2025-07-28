let counter=document.getElementById("counter");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let count = 0;
let intervalId = null;
start.addEventListener("click",()=>{
  if (intervalId !== null) {
    return
  }
  intervalId = setInterval(()=>{
    const colors = ["red","blue","green","yellow","orange","brown"]
    counter.style.color = colors[Math.floor(Math.random()*colors.length)];
    count++;
    counter.innerText = `count :`+count;
  },1000)
})

stop.addEventListener("click",()=>{
    clearInterval(intervalId)
    intervalId=null;
})

reset.addEventListener("click",()=>{
    clearInterval(intervalId)
    intervalId=null;
    count=0
    counter.innerText=`count :`+count;
})
