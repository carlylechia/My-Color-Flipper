// generate hex color
const hexColorGenerator = () => {
    let hexColor = Math.floor(Math.random() * 100000).toString(16);
    return "#" + hexColor;
  };
  
  // get handles
  const button = document.querySelector(".btn");
  const section = document.querySelector(".color-flipper-section");
  const colorContainer = document.querySelector(".color");
  
  // listen to the event
  button.addEventListener("click", () => {
    let hexColor = hexColorGenerator();
    section.style.backgroundColor = hexColor;
    colorContainer.innerHTML = hexColor;
  });
  