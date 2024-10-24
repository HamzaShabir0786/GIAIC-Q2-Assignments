var generate = document.querySelector(".generate");
var reset = document.querySelector(".reset");
var inputs = document.querySelectorAll("input");
var items = document.querySelectorAll(".grid-items");
generate.addEventListener("click", function () {
    items.forEach(function (item) {
        item.style.background = "linear-gradient(to bottom, white,darkslategray)";
    });
    inputs.forEach(function (input) {
        input.setAttribute("readonly", "true");
        input.style.textTransform = "uppercase";
    });
});
reset.addEventListener("click", function () {
    items.forEach(function (item) {
        item.style.background = "linear-gradient(to bottom, white,black)";
    });
    inputs.forEach(function (input) {
        input.removeAttribute("readonly");
        input.value = "";
        input.style.textTransform = "none";
    });
});
var imgclick = document.querySelector(".img-click");
var imgdiv = document.querySelector(".img-div");
var body = document.querySelector("body");
var sts = "on";
imgclick.addEventListener("click", function () {
    if (sts == "on") {
        sts = "off";
        body.style.backgroundColor = "black";
        imgdiv.style.transition = "all 20000s linear";
        imgdiv.style.transform = "rotate(999890deg)";
    }
    else {
        sts = "on";
        body.style.backgroundColor = "white";
        imgdiv.style.transition = "all 0s linear";
        imgdiv.style.transform = "rotate(0deg)";
    }
});
