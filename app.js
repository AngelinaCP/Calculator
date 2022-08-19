const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let input = '';

buttons.forEach((item) => {
    let num = 0;
  item.onclick = () => {
    if (item.id == "clear") {
        input = ''
        display.innerText = "";
    } else if (display.innerText != "" && item.id === "+") {
        num = parseInt(input)   
        console.log(input);
    }
    else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } 
    else {
        input += item.id;
        display.innerText += item.id;
    }
  };
});

// const themeToggleBtn = document.querySelector(".theme-toggler");
// const calculator = document.querySelector(".calculator");
// const toggleIcon = document.querySelector(".toggler-icon");
// let isDark = true;
// themeToggleBtn.onclick = () => {
//   calculator.classList.toggle("dark");
//   themeToggleBtn.classList.toggle("active");
//   isDark = !isDark;
// };
