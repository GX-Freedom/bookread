
const form = document.querySelector(".jsform"),
    select = form.querySelector(".choice"),
    button = document.querySelector(".del");


const USER_LS = "Country",

function saveName(text) {
    localStorage.setItem(USER_LS, text);
    console.log(USER_LS, text);
}


function hadndleSubmit(event) {
    event.preventDefault();

    let itme = event.target.value;
    const currentValue = itme;
    console.log(currentValue);
    saveName(currentValue);

}


function askForName() {
    form.addEventListener("change", hadndleSubmit);
}


function youselect(text) {
    select.innerText = `you are country is ${text}`;
    btndel();
}


function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    }
    else {
        youselect(currentUser);
    }
}

function btndel() {
    button.style.display = "block";
    button.addEventListener("click", (event) => {
        select.innerText = "";
        button.style.display = "none";
        localStorage.removeItem(USER_LS);
    })
}

function init() {

    loadName();
}
init();



// const sel = document.querySelector(".menu");
// const korea_LS = localStorage.setItem("country", "KR");
// const greece_LS = localStorage.setItem("country", "GE");
// const turkey_LS = localStorage.setItem("country", "TK");
// const finland_LS = localStorage.setItem("country", "FL");

// function sellect() {
//   sel.addEventListener("change", event => {
//     if (sel.options[0].value === "Korea") {
//       localStorage.setItem(event.target.value);
//     } else if (sel.options[1].value === "Greece") {
//       localStorage.setItem(event.target.value);
//     } else if (sel.options[2].value === "Turkey") {
//       localStorage.setItem(event.target.value);
//     } else if (sel.options[3].value === "Finland") {
//       localStorage.setItem(event.target.value);
//     }
//   });
// }