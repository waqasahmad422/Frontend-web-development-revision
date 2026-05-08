let num=[5,6,7,4,3];
let red=num.reduce((res,el)=>(res+el));

console.log(red)
console.log(typeof(red))



let arr=[4,5,5,6,7,8,9,0,9,8,7,90,67,102,100];

let maximum = arr.reduce((max,el)=>{
    if(el>max){
        return el;
    }
    else{
        return max;
    }
});

console.log(maximum)