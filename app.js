document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM loaded launching functions");
    button.onclick = function() {
        if (startedalready == 0) {
            start();
      //      setTimeout(tampon, 10000);
            startedalready = 1;
        } else {
            console.log("nice try");
            return false;
        }
    }


});
let startedalready = 0;
let button = document.getElementById("button");
let container = document.querySelector("#container");
let x = document.getElementById("input").value;
let title = document.createElement('div');
let havebeenused = 0;

function start() {
    console.log("start", startedalready);
    let x = document.getElementById("input").value;
    console.log("valeur de l'input", x);
    console.log("container", container);
    cleanthedom();
    createarray(x);
}

function cleanthedom() {
    if (havebeenused >= 1) {
        console.log("removing the content");
        let lol = container.title.innerHTML = "";
        console.log("title", title);
        console.log("lol", lol);
        return lol;
    } else {
        console.log("going out");
        return false;
    }
}

function createarray(x) {
    title.innerHTML = x;
    container.appendChild(title)
    title.innerHTML = x;
    havebeenused++;
    console.log("valeur de l'input", x);
    console.log("havebeenused ", havebeenused);
/*    if (lol == 1) {
        console.log("pas de changement depuis un moment");
        setTimeout(start, 5000);
    } else {
        tampondex = x;
        setTimeout(start, 200);
    }*/
setTimeout(start, 200);
}

/*
let lol = 0;
let tampondex = x;
let ultratampon = 0;
function tampon() {
    ultratampon = tampondex;
    if (ultratampon == x) {
        lol = 1;
    } else {
      lol = 0;
        console.log("activité");
    }
    console.log("tampon = ", tampondex, "x = ", x);
    setTimeout(tampon, 10000);
}
*/
