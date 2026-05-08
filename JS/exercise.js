// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array.
// let num=[1,2,3,4,5];
// let sum=num.reduce((s,el)=>(s+el));
// console.log(sum)
// let avg=sum/num.length;
// console.log(avg)

// let square=num.map((el)=>el*el);
// console.log(square)



// Qs2. Create a new array using the map function whose each element is equal to the
// original element plus 5. 
// let n=[-2,3,4,5,3];
// let mult=n.map((el)=>(el+5));
// console.log(mult)


// s3. Create a new array whose elements are in uppercase of words present in the
// original array

let names=["waqas","kaleem","tanveer","ashfaq"];
let upper=names.map((el)=>{
    return el.toUpperCase();
});
console.log(upper)

