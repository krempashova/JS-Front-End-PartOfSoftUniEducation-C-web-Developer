function solve(){

   const [generateTextArea, byuTextArea]=Array.from(document.getElementsByTagName('textarea'));
   const [generatebtn,byubtn]=Array.from(document.getElementsByTagName('button'));
   const tbody=document.querySelector('.table>tbody');
   generatebtn.addEventListener('click',Generatehandler);
   byubtn.addEventListener('click',byuHendler);

   function byuHendler(){
    let bouthgitems=[];
    let totalprice=0;
    let averageFactor=0;
    const allchekedInputs=Array.from(document.querySelectorAll('tbody tr input:checked'));
    for (const input of allchekedInputs) {
      const tableRow=input.parentElement.parentElement;
      const [_firstcolumTd,secondcolumtd,thyrdcolumTD,fourthcolumtd]=Array.from(tableRow.children);
      let item=secondcolumtd.children[0].textContent;
      bouthgitems.push(item);
      let priceitem=Number(thyrdcolumTD.children[0].textContent);
      totalprice+=priceitem;
      let cuurentdecfactor=Number(fourthcolumtd.children[0].textContent);
      averageFactor+=cuurentdecfactor;
      
     
    }
    byuTextArea.value += `Bought furniture: ${bouthgitems.join(`, `)}\n`;
    byuTextArea.value += `Total price: ${totalprice.toFixed(2)}\n`;
    byuTextArea.value += `Average decoration factor: ${
      averageFactor / allchekedInputs.length
    }\n`;
   }

   function Generatehandler(){
    const data=JSON.parse(generateTextArea.value);
   for (const {img,name,price,decFactor} of data) {
    const tableRow=createElement('tr','',tbody);
    const firstcolumTd=createElement('tr','', tableRow);
    createElement('img','',firstcolumTd,'','',{src : img});
    const secondcolumtd=createElement('td','',tableRow);
    createElement('p',name,secondcolumtd);
    const thyrdcolumTD=createElement('td','',tableRow);
    createElement('p',price,thyrdcolumTD);
    const fourthcolumtd=createElement('td','',tableRow);
    createElement('p', decFactor ,fourthcolumtd);
    const fifthcolumtd=createElement('td','',tableRow);
    createElement('input','',fifthcolumtd,'','',{type:'checkbox'});
    
   }
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
