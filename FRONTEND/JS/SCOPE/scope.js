// function scoped

let a =10;

function add(){
    console.log(a); // 10
}

add();
console.log(a); // 10


// local scoped

function sub(){
    let b=10;
    console.log(b); // 10
}
// console.log(b); // error


// block level
{
    const h =10;
    console.log(h);
}

console.log(typeof h);

{
    let z =30;
}
console.log(typeof z);

{
    var y = 30;
}
console.log(typeof y);