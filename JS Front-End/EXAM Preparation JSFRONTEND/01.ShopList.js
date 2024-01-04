function solve(input){
    let firstProducts=input.shift();
    //console.log(firstProducts);
     let productcollection=firstProducts.split('!');
     //console.log(splitedproducts);
      for (const line of input) {
        if(line==='Go Shopping!'){
            break;
        }
        let commandTokens=line.split(' ');
        let command=commandTokens[0];
      
        if(command==='Urgent'){
           
            if(!productcollection.includes(commandTokens[1])){
                productcollection.unshift(commandTokens[1]);
              }
    
        }else if(command==='Unnecessary'){
           
            if(productcollection.includes(commandTokens[1])){
                let indexOfItem = productcollection.indexOf(commandTokens[1]);
               productcollection.splice(indexOfItem, 1);
              
             
             }
        }else if(command==='Correct'){
             let newProduct=commandTokens[2];
             if (productcollection.includes(commandTokens[1])) {
                let indexOfItem = productcollection.indexOf(commandTokens[1]);
                productcollection[indexOfItem] = newProduct;
             }
            
    
        }else if(command==='Rearrange'){
            if (productcollection.includes(commandTokens[1])) {
                let indexOfItem = productcollection.indexOf(commandTokens[1]);
                let product = productcollection[indexOfItem];
                productcollection.splice(indexOfItem, 1);
                productcollection.push(product);
              }
        }
    
        
      }
     
      console.log(productcollection.join(', '))
    
    }


 
 

 
 




solve((["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
)
