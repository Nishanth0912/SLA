function myFunction(){
    let text
    if (document.getElementById("id1").validity.rangeOverflow) {
        text= "value too large";
    }else{
        text = "Input ok"
    }
    document.getElementById("demo").innerText=text;
}