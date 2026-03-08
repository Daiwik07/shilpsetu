const cards = document.querySelectorAll(".card");

function revealCards(){

let trigger = window.innerHeight * 0.85;

cards.forEach(card => {

let top = card.getBoundingClientRect().top;

if(top < trigger){

card.classList.add("show");

}

});

}

window.addEventListener("scroll",revealCards);

revealCards();