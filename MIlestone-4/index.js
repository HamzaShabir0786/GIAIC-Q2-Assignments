var generate = document.querySelector(".generate");
var reset = document.querySelector(".reset");
var edit = document.querySelector(".edit");
var inputs = document.querySelectorAll("input");
var items = document.querySelectorAll(".grid-items");
var body = document.querySelector("body");
var imgdiv = document.querySelector(".img-div");
var imgclick = document.querySelector(".img-click");
var inputImage = document.querySelector(".input-image");
var sts = "on";
generate.addEventListener("click", function () {
    items.forEach(function (item) {
        item.style.background = "linear-gradient(to bottom, white,darkslategray)";
    });
    inputImage.style.display = "none";
    inputs.forEach(function (input) {
        input.setAttribute("readonly", "true");
        input.style.textTransform = "uppercase";
    });
});
reset.addEventListener("click", function () {
    items.forEach(function (item) {
        item.style.background = "linear-gradient(to bottom, white,black)";
    });
    inputImage.style.display = "block";
    inputs.forEach(function (input) {
        input.removeAttribute("readonly");
        input.value = "";
        input.style.textTransform = "none";
    });
});
edit.addEventListener("click", function () {
    items.forEach(function (item) {
        item.style.background = "linear-gradient(to bottom, white,black)";
    });
    inputImage.style.display = "block";
    inputs.forEach(function (input) {
        input.removeAttribute("readonly");
        input.style.textTransform = "none";
    });
});
imgclick.addEventListener("click", function () {
    if (sts == "on") {
        sts = "off";
        body.style.backgroundColor = "black";
    }
    else {
        sts = "on";
        body.style.backgroundColor = "white";
        imgdiv.style.transition = "all 0s linear";
        imgdiv.style.transform = "rotate(0deg)";
    }
});
inputImage.addEventListener("change", function () {
    if (inputImage.files && inputImage.files[0]) {
        var imgURL = URL.createObjectURL(inputImage.files[0]);
        imgclick.src = imgURL;
    }
});
