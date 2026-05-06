let sum=(a,b)=>a+b;
console.log(sum(5,10));

let avg=(a,b)=> (a+b)/2;
console.log(avg(5,10));


let arr=[1,2,3,4,5];
let arrAvg=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    sum/=arr.length;
    return sum;
}   
console.log(arrAvg(arr));



let even=(num)=>{
    if(num%2==0){
        return "even number";
    }
    else{
        return 'odd number';
    }
}
console.log(even(4))


