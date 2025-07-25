// let a =10;
// function outer(){
//     console.log(a);
//     console.log(`im from outer`);
//     let inner = () =>{
//         // console.log(a);
//         console.log(`im from inner`);
//     }
//     return inner
// }

// let fun =outer();
// fun();

function counter(){
    let count =0;
    console.log(`outer`,count);

    return function (){
        count++;
        console.log(`inner`,count);
    }
}
let fun=counter()
fun()
fun()