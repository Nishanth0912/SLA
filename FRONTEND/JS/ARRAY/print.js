let currentindex=0;

function colors(){
   
    let colors =["red","blue","green","yellow"]
if(currentindex<colors.length){
    document.getElementById("result").innerHTML=colors[currentindex];
    currentindex++;
}
else{
    document.getElementById("result").innerHTML="no more colors"
}
}
