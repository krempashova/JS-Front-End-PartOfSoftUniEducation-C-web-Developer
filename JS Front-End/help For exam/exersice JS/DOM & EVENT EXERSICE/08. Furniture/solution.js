function solve() {

 
  let input=document.querySelector("#exercise > textarea:nth-child(2)");
  const generatebtn=document.querySelector("#exercise > button:nth-child(3)");

  const togeneratenewitems=document.querySelector("#exercise > div > div > div > div > table > tbody");
  generatebtn.addEventListener("click", inputTEXTParse);

  
 function inputTEXTParse(){

  const data=JSON.parse(data.value);
  const row =document.createElement("tr");
    
  for (const {img,name,price,decFactor} of data) {
 
  
  const imageCell=document.createElement("td");
  const image=document.createElement("img");
  image.setAttribute({scr:img});

  const nameCell=document.createElement("td");
   const priceCell=document.createElement("td");
     const DecFactorCell=document.createElement("td");
     const markCell=document.createElement("td");
    row.appendChild(imageCell);
   imageCell.appendChild(image);
   row.appendChild(nameCell);
   row.appendChild(priceCell);
   row.appendChild(DecFactorCell);
   row.appendChild(markCell);

   togeneratenewitems.appendChild(row);

  
  }

 }




}