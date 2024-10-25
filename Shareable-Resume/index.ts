const generate = document.querySelector(".generate") as HTMLButtonElement;
const reset = document.querySelector(".reset") as HTMLButtonElement;
const edit = document.querySelector(".edit") as HTMLButtonElement;
const dow = document.querySelector(".dow") as HTMLButtonElement;
const inputs = document.querySelectorAll(
  "input"
) as NodeListOf<HTMLInputElement>;
const items = document.querySelectorAll(
  ".grid-items"
) as NodeListOf<HTMLDivElement>;

const imgclick = document.querySelector(".img-click") as HTMLImageElement;
const imgdiv = document.querySelector(".img-div") as HTMLDivElement;
let inputImage = document.querySelector(".input-image") as HTMLInputElement;
const body = document.querySelector("body") as HTMLBodyElement;
const userNameStrong = document.querySelector(".userNameStrong") as HTMLElement;
userNameStrong.setAttribute("contenteditable", "true");

generate.addEventListener("click", () => {
  inputImage.style.display = "none";
  userNameStrong.removeAttribute("contenteditable");
  items.forEach((item) => {
    item.style.background = "linear-gradient(to bottom, white,darkslategray)";
  });

  inputs.forEach((input) => {
    input.setAttribute("readonly", "true");
    input.style.textTransform = "uppercase";
  });
});

reset.addEventListener("click", () => {
  inputImage.style.display = "block";
  userNameStrong.innerHTML = "Enter your name? "; //add new thing
  userNameStrong.setAttribute("contenteditable", "true");
  if (inputImage.files && inputImage.files[0]) {
    let imgURL = URL.createObjectURL(inputImage.files[0]);

    imgclick.src = " ";
  }
  items.forEach((item) => {
    item.style.background = "linear-gradient(to bottom, white,black)";
  });

  inputs.forEach((input) => {
    input.removeAttribute("readonly");

    input.value = "";
    input.style.textTransform = "none";
  });
});

edit.addEventListener("click", () => {
  inputImage.style.display = "block";
  userNameStrong.innerHTML = "Enter your name? "; //add new thing
  userNameStrong.setAttribute("contenteditable", "true");
  items.forEach((item) => {
    item.style.background = "linear-gradient(to bottom, white,black)";
  });
  inputs.forEach((input) => {
    input.removeAttribute("readonly");
    input.style.textTransform = "none";
  });
});

dow.addEventListener("click", () => {
  window.print();
});

inputImage.addEventListener("change", function () {
  if (inputImage.files && inputImage.files[0]) {
    let imgURL = URL.createObjectURL(inputImage.files[0]);

    imgclick.src = imgURL;
  }
});
