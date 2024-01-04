function lockedProfile() {
    const allbutons=Array.from(document.querySelectorAll('button'));
    
    allbutons.forEach(button => {
         
      

         button.addEventListener('click',(e)=>{
            const lockedButtons=e.currentTarget.parentElement.querySelector('input[type="radio"]');
            if(lockedButtons.checked){
                return;
            }
           
          const hiddeninfo=e.currentTarget.parentElement.querySelector('div');
          if(hiddeninfo.style.display==='block'){

          
          hiddeninfo.style.display='none';
          button.textContent="Show more";
          }else {
            hiddeninfo.style.display='block';
          button.textContent="Hide it";
          }

         })


      

         
          
    });

}