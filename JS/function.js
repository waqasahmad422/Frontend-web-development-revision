// function hello() {
//   console.log("Hello World");
// }
// hello(); // This will call the function and print "Hello World" to the console.

// // create a function to print a poem:
// function printPoem() {
//   console.log("Roses are red,");
//   console.log("Violets are blue,");
//   console.log("Sugar is sweet,");
//   console.log("And so are you.");
// }
// printPoem(); // This will call the function and print the poem to the console.

// function dice() {
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log("You rolled a " + roll);
// }
// dice(); // This will call the function and print a random number between 1 and 6 to the console.

// // create a function with parameters:
// function greet(name) {
//   console.log("Hello, " + name + "!");
// }
// greet("Alice");
// greet("Bob");

// function avg(a, b, c) {
//   let average = (a + b + c) / 3;
//   console.log("The average is: " + average.toFixed(2));
// }
// avg(10, 20, 23);

// function table(num) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(num + " x " + i + " = " + num * i);
//   }
// }
// table(5);

// // create a function which return a+b:
// function add(a, b) {
//   return a + b;
// }
// let sum = add(10, 20);
// console.log("The sum is: " + sum);

// function sum(n) {
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     count += i;
//   }
//   return count;
// }
// let total = sum(5);
// console.log("The sum of first 5 natural numbers is: " + total);

let str=['hi','hello','welcome'];
function concat(str){
    let result="";
    for(let i=0;i<str.length;i++){
        result+=str[i];
    }    return result;
}
let final=concat(str);
console.log(final);