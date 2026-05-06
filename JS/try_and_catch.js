let name="waqas";
try{
    console.log(name);
    console.log(age); // This will throw a ReferenceError because age is not defined.
}
catch(error){
    console.log("An error occurred: " + error.message);
}