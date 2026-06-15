// let h1=document.querySelector('h1');

// function changeColor(color,delay,nextColorChange){
//     setTimeout(() => {
//         h1.style.color=color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red",1000,()=>{changeColor("orange",1000,()=>{changeColor("green",1000)})});


let h1=document.querySelector('h1');

function changeColor(color,delay){
    return new Promise((reslove,reject)=>{
        setTimeout(() => {
            h1.style.color=color;
            reslove("change color");
        }, delay);
    });
}

changeColor("red",1000).then(()=>{
    console.log("red color was completed");
    return changeColor("orange",1000);
}).then(()=>{
    console.log("orange color was completed");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("green color was completed");
}).catch(()=>{
    console.log("error")
})