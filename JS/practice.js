let msg="help!";
console.log(msg.toUpperCase().trim());


let name="ApnaCollege"

console.log(name.slice(4,9));
console.log(name.indexOf('na'));
console.log(name.replace('Apna','Our'));


console.log(name.replace('l','t'));



let month=['january','july','march', 'august'];
let pop=month.shift();
let pop1=month.shift();
console.log(month);
console.log(pop);
let unsift=month.unshift('july','june');
console.log(month);
console.log(unsift);


let colors=['red','green','blue'];
console.log(colors.includes('red')); // true
console.log(colors.includes('yellow')); // false

console.log(colors.indexOf('green')); // 1
console.log(colors.indexOf('yellow')); // -1

