let num=2;
let arr= [1, 2, 3, 4, 5, 6, 2, 3];

for(let i=0; i<arr.length; i++){
    if(arr[i]===num){
        arr.splice(i, 1);
    }
}
console.log(arr);


let number=2898378;
let counter=0;
let copy=number;
while(copy>0){
    copy=Math.floor(copy/10);
    counter++;
}
console.log(counter);


let num1=12345;
let sum=0;

while(num1>0){
    let digit=num1%10;
    sum+=digit;
    num1=Math.floor(num1/10);
    
}
console.log(sum)


let fac=5;
let mul=1;
// while(fac>0){
//     mul*=fac;
//     fac--;
// }
// console.log(mul);
for(let i=1; i<=fac; i++){
    mul*=i;
}
console.log(mul);


let arr4=[2,3,4,1,3,10,9,40,3,4,5,6,7,8,9];
let max=0;
for(let i=0; i<arr4.length; i++){
    if(max<arr4[i]){
        max=arr4[i];
    }
}
console.log(max);