const readline = require("readline");

const rl= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter any number : ",function(number){
    let num=Number(number);
    if (num==0) {
        console.log("The Given Number is Zero");
    }
    else if (num>0) {
        console.log("The Given Number is Positive");
    } else {
        console.log("The Given Number is Negative");
    }
    rl.close();
})

