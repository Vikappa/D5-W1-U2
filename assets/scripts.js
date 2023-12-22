const nav = document.querySelector("nav")
const navButton = document.querySelector("nav div button")
const SVGDELMALE = document.getElementById("SVGDELMALE")

window.addEventListener('scroll', function () {
    if (window.scrollY < 500) {
        nav.style.backgroundColor = "#ffc017"
        navButton.style.backgroundColor = "#191919"
    } else {
        nav.style.backgroundColor = "white"
        navButton.style.backgroundColor = "#538724"
    }
});

const arrayM = document.querySelectorAll(".glifo")

const cambiaM = function () {

    const target = arrayM[Math.floor(Math.random() * 561)]

    target.setAttribute("opacity", target.getAttribute("opacity") === "1" ? "0" : "1")

}

let intervallo = setInterval(cambiaM, 80)