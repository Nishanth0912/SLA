

function multiply() {
    let input1 = Number(document.getElementById("num1").value);
    let input2 = Number(document.getElementById("num2").value);
    let res = input1 * input2;
    document.getElementById("id1").innerText = `The multiplication of ${input1} and ${input2} is ${res}`;
}

function division() {
    let input1 = Number(document.getElementById("num1").value);
    let input2 = Number(document.getElementById("num2").value);
    let res = input1 / input2;
    document.getElementById("id1").innerText = `The division of ${input1} and ${input2} is ${res}`;
}
