let arr=[1,2,3,4,3,2,2,3,5,6,6,6,12,32,23,45,67,89,90];
// spread operator
let arr2=[...arr];
console.log(arr2)   


function spread(a,b,c){
    console.log(a,b,c);
}   
spread(...arr)



let arrcopy=[...arr];
console.log(arrcopy)




const data={
    name:"John",
    email: "waqas@example.com"
}
const copydata={...data,id:1};
console.log(copydata)


g