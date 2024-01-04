 
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

   //Нова Функция:
   function createElement(type,content,parent,className,id){
    let element=document.createElement(type);
    element.innerHTML=content
    if(parent.appendChild(element)){
      parent.appendChild(element);
    }
    if(className){
      element.className=className;
    }
    if(id){
      element.setAttribute("id",id);
    }
    return element;
   }
  