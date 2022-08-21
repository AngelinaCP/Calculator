const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let input = '';
let sign = '';
let num = 0;
let firstNum = 0;
let secondNum = 0;
let sum = 0;
let numString = ''
function calculate( firstNum, secondNum, sign) {
    if (sign === '+') {
      return parseInt(firstNum) + parseInt(secondNum);
    }
}
buttons.forEach((item) => {
    item.onclick = () => {
      //here we have + - % / * 
      if (item.id == "clear") {
        input = ''
        num = 0;
       numString = ''
        display.innerText = "";
      } 
      else if (item.id  == '+') {
        firstNum = parseInt(numString);
        console.log('this is firsNum', firstNum);
        sign = '+'
      }
      else if (item.id == 'equal') {
        calculate(sign, firstNum, secondNum);
      } 
      else if (typeof (parseInt(item.id)) === 'Number') {
        console.log('typeof (item.id)');
      } 
      else {
          display.innerText += item.id;
          numString += item.id
          // console.log('firstnum', firstNum, 'secondNum', num);
          if (sign) {
            num = parseInt(numString);
            num = calculate(firstNum, num, sign)
            display.innerText = num
            sign = ''
          }
      }
      // else if (item.id == '+') {
      //   display.innerText = num
      // } else {
      //   display.innerText += item.id;
      // }
    // if (item.id == "clear") {
    //     input = ''
    //     num = 0;
    //     display.innerText = "";
    // } else if (display.innerText != "" && item.id === "+") {
    //     num += parseInt(item.id);
    //     console.log('this is num', num);
    // } else if (display.innerText == "" && item.id == "equal") {
    //     display.innerText = "Empty!";
    //     setTimeout(() => (display.innerText = ""), 2000);
    // } else if (item.id == "equal") {
    //   // console.log('num', num);
    //   display.innerText = num;
    // } else {
    //     input = item.id;
    //     num += input;
    //     display.innerText = item.id;
    // }
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
