// async function greet(){
//     throw "weak connection";
//     return "hello!";
// }
// greet().then((result)=>{
//     console.log("promse resolve",result);
// })
// .catch((err)=>{
//     console.log("promise was reject",err);
// })

let h1=document.querySelector('h1');

function colorChange(color,delay){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let num=Math.floor(Math.random()*5)+1;
            if(num>3){
                reject("Promise reject");
            }
            h1.style.color=color;
            console.log(`color changed to ${color}`);
            resolve("change color");  
        }, delay);
    })
}

async function change() {
    try{

        await colorChange("red",1000);
        await colorChange("orange",1000);
        await colorChange("yellow",1000);
        await colorChange("brown",1000);
        await colorChange("green",1000);
    }
    catch(err){
        console.log("error occure",err);
    }

    let a=5;
    console.log(a);
    console.log("the number is",a+5);
    
}

change();