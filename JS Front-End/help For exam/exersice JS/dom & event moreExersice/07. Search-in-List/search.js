function search() {
     let textArea=document.querySelector("#searchText").value;
     //console.log(textArea);
     const townscollection=[...document.querySelectorAll("li")];
    
     let count=0;
     for (const li of townscollection) {
      if(li.textContent.includes(textArea)){
         li.style.textDecoration = `underline`;
         li.style.fontWeight = `bold`;
         count++;
      }  else {
         li.style.textDecoration = `none`;
         li.style.fontWeight = `normal`;
       }

       let result=document.querySelector("#result");
       result.textContent=`${count} matches found`;


      }

      
         
     }
     

