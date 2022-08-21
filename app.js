const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

function calculate(firstNum, secondNum, sign) {
  // console.log('these are the args', firstNum, secondNum, sign);
    if (sign === '+') {
      return parseFloat(firstNum) + parseFloat(secondNum);
    } else if (sign === '-') {
      return parseFloat(firstNum) - parseFloat(secondNum);
    } else if (sign === '*') {
      return parseFloat(firstNum) * parseFloat(secondNum);
    } else if (sign === '/') {
      return parseFloat(firstNum) / parseFloat(secondNum);
    }
}

function checkSign(sign) {
  switch (sign) {
    case '+':
      return '+';
    case '-':
      return '-';
    case '/':
      return '/';
    case '*':
      return '*';
  }
  return '';
}

function main() {
  let sign = '';
  let sum = -1;
  let numString = ''
  const action = ['-', '*', '/', '+'];
  const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

  buttons.forEach((item) => {
    item.onclick = () => {
      if (item.id === 'clear') {
        display.innerText = '';
        sum = -1;
      } else if (action.includes(item.id)) {
        if (sum === -1) {
          sum = parseFloat(numString);
          numString = ''
        }
        sign = checkSign(item.id)
      } else if (digit.includes(item.id)){
        display.innerText += item.id;
        numString += item.id;
      }
      else if ((sign && item.id === 'equal' && numString && sum !== -1)) {
        sum = calculate(sum, parseFloat(numString), sign);
        console.log('this is sum', sum);
        numString = ''
        display.innerText = sum;
      } else if (item.id === 'sign') {
        sum = sum * (-1);
        display.innerText = sum;
      } else if (item.id === 'backspace') {
        let string = display.innerText.toString();
        display.innerText = string.substr(0, string.length - 1);
        sum =  display.innerText
        // if (sign) {
        //   sum = numString;
        //   numString = display.innerText;
        // } 
        console.log(sum, numString);
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
