/* ===================================
DOM
=================================== */
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const overlay = document.querySelector(".nav-overlay");
const backToTop = document.querySelector(".back-to-top");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

/* ===================================
Hamburger
=================================== */
if(hamburger && nav){
hamburger.addEventListener("click",()=>{

hamburger.classList.toggle("active");
nav.classList.toggle("active");
overlay.classList.toggle("active");

document.body.style.overflow =
nav.classList.contains("active")
? "hidden"
: "";
});

overlay.addEventListener("click",closeMenu);
document.querySelectorAll("#nav a").forEach(link=>{
link.addEventListener("click",closeMenu);
});
}

function closeMenu(){
hamburger.classList.remove("active");
nav.classList.remove("active");
overlay.classList.remove("active");
document.body.style.overflow="";
}

/* ===================================
Back To Top
=================================== */
if(backToTop){
window.addEventListener("scroll",()=>{
if(window.scrollY>300){
backToTop.classList.add("show");
}else{
backToTop.classList.remove("show");
}
});

backToTop.addEventListener("click",e=>{
e.preventDefault();
window.scrollTo({
top:0,
behavior:"smooth"
});
});
}

/* ===================================
Lightbox
=================================== */
function openLightbox(src){
if(!lightbox || !lightboxImg) return;
lightboxImg.src = src;
lightbox.classList.add("show");
requestAnimationFrame(()=>{
lightboxImg.classList.add("show");
});
document.body.style.overflow="hidden";
}

function closeLightbox(){
lightboxImg.classList.remove("show");
setTimeout(()=>{
lightbox.classList.remove("show");
lightboxImg.src="";
document.body.style.overflow="";
},80);
}

/* ===================================
Gallery
=================================== */
document.querySelectorAll(".gallery-img").forEach(img=>{
img.addEventListener("click",()=>{
openLightbox(img.src);
});
});

/* ===================================
Calendar
=================================== */
const calendarLink = document.querySelector(".calendar-link");
if(calendarLink){
calendarLink.addEventListener("click",function(e){
e.preventDefault();
openLightbox(this.href);
});
}

/* ===================================
Close
=================================== */
if(lightbox){
lightbox.addEventListener("click",(e)=>{
if(
e.target===lightbox ||
e.target===lightboxImg
){
closeLightbox();
}
});
}

document.addEventListener("keydown",(e)=>{
if(e.key==="Escape"){
closeLightbox();
}
});

/* ===================================
Header Scroll
=================================== */
const header = document.querySelector(".header");
window.addEventListener("scroll",()=>{
if(window.scrollY > 20){
header.classList.add("scrolled");
}else{
header.classList.remove("scrolled");
}
});

/* ===================================
Fade In
=================================== */
const fadeItems = document.querySelectorAll(
".section,.feature-item,.medical-grid>*,.gallery-card,.parking-card,.info-card"
);
const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("fade-in");
}
});
},{
threshold:.15
});
fadeItems.forEach(item=>observer.observe(item));

/* ===================================
Image Loading
=================================== */
document.querySelectorAll("img").forEach(img=>{
if(img.complete){
img.classList.add("loaded");
}else{
img.addEventListener("load",()=>{
img.classList.add("loaded");
});
}
});

/* ===================================
Console
=================================== */
console.log(
"パルモこども診療所 Website Ver1.0"
);
