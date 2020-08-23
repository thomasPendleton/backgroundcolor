const css = document.querySelector("h4");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("body");

function setGradient() {
  console.log(color1.value)
  console.log(color2.value)
  body.style.background =
    "linear-gradient(to right, " + color1.value + " , " + color2.value + ")";
  css.innerHTML = `<h4>Linear-Gradient
        <br>Left: ${color1.value} to right: ${color2.value}</h4>
  `
  
  
//   body.style.background;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//linear-gradient(to right, rgb(130, 132, 123), rgb(153, 77, 153))
