let names = ["waqas", "Ali", "Kaleem", "tanveer", "ahmad"];
let [winner, runerup, ...other] = names;
console.log(winner, ...other);

const student = {
  name: "waqas",
  age: 15,
  class: 10,
  subjects: ["English", "Math", "Physics", "Computer Science"],
  username:"waqas",
  password:"abcd"
};
// console.log(student)

let {username: user, password: secret, city="pakistan"}=student;
console.log(city)
console.log(student)