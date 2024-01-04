function subtract() {
   let firstNum=Number(document.getElementById("firstNumber").value);
   let secondNum=Number(document.getElementById("secondNumber").value);
   console.log(firstNum);
   console.log(secondNum);
 let result=Number(firstNum-secondNum);
 document.getElementById("result").textContent=result;


}