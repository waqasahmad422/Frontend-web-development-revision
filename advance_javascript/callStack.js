function hello(){
    console.log("hello");
}

function demo(){
    console.log("calling hello func");
    hello();
}

console.log('calling demo function');
demo();
console.log("bye bye")



// visualizing call Stack 
function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
    let ans=two()+one();
    console.log(ans);
}

three();



// break point using for call Stack 