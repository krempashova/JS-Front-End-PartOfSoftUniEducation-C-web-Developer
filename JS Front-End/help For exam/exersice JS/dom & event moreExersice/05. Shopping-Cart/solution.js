function solve() {
    let sum=0;
     let productlist=new Set();
 const allAddingBtns=Array.from(document.querySelectorAll(".add-product"));
 //console.log(allAddingBtns);
  const textArea=document.querySelector("body > div > textarea");
 for (const addBtn of allAddingBtns) {
    
 
     addBtn.addEventListener('click',()=>{
        let row =addBtn.parentElement.parentElement;
        let productName=row.querySelector(".product-title").textContent;
        console.log(productName);
       productlist.add(productName);
        let productPrice=row.querySelector(".product-line-price");
        //console.log(productPrice.textContent);
        let priceAsNumber=Number(productPrice.textContent);
        
       
         sum+=priceAsNumber;
         textArea.textContent += `Added ${productName} for ${priceAsNumber.toFixed(2)} to the cart.\n`;
         
     });

    }
    const chekoutBtn=document.querySelector("body > div > button");
    //console.log(chekoutBtn);
    chekoutBtn.addEventListener('click',()=>{
         
        textArea.textContent+=`You bought ${[...productlist].join(`, `)} for ${sum.toFixed(2)}.`
        chekoutBtn.disabled = true;
        allAddingBtns.forEach(x => x.disabled = true);
      });
    }
   
  
 