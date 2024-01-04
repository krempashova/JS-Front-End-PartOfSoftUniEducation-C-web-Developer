function extractText() {
   const liElemnts=Array.from(document.querySelectorAll('#items>li'));
   const result=document.getElementById('result');
   liElemnts.forEach((li)=>{
    result.textContent+=li.textContent+ '\n';
   }
   )
}