window.addEventListener("load", solve);

function solve() {


    const inputDomSelectors={
    playerName:document.querySelector("#player"),
    score:document.querySelector("#score"),
    round:document.querySelector("#round"),

   };

  const otherSelectors={
    addButton:document.querySelector("#add-btn"),
    shurelistConteiner:document.querySelector("#sure-list"),
    scoreboardList:document.querySelector("#scoreboard-list"),
    clearBtn:document.querySelector("#players-container > div > div > button"),
  };

  otherSelectors.addButton.addEventListener('click',(e)=>{

    if(
      Object.values(inputDomSelectors).some((selector) =>selector.value==="")
      ){
      return;
  }
    const lielement=createElement('li',null,["dart-item"],null,otherSelectors.shurelistConteiner);
    const article=createElement('article',null,null,null,lielement);
    createElement('p',inputDomSelectors.playerName.value,null,null,article);
    createElement('p',`Score: ${inputDomSelectors.score.value}`,null,null,article);
    createElement('p',`Round: ${inputDomSelectors.round.value}`,null,null,article);

    const editBtn=createElement('button',"edit",["btn","edit"],null,lielement);
    const okBtn=createElement('button',"ok",["btn","ok"],null,lielement);
     otherSelectors.addButton.disabled=true;

     Object.values(inputDomSelectors).forEach((selector)=>selector.value="");


      editBtn.addEventListener('click',(e)=>{

        const cuurent=e.target.parentElement;
        inputDomSelectors.playerName.value=cuurent.children[0].children[0].textContent;
        inputDomSelectors.score.value=cuurent.children[0].children[1].textContent.split(' ')[1];
        inputDomSelectors.round.value=cuurent.children[0].children[2].textContent.split(' ')[1];
        lielement.remove();

         otherSelectors.addButton.disabled=false;

      });

       okBtn.addEventListener('click',(e)=>{

         otherSelectors.scoreboardList.appendChild(lielement);
         editBtn.remove();
         okBtn.remove();


       });


  });
      
  otherSelectors.clearBtn.addEventListener('click',(e)=>{
    window.location.reload(true);
  });



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
  