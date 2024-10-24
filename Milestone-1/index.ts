let imgclick: HTMLImageElement = document.querySelector(
  ".img-click"
) as HTMLImageElement;
let imgdiv: HTMLDivElement = document.querySelector(
  ".img-div"
) as HTMLDivElement;
let body: HTMLBodyElement = document.querySelector("body") as HTMLBodyElement;

let sts: string = "on";
imgclick.addEventListener("click", () => {
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
