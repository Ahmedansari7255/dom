console.log(document);
console.log(document.title);
document.title="Learning DOM";
console.log(document.title);


let text= document.getElementById("ac");
console.log(text);

//res-null

//using element id with defer
 let text= document.getElementById("ac");
 console.log(text);

//accessing using tagname
let text1=document.getElementsByTagName("p");
console.log(text[1]);

//accessing using class name

let text2=document.getElementsByClassName("do");
console.log(text2);

//accesiing using query selector

let text3=document.querySelector(".do")
console.log(text3);

//accessing using query selector all

let text4=document.querySelectorAll(".do")
console.log(text4);