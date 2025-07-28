
// function toss(){
//      return new Promise((resolve,reject) =>{
//         let gen = Math.floor(Math.random()*2);
//         if (gen == 0) {
//            resolve()
//         }else{
//          reject()
//         }
//      }).then(()=>{console.log(`you passed the exam`)}).catch(()=>{console.log(`you will be failed`)})
// }

// toss()


// let obj = {
//     name : "nishanth",
//     age : 24
// }

// let result =Object.entries(obj)
// console.log(result);

// let re =Object.fromEntries(result)
// console.log(re);

// let sum = (x,y)=>{
//   return new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         let total =x+y;
//         resolve(total)
//     },2000)
//     return total
//   }).then((ans) =>{`ans is :`,total}).catch((err) =>{err})
// }

// sum(1,2)

function check(a){
    return new Promise((resolve,reject) =>{
        let num = a;
        if (num%2==0) {
            resolve("even")
        }else{
            reject("odd")
        }
    }).then((even)=>{console.log(`the given number is`,even)}).catch((odd)=>{console.log(`the given number is`,odd)})
}

check(1)
console.log(`hii`);
check(6)