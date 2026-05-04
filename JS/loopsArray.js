let fruits = ["apple", "banana", "grapes", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log("-------------\n\n");
let names = [
  ["waqas", "ahmad", "shah"],
  ["ali", "hassan", "khan"],
];
for (let i = 0; i < names.length; i++) {
  for (let j = 0; j < names[i].length; j++) {
    console.log(names[i][j]);
  }
}

console.log("-------------\n\n");
for (let fruit of names) {
  for(let hero of fruit){
    console.log(hero);
  }
}
