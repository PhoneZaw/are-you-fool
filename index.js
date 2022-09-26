const box = document.querySelector("#box");

const resetBtn = document.querySelector(".resetbtn");
const questionBtn = document.querySelector(".questionbtn");
const noBtn = document.querySelector("#no");
const yesBtn = document.querySelector("#yes");

const questionTxt = document.querySelector("#question");

const winWidth = window.innerWidth;
const winHeight = window.innerHeight;

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

yesBtn.addEventListener("click", () => {
  questionTxt.innerText = "Yes, You are";
  questionBtn.style.display = "none";
  resetBtn.style.display = "block";
});

resetBtn.addEventListener("click", () => {
  questionTxt.innerText = "Are You fool, again?";
  questionBtn.style.display = "block";
  resetBtn.style.display = "none";
});

noBtn.addEventListener("click", () => {
  console.log("NO click");
  box.style.top = getRandom(0, winHeight - 150) + "px";
  box.style.left = getRandom(0, winWidth - 300) + "px";
});
