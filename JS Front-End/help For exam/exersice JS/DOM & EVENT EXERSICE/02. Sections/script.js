function create(words) {
  
 words.forEach(word => {

   const conteiner=document.querySelector('#content')
   const div=document.createElement('div');
   const p=document.createElement('p');
   p.textContent=word;
   p.style.display='none';
   div.appendChild(p);

   div .addEventListener('click',handler);
  conteiner.appendChild(div);

  function handler(){
   p.style.display='block';
  }
   
 });
 
 

}