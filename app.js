const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

function calculate(firstNum, secondNum, sign) {
  console.log(firstNum, secondNum, sign);
    if (sign === '+') {
      return parseInt(firstNum) + parseInt(secondNum);
    } else if (sign === '-') {
      return parseInt(firstNum) - parseInt(secondNum);
    } else if (sign === '*') {
      return parseInt(firstNum) * parseInt(secondNum);
    } else if (sign === '/') {
      return parseInt(firstNum) / parseInt(secondNum);
    } 
}

function checkSign(sign) {
  switch (sign) {
    case '+':
      return '+';
    case '-':
      return '-';
    case '%':
      return '%';
    case '/':
      return '/';
    case '*':
      return '*';
  }
  return '';
}

function main() {
  let input = '';
  let sign = '';
  let num = 0;
  let firstNum = ''
  let secondNum ='';
  let sum = -1;
  let numString = ''
  const action = ['-', '*', '/', '+'];

  buttons.forEach((item) => {
    item.onclick = () => {
      // console.log('this is a sign',);
      if (item.id === 'clear') {
        display.innerText = '';
        sum = 0;
      } else if (action.includes(item.id)) {
        if (sum === -1) {
          sum = parseInt(numString);
          numString = ''
        }
        sign = checkSign(item.id)
      } else if (!isNaN(item.id)){
        display.innerText += item.id;
        numString += item.id;
      }
      else if ((sign && item.id === 'equal' && numString)) {
        sum = calculate(sum, parseInt(numString), sign);
        // console.log('sum', sum);
        numString = ''
        display.innerText = sum;
      }
  };
});
}

main();

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
