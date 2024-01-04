window.addEventListener("load", solve);

function solve() {

const firstNameElemnt=document.querySelector("#first-name");
 const lastNameElement=document.querySelector("#last-name");
const ageElement=document.querySelector("#age");
const storytitleElement=document.querySelector("#story-title");
const genrelabelElement=document.querySelector("#genre");
const storyElement=document.querySelector("#story");




const publishBtn=document.querySelector("#form-btn");
publishBtn.addEventListener('click',(e)=>{

  let fname = firstNameElemnt.value;
      let lName =lastNameElement.value;
      let age = ageElement.value;
      let title = storytitleElement.value;
      let story = storyElement.value;
      let genre = genrelabelElement.value;

   if(!fname ||!lName ||!age|| !title || !story|| !genre){
    return;
   }

  const prewieConteiner=document.querySelector("#preview-list");
  const liinfo=createElement('li',null,["story-info"],null,prewieConteiner);
  const article=createElement('article',null,null,null,liinfo);
  createElement('h4',`Name: ${firstNameElemnt.value} ${lastNameElement.value}`,null,null,article);
  createElement('p',`Age: ${ageElement.value}`,null,null,article);
  createElement('p',`Title: ${storytitleElement.value}`,null,null,article);
  createElement('p',`Genre: ${genrelabelElement.value}`,null,null,article);
  createElement('p',storyElement.value,null,null,article);


   const saveBtn=createElement('button',"Save Story",["save-btn"],null,liinfo);
   const editBtn=createElement('button',"Edit Story",["edit-btn"],null,liinfo);
   const deleteBtn=createElement('button',"Delete Story",["delete-btn"],null,liinfo);
  
   firstNameElemnt.value="";
   lastNameElement.value="";
   ageElement.value="";storytitleElement.value="";
   genrelabelElement.value="";
   storyElement.value="";
publishBtn.disabled=true;

    editBtn.addEventListener("click", (e)=>{

      const cuurentContent=e.target.parentElement;
     firstNameElemnt.value=cuurentContent.children[0].children[0].textContent;
      lastNameElement.value=cuurentContent.children[0].children[1].textContent.split(' ')[1];
     // inputDomdelectors.score.value=cuurntStudent.children[0].children[2].textContent.split(' ')[1];
    e.target.parentNode.remove()
    publishBtn.disabled = false;

    });


});

  


function createElement(type, textContent, classes, id, parent, useInnerHtml) {
  let element = document.createElement(type);
  if (useInnerHtml && textContent) {
    element.innerHTML = textContent;
  } else if (textContent) {
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
  return element;
}
}
