window.addEventListener("load", solve);

function solve() {

   const inputDomdelectors={
   studentName:document.querySelector("#student"),
   universary:document.querySelector("#university"),
   score:document.querySelector("#score")

   };
    const otherSelectors={
      nextBtn:document.querySelector("#next-btn"),
      previewConteiner:document.querySelector("#preview-list"),
      candidatelistConteiner:document.querySelector("#candidates-list"),
      //editBtn:document.querySelector("#preview-list > li > button:nth-child(2)"),
      //applyBtn:document.querySelector("#preview-list > li > button:nth-child(3)"),
    
    };


    otherSelectors.nextBtn.addEventListener('click',addingcandidats);



    function addingcandidats(){
    
      if(
        Object.values(inputDomdelectors).some((selector) =>selector.value==="")
        ){
        return;
    }
      
     
     const lielement=createElement('li',null,["application"],null,otherSelectors.previewConteiner);
     const article=createElement('article',null,null,null,lielement);
     createElement('h4',inputDomdelectors.studentName.value,null,null,article);
     createElement('p',`University: ${inputDomdelectors.universary.value}`,null,null,article);
     createElement('p',`Score: ${inputDomdelectors.score.value}`,null,null,article);
     createElement('button',"edit",["action-btn","edit"],null,lielement);
     createElement('button',"apply",["action-btn","apply"],null,lielement);
     otherSelectors.nextBtn.disabled=true;
     Object.values(inputDomdelectors).forEach((selector)=>selector.value="");

     const editBtn=document.querySelector("#preview-list > li > button:nth-child(2)");
      const applyBtn=document.querySelector("#preview-list > li > button:nth-child(3)");

    editBtn.addEventListener('click', editingInformation);
    function editingInformation(e){
      const cuurntStudent=e.target.parentElement;

      inputDomdelectors.studentName.value=cuurntStudent.children[0].children[0].textContent;
      inputDomdelectors.universary.value=cuurntStudent.children[0].children[1].textContent.split(' ')[1];
      inputDomdelectors.score.value=cuurntStudent.children[0].children[2].textContent.split(' ')[1];
         otherSelectors.nextBtn.disabled=false;
         cuurntStudent.remove();
  
    }

    applyBtn.addEventListener('click', applyinCandidateList);

    function applyinCandidateList(e){



      const cuurntStudent=e.target.parentElement;
      let btn1=cuurntStudent.children[1];
      let btn2=cuurntStudent.children[2];
      cuurntStudent.removeChild(btn1);
      cuurntStudent.removeChild(btn2);
      otherSelectors.candidatelistConteiner.appendChild(cuurntStudent);
      otherSelectors.nextBtn.disabled=false;



    }



  }

  
         
       

    function createElement(type, textContent, classes, id, parent) {
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
      return element;
    }
  }
  