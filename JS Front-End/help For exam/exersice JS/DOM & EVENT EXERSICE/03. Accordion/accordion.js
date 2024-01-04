function toggle() {
   
 
  const extrainfo=document.querySelector('#extra');
  if(extrainfo.style.display!=='block'){
    extrainfo.style.display='block';
    const button=document.querySelector('span.button');
    button.textContent='Less';
  }else{
    extrainfo.style.display='none';
    const button=document.querySelector('span.button');
    button.textContent='More';
    


  }


 }


