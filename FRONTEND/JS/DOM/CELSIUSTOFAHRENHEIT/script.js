function convert(){
    let cel = Number(document.getElementById("input").value);
    let fah = (cel * 1.8) + 32 ;
    let res = document.getElementById("result");
    res.innerHTML=fah +"°F";
}


