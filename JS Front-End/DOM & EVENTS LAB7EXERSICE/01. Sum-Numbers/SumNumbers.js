function calc() {
const firstInput=document.getElementById('num1');
const secondInput=document.getElementById('num2');
const suminput=document.getElementById('sum');
let firstNUM=Number(firstInput.value);
let secondNum=Number(secondInput.value);
 let sum=firstNUM+secondNum;
 suminput.value=sum;
}
