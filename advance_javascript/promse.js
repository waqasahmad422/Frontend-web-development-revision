// function saveToDb(data,success,failure){
//     let internetSpeed=Math.floor(Math.random()*10);
//     if(internetSpeed>4){
      
//         success();
//     }
//     else{
        
//         failure();
//     }
// }

// saveToDb("user data",()=>{
//     console.log("Data saved successfully");
//     saveToDb("second data",()=>{
//         console.log("Second data saved successfully");
//     },()=>{
//         console.log("Failed to save second data");
//     }); 
// },()=>{
//     console.log("Failed to save data");
// });


function saveToDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10);
        if(internetSpeed>4){
            resolve();
        }
        else{
            reject();
        }
    });
}

let pro=saveToDb("user data");
pro.then(()=>{
    console.log("Data saved successfully");
}).catch(()=>{
    console.log("Failed to save data");
});