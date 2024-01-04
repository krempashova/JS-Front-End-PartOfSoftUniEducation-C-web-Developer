function addItem() {
    const liElemnts=document.getElementById('items');
    const input=document.getElementById('newItemText');
   const newli=document.createElement('li');
   const newAnchor=document.createElement('a');
   newli.textContent=input.value;
   newAnchor.textContent='[Delete]';
   newAnchor.setAttribute('href','#');
   newAnchor.addEventListener('click',deleteHandler);
   liElemnts.appendChild(newli);
   newli.appendChild(newAnchor);
   input.value="";

 function deleteHandler(e){
   const liitem=e.currentTarget.parentElement;
   liitem.remove();
 }

}