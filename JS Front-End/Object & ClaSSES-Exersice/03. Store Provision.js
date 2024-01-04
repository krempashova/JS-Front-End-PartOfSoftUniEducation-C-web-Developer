function solve(stock, delevered){
   let combinedProducts=[...stock,...delevered];
  // console.log(combinedProducts);
  let store=combinedProducts.reduce((acc,cuurr,i)=>{
    if(i%2===0){
        if(!acc.hasOwnProperty(cuurr)){
            acc[cuurr]=Number(combinedProducts[i+1]);
        }else{
            acc[cuurr]+=Number(combinedProducts[i+1]);
        }

    }
  return acc;
  },{});

Object.keys(store).forEach((key)=>{
console.log(`${key} -> ${store[key]}`);

});
}
solve([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ])