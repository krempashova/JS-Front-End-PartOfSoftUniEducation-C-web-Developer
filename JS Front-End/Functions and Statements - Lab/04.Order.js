function calculate(product, quntity)
{
  if(product==="coffee"){
    const result=quntity*1.50;
   console.log(result.toFixed(2));
  }
  else if(product==="water")
  {
    const result=quntity*1.00;
    console.log(result.toFixed(2));
  }
  else if( product==="coke")
  {
    const result=quntity*1.40;
    console.log(result.toFixed(2));
  }
  else{
    const result=quntity*2.00;
    console.log(result.toFixed(2));
  }
}

calculate("coffee",3)
calculate("water", 5)
calculate("coffee", 2 )
