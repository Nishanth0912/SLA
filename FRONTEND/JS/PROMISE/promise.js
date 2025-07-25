
function toss(){
     return new Promise((resolve,reject) =>{
        let gen = Math.floor(Math.random()*2);
        if (gen == 0) {
           resolve()
        }else{
         reject()
        }
     }).then(()=>{console.log(`you passed the exam`)}).catch(()=>{console.log(`you will be failed`)})
}

toss()


let obj = {
    name : "nishanth",
    age : 24
}

let result =Object.entries(obj)
console.log(result);

let re =Object.fromEntries(result)
console.log(re);