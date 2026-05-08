let arr=[2,4,6,7];

// every concept like logic AND 
let ev=arr.every((el)=>{
    return el%2===0;
})

console.log(ev)



// some concept like logic OR 
let num=[1,3,5];
let so=num.some((el)=>(el%2==0));
console.log(so)