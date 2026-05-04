// for (let i = 2; i <= 15; i += 2) {
//   console.log(i);
// }

// // for table
// let num = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(num + " x " + i + " = " + num * i);
// }

// nested loops

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}

// second pattran
let n = 1;
for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += n;
    n++;
  }
  console.log(row);
}

for (let i = 4; i >= 1; i--) {
  let row = "";
  for (let j = 5; j >= 5 - i; j--) {
    row += j;
  }
  console.log(row);
}

//      *
//     ***
//    *****
//   *******
for (let i = 1; i <= 4; i++) {
  let row = " ".repeat(4 - i) + "*".repeat(2 * i - 1);
  console.log(row);
}
