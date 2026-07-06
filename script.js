// ===============================
// Sticky Header
// ===============================

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

header.classList.toggle("sticky", window.scrollY > 50);

});

// ===============================
// Typing Effect
// ===============================

const roles = [

"Software Developer",

"Frontend Developer",

"Web Developer",

"IT Student"

];

let roleIndex = 0;
let charIndex = 0;
let typing = true;

const typingText = document.querySelector(".typing");

function typeEffect(){

if(!typingText) return;

if(typing){

typingText.textContent =
roles[roleIndex].substring(0,charIndex++);

if(charIndex > roles[roleIndex].length){

typing = false;

setTimeout(typeEffect,1500);

return;

}

}else{

typingText.textContent =
roles[roleIndex].substring(0,charIndex--);

if(charIndex < 0){

typing = true;

roleIndex++;

if(roleIndex >= roles.length){

roleIndex = 0;

}

}

}

setTimeout(typeEffect,120);

}

typeEffect();

// ===============================
// Scroll Reveal
// ===============================

const revealElements = document.querySelectorAll(

".card,.skill-card,.project-card,.service-card,.internship-card,.certificate-card,.contact-box,.education-card"

);

function reveal(){

revealElements.forEach((item)=>{

const top = item.getBoundingClientRect().top;

const height = window.innerHeight;

if(top < height - 100){

item.classList.add("show");

}

});

}

window.addEventListener("scroll", reveal);

reveal();

// ===============================
// Smooth Active Menu
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

if (window.scrollY > 300) {

topBtn.style.display = "block";

} else {

topBtn.style.display = "none";

}

});

topBtn.addEventListener("click", () => {

window.scrollTo({

top: 0,

behavior: "smooth"

});

});

// ===============================
// Dark / Light Mode Toggle
// ===============================

const themeBtn = document.createElement("button");

themeBtn.innerHTML = "🌙";

themeBtn.id = "themeBtn";

document.body.appendChild(themeBtn);

themeBtn.onclick = () => {

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){

themeBtn.innerHTML="☀️";

}else{

themeBtn.innerHTML="🌙";

}

};

// ===============================
// Loading Animation
// ===============================

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

// ===============================
// Console Message
// ===============================

console.log("Portfolio Loaded Successfully 🚀");