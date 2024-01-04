window.addEventListener('load', solve);

function solve() {
    let totalLikes=0;
    const inputDomSelectors={
        genre:document.querySelector('input[name="genre"]'),
        name:document.querySelector('input[name="name"]'),
        author:document.querySelector('input[name="author"]'),
        date:document.querySelector('input[name="date"]'),
    };
     const otherDomSelectors={
        allHitsConteiner:document.querySelector('.all-hits-container'),
        AddBtn:document.getElementById('add-btn'),
        SavedSongConteiner:document.querySelector('.saved-container'),
        totalLikesConteiner:document.querySelector('.likes > p'),
     };

   
  
  otherDomSelectors.AddBtn.addEventListener('click',addSongHandler);

  function addSongHandler(event){
            event.preventDefault();
            let allinputareNotEmpty=Object.value(inputDomSelectors).every((input)=>
          input.value!=='');

            if(!allinputareNotEmpty){
                return;
            }
        

   const{genre, name, author,date}=inputDomSelectors;
    const songConteiner=createElement('div','',otherDomSelectors.allHitsConteiner,['hits-info']);
    createElement('img',null,songConteiner,null,null,{scr:'.static/img/img.png'});
    createElement('h2',`Genre:${genre.value}`,songConteiner);
    createElement('h2',`Name:${name.value}`,songConteiner);
    createElement('h2',`Author:${author.value}`,songConteiner);
    createElement('h3',`Date:${date.value}`);
    const saveBtn=createElement('button','Save Song',songConteiner,['save-btn']);
    const likeBtn=createElement('button','Like Song',songConteiner,['like-btn']);
    const deleteBtn=createElement('button','Delete',songConteiner,['delete-btn']);
    clearAllInputs();

        } 


    function clearAllInputs(){
       Object.values(inputDomSelectors)
       forEach(input => {input.value=''
        
       });
    }

   
   function createElement(type, content,parentNode,id,classes, attributes){
    const htmlElement=document.createElement(type);
    if(content && type!=='input'){
      htmlElement.textContent=content;
    }

    if(content && type==='input'){
      htmlElement.value=content;
    }
    if(id){
      htmlElement.id=id;
    }
    if(classes){
      htmlElement.classeslist.add(...classes);
    }
    if(parentNode){
      parentNode.appendChild(htmlElement);
    }
    if(attributes){
      for (const key in attributes) {
       htmlElement.setAttribute(key,attributes[key]);
      }
    }
   
    return htmlElement;
   }
  
   }
  
