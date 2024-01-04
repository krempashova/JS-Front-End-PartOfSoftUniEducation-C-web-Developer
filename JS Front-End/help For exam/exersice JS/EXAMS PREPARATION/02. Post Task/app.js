window.addEventListener("load", solve);

function solve() {

    
     const inputDOMSelectors={
        title:document.querySelector("#task-title"),
        category:document.querySelector("#task-category"),
        content:document.querySelector("#task-content"),
     };
    
     

     const  otherSelectors={
      publishBtn:document.querySelector("#publish-btn"),
      reviewconteiner:document.querySelector("#review-list"),
      publishedconteiner:document.querySelector("#published-list"),

  };

    


   otherSelectors.publishBtn.addEventListener('click',publish);



    function publish(){
        if(
            Object.values(inputDOMSelectors).some((selector) =>selector.value==="")
            ){
            return;
        }
        const lielement=createElement('li',null,["rpost"],null,otherSelectors.reviewconteiner);
        const article=createElement('article', null,null,null,lielement);
        createElement('h4',inputDOMSelectors.title.value,null,null,article);
        createElement('p',`Category: ${inputDOMSelectors.category.value}`,null,null,article);
        createElement('p',`Content: ${inputDOMSelectors.content.value}`,null,null,article);
        createElement('button','Edit',["action-btn", "edit"],null,lielement);
        createElement('button','Post',["action-btn", "post"],null,lielement);
        Object.values(inputDOMSelectors).forEach((selector)=>selector.value="");
        const editBtn=document.querySelector("#review-list > li > button:nth-child(2)");
        const postBtn=document.querySelector("#review-list > li > button:nth-child(3)");
         editBtn.addEventListener('click',editing);

          function editing(e){
            const cuurentContent=e.target.parentElement;

    inputDOMSelectors.title.value=cuurentContent.children[0].children[0].textContent;
    inputDOMSelectors.category.value=cuurentContent.children[0].children[1].textContent.split(' ')[1];
     inputDOMSelectors.content.value=cuurentContent.children[0].children[2].textContent.split(' ')[1];
            cuurentContent.remove();
          

            
          }
            postBtn.addEventListener('click',posting);

             function posting(e){

                ///const cuurentContent=e.target.parentElement;
                //let btn1=cuurentContent.children[1];
                //let btn2=cuurentContent.children[2];
               // cuurentContent.removeChild(btn1);
               // cuurentContent.removeChild(btn2);
               // otherSelectors.publishedconteiner.appendChild(cuurentContent);

                 otherSelectors.publishedconteiner.appendChild(lielement);

               editBtn.remove();
               postBtn.remove();
             }


    }

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