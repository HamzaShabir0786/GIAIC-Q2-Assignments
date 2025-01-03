let generate = document.querySelector(".generate") as HTMLButtonElement;
let reset = document.querySelector(".reset") as HTMLButtonElement;
let inputs = document.querySelectorAll("input") as NodeListOf<HTMLInputElement>;
let items = document.querySelectorAll(
  ".grid-items"
) as NodeListOf<HTMLDivElement>;

var body = document.querySelector("body") as HTMLBodyElement;
var imgdiv = document.querySelector(".img-div") as HTMLDivElement;
var imgclick = document.querySelector(".img-click") as HTMLImageElement;
let inputImage = document.querySelector(".input-image") as HTMLInputElement;
let userNameStrong = document.querySelector(".userNameStrong") as HTMLElement;
userNameStrong.setAttribute("contenteditable", "true");
generate.addEventListener("click", function () {
  items.forEach((item) => {
    item.style.background = "linear-gradient(to bottom, white,darkslategray)";
  });
  inputImage.style.display = "none";
  userNameStrong.removeAttribute("contenteditable");
  inputs.forEach((input) => {
    input.setAttribute("readonly", "true");
    input.style.textTransform = "uppercase";
  });
});

reset.addEventListener("click", function () {
  items.forEach((item) => {
    item.style.background = "linear-gradient(to bottom, white,black)";
  });
  inputs.forEach((input) => {
    input.removeAttribute("readonly");
    input.value = "";
    input.style.textTransform = "none";
  });

  if (inputImage.files && inputImage.files[0]) {
    let imgURL = URL.createObjectURL(inputImage.files[0]);
    imgclick.src = " ";
  }

  inputImage.style.display = "block";
  userNameStrong.innerHTML = "Enter your name? "; //add new thing
  userNameStrong.setAttribute("contenteditable", "true");
});
inputImage.addEventListener("change", function () {
  if (inputImage.files && inputImage.files[0]) {
    let imgURL = URL.createObjectURL(inputImage.files[0]);

    imgclick.src = imgURL;
  }
});
