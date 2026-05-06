const student={
    eng: 98,
    math:90,
    phy: 89,
    getAvg(){
        // this keyword to access the properties of the object. this keyword refers to the current object, which is student in this case. By using this.math, this.eng, and this.phy, we can access the values of math, eng, and phy properties of the student object to calculate the average score.
        let avg=(this.math + this.eng + this.phy)/3;
        console.log(avg.toFixed(2));
    }
}
student.getAvg();



function avg(){
    console.log(this);
}
avg(); // In this case, the this keyword refers to the global object (window in browsers) because avg is called in the global scope. Therefore, it will log the global object to the console.