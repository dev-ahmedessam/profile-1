let stars1 = document.getElementById("stars1");
let moon2 = document.getElementById("moon2");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river5 = document.getElementById("river5");
let boat6 = document.getElementById("boat6");
let nouvil = document.querySelector(".nouvil")

window.onscroll = function () {
    let value = scrollY;
    // console.log(value);
    stars1.style.left = value + "px";
    moon2.style.top = value * 4 + "px";
    mountains3.style.top = value * 2 + "px";
    mountains4.style.top = value * 1.5 + "px";
    river5.style.top = value + "px";
    boat6.style.left = value + "px";
    boat6.style.left = value * 3 + "px";
    nouvil.style.fontSize = value + "px";
    if (scrollY >= 100) {
        nouvil.style.fontSize = 100 + "px";
        nouvil.style.position = "fixed";
        if (scrollY >= 580) {
            nouvil.style.display = "none";
        } else {
            nouvil.style.display = "block";
        }
        if (scrollY >= 449) {
            moon2.style.display = "none";
        } else {
            moon2.style.display = "block";

        }
        if (scrollY >= 130) {
            document.querySelector(".main").style.background = "linear-gradient(#247881, #19408b)";
        } else {
            document.querySelector(".main").style.background = "linear-gradient(to top,#200016, transparent)";

        }
    }

}