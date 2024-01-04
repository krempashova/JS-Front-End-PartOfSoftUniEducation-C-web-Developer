function addItem() {
   const liElemnts=document.getElementById('items');
   const input=document.getElementById('newItemText');
  const newli=document.createElement('li');
  newli.textContent=input.value;
  liElemnts.appendChild(newli);
  input.value="";
}