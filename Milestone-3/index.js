var generate = document.querySelector(".generate");
var reset = document.querySelector(".reset");
var inputs = document.querySelectorAll("input");
var items = document.querySelectorAll(".grid-items");
var body = document.querySelector("body");
var imgdiv = document.querySelector(".img-div");
var imgclick = document.querySelector(".img-click");
var inputImage = document.querySelector(".input-image");
var userNameStrong = document.querySelector(".userNameStrong");
userNameStrong.setAttribute("contenteditable", "true");
generate.addEventListener("click", function () {
    items.forEach(function (item) {
        item.style.background = "linear-gradient(to bottom, white,darkslategray)";
    });
    inputImage.style.display = "none";
    userNameStrong.removeAttribute("contenteditable");
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
    if (inputImage.files && inputImage.files[0]) {
        var imgURL = URL.createObjectURL(inputImage.files[0]);
        imgclick.src = " ";
    }
    inputImage.style.display = "block";
    userNameStrong.innerHTML = "Enter your name? "; //add new thing
    userNameStrong.setAttribute("contenteditable", "true");
});
inputImage.addEventListener("change", function () {
    if (inputImage.files && inputImage.files[0]) {
        var imgURL = URL.createObjectURL(inputImage.files[0]);
        imgclick.src = imgURL;
    }
});
