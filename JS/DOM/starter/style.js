let h2=document.querySelector('h2');
undefined
h2.style.backgroundColor='red';
h2.style.color='white';
for(let i=0; i<h2.style.length; i++){
    console.log(h2.style[i]);
}


let links=document.querySelectorAll('.box a');
for(let i=0; i<links.length; i++){
   links[i].style.color="green";
}

