// store colors
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// function to get color from colors
const getColors = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

// get handles
const button = document.querySelector(".btn");
const section = document.querySelector(".color-flipper-section");
const colorContainer = document.querySelector(".color");

// listen to the event
button.addEventListener("click", () => {
  const color = getColors();
  section.style.backgroundColor = color;
  colorContainer.innerHTML = color;
});
