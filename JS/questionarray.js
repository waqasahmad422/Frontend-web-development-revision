let numbers=[30,40,80,90,100,20,10];
let mult=numbers.every((num)=>(num%10===0));
console.log(mult)


let min=numbers.reduce((min,el)=>{
    if(min < el){
        return min;
    }
    else{
        return el;
    }
})

console.log(min)