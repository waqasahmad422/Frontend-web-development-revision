const student={
    name: "waqas Ahmad Shah",
    marks:99,
    prop: this,  //globel scope
    getName(){
        console.log(this);
        return this.name;
    },
    getMarks: ()=>{
        console.log(this); // this means in arrow is parent scope
        return this.marks;
    },
    getinfo:function(){
        setTimeout(() => {
            console.log(this);
            
        }, 2000);
    }
}
console.log(student.getinfo())