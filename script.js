const loadh1 = new SplitType("#split");
const title = new SplitType("#title");
const container_loader = document.getElementById("preload");
let h = container_loader.clientHeight;
var tl = gsap.timeline();
const pic = document.querySelector(".pic");
const topSection = document.querySelector(".top");

window.addEventListener("load", () => {
  animon(true);
  tl.to(".char", {
    y: 0,
    stagger: 0.05,
    delay: 0.3,
    duration: 0.1,
    ease: Circ.easeInOut,
  });
  tl.to(".preload", {
    duration: 1,
    height: 0,
    top: "-100%",
    duration: 1,
    ease: Circ.easeInOut,
    delay: 0.3,
  });
  tl.to("#Fadein", {
    y: 0,
    stagger: 0.05,
    // delay:0.2,
    duration: 0.1,
    ease: Circ.easeInOut,
  });
  tl.to(
    ".Boule-container",
    {
      duration: 1,
      top: "30%",
      ease: "power4.inOut",
    },
    "<"
  );
  gsap.to(pic, {
    rotation: 360,
    duration: 20,
    repeat: -1,
    ease: "linear",
  });
  animon(false);
});
function animon(state) {
  const body = document.getElementById("body");

  if (state === true) {
    body.classList.remove("false");
    body.classList.add("true");
  } else if (state === false) {
    body.classList.remove("true");
    body.classList.add("false");
    // container_loader.style.display = "none"
  }
}
function handleResize() {
  const btn1 = document.getElementById("insta");
  const btn2 = document.getElementById("Face");
  if (btn1 && btn2) {
    var largeurElement1 = btn1.offsetWidth;
    var largeurElement2 = btn2.offsetWidth;
    var helement1 = btn1.offsetHeight;
    var helement2 = btn2.offsetHeight;
    btn1.classList.add("custom-width&height");
    btn1.style.setProperty("--custom-width", largeurElement1 + 4 + "px");
    btn1.style.setProperty("--custom-height", helement1 - 3 + "px");

    btn2.classList.add("custom-width&height");
    btn2.style.setProperty("--custom-width", largeurElement2 + 4 + "px");
    btn2.style.setProperty("--custom-height", helement2 - 3 + "px");
  }
}
const spanContainers = document.querySelectorAll(".title div");
const spanContainer = document.querySelectorAll(".P div");

spanContainers.forEach((item) => {
  const letters = item.children[0].textContent.split("");
  item.innerHTML = "";

  letters.forEach((el, index) => {
    item.innerHTML += `<span style="transition-delay: ${
      0.035 * index
    }s">${el}</span>`;
  });
});
window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);
