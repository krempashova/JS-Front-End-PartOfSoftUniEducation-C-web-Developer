function create(words) {

   let content=document.getElementById("content");
  for (const word of words) {
   const NewDiv=document.createElement('div');
   const newParagraph=document.createElement("p");
   newParagraph.textContent=word;
   newParagraph.style.display='none';
   NewDiv.addEventListener('click',()=>{
      newParagraph.style.display='block';
   })
   content.appendChild(NewDiv);
   NewDiv.appendChild(newParagraph);
  

   
  }
  
}