let generate = document.querySelector(".generate") as HTMLButtonElement;
let reset = document.querySelector(".reset") as HTMLButtonElement;
let edit = document.querySelector(".edit") as HTMLButtonElement;
let inputs = document.querySelectorAll("input") as NodeListOf<HTMLInputElement>;
let items = document.querySelectorAll(
  ".grid-items"
) as NodeListOf<HTMLDivElement>;

var body = document.querySelector("body") as HTMLBodyElement;
var imgdiv = document.querySelector(".img-div") as HTMLDivElement;
var imgclick = document.querySelector(".img-click") as HTMLImageElement;
let inputImage = document.querySelector(".input-image") as HTMLInputElement;

generate.addEventListener("click", () => {
  items.forEach((item) => {
    item.style.background = "linear-gradient(to bottom, white,darkslategray)";
  });
  inputImage.style.display = "none";
  inputs.forEach((input) => {
    input.setAttribute("readonly", "true");
    input.style.textTransform = "uppercase";
  });
});

reset.addEventListener("click", () => {
  items.forEach((item) => {
    item.style.background = "linear-gradient(to bottom, white,black)";
  });
  inputImage.style.display = "block";
  inputs.forEach((input) => {
    input.removeAttribute("readonly");

    input.value = "";
    input.style.textTransform = "none";
  });
});

edit.addEventListener("click", () => {
  items.forEach((item) => {
    item.style.background = "linear-gradient(to bottom, white,black)";
  });
  inputImage.style.display = "block";
  inputs.forEach((input) => {
    input.removeAttribute("readonly");
    input.style.textTransform = "none";
  });
});

inputImage.addEventListener("change", function () {
  if (inputImage.files && inputImage.files[0]) {
    let imgURL = URL.createObjectURL(inputImage.files[0]);

    imgclick.src = imgURL;
  }
});
