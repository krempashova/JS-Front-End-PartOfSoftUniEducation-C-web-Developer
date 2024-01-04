function addItem() {

     let  inputtext=document.querySelector("#newItemText");
    // console.log(inputtext.value);

     let  inputvalue=document.querySelector("#newItemValue");
    // console.log(inputvalue.value);
    const option=document.createElement('option');
    option.textContent=inputtext.value;
    option.setAttribute("value",inputvalue.value);

     
     const newmenucontent=document.querySelector("#menu");
     newmenucontent.appendChild(option);
     inputtext.value="";
     inputvalue.value="";
   

   
   
    
    


   



}