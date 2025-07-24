
function check(){
    let input = document.getElementById("str").value ;
    let res = document.getElementById("res");
    if (input.substring(4,10) === "script") {
       res.innerText = input.substring(0, 4) + input.substring(10);
    }
    else{
        res.innerText = "Result :"+input.substring(0);
    }
}