// to cheked if the fileds are not empty. this is validation in we create an object with all input fileds in the bigining

const inputDOMSelectors={
    title = document.querySelector('#title'),
    //i t.n.

};


if(
    Object.values(inputDOMSelectors).some((selector) =>selector.value==="")
    ){
    return;
}

// helperFunctiom to create elements

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
  // izchistvane na input poleta 
  Object.values(inputDOMSelectors).forEach((selector)=>selector.value="");
  // 


  //Wryshtane na inputa na pyrwonachalnoto mu mqsto :slojen variant
      const cuurentContent=e.target.parentElement;
      inputDomdelectors.studentName.value=cuurntStudent.children[0].children[0].textContent;
      inputDomdelectors.universary.value=cuurntStudent.children[0].children[1].textContent.split(' ')[1];
      inputDomdelectors.score.value=cuurntStudent.children[0].children[2].textContent.split(' ')[1];

       //Wryshtane na inputa na pyrwonachalnoto mu mqsto lesen varaiant:
       //vytre v function ( edit)
       //pyrvo gore syzdavame promenlivi s const za wsichki input poleta , s value, i wytre v funcion pishem
       titleElement.value=title;
       categoryelement.value=category;
       contatentElement.value=content;
       liElement.remove();


      // PREMESTVANE NA ELEMENTI OT EDIN CIONTEINET W DRUG (I ITRIVA PREDISHNIQ )
      const cuurntStudent=e.target.parentElement;
      let btn1=cuurntStudent.children[1];
      let btn2=cuurntStudent.children[2];
      cuurntStudent.removeChild(btn1);
      cuurntStudent.removeChild(btn2);
      otherSelectors.candidatelistConteiner.appendChild(cuurntStudent);
      //lesno premestvane na elementite ot edit v post
      //wzemame konteinera , kudeto trqbva da se premestqt eleentite 
      candidatelistConteiner.appendChild(liElement);