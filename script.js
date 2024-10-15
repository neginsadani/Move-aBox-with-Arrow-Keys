"use strict";

const box = document.querySelector(".box");
const container = document.querySelector(".container");

let topPosition = 0;
let leftPosition = 0;

const boxHeight = 50;
const boxWidth = 50;
const containerHeight = 500;
const containerWidth = 500;

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    if (topPosition > 0) {
      topPosition -= 10;
    }
  } else if (event.key === "ArrowDown") {
    if (topPosition < containerHeight - boxHeight) {
      topPosition += 10;
    }
  } else if (event.key === "ArrowLeft") {
    if (leftPosition > 0) {
      leftPosition -= 10;
    }
  } else if (event.key === "ArrowRight") {
    if (leftPosition < containerWidth - boxWidth) {
      leftPosition += 10;
    }
  }
  box.style.top = `${topPosition}px`;
  box.style.left = `${leftPosition}px`;
});
