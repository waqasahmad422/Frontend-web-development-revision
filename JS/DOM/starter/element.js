let newp=document.createElement('p');
newp.innerHTML="My name is waqas ahamd shah"

let box=document.querySelector('.box');

box.appendChild(newp)
newp.append(" and i am going to peshawar")
newp.prepend("befor read my name ")
// body.prepend(newp)




// adjectend in js for element addation 
let p=document.querySelector('p');

let btn=document.createElement("button");
btn.innerHTML="click me";

p.insertAdjacentElement("beforebegin",btn);