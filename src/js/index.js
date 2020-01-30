let result = 0;

document.addEventListener('DOMContentLoaded', () => {

  const add = () => {
    result += Number(inputElement.value);
    resultElement.textContent = result;
    inputElement.value = "";
    inputElement.focus();
    op = add;
  };

  const subtract = () => {
    result -= Number(inputElement.value);
    resultElement.textContent = result;
    inputElement.value = "";
    inputElement.focus();
    op = subtract;
  };

  const multiply = () => {
    result *= Number(inputElement.value);
    resultElement.textContent = result;
    inputElement.value = "";
    inputElement.focus();
    op = multiply;
  };

  const divide = () => {
    result /= Number(inputElement.value);
    resultElement.textContent = result;
    inputElement.value = "";
    inputElement.focus();
    op = divide;
  };

  const clear = () => {
    result = 0;
    resultElement.textContent = result;
    inputElement.value = "";
  };

  let op = () => { };

  const again = () => {
    op();
  }

  const resultElement = document.querySelector('.calc__result');
  const inputElement = document.querySelector('.calc__input');
  const clearBtn = document.querySelector('#btn-clear');
  const plusBtn = document.querySelector('#btn-plus');
  const minusBtn = document.querySelector('#btn-minus');
  const multiplyBtn = document.querySelector('#btn-multiply');
  const divideBtn = document.querySelector('#btn-divide');
  const equalsBtn = document.querySelector('#btn-equals');
  plusBtn.addEventListener('click', add);
  minusBtn.addEventListener('click', subtract);
  multiplyBtn.addEventListener('click', multiply);
  divideBtn.addEventListener('click', divide);
  clearBtn.addEventListener('click', clear);
  equalsBtn.addEventListener('click', again);
});
