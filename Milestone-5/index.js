var generate = document.querySelector(".generate");
var reset = document.querySelector(".reset");
var edit = document.querySelector(".edit");
var dow = document.querySelector(".dow");
var inputs = document.querySelectorAll("input");
var items = document.querySelectorAll(".grid-items");
var imgclick = document.querySelector(".img-click");
var imgdiv = document.querySelector(".img-div");
var inputImage = document.querySelector(".input-image");
var body = document.querySelector("body");
generate.addEventListener("click", function () {
    inputImage.style.display = "none";
    items.forEach(function (item) {
        item.style.background = "linear-gradient(to bottom, white,darkslategray)";
    });
    inputs.forEach(function (input) {
        input.setAttribute("readonly", "true");
        input.style.textTransform = "uppercase";
    });
});
reset.addEventListener("click", function () {
    inputImage.style.display = "block";
    items.forEach(function (item) {
        item.style.background = "linear-gradient(to bottom, white,black)";
    });
    inputs.forEach(function (input) {
        input.removeAttribute("readonly");
        input.value = "";
        input.style.textTransform = "none";
    });
});
edit.addEventListener("click", function () {
    inputImage.style.display = "block";
    items.forEach(function (item) {
        item.style.background = "linear-gradient(to bottom, white,black)";
    });
    inputs.forEach(function (input) {
        input.removeAttribute("readonly");
        input.style.textTransform = "none";
    });
});
dow.addEventListener("click", function () {
    window.print();
});
inputImage.addEventListener("change", function () {
    if (inputImage.files && inputImage.files[0]) {
        var imgURL = URL.createObjectURL(inputImage.files[0]);
        imgclick.src = imgURL;
    }
});
