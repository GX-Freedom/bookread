const haerder = document.querySelector(".show_header");
const home = haerder.querySelector(".home_menu");
const input = document.querySelector("input");
const find = document.querySelector(".browse_menu");

function add() {
    const ul = document.createElement("ul");
    const li = document.createElement("li");

    find.appendChild(ul);
    ul.appendChild(li);
    li.innerHTML = "text";

}

function hidden() {

}


function init() {


    find.addEventListener("click", add);

}

init();