function fakePaymenAPI(amount){
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(`Payment of ₹${amount} successful`)
        },2000)
    })
}

async function makePayment(){
    console.log(`processing payment`);
    const msg = await fakePaymenAPI(500);
    console.log(msg);
}

makePayment();