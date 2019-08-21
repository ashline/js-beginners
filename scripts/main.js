function switchColors() {
  const sideOne = document.getElementById("side-one");
  const sideTwo = document.getElementById("side-two");

  const sideOneBackgroundColor = window.getComputedStyle(sideOne)
    .backgroundColor;
  const sideTwoBackgroundColor = window.getComputedStyle(sideTwo)
    .backgroundColor;

  sideOne.style.backgroundColor = sideTwoBackgroundColor;
  sideTwo.style.backgroundColor = sideOneBackgroundColor;
}

window.onload = function() {
  setInterval(function() {
    switchColors();
  }, 3000);
};
