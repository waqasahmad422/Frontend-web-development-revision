// Array: linear collection of things 
let names=['waqas','ali','khan'];

let push=names.push('ahmed'); // add element at the end of array
console.log(names); // ['waqas', 'ali', 'khan', 'ahmed']
let pop=names.pop(); // remove element from the end of array
console.log(names);
let unshift=names.unshift('ahmed'); // add element at the beginning of array
console.log(names);
let shift=names.shift(); // remove element from the beginning of array
console.log(names);
let indexOf=names.indexOf('khan'); // find the index of element in array
console.log(indexOf);
let slice=names.slice(0,2); // create a new array from a portion of an existing array
console.log(slice);
let splice=names.splice(1,1,'ahmed'); // remove elements from an array and, if necessary, insert new elements in their place, returning the deleted elements
console.log(names);
console.log(splice); // ['ali']


let primary=['red','green','blue'];
let secondary=['yellow','cyan','magenta'];
let colors = primary.concat(secondary); // merge two or more arrays
console.log(colors); // ['red', 'green', 'blue', 'yellow', 'cyan', 'magenta']

// console.log(colors.reverse()); // reverse the order of elements in an array

let slice1=colors.slice(-4); // create a new array from a portion of an existing array4
console.log(slice1); // ['blue', 'yellow', 'cyan', 'magenta']    


let days=['monday','sunday','tuesday','wednesday','thursday','friday','aa','aaab'];
console.log(days.sort()); // sort the elements of an array in place and return the sorted array

let numbers=[5,2,9,1,100,1000,5,6];
console.log(numbers.sort((a,b)=>a-b)); // sort the elements of an array in place and return the sorted array