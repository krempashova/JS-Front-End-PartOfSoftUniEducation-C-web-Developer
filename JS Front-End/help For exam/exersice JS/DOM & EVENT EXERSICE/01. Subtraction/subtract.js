function subtract() {
    let firstNUm=Number(document.querySelector('#firstNumber').value);
    let secondNum=Number(document.querySelector('#secondNumber').value);
     let sum= firstNUm-secondNum;
     let result=document.querySelector('#result');
      result.textContent=sum;
      console.log(result);

}