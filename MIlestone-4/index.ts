let generate = document.querySelector(".generate") as HTMLButtonElement;
let reset = document.querySelector(".reset") as HTMLButtonElement;
let edit = document.querySelector(".edit") as HTMLButtonElement;
let inputs = document.querySelectorAll("input") as NodeListOf<HTMLInputElement>;
let items = document.querySelectorAll(
  ".grid-items"
) as NodeListOf<HTMLDivElement>;

var imgclick = document.querySelector(".img-click") as HTMLImageElement;
var imgdiv = document.querySelector(".img-div") as HTMLDivElement;
var body = document.querySelector("body") as HTMLBodyElement;
var sts = "on";

generate.addEventListener("click", () => {
  items.forEach((item) => {
    item.style.background = "linear-gradient(to bottom, white,darkslategray)";
  });

  inputs.forEach((input) => {
    input.setAttribute("readonly", "true");
    input.style.textTransform = "uppercase";
  });
});

reset.addEventListener("click", () => {
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
  items.forEach((item) => {
    item.style.background = "linear-gradient(to bottom, white,black)";
  });
  inputs.forEach((input) => {
    input.removeAttribute("readonly");
    input.style.textTransform = "none";
  });
});

imgclick.addEventListener("click", function () {
  if (sts == "on") {
    sts = "off";
    body.style.backgroundColor = "black";
    imgdiv.style.transition = "all 20000s linear";
    imgdiv.style.transform = "rotate(999890deg)";
  } else {
    sts = "on";
    body.style.backgroundColor = "white";
    imgdiv.style.transition = "all 0s linear";
    imgdiv.style.transform = "rotate(0deg)";
  }
});
