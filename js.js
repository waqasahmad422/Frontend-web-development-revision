// function greet(name,callback){
//     console.log(`Hello, ${name}!`);
//     callback();
// }

// greet("Ali", ()=>{
//     console.log("welcome!")
// });

// function add(a,b,callback){
//     const sum = a+b;
//     callback(sum);
// }

// add(5,1,(result)=>{
//     console.log(result);
// })

// function showMessage(callback){
//     console.log("Loading...")
//     setTimeout(() => {
//         callback("done!");
//     }, 2000);
// }
// showMessage((message)=>{
//     console.log(message);
// });

// function getUser(callback){
//     setTimeout(() => {
//         const user = {name:"Ali",age:30};

//         callback(user);
//     }, 1000);
// }
// getUser((user)=>{
//     console.log(user);
// });

// function multiply(a,b,callback){
//     let multi=a*b;
//     callback(multi);
// }
// multiply(4,5,(multi)=>{
//     console.log(multi);
// })

// function wakeUp(brushTeeth) {
//   setTimeout(() => {
//     console.log("Waking up");
//     brushTeeth();
//   }, 1000);
// }
// function brushTeeth(takeShower) {
//     setTimeout(() => {

//         console.log("Brush teeth");
//         takeShower();
//     }, 1000);
// }

// function takeShower(breakfast) {
//   setTimeout(() => {
//     console.log("Take shower");
//     breakfast();
//   }, 1000);
// }

// function breakfast(goToSchool) {
//   setTimeout(() => {
//     console.log("breakfast");
//     goToSchool();
//   }, 1000);
// }
// function goToSchool(callback) {
//     setTimeout(() => {

//         console.log("Going to school");
//         callback();
//     }, 1000);
// }

// wakeUp(() => {
//   brushTeeth(() => {
//     takeShower(() => {
//       breakfast(() => {
//         goToSchool(() => {
//           console.log("Done!");
//         });
//       });
//     });
//   });
// });

// task 2
function receiveOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Order Received");
      resolve();
    }, 1000);
  });
}
function preparePizza() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Preparing Pizza");
      resolve();
    }, 1000);
  });
}
function bakePizza() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Baking Pizza");
      resolve();
    }, 1000);
  });
}
function pizzaReady() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Pizza Ready");
      resolve();
    }, 1000);
  });
}
function deliverPizza() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Delivered");
      resolve();
    }, 1000);
  });
}

receiveOrder()
.then(() => preparePizza())
.then(() => bakePizza())
.then(() => pizzaReady())
.then(() => deliverPizza())
.then(() => console.log("Done!"))
.catch((error) => console.error(error));