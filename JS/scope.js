// function scope 
let sum=89; // sum is a global variable and can be accessed anywhere in the code
function myFunction(a,b) {
    let sum = a + b; // sum is only accessible within this function
    console.log("The sum is: " + sum);
}   
myFunction(10,20);
console.log("The global sum is: " + sum); // This will print the global variable sum, which is 89
 



// block scope 
let age=18;
if(age>=18){
    let message="You are an adult.";
    // console.log(message); // This will print "You are an adult."
}
// console.log(message);



// lexical scope
function outerFunction() {
    let x=2;
    let y=23;
    function innerFunction() {
        console.log(x);
        console.log(y);
    }
    innerFunction();
}
outerFunction(); // This will call the outer function, which in turn calls the inner function and prints 2 and 23 to the console.



let greet="Hi";

function changeGreet(){
    let greet="Hello";
    console.log(greet);
    function inner(){
        console.log
    }
    
}
console.log(greet);
changeGreet();