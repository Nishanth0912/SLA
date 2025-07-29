let result = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("Done!")
        },2000)
    })
}
let getResult = async () =>{
    try{
    let message = await result();
   console.log(message);
}catch(error){
    console.log("Error");
}
}
getResult()