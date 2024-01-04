function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
     let inputText=document.querySelector("#searchField");
     const serarcehdfields=Array.from(document.querySelectorAll("body>table>tbody>tr"));
     serarcehdfields.forEach(field => {

      if(field.classList.contains("select")){
         field.classList.remove("select");
      }
        if(field.textContent.includes(inputText.value)){
         field.classList.add('select');
        }
       
      
     });
   
    
   }
}