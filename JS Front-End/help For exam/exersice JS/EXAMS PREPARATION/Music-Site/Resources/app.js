window.addEventListener('load', solve);

function solve() {
   let totalliks=0;

 const genreElement=document.getElementById('genre');
 const nameElement=document.getElementById('name');
 const authorElement=document.getElementById('author');
 const dateElement=document.getElementById('date');
    



 const AddBtn=document.querySelector("#add-btn");
  const hitsConteiner=document.querySelector("#all-hits > div");
 AddBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  
  if(!genreElement.value || !nameElement.value|| !authorElement.value || !dateElement.value){
    return;
  }
   
   const infoHits=createElement('div',null,["hits-info"],null,hitsConteiner);

  createElement("img",null,null,null,infoHits,"./static/img/img.png");
  createElement('h2',`Genre: ${genreElement.value}`,null,null,infoHits,null);
  createElement("h2",`Name: ${nameElement.value}`,null,null,infoHits,null);
  createElement('h2',`Author: ${authorElement.value}`,null,null,infoHits);
  createElement("h3",`Date: ${dateElement.value}`,null,null,infoHits);

  const SavedBtn=createElement('button',"Save song",["save-btn"],null,infoHits);
  const likeBtn=createElement('button',"Like song",["like-btn"],null,infoHits);
  const deleteBtn=createElement('button',"Delete",["delete-btn"],null,infoHits);

genreElement.value="";
nameElement.value="";
authorElement.value="";
dateElement.value="";
 likeBtn.addEventListener('click',(e)=>{

  const likepointsConteiner=document.querySelector("#total-likes > div > p");
  totalliks++;
   likepointsConteiner.textContent=`Total Likes: ${totalliks}`;
   likeBtn.disabled=true;



 });
 SavedBtn.addEventListener('click',(e)=>{


   const SavedConteinerSongs=document.querySelector("#saved-hits > div");
   SavedConteinerSongs.appendChild(infoHits);
   likeBtn.remove();
   SavedBtn.remove();

   deleteBtn.addEventListener('click',(e)=>{
   infoHits.remove();
  
   });

 });



  

 });

 function createElement(type, textContent, classes, id, parent,src) {
  let element = document.createElement(type);
 
  
  if (textContent) {
    element.textContent = textContent;
  }
  if (classes && classes.length > 0) {
    element.classList.add(...classes);
  }
  if (id) {
    element.setAttribute("id", id);
  }
  if (parent) {
    parent.appendChild(element);
  }
  if(src){
    element.setAttribute("src", src);
  }
  
  return element;
}
}
