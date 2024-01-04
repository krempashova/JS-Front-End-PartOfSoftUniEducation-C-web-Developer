window.addEventListener('load', solve);

function solve() {
  const inputDomselectors={
    title:document.querySelector("#title"),
    description:document.querySelector("#description"),
    label:document.querySelector('#label'),
    estimationPoints:document.querySelector("#points"),
    asignee:document.querySelector("#assignee"),
  };
   const otherselectors={
  createtaskBtn:document.querySelector("#create-task-btn"),
  deleteTaskBtn:document.querySelector("#delete-task-btn"),
 

   };
   let icons = {
    Feature: "&#8865",
    "Low Priority Bug": "&#9737",
    "High Priority Bug": "&#9888",
  };
  let labelClasses = {
    Feature: "feature",
    "Low Priority Bug": "low-priority",
    "High Priority Bug": "high-priority",
  };

    const taskconteiner=document.querySelector("#tasks-section");
    otherselectors.createtaskBtn.addEventListener('click',addTask);


     function addTask(){
        if(
            Object.values(inputDomselectors).some((selector) =>selector.value==="")
            ){
            return;
        }

        let article=createElement('article',null,['task-card'],"task-1",taskconteiner);
        createElement('div',label.value,["task-card-label"],null,article);
        createElement('h3',inputDomselectors.title.value,["task-card-title"],null,article);
        createElement('p',inputDomselectors.description.value,["task-card-description"],null,article);
        createElement('div',`Estimated at ${inputDomselectors.estimationPoints.value} pts`,["task-cards-points"],null,article);
        createElement('div',`Asigned to:${inputDomselectors.asignee.value}`,["task-card-asignee"], null,article);
        const taskaction=createElement('div',null,["task-card-actions"],null,article);
         createElement('button',"Delete",null,null,taskaction);


        // Object.values(inputDomselectors).forEach((selector)=>selector.value="");
        

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