function fac(num){
    let result=1;
    for(let i=2; i<=num; i++){
        result*=i;
    }
    console.log(result)
}
fac(3)



function prim(num){
    if(num%1===0 && num%num===0){
        console.log("number is prime")
    }
    else{
        console.log("not")
    }
}
prim(4)