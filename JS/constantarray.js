// When we use const with an array in JavaScript, it means that the variable name cannot be changed to point to a different array, but the contents inside the array can still be changed.

// In simple words, const does not make the array fully constant—it only makes the reference constant.

// So, if you create an array using const, you are not allowed to assign a completely new array to that variable later. However, you are allowed to modify the existing array by adding, removing, or updating its elements.

// For example, you can add new values, change existing values, or remove elements from the array without any problem. But if you try to replace the entire array with a new one, JavaScript will give an error.




const names=["John","Doe","Smith"];
console.log(names.push("Jane",'ali')); // This will add "Jane" to the array and return the new length of the array
console.log(names); // Output: ["John", "Doe", "Smith", "Jane", "ali"]

// names=["New","Array"]; // This will throw an error because we cannot reassign a new array to a const variable
