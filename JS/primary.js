// Code originally created by Mark Rickerby
// Runs when the document loads
function onLoad() {
    // Listen to keypress events
    document.addEventListener("keypress", onKeypress);

    // Select buttons in the document and listen for clicks
    const toRed = document.querySelector("#to-red");
    const toGreen = document.querySelector("#to-green");
    const toBlue = document.querySelector("#to-blue");
    const toMagenta = document.querySelector("#to-magenta")
    toRed.addEventListener("click", changeToRed);
    toGreen.addEventListener("click", changeToGreen);
    toBlue.addEventListener("click", changeToBlue);
    toMagenta.addEventListener("click", changeToMagenta)
}

// Get a reference to the box where we want to flip color
const box = document.querySelector(".color-box");

function changeToRed() {
    box.setAttribute("class", "color-box box-red");
}

function changeToGreen() {
    box.setAttribute("class", "color-box box-green");
}

function changeToBlue() {
    box.setAttribute("class", "color-box box-blue");
}

function changeToMagenta() {
    box.setAttribute("class", "color-box box-magenta");
}

// Runs when a keypress event is triggered
function onKeypress(event) {
    // Debug event details
    console.log(event);
    //Dan's Junk
    if (event.keyCode == 114) {
        box.setAttribute("class", "color-box box-red");
    } else if (event.keyCode == 103) {
        box.setAttribute("class", "color-box box-green");
    } else if (event.keyCode == 98) {
        box.setAttribute("class", "color-box box-blue");
    } else if (event.keyCode == 115) {
        box.setAttribute("class", "color-box box-magenta");
    } else if (event.keyCode != 98, 103, 114, 115) {
        box.setAttribute("class", "color-box");
    }
}

//Navbar Function
function responsiveNav() {
    var x = document.getElementById("nav")
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

window.addEventListener("load", onLoad);