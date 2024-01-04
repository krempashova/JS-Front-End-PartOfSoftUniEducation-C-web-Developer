function deleteByEmail() {
    const result=document.getElementById('result');
   const input=document.querySelector('input[name="email"]').value;
  const emailboxes= Array.from(document.querySelectorAll(" td:nth-child(even)"));
  const foundedemail=emailboxes.find((box)=>box.textContent===input);
  if(foundedemail){
    foundedemail.parentElement.remove();
    result.textContent="Deleted.";
    
  }
  else{
    result.textContent='Not found.';
  }
}