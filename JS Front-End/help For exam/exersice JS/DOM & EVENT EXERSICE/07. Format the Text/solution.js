function solve() {
  
 let inputText=document.querySelector("#input").value.split(".");
 let outputText=document.querySelector("#output");
 inputText.pop();
 
   while(inputText.length>0){
    const p=document.createElement("p");
    p.textContent=inputText.splice(0,3). map((text)=>text.trimStart())
    .join(".") + ".";
     outputText.appendChild(p);
     
   }



}