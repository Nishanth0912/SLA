let wait = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("Hello!")
        },1000)
    })
}

let waitDemo =async () =>{
try{
    let message = await wait();
    console.log(message);
}catch(err){
    console.log("error");
}
}

waitDemo();