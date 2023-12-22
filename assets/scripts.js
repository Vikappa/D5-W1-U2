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


