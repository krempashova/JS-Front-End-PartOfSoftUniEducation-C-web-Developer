function toggle() {
    const buttontocnahge=document.getElementsByClassName("button")[0];
  const content=document.querySelector("#extra");
  if(content.style.display!=='block'){
    content.style.display='block';
    buttontocnahge.textContent="Less";
  }else{
    content.style.display='none';
 
  buttontocnahge.textContent="More";

  }
  
}