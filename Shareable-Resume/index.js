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
var userNameStrong = document.querySelector(".userNameStrong");
userNameStrong.setAttribute("contenteditable", "true");
generate.addEventListener("click", function () {
    inputImage.style.display = "none";
    userNameStrong.removeAttribute("contenteditable");
    inputs.forEach(function (input) {
        input.setAttribute("readonly", "true");
        input.style.textTransform = "uppercase";
    });
});
reset.addEventListener("click", function () {
    inputImage.style.display = "block";
    userNameStrong.innerHTML = "Enter your name "; //add new thing
    userNameStrong.setAttribute("contenteditable", "true");
    if (inputImage.files && inputImage.files[0]) {
        var imgURL = URL.createObjectURL(inputImage.files[0]);
        imgclick.src = " ";
    }
    inputs.forEach(function (input) {
        input.removeAttribute("readonly");
        input.value = "";
        input.style.textTransform = "none";
    });
});
edit.addEventListener("click", function () {
    inputImage.style.display = "block";
    userNameStrong.innerHTML = "Enter your name "; //add new thing
    userNameStrong.setAttribute("contenteditable", "true");
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
