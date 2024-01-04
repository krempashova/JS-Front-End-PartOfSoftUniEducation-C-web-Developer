function solve() {
 const input=document.querySelector("#text").value;
 const currentCase=document.querySelector("#naming-convention").value;
 const result=document.querySelector("#result");
  if(currentCase!=="Camel Case" && currentCase!=="Pascal Case"){
    result.textContent="Error!";
    return;
  }
  let inputArray=input.toLowerCase().split(' ');
  let doneStr = inputArray.map(s => s[0].toUpperCase() + s.slice(1)).join('');
  if(currentCase==="Camel Case"){
    doneStr=doneStr[0].toLowerCase()+doneStr.slice(1);
  }
  result.textContent=doneStr;
}