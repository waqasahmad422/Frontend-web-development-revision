let num = [1, 2, 3, 4, 5];

let double = num.map((el) => {
  return el * el;
});
console.log(double);

let student = [
  {
    name: "waqas",
    age: 22,
    mark: 95,
  },
  {
    name: "Ali",
    age: 28,
    mark: 95,
  },
  {
    name: "Mounser",
    age: 26,
    mark: 87,
  },
];

let gpa=student.map((el)=>{
    return el.mark/10;
})

console.log(gpa)



let n=[2,4,5,3,4,7,8,10];

let even=n.filter((el)=>(el%2==0));
console.log(even)