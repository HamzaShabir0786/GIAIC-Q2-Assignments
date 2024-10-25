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
console.log("helo");
