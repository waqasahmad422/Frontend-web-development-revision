// slection by id, class, and tag name
let mainImg = document.getElementById("mainImg");
mainImg.src = "./assets/superman.jfif";

let smallImages = document.getElementsByClassName("oldImg");
for (let i = 0; i < smallImages.length; i++) {
  smallImages[i].src = "./assets/Web_of_Spider-Man_Vol_1_129-1.png ";
}

let para = document.querySelector("p");
console.log(para.innerText);
console.log(para.innerHTML);
console.log(para.textContent);




// queryselector and queryselectorall
let mainImg2 = document.querySelector("#mainImg");
mainImg2.src = "./assets/superman.jfif";

