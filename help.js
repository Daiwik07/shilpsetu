let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {

acc[i].addEventListener("click", function () {

let panel = this.nextElementSibling;

panel.style.display =
panel.style.display === "block" ? "none" : "block";

});

}


function searchFAQ(){

let input = document.getElementById("searchHelp").value.toLowerCase();

let questions = document.getElementsByClassName("accordion");

for(let i=0;i<questions.length;i++){

let txt = questions[i].textContent.toLowerCase();

questions[i].style.display =
txt.includes(input) ? "block" : "none";

}

}