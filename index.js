let keys = document.querySelectorAll(".key");
let display = document.querySelector(".display");
const equalsKey = document.querySelector(".key.opreator.equal");
let body = document.body;
let allClear = document.querySelector(".allclear");

let allKeys = Array.from(keys).map((key) => {
  return key;
});

allKeys.forEach((key) => {
  key.addEventListener("click", (event) => {
    if (event.target.value === "AC") {
      display.value = "";
    } else if (event.target.value === "C") {
      display.value = display.value.slice(0, -1);
    } else {
      display.value += event.target.value;
    }
  });
});

let keyMapping = {
  "/": "÷",
  "*": "×",
  "-": "-",
  "+": "+",
};

body.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    try {
      let finalExpression = display.value.replace("×", "*").replace("=", "");
      display.value = eval(finalExpression);
    } catch (error) {
      display.value = "Error";
    }
  } else if (event.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else {
    let keyPressed = keyMapping[event.key] || event.key;
    allKeys.forEach((key) => {
      if (key.value === keyPressed) {
        display.value += key.value;
      }
    });
  }
});

equalsKey.addEventListener("click", () => {
  try {
    let finalExpression = display.value.replace("×", "*").replace("=", "");
    display.value = eval(finalExpression);
  } catch (error) {
    display.value = "Error";
  }
});
