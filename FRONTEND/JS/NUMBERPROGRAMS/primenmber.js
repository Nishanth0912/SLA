let a = [1,2,3,4,2]
let b = []
let c = []

for(let i=0;i<a.length;i++){
    for(let j=1;j<a.length;j++){
        if(a[i] == a[j]){
            a[j]+=0;
        }
    }
}

for(let i=0;i<a.length;i++){

}