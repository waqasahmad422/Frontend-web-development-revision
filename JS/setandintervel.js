// Set time out function in javascript 

let name="waqas ahmad shah";

let t1=setTimeout(()=>{
    console.log(`My name is ${name}`)
},2000)


console.log(`${t1}`);


let id1=setInterval(() => {
    console.log("Hello world")
}, 2000);

console.log(id1)


clearInterval(id1)