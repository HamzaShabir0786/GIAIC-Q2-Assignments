var generate = document.querySelector(".generate");
var reset = document.querySelector(".reset");
var edit = document.querySelector(".edit");
var inputs = document.querySelectorAll("input");
var items = document.querySelectorAll(".grid-items");
var body = document.querySelector("body");
var imgdiv = document.querySelector(".img-div");
var imgclick = document.querySelector(".img-click");
var inputImage = document.querySelector(".input-image");
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
    userNameStrong.innerHTML = "Enter your name "; //add new thing
    userNameStrong.setAttribute("contenteditable", "true");
    inputImage.style.display = "block";
    inputs.forEach(function (input) {
        input.removeAttribute("readonly");
        input.value = "";
        input.style.textTransform = "none";
    });
});
edit.addEventListener("click", function () {
    userNameStrong.innerHTML = "Enter your name "; //add new thing
    userNameStrong.setAttribute("contenteditable", "true");
    inputImage.style.display = "block";
    inputs.forEach(function (input) {
        input.removeAttribute("readonly");
        input.style.textTransform = "none";
    });
});
inputImage.addEventListener("change", function () {
    if (inputImage.files && inputImage.files[0]) {
        var imgURL = URL.createObjectURL(inputImage.files[0]);
        imgclick.src = imgURL;
    }
});
