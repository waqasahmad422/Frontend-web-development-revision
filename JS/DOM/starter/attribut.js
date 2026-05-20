let main = document.querySelector("img");
// i have change the id attribute name to "mainImg" in the html file, so i have to change the query selector as well
main.getAttribute('id'); // this will return the value of the id attribute which is "mainImg"
main.setAttribute('id','spider_man'); // this will change the value of the id attribute to


let heading=document.querySelector('h2');
heading.classList.add("green")
console.log(heading.classList.contains("underline"))
console.log(main.classList)



let h4=document.querySelector('h4');
console.log(h4.parentElement)
console.log(h4.nextElementSibling)
console.log(h4.children)