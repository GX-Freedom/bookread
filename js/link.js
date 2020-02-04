
const HYPER_LINK = document.getElementsByTagName("a");
const link = "hyper_link"

var i = 0;
function search() {
    while (i < HYPER_LINK.length) {
        if (HYPER_LINK[i].className !== link) {

            HYPER_LINK[i].classList.add(link);
        }
        else {

            HYPER_LINK[i].classList.add(link);
        }
        i++;
    }
}

function init() {
    search();
}


init();