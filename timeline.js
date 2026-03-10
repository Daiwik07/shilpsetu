const items = document.querySelectorAll(".timeline-item");
const progress = document.getElementById("progress");
const buttons = document.querySelectorAll(".year-nav button");

function revealTimeline(){

let trigger = window.innerHeight * 0.85;

items.forEach((item,index) => {

let top = item.getBoundingClientRect().top;

if(top < trigger){

item.classList.add("show");

/* ACTIVE NAV BUTTON */

buttons.forEach(btn=>btn.classList.remove("active"));

if(buttons[index]){
buttons[index].classList.add("active");
}

}

});

/* PROGRESS LINE */

let scrollTop = window.scrollY;

let docHeight = document.body.scrollHeight - window.innerHeight;

let scrollPercent = scrollTop / docHeight;

progress.style.height = scrollPercent * 100 + "%";

}

window.addEventListener("scroll", revealTimeline);

revealTimeline();


function scrollToYear(id){

document.getElementById(id).scrollIntoView({

behavior:"smooth"

});

}