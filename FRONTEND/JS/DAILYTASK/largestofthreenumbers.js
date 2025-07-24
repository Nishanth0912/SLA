function largest(){
    let input1 = Number(document.getElementById("num1").value);
    let input2 = Number(document.getElementById("num2").value);
    let input3 = Number(document.getElementById("num3").value);
    
    if (input1 > input2 && input1 > input3) {
        document.getElementById("id1").innerText = `The Largest Numbers Among ${input1},${input2},${input3} is ${input1}`
    }
    else if(input2>input1 && input2> input3){
        document.getElementById("id1").innerText = `The Largest Numbers Among ${input1},${input2},${input3} is ${input2}`
    }
    else{
        document.getElementById("id1").innerText = `The Largest Numbers Among ${input1},${input2},${input3} is ${input3}`
    }

}

function smallest(){
    let input1 = Number(document.getElementById("num1").value);
    let input2 = Number(document.getElementById("num2").value);
    let input3 = Number(document.getElementById("num3").value);
    
    if (input1 < input2 && input1 < input3) {
        document.getElementById("id1").innerText = `The Smallest Numbers Among ${input1},${input2},${input3} is ${input1}`
    }
    else if(input2<input1 && input2< input3){
        document.getElementById("id1").innerText = `The Smallest Numbers Among ${input1},${input2},${input3} is ${input2}`
    }
    else{
        document.getElementById("id1").innerText = `The Smallest Numbers Among ${input1},${input2},${input3} is ${input3}`
    }

}